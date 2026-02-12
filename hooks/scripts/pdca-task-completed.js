#!/usr/bin/env node
/**
 * PDCA Task Completed Hook
 * @module hooks/scripts/pdca-task-completed
 *
 * PostToolUse(Task) 훅에서 호출됨.
 * content-orchestrator 에이전트 태스크 완료 시 PDCA Do 페이즈를 완료하고 다음 단계를 안내한다.
 */

const { loadPdcaStatus, savePdcaStatus } = require('./lib/config-loader');

/**
 * Agent name → PDCA phase mapping
 */
const AGENT_PHASE_MAP = {
  'content-orchestrator': 'do',
  'section-writer': 'do'
};

/**
 * Detect agent name from Task tool input
 */
function detectAgentFromTask(toolInput) {
  const description = toolInput?.description || '';
  const prompt = toolInput?.prompt || '';
  const subagentType = toolInput?.subagent_type || '';

  // Check subagent_type first (most reliable)
  for (const agent of Object.keys(AGENT_PHASE_MAP)) {
    if (subagentType.includes(agent)) return agent;
  }

  // Check description
  for (const agent of Object.keys(AGENT_PHASE_MAP)) {
    if (description.toLowerCase().includes(agent)) return agent;
  }

  // Check prompt
  for (const agent of Object.keys(AGENT_PHASE_MAP)) {
    if (prompt.toLowerCase().includes(agent)) return agent;
  }

  return null;
}

async function main() {
  // Read hook input from stdin
  let input = '';
  if (!process.stdin.isTTY) {
    const chunks = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    input = Buffer.concat(chunks).toString('utf8');
  }

  let hookContext = {};
  try {
    if (input.trim()) hookContext = JSON.parse(input);
  } catch (e) {
    // ignore
  }

  const toolInput = hookContext.tool_input || {};
  const agent = detectAgentFromTask(toolInput);

  const output = {
    status: 'success',
    plugin: 'affim-ai',
    event: 'task-completed',
    timestamp: new Date().toISOString()
  };

  if (!agent) {
    output.message = 'Task completed but no PDCA agent detected.';
    console.log(JSON.stringify(output, null, 2));
    return;
  }

  const phase = AGENT_PHASE_MAP[agent];
  output.agent = agent;
  output.phase = phase;

  // Load and update PDCA status
  const pdcaStatus = loadPdcaStatus();
  if (pdcaStatus) {
    // Mark Do phase as done
    if (pdcaStatus.phases?.[phase]) {
      pdcaStatus.phases[phase].status = 'done';
    }

    // content-orchestrator/section-writer → Do done → suggest merge
    output.suggestion = {
      next: 'merge',
      command: `/pdca merge ${pdcaStatus.content}`,
      message: 'Do phase complete. Extract stories into story.md.'
    };

    savePdcaStatus(pdcaStatus);
    output.pdcaContent = pdcaStatus.content;
  } else {
    output.message = `Agent "${agent}" (${phase} phase) completed, but no PDCA status file found.`;
  }

  console.log(JSON.stringify(output, null, 2));
}

main().catch(e => {
  console.error('pdca-task-completed.js error:', e.message);
  process.exit(1);
});
