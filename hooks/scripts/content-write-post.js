#!/usr/bin/env node
/**
 * Content Write Post-tracking Hook
 * @module hooks/scripts/content-write-post
 *
 * PostToolUse(Write) 이벤트에서 호출됨.
 * 섹션 파일 쓰기 후 진행률을 추적한다.
 */

const fs = require('fs');
const path = require('path');

/**
 * Detect content name and section from file path
 * e.g., "PRODUCTION/blog-ai-trends/section-2.md" → { content: "blog-ai-trends", section: 2 }
 */
function parseOutputPath(filePath) {
  const match = filePath.match(/^PRODUCTION\/([^/]+)\/(\d{2})-section-(\d+)\.md$/);
  if (!match) return null;
  return { content: match[1], prefix: match[2], section: parseInt(match[3], 10) };
}

/**
 * Detect document type from file path
 */
function parseDocPath(filePath) {
  if (filePath.match(/^docs\/01-plan\//)) return 'plan';
  if (filePath.match(/^docs\/02-design\//)) return 'design';
  if (filePath.match(/^docs\/03-analysis\//)) return 'analysis';
  return null;
}

/**
 * Normalize file path to relative from cwd
 */
function toRelative(filePath) {
  const cwd = process.cwd();
  const abs = path.isAbsolute(filePath) ? filePath : path.join(cwd, filePath);
  return path.relative(cwd, abs).replace(/\\/g, '/');
}

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
    event: 'post-write',
    file: relative,
    timestamp: new Date().toISOString()
  };

  // Track section writes
  const sectionInfo = parseOutputPath(relative);
  if (sectionInfo) {
    output.contentWrite = {
      content: sectionInfo.content,
      section: sectionInfo.section,
      type: 'section'
    };

    // Count total sections written so far
    const outputDir = path.join(process.cwd(), 'PRODUCTION', sectionInfo.content);
    if (fs.existsSync(outputDir)) {
      try {
        const files = fs.readdirSync(outputDir).filter(f => /^\d{2}-section-\d+\.md$/.test(f));
        output.contentWrite.totalSections = files.length;
        output.contentWrite.sections = files.sort();
      } catch (e) {
        // ignore
      }
    }
  }

  // Track document writes
  const docType = parseDocPath(relative);
  if (docType) {
    output.documentWrite = {
      type: docType,
      file: relative
    };
  }

  console.log(JSON.stringify(output, null, 2));
}

main().catch(e => {
  console.error('content-write-post.js error:', e.message);
  process.exit(1);
});
