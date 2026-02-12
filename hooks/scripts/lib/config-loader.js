#!/usr/bin/env node
/**
 * Shared Config Loader
 * @module hooks/scripts/lib/config-loader
 *
 * affim-ai.config.json 및 PDCA 상태 파일을 로드하는 공유 유틸리티.
 * 모든 훅 스크립트에서 require하여 사용한다.
 *
 * 경로 해석 규칙:
 * - 플러그인 config: 플러그인 루트 (CLAUDE_PLUGIN_ROOT 또는 상대 경로 폴백)
 * - PDCA 상태/사용자 콘텐츠: process.cwd() (사용자 프로젝트)
 */

const fs = require('fs');
const path = require('path');

/**
 * Get plugin root directory.
 * Uses CLAUDE_PLUGIN_ROOT env var (set by Claude Code when running plugin hooks),
 * falls back to resolving from this file's location.
 * @returns {string}
 */
function getPluginRoot() {
  return process.env.CLAUDE_PLUGIN_ROOT || path.resolve(__dirname, '..', '..', '..');
}

/**
 * Load affim-ai.config.json from plugin root.
 * @returns {Object|null}
 */
function loadConfig() {
  const pluginRoot = getPluginRoot();
  const configPath = path.join(pluginRoot, 'affim-ai.config.json');
  if (!fs.existsSync(configPath)) return null;
  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } catch (e) {
    return null;
  }
}

/**
 * Load docs/.pdca-status.json from user project (cwd).
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
 * Save PDCA status to user project (cwd) with updated timestamp.
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

/**
 * Get content type config from contentTypes[type]
 * @param {Object} config - affim-ai.config.json
 * @param {string} contentType - e.g., 'film', 'blog'
 * @returns {Object|null}
 */
function getContentTypeConfig(config, contentType) {
  return config?.contentTypes?.[contentType] || null;
}

/**
 * Get section file pattern regex from config
 * Falls back to default pattern if not found.
 * @param {Object} config - affim-ai.config.json
 * @param {string} contentType - e.g., 'film', 'blog'
 * @returns {RegExp}
 */
function getSectionFileRegex(config, contentType) {
  const typeConfig = getContentTypeConfig(config, contentType);
  const pattern = typeConfig?.sectionFilePattern;
  return pattern ? new RegExp(pattern) : /^(\d{2})-section-(\d+)\.md$/;
}

/**
 * Get merge strategy from config
 * @param {Object} config - affim-ai.config.json
 * @param {string} contentType - e.g., 'film', 'blog'
 * @returns {Object}
 */
function getMergeStrategy(config, contentType) {
  const typeConfig = getContentTypeConfig(config, contentType);
  return typeConfig?.mergeStrategy || { extractFullContent: true };
}

module.exports = {
  getPluginRoot,
  loadConfig,
  loadPdcaStatus,
  savePdcaStatus,
  getContentTypeConfig,
  getSectionFileRegex,
  getMergeStrategy
};
