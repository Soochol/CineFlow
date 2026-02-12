#!/usr/bin/env node
/**
 * Content Write Pre-validation Hook
 * @module hooks/scripts/content-write-pre
 *
 * PreToolUse(Write|Edit) 이벤트에서 호출됨.
 * 콘텐츠 파일 쓰기 전에 경로와 페이즈 순서를 검증한다.
 */

const fs = require('fs');
const path = require('path');
const { loadConfig, loadPdcaStatus: loadStatus, getSectionFileRegex } = require('./lib/config-loader');

/**
 * Build valid write target patterns (config-driven section pattern)
 */
function buildValidWriteTargets(config, contentType) {
  const sectionRegex = getSectionFileRegex(config, contentType);
  return [
    new RegExp(`^PRODUCTION/[^/]+/${sectionRegex.source}$`), // section files
    /^PRODUCTION\/[^/]+\/\d{2}-[^/]+\.md$/,        // pipeline files (logline, treatment, etc.)
    /^docs\/01-plan\/features\/[^/]+\.plan\.md$/,   // plan documents
    /^docs\/02-design\/features\/[^/]+\.design\.md$/, // design documents
    /^docs\/03-analysis\/[^/]+\.analysis\.md$/,     // analysis reports
    /^docs\/04-report\/features\/[^/]+\.report\.md$/, // reports
    /^docs\/\.pdca-status\.json$/,                  // status file
    /^docs\/archive\//,                             // archive
  ];
}

/**
 * Phase prerequisites — which phases must be done before writing to target
 */
const PHASE_PREREQUISITES = {
  'PRODUCTION/': ['design'],       // Do phase needs Design done
  'docs/03-analysis/': ['do'], // Check phase needs Do done
};

// loadPdcaStatus imported from lib/config-loader

/**
 * Normalize file path to relative from cwd
 */
function toRelative(filePath) {
  const cwd = process.cwd();
  const abs = path.isAbsolute(filePath) ? filePath : path.join(cwd, filePath);
  return path.relative(cwd, abs).replace(/\\/g, '/');
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
  const filePath = toolInput.file_path || '';

  if (!filePath) {
    console.log(JSON.stringify({ status: 'skip', reason: 'no file path' }));
    return;
  }

  const relative = toRelative(filePath);
  const output = {
    status: 'success',
    plugin: 'affim-ai',
    event: 'pre-write',
    file: relative,
    timestamp: new Date().toISOString()
  };

  // Build valid targets from config
  const config = loadConfig();
  const pdcaStatusForTargets = loadStatus();
  const contentType = pdcaStatusForTargets?.contentType;
  const VALID_WRITE_TARGETS = buildValidWriteTargets(config, contentType);

  // Check if target is a valid content pipeline path
  const isValidTarget = VALID_WRITE_TARGETS.some(pattern => pattern.test(relative));
  if (!isValidTarget) {
    // Not a content pipeline file — allow but note it
    output.note = 'File is outside content pipeline paths. Allowing write.';
    console.log(JSON.stringify(output, null, 2));
    return;
  }

  // Check phase prerequisites
  const pdcaStatus = loadStatus();
  if (pdcaStatus?.phases) {
    for (const [prefix, requiredPhases] of Object.entries(PHASE_PREREQUISITES)) {
      if (relative.startsWith(prefix)) {
        for (const phase of requiredPhases) {
          if (pdcaStatus.phases[phase]?.status !== 'done') {
            output.warning = `Writing to ${prefix} but "${phase}" phase is not done yet.`;
            break;
          }
        }
      }
    }
  }

  console.log(JSON.stringify(output, null, 2));
}

main().catch(e => {
  console.error('content-write-pre.js error:', e.message);
  process.exit(1);
});
