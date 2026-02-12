#!/usr/bin/env node
/**
 * Merge Sections - Story Extractor
 * @module scripts/merge-sections
 *
 * 섹션 파일들에서 스토리 텍스트만 추출하여 story.md로 병합한다.
 * Config-driven: contentTypes[type].mergeStrategy, sectionFilePattern 사용.
 *
 * Usage: node scripts/merge-sections.js <content-name>
 * Example: node scripts/merge-sections.js last-letter
 */

const fs = require('fs');
const path = require('path');
const { loadConfig, loadPdcaStatus, getSectionFileRegex, getMergeStrategy } = require('../hooks/scripts/lib/config-loader');

/**
 * Collect section files sorted numerically (config-driven pattern).
 */
function collectSectionFiles(outputDir, sectionRegex) {
  const files = fs.readdirSync(outputDir);
  const matched = files.filter(f => sectionRegex.test(f));
  return matched.sort((a, b) => {
    const aMatch = a.match(sectionRegex);
    const bMatch = b.match(sectionRegex);
    const aNum = parseInt(aMatch[1], 10);
    const bNum = parseInt(bMatch[1], 10);
    return aNum - bNum;
  });
}

/**
 * Extract title from first section file's metadata.
 * Looks for: - **제목**: [title]
 */
function extractTitle(content) {
  const match = content.match(/\*\*제목\*\*:\s*(.+)/);
  return match ? match[1].trim() : null;
}

/**
 * Extract content from a section file using mergeStrategy.
 *
 * Strategy modes:
 * - { extractFullContent: true } → return full file content (blog etc.)
 * - { sectionHeadingPattern, storyMarker, stopMarker } → extract between markers (film etc.)
 */
function extractContent(content, mergeStrategy) {
  // Full content extraction mode (blog, life-story, etc.)
  if (mergeStrategy.extractFullContent) {
    return { sceneHeading: null, story: content.trim() };
  }

  // Marker-based extraction mode (film etc.)
  const lines = content.split('\n');
  let sceneHeading = null;
  let storyLines = [];
  let capturing = false;

  const headingPattern = mergeStrategy.sectionHeadingPattern
    ? new RegExp(mergeStrategy.sectionHeadingPattern)
    : null;
  const storyMarker = mergeStrategy.storyMarker || '### 스토리';
  const stopPattern = mergeStrategy.stopMarker
    ? new RegExp(mergeStrategy.stopMarker)
    : /^### /;

  for (const line of lines) {
    // Scene heading detection
    if (headingPattern && headingPattern.test(line) && !line.includes('Audio')) {
      if (!sceneHeading) {
        sceneHeading = line;
      }
    }

    // Start capture at story marker
    if (line.trim().startsWith(storyMarker)) {
      capturing = true;
      continue;
    }

    // Stop capture at next heading matching stopMarker
    if (capturing && stopPattern.test(line)) {
      capturing = false;
      continue;
    }

    if (capturing) {
      storyLines.push(line);
    }
  }

  return {
    sceneHeading,
    story: storyLines.join('\n').trim()
  };
}

async function main() {
  const contentName = process.argv[2];

  if (!contentName) {
    console.error('Usage: node scripts/merge-sections.js <content-name>');
    process.exit(1);
  }

  const outputDir = path.join(process.cwd(), 'PRODUCTION', contentName);

  if (!fs.existsSync(outputDir)) {
    console.error(`Error: Output directory not found: PRODUCTION/${contentName}/`);
    console.error(`Run \`/pdca do ${contentName}\` first to generate sections.`);
    process.exit(1);
  }

  // Load config and determine content type
  const config = loadConfig();
  const pdcaStatus = loadPdcaStatus();
  const contentType = pdcaStatus?.features?.[contentName]?.contentType || pdcaStatus?.contentType;

  const sectionRegex = getSectionFileRegex(config, contentType);
  const mergeStrategy = getMergeStrategy(config, contentType);

  const sectionFiles = collectSectionFiles(outputDir, sectionRegex);

  if (sectionFiles.length === 0) {
    console.error('Error: No section files found to merge.');
    process.exit(1);
  }

  // Extract title from first section
  const firstContent = fs.readFileSync(path.join(outputDir, sectionFiles[0]), 'utf8');
  const title = extractTitle(firstContent) || contentName;

  // Extract content from all sections using mergeStrategy
  const scenes = [];
  for (const file of sectionFiles) {
    const content = fs.readFileSync(path.join(outputDir, file), 'utf8');
    const { sceneHeading, story } = extractContent(content, mergeStrategy);

    if (!story) {
      console.warn(`Warning: No content found in ${file}, skipping.`);
      continue;
    }

    scenes.push({ file, sceneHeading, story });
  }

  if (scenes.length === 0) {
    console.error('Error: No content extracted from section files.');
    process.exit(1);
  }

  // Build merged content
  let merged = `# ${title}\n`;

  for (const scene of scenes) {
    if (scene.sceneHeading) {
      merged += `\n${scene.sceneHeading}\n\n${scene.story}\n`;
    } else {
      merged += `\n${scene.story}\n`;
    }
  }

  // Determine output filename from config
  const mergeOutputFilename = config?.pdca?.mergeOutputFilename || 'story.md';
  const outputPath = path.join(outputDir, mergeOutputFilename);
  fs.writeFileSync(outputPath, merged, 'utf8');

  // Output result JSON
  const result = {
    success: true,
    output: `PRODUCTION/${contentName}/${mergeOutputFilename}`,
    title,
    sceneCount: scenes.length,
    files: sectionFiles,
    mergeStrategy: mergeStrategy.extractFullContent ? 'extractFullContent' : 'marker-based'
  };

  console.log(JSON.stringify(result, null, 2));
}

main().catch(err => {
  console.error(JSON.stringify({ success: false, error: err.message }));
  process.exit(1);
});
