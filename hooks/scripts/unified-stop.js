#!/usr/bin/env node
/**
 * Unified Stop Hook
 * @module hooks/scripts/unified-stop
 *
 * Stop 이벤트에서 호출됨.
 * 세션 종료 시 PDCA 상태를 정리하고 저장한다.
 */

const { loadPdcaStatus, savePdcaStatus } = require('./lib/config-loader');

async function main() {
  const pdcaStatus = loadPdcaStatus();

  const output = {
    status: 'success',
    plugin: 'affim-ai',
    event: 'stop',
    timestamp: new Date().toISOString()
  };

  if (pdcaStatus) {
    // Update timestamp on stop
    savePdcaStatus(pdcaStatus);

    output.pdca = {
      content: pdcaStatus.content,
      currentPhase: pdcaStatus.currentPhase,
      matchRate: pdcaStatus.phases?.check?.matchRate || null
    };
    output.message = `Session ended. PDCA state saved for "${pdcaStatus.content}" at phase "${pdcaStatus.currentPhase}".`;
  } else {
    output.message = 'Session ended. No active PDCA session.';
  }

  console.log(JSON.stringify(output, null, 2));
}

main().catch(e => {
  console.error('unified-stop.js error:', e.message);
  process.exit(1);
});
