#!/usr/bin/env node
/**
 * User Prompt Submit Hook
 * @module hooks/scripts/user-prompt-handler
 *
 * UserPromptSubmit 이벤트에서 호출됨.
 * 사용자 입력에서 PDCA 키워드를 감지하여 자동 액션을 제안한다.
 */

const { loadConfig, loadPdcaStatus } = require('./lib/config-loader');

/**
 * PDCA intent detection patterns
 * Multi-language keyword → action mapping
 */
const INTENT_PATTERNS = {
  plan: [
    /\b(plan|planificar|planifier|planen|pianificare)\b/i,
    /(기획|계획|計画|计划)/,
  ],
  design: [
    /\b(design|diseñar|concevoir|entwerfen|progettare)\b/i,
    /(설계|구조|設計|设计)/,
  ],
  do: [
    /\b(write|escribir|écrire|schreiben|scrivere)\b/i,
    /(작성|생성|만들어|써줘|作成|书写|创作)/,
  ],
  analyze: [
    /\b(analyze|check|verify|analizar|analyser|analysieren|analizzare)\b/i,
    /(분석|검증|확인|갭|分析|検証|验证)/,
  ],
  iterate: [
    /\b(improve|iterate|fix|mejorar|améliorer|verbessern|migliorare)\b/i,
    /(개선|수정|고쳐|반복|改善|修正|改进|修复)/,
  ],
  team: [
    /\b(team|equipo|équipe|mannschaft|squadra)\b/i,
    /(팀|프로젝트|チーム|团队)/,
  ],
  logline: [
    /\b(logline)\b/i,
    /(로그라인)/,
  ],
  treatment: [
    /\b(treatment|synopsis)\b/i,
    /(트리트먼트|시놉시스)/,
  ],
  screenplay: [
    /\b(screenplay|script|scene|shot)\b/i,
    /(스크린플레이|각본|씬|샷|극본|시나리오)/,
  ]
};

/**
 * Detect PDCA intent from user message
 */
function detectIntent(message) {
  const detected = [];

  for (const [action, patterns] of Object.entries(INTENT_PATTERNS)) {
    for (const pattern of patterns) {
      if (pattern.test(message)) {
        detected.push(action);
        break;
      }
    }
  }

  return detected;
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

  const config = loadConfig();

  // Check if intent detection is enabled
  if (config?.automation?.intentDetection === false) {
    console.log(JSON.stringify({ status: 'skip', reason: 'intent detection disabled' }));
    return;
  }

  const userMessage = hookContext.user_message || hookContext.prompt || '';
  if (!userMessage) {
    console.log(JSON.stringify({ status: 'skip', reason: 'no user message' }));
    return;
  }

  const output = {
    status: 'success',
    plugin: 'affim-ai',
    event: 'user-prompt-submit',
    timestamp: new Date().toISOString()
  };

  // Detect PDCA intents
  const intents = detectIntent(userMessage);
  if (intents.length > 0) {
    output.detectedIntents = intents;

    // Load current PDCA status for context
    const pdcaStatus = loadPdcaStatus();
    if (pdcaStatus) {
      output.currentPhase = pdcaStatus.currentPhase;
      output.content = pdcaStatus.content;

      // Suggest next action based on current phase
      // Pipeline is always: plan → design → do → archive
      // Film logline/treatment are sub-steps within design phase
      const phaseNext = {
        'plan': 'design',
        'design': 'do',
        'do': 'check',
        'check': pdcaStatus.phases?.check?.matchRate >= 90 ? 'archive' : 'act',
        'act': 'check'
      };
      output.suggestedNext = phaseNext[pdcaStatus.currentPhase] || null;
      if (pdcaStatus.contentType) output.contentType = pdcaStatus.contentType;
    }
  }

  console.log(JSON.stringify(output, null, 2));
}

main().catch(e => {
  console.error('user-prompt-handler.js error:', e.message);
  process.exit(1);
});
