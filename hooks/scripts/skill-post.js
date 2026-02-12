#!/usr/bin/env node
/**
 * Skill Post-execution Hook
 *
 * PostToolUse(Skill) 훅에서 호출됨.
 * 스킬의 agents: 필드를 파싱하여 해당 액션의 에이전트를 제안한다.
 */

const fs = require('fs');
const path = require('path');

/**
 * Read YAML frontmatter agents field from a SKILL.md file
 * Simple parser - no external dependencies
 */
function parseAgentsFromSkill(skillDir) {
  const skillPath = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) return {};

  const content = fs.readFileSync(skillPath, 'utf8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return {};

  const frontmatter = fmMatch[1];
  const agents = {};
  let inAgents = false;

  for (const line of frontmatter.split('\n')) {
    if (line.match(/^agents:\s*$/)) {
      inAgents = true;
      continue;
    }
    if (inAgents) {
      const match = line.match(/^\s+(\w+):\s*(.+)/);
      if (match) {
        const [, action, agent] = match;
        if (agent.trim() !== 'null') {
          agents[action] = agent.trim();
        }
      } else if (!line.match(/^\s/)) {
        inAgents = false;
      }
    }
  }

  return agents;
}

/**
 * Read YAML frontmatter next-skill field from a SKILL.md file
 */
function parseNextSkillFromSkill(skillDir) {
  const skillPath = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) return null;

  const content = fs.readFileSync(skillPath, 'utf8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return null;

  const match = fmMatch[1].match(/^next-skill:\s*(.+)/m);
  if (!match || match[1].trim() === 'null') return null;
  return match[1].trim();
}

/**
 * Parse skill invocation from hook tool_input
 */
function parseSkillInvocation(toolInput) {
  const skillName = toolInput?.skill || '';
  const argsStr = toolInput?.args || '';
  const args = {};

  if (argsStr) {
    const parts = argsStr.split(/\s+/);
    if (parts.length > 0) args.action = parts[0];
    if (parts.length > 1) args.feature = parts.slice(1).join(' ');
  }

  return { skillName, args };
}

async function main() {
  try {
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
      // ignore parse error
    }

    const toolInput = hookContext.tool_input || {};
    const { skillName, args } = parseSkillInvocation(toolInput);

    if (!skillName) {
      console.log(JSON.stringify({ status: 'skip', reason: 'no skill name' }));
      return;
    }

    // Find skill directory
    const pluginRoot = process.env.CLAUDE_PLUGIN_ROOT || path.resolve(__dirname, '../..');
    const skillDir = path.join(pluginRoot, 'skills', skillName);

    // Parse agents mapping from skill
    const agents = parseAgentsFromSkill(skillDir);
    const action = args.action || '';
    const mappedAgent = agents[action];

    const output = {
      status: 'success',
      skillCompleted: skillName,
      action,
      feature: args.feature || null,
      timestamp: new Date().toISOString()
    };

    if (mappedAgent) {
      output.suggestedAgent = mappedAgent;
      output.suggestedAgentMessage = `Action "${action}" is mapped to agent "${mappedAgent}". Invoke this agent for the ${action} phase.`;
    }

    // Check next-skill chaining
    const nextSkill = parseNextSkillFromSkill(skillDir);
    if (nextSkill) {
      output.suggestedNextSkill = nextSkill;
      output.suggestedNextSkillMessage = `Skill "${skillName}" suggests running "/${nextSkill} ${args.feature || ''}" next.`;
    }

    console.log(JSON.stringify(output, null, 2));
  } catch (e) {
    console.log(JSON.stringify({ status: 'error', error: e.message }));
  }
}

main().catch(e => {
  console.error('skill-post.js error:', e.message);
  process.exit(1);
});
