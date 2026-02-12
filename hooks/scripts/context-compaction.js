#!/usr/bin/env node
/**
 * Context Compaction Hook
 * @module hooks/scripts/context-compaction
 *
 * PreCompact 이벤트에서 호출됨.
 * 컨텍스트 압축 전에 PDCA 상태를 스냅샷으로 보존한다.
 */

const fs = require('fs');
const path = require('path');

/**
 * Load PDCA status
 */
function loadPdcaStatus() {
  const statusPath = path.join(process.cwd(), 'docs', '.pdca-status.json');
  if (!fs.existsSync(statusPath)) return null;

  try {
    return JSON.parse(fs.readFileSync(statusPath, 'utf8'));
  } catch (e) {
    return null;
  }
}

/**
 * Load config
 */
function loadConfig() {
  const configPath = path.join(process.cwd(), 'affim-ai.config.json');
  if (!fs.existsSync(configPath)) return null;

  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } catch (e) {
    return null;
  }
}

/**
 * Generate PDCA context summary for preservation
 */
function generateContextSummary(pdcaStatus) {
  if (!pdcaStatus) return null;

  const { content, contentType, currentPhase, phases, maxIterations } = pdcaStatus;
  const phaseOrder = ['plan', 'design', 'do', 'check', 'act'];

  let summary = `## PDCA Context (preserved during compaction)\n\n`;
  summary += `- Content: ${content}\n`;
  summary += `- Type: ${contentType || 'unknown'}\n`;
  summary += `- Current Phase: ${currentPhase}\n`;

  if (phases) {
    summary += `- Phase Status: `;
    summary += phaseOrder.map(p => {
      const status = phases[p]?.status || 'pending';
      return `[${p}:${status}]`;
    }).join(' → ');
    summary += '\n';

    if (phases.check?.matchRate != null) {
      summary += `- Match Rate: ${phases.check.matchRate}%\n`;
    }
    if (phases.check?.iteration != null) {
      summary += `- Iteration: ${phases.check.iteration}/${maxIterations || 5}\n`;
    }
  }

  // Include key file paths for context recovery
  summary += `\n### Key Files\n`;
  if (phases?.plan?.output) summary += `- Plan: ${phases.plan.output}\n`;
  if (phases?.design?.output) summary += `- Design: ${phases.design.output}\n`;
  if (phases?.do?.output) summary += `- Output: ${phases.do.output}\n`;

  return summary;
}

async function main() {
  const config = loadConfig();
  const pdcaStatus = loadPdcaStatus();

  const output = {
    status: 'success',
    plugin: 'affim-ai',
    event: 'pre-compact',
    timestamp: new Date().toISOString()
  };

  if (pdcaStatus) {
    const summary = generateContextSummary(pdcaStatus);
    output.preservedContext = summary;
    output.pdca = {
      content: pdcaStatus.content,
      contentType: pdcaStatus.contentType,
      currentPhase: pdcaStatus.currentPhase,
      matchRate: pdcaStatus.phases?.check?.matchRate || null,
      iteration: pdcaStatus.phases?.check?.iteration || 0,
      keyFiles: {
        plan: pdcaStatus.phases?.plan?.output || null,
        design: pdcaStatus.phases?.design?.output || null,
        output: pdcaStatus.phases?.do?.output || null,
        analysis: pdcaStatus.phases?.check?.output || null
      }
    };
    output.message = 'PDCA context preserved for post-compaction recovery.';
  } else {
    output.message = 'No PDCA context to preserve.';
  }

  console.log(JSON.stringify(output, null, 2));
}

main().catch(e => {
  console.error('context-compaction.js error:', e.message);
  process.exit(1);
});
