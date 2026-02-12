#!/usr/bin/env node
/**
 * Teammate Idle Handler (Placeholder)
 * @module hooks/scripts/team-idle-handler
 *
 * Agent Teams 기능이 비활성 상태이므로 placeholder로 유지.
 * 향후 Agent Teams 재활성화 시 구현 예정.
 */

async function main() {
  const output = {
    status: 'success',
    plugin: 'affim-ai',
    event: 'teammate-idle',
    message: 'Team mode is disabled. Ignoring idle event.',
    timestamp: new Date().toISOString()
  };

  console.log(JSON.stringify(output, null, 2));
}

main().catch(e => {
  console.error('team-idle-handler.js error:', e.message);
  process.exit(1);
});
