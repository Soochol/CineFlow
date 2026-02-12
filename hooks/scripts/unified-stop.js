#!/usr/bin/env node
/**
 * Unified Stop Hook
 * @module hooks/scripts/unified-stop
 *
 * Stop 이벤트에서 호출됨.
 * 세션 종료 시 PDCA 상태를 정리하고 저장한다.
 */

const fs = require('fs');
const path = require('path');

/**
 * Load PDCA status
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
 * Save PDCA status with updated timestamp
 * @param {Object} status
 */
function savePdcaStatus(status) {
  const docsDir = path.join(process.cwd(), 'docs');
  const statusPath = path.join(docsDir, '.pdca-status.json');

  if (!fs.existsSync(docsDir)) return;

  try {
    status.updatedAt = new Date().toISOString();
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2), 'utf8');
  } catch (e) {
    // Silent fail on write error
  }
}

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
