#!/usr/bin/env node
/**
 * Session Start Hook
 * @module hooks/scripts/session-start
 *
 * SessionStart 이벤트에서 호출됨.
 * PDCA 상태를 로드하여 세션 컨텍스트를 제공한다.
 */

const fs = require('fs');
const path = require('path');

/**
 * Load PDCA status from docs/.pdca-status.json
 * @returns {Object|null}
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
 * Load plugin config from affim-ai.config.json
 * @returns {Object|null}
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
 * Format PDCA status for session context
 */
function formatStatus(pdcaStatus) {
  if (!pdcaStatus) return 'No active PDCA session.';

  const { content, contentType, currentPhase, phases } = pdcaStatus;
  const phaseOrder = ['plan', 'design', 'do', 'check', 'act'];

  let output = `PDCA Status: ${content} (${contentType || 'unknown'})\n`;
  output += `Current Phase: ${currentPhase || 'none'}\n`;

  if (phases) {
    const phaseDisplay = phaseOrder.map(p => {
      const status = phases[p]?.status || 'pending';
      const marker = status === 'done' ? 'done' : status === 'active' ? 'active' : 'pending';
      return `[${p}] ${marker}`;
    }).join(' -> ');
    output += phaseDisplay + '\n';

    if (phases.check?.matchRate != null) {
      output += `Match Rate: ${phases.check.matchRate}%\n`;
    }
    if (phases.check?.iteration != null) {
      output += `Iteration: ${phases.check.iteration}/${pdcaStatus.maxIterations || 5}\n`;
    }
  }

  return output;
}

async function main() {
  const pdcaStatus = loadPdcaStatus();
  const config = loadConfig();

  const output = {
    status: 'success',
    plugin: 'affim-ai',
    timestamp: new Date().toISOString()
  };

  // PDCA context
  if (pdcaStatus) {
    output.pdca = {
      content: pdcaStatus.content,
      contentType: pdcaStatus.contentType,
      currentPhase: pdcaStatus.currentPhase,
      matchRate: pdcaStatus.phases?.check?.matchRate || null,
      iteration: pdcaStatus.phases?.check?.iteration || 0
    };
    output.contextMessage = formatStatus(pdcaStatus);
  } else {
    output.contextMessage = 'No active PDCA session. Use /pdca plan {content} to start.';
  }

  // Config context
  if (config) {
    output.config = {
      matchRateThreshold: config.pdca?.matchRateThreshold || 90,
      maxIterations: config.pdca?.maxIterations || 5,
      contentTypes: Object.keys(config.contentTypes || {})
    };
  }

  console.log(JSON.stringify(output, null, 2));
}

main().catch(e => {
  console.error('session-start.js error:', e.message);
  process.exit(1);
});
