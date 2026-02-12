#!/usr/bin/env node
/**
 * Merge Sections - Story Extractor
 * @module scripts/merge-sections
 *
 * 섹션 파일들에서 스토리 텍스트만 추출하여 story.md로 병합한다.
 *
 * Usage: node scripts/merge-sections.js <content-name>
 * Example: node scripts/merge-sections.js last-letter
 */

const fs = require('fs');
const path = require('path');

/**
 * Collect section files sorted numerically.
 * Handles both patterns:
 *   film: NN-section-N.md (e.g., 04-section-1.md)
 *   blog: section-N.md
 */
function collectSectionFiles(outputDir) {
  const files = fs.readdirSync(outputDir);

  // Film pattern: NN-section-N.md
  const filmPattern = /^(\d+)-section-(\d+)\.md$/;
  const filmFiles = files.filter(f => filmPattern.test(f));
  if (filmFiles.length > 0) {
    return filmFiles.sort((a, b) => {
      return parseInt(a.match(filmPattern)[1]) - parseInt(b.match(filmPattern)[1]);
    });
  }

  // Blog pattern: section-N.md
  const blogPattern = /^section-(\d+)\.md$/;
  const blogFiles = files.filter(f => blogPattern.test(f));
  return blogFiles.sort((a, b) => {
    return parseInt(a.match(blogPattern)[1]) - parseInt(b.match(blogPattern)[1]);
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
 * Extract scene heading and story text from a section file.
 * Returns { sceneHeading, story }
 */
function extractStory(content) {
  const lines = content.split('\n');
  let sceneHeading = null;
  let storyLines = [];
  let capturing = false;

  for (const line of lines) {
    // Scene heading: ## Scene #N — [title]
    if (/^## Scene #\d+/.test(line) && !line.includes('Audio')) {
      if (!sceneHeading) {
        sceneHeading = line;
      }
    }

    // Start capture at ### 스토리
    if (/^### 스토리/.test(line)) {
      capturing = true;
      continue;
    }

    // Stop capture at next ### heading
    if (capturing && /^### /.test(line)) {
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

  const sectionFiles = collectSectionFiles(outputDir);

  if (sectionFiles.length === 0) {
    console.error('Error: No section files found to merge.');
    process.exit(1);
  }

  // Extract title from first section
  const firstContent = fs.readFileSync(path.join(outputDir, sectionFiles[0]), 'utf8');
  const title = extractTitle(firstContent) || contentName;

  // Extract stories from all sections
  const scenes = [];
  for (const file of sectionFiles) {
    const content = fs.readFileSync(path.join(outputDir, file), 'utf8');
    const { sceneHeading, story } = extractStory(content);

    if (!story) {
      console.warn(`Warning: No story found in ${file}, skipping.`);
      continue;
    }

    scenes.push({ file, sceneHeading, story });
  }

  if (scenes.length === 0) {
    console.error('Error: No stories extracted from section files.');
    process.exit(1);
  }

  // Build merged content
  let merged = `# ${title}\n`;

  for (const scene of scenes) {
    merged += `\n${scene.sceneHeading}\n\n${scene.story}\n`;
  }

  // Write output
  const outputPath = path.join(outputDir, 'story.md');
  fs.writeFileSync(outputPath, merged, 'utf8');

  // Output result JSON
  const result = {
    success: true,
    output: `PRODUCTION/${contentName}/story.md`,
    title,
    sceneCount: scenes.length,
    files: sectionFiles
  };

  console.log(JSON.stringify(result, null, 2));
}

main().catch(err => {
  console.error(JSON.stringify({ success: false, error: err.message }));
  process.exit(1);
});
