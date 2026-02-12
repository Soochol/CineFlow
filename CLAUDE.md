# affim-ai

> AI 콘텐츠 생성 플러그인 - 블로그, 극본, 시나리오 등 창작 콘텐츠를 PDCA 워크플로우로 체계적으로 제작

---

## Core Principles

### 1. Automation First, Commands are Shortcuts
```
Claude automatically applies PDCA methodology.
Commands are shortcuts for power users.
```

### 2. SoR (Single Source of Truth) Priority
```
1st: 실제 작성된 콘텐츠 (PRODUCTION/)
2nd: CLAUDE.md / Convention docs
3rd: docs/ 기획/설계 문서
```

### 3. No Guessing
```
Unknown → Check documentation
Not in docs → Ask user
Never guess
```

---

## Tech Stack

| Item | Value |
|------|-------|
| Runtime | Node.js (CommonJS) |
| Plugin Type | Claude Code Plugin |
| Structure | agents/ + skills/ + hooks/ + templates/ |
| Config | affim-ai.config.json |

### Config Sections (`affim-ai.config.json`)

| Section | Purpose |
|---------|---------|
| `pdca` | 문서 경로, matchRateThreshold, maxIterations, autoIterate |
| `agents` | taskBased 에이전트 매핑 (content writing→content-orchestrator, team→leader 등) |
| `templates` | 템플릿 디렉토리 및 타입별 파일 매핑 |
| `contentTypes` | 콘텐츠 타입별 스킬/템플릿 (film, blog) |
| `hooks` | 훅별 enabled/timeout/옵션 |
| `automation` | 의도 감지, 지원 언어 |
| `context` | fork 동작, 캐시 TTL |
| `conventions` | 콘텐츠 컨벤션 (파일명, 캐릭터 표기, 섹션 규칙) |
| `team` | 팀 모드 설정 (현재 비활성) |

---

## Plugin Architecture

### Agent Pattern (계층 평탄화 아키텍처)

서브에이전트는 Task를 재호출할 수 없으므로 계층 평탄화를 적용한다.
Do phase에서 메인 에이전트가 Design 분석 + 브리프 생성 후 Task(section-writer)를 직접 병렬 호출한다.

```
skills/pdca/SKILL.md
  agents:
    do: null                          ← 메인 에이전트가 직접 오케스트레이션
    section-writer: affim-ai:section-writer  ← 병렬 호출 대상
    treatment: affim-ai:story-designer      ← film 트리트먼트 생성
```

### Agent Definitions

| Agent | Role | Model | Permission | Memory |
|-------|------|-------|------------|--------|
| `content-orchestrator` | [DEPRECATED] 레퍼런스 문서로만 유지 | - | - | - |
| `section-writer` | 단일 섹션 작성 + Self-Check (메인 에이전트가 직접 병렬 호출) | opus | acceptEdits | project |

### Hooks Infrastructure

| Event | Matcher | Script | Purpose |
|-------|---------|--------|---------|
| SessionStart | - | `session-start.js` | PDCA 상태 로드, 세션 컨텍스트 제공 |
| Stop | - | `unified-stop.js` | PDCA 상태 저장, 세션 정리 |
| UserPromptSubmit | - | `user-prompt-handler.js` | PDCA 키워드 자동 감지, 액션 제안 |
| PreCompact | - | `context-compaction.js` | 컨텍스트 압축 시 PDCA 상태 보존 |
| PreToolUse | Write\|Edit | `content-write-pre.js` | 콘텐츠 쓰기 전 경로/페이즈 검증 |
| PostToolUse | Skill | `skill-post.js` | 스킬→에이전트 자동 라우팅 |
| PostToolUse | Write | `content-write-post.js` | 섹션 쓰기 후 진행률 추적 |
| PostToolUse | Task | `pdca-task-completed.js` | 에이전트 완료 후 페이즈 자동 전환 |

```
hooks/
├── hooks.json                          # 훅 이벤트 정의
└── scripts/
    ├── session-start.js                # SessionStart → PDCA 상태 로드
    ├── unified-stop.js                 # Stop → 상태 저장/정리
    ├── user-prompt-handler.js          # UserPromptSubmit → 키워드 감지
    ├── context-compaction.js           # PreCompact → PDCA 컨텍스트 보존
    ├── content-write-pre.js            # PreToolUse(Write|Edit) → 쓰기 전 검증
    ├── content-write-post.js           # PostToolUse(Write) → 진행률 추적
    ├── skill-post.js                   # PostToolUse(Skill) → 에이전트 라우팅
    └── pdca-task-completed.js          # PostToolUse(Task) → 페이즈 전환
```

### Directory Structure

```
.claude-plugin/plugin.json   # 플러그인 매니페스트
affim-ai.config.json         # 중앙 설정 (PDCA, threshold, agent 매핑)
agents/
├── content-orchestrator.md   # [DEPRECATED] 오케스트레이션 프로세스 레퍼런스 (직접 호출 안됨)
├── section-writer.md        # Do phase — 단일 섹션 작성 + Self-Check (메인 에이전트가 직접 병렬 호출)
├── leader.md                # (비활성) 팀 오케스트레이터
├── analyst.md               # (비활성) 갭 분석 — 수동 호출 가능
└── improver.md              # (비활성) 반복 개선 — 수동 호출 가능
skills/
├── pdca/SKILL.md            # PDCA 오케스트레이터
├── logline/                 # 로그라인 생성
├── treatment/               # 트리트먼트 생성
├── screenplay/              # 스크린플레이 생성
├── kling3-prompt/           # Kling 프롬프트 레퍼런스
├── kling3-camera/           # 카메라 레퍼런스
├── kling3-style/            # 스타일 레퍼런스
├── kling3-examples/         # 예제 레퍼런스
├── suno-prompt/             # Suno 프롬프트 레퍼런스
└── suno-domain/             # Suno 도메인 레퍼런스
hooks/
├── hooks.json               # 훅 이벤트 정의
└── scripts/
    ├── session-start.js     # SessionStart → PDCA 상태 로드
    ├── unified-stop.js      # Stop → 상태 저장/정리
    ├── user-prompt-handler.js # UserPromptSubmit → 키워드 감지
    ├── context-compaction.js  # PreCompact → PDCA 컨텍스트 보존
    ├── content-write-pre.js   # PreToolUse(Write|Edit) → 쓰기 전 검증
    ├── content-write-post.js  # PostToolUse(Write) → 진행률 추적
    ├── skill-post.js        # PostToolUse(Skill) → 에이전트 라우팅
    └── pdca-task-completed.js # PostToolUse(Task) → 페이즈 전환
scripts/
└── merge-sections.js        # 섹션 스토리 추출 → story.md 병합
templates/
├── plan.template.md         # 기획서 템플릿
├── design.template.md       # 설계서 템플릿
├── analysis.template.md     # 분석 보고서 템플릿
├── screenplay.template.md   # 스크린플레이 템플릿
└── sound-design.template.md # 사운드 디자인 템플릿
```

---

## PDCA Workflow

콘텐츠 제작에 PDCA(Plan-Design-Do-Merge-Archive) 워크플로우를 적용한다.
section-writer가 Self-Check로 품질을 보장하므로 별도 Check/Act 단계가 불필요하다.

### Phase Flow

```
[Plan] 기획 → [Design] 설계 → [Do] 작성 → [Merge] 병합 → [Archive] 보관
 (스킬)      (스킬)         (메인 에이전트)   (스킬)       (스킬)
```

- Plan, Design, Merge, Archive: 스킬이 직접 처리 (사용자 상호작용 필요)
- Do: 메인 에이전트가 Design 분석 + 브리프 생성 → Task(section-writer) × N 직접 병렬 호출

### Plan (기획) — 스킬 직접 처리

1. `docs/01-plan/features/{content}.plan.md` 존재 여부 확인
2. 없으면 AskUserQuestion으로 정보 수집 후 plan.template.md 기반 생성
3. 콘텐츠 목적, 타겟 독자, 핵심 메시지, 톤앤매너 정의

**Output**: `docs/01-plan/features/{content}.plan.md`

### Design (설계) — 스킬 직접 처리

1. Plan 문서 존재 확인 (필수 - 없으면 Plan 먼저 실행 제안)
2. `docs/02-design/features/{content}.design.md` 생성
3. 섹션별 구조 설계 (Title, Description, Target Length, Key Points)
4. Style Guide, Quality Criteria 정의

**Output**: `docs/02-design/features/{content}.design.md`

### Do (작성) — 메인 에이전트 직접 오케스트레이션

1. Design 문서 존재 확인 (필수)
2. Design의 Sections 테이블 파싱 → 섹션 목록 + Key Points 추출
3. 콘텐츠 타입 판별 → 출력 템플릿/sectionOffset 확인
4. 섹션 브리프 생성 (전환 포인트 명시)
5. **Task(section-writer) × N 한 메시지에서 동시 병렬 호출**
6. 각 section-writer가 **Self-Check** (Key Points 대조, 분량, 톤, 흐름) 후 저장

**Output**: `PRODUCTION/{content}/{NN}-section-{N}.md` (NN = sectionOffset + N)

### Merge (병합) — 스킬 직접 처리

1. Do phase 완료 확인
2. `scripts/merge-sections.js {content}` 실행
3. 섹션 파일에서 `### 스토리` 텍스트만 추출 + 씬 제목 보존
4. `PRODUCTION/{content}/story.md` 생성
5. 상태 업데이트

**Output**: `PRODUCTION/{content}/story.md`

**Command**: `/pdca merge {content}`

### Archive (보관)

1. Merge phase 완료 확인 (또는 Do phase 완료)
2. `docs/archive/YYYY-MM/{content}/` 폴더로 문서 이동
3. 상태 업데이트

---

## Commands

| Command | Description | Agent |
|---------|-------------|-------|
| `/pdca plan {content}` | 기획서 작성 | 스킬 직접 |
| `/pdca design {content}` | 설계서 작성 | 스킬 직접 |
| `/pdca do {content}` | 콘텐츠 작성 | 메인 에이전트 → Task(section-writer) 병렬 |
| `/pdca merge {content}` | 스토리 추출 병합 | 스킬 직접 |
| `/pdca auto {content}` | 전체 파이프라인 | 순차 실행 |
| `/pdca archive {content}` | 완료 문서 보관 | 스킬 직접 |
| `/pdca status` | 현재 상태 확인 | - |
| `/pdca next` | 다음 단계 안내 | - |
| `/pdca check {content}` | (비활성) 갭 분석 | analyst |
| `/pdca iterate {content}` | (비활성) 반복 개선 | improver |
| `/pdca team {content}` | (비활성) 팀 오케스트레이션 | leader |

---

## Task Flow

```
[Plan] {content}        ← 스킬 직접
  ↓ (blockedBy)
[Design] {content}      ← 스킬 직접
  ↓ (blockedBy)
[Do] {content}          ← 메인 에이전트 → Task(section-writer) × N 병렬 (Self-Check 포함)
  ↓ (blockedBy)
[Merge] {content}       ← 스킬 직접 (스토리 추출 → story.md)
  ↓ (blockedBy)
[Archive] {content}     ← 스킬 직접
```

---

## State Management

`docs/.pdca-status.json`으로 워크플로우 상태를 추적한다.

```json
{
  "content": "blog-ai-trends",
  "contentType": "blog",
  "currentPhase": "do",
  "phases": {
    "plan": { "status": "done", "output": "docs/01-plan/features/blog-ai-trends.plan.md" },
    "design": { "status": "done", "output": "docs/02-design/features/blog-ai-trends.design.md" },
    "do": { "status": "active", "output": "PRODUCTION/blog-ai-trends/" }
  },
  "updatedAt": "2026-02-11T12:00:00Z"
}
```

---

## Document Structure

```
docs/
├── 01-plan/
│   └── features/          # 기획 문서
├── 02-design/
│   └── features/          # 설계 문서
├── 03-analysis/           # 갭 분석 보고서
├── .pdca-status.json      # PDCA 상태 파일
└── archive/
    └── YYYY-MM/           # 완료된 문서 보관
```

```
PRODUCTION/
└── {content}/             # 실제 콘텐츠 결과물 (프리픽스 번호 순서)
    ├── story.md           # Merge phase — 스토리 추출 병합본
    ├── 01-logline.md      # film 전용
    ├── 02-treatment.md    # film 전용
    ├── 03-characters.md   # film 전용
    ├── 04-section-1.md    # film: offset=3, blog: 01-section-1.md
    ├── 05-section-2.md
    └── ...
```

### Document Rules

| Folder | Purpose | Rule |
|--------|---------|------|
| `docs/01-plan/` | 기획 문서 | Plan phase에서 생성 |
| `docs/02-design/` | 설계 문서 | Design phase에서 생성, Do phase에서 참조 |
| `docs/archive/` | 완료 보관 | 읽기 전용 (수정 금지) |
| `PRODUCTION/` | 콘텐츠 결과물 | section-writer 에이전트가 생성 |

---

## PDCA Auto Behavior

### On New Content Request
```
User: "AI 트렌드 블로그 글 작성해줘"
Claude: 1. docs/01-plan/ 확인 → 기획서 없으면 생성
        2. 기획서 기반으로 설계 문서 생성
        3. /pdca do → Design 분석 + 브리프 생성 → Task(section-writer) × N 병렬 호출
        4. 완료 안내
```

---

## Status Display

```
PDCA Status
─────────────────────────────
Content: blog-ai-trends
Type: blog
Phase: Do (Content Writing)
─────────────────────────────
[Plan] done → [Design] done → [Do] active → [Merge] pending → [Archive] pending
```

---

## Next Phase Guide

| Current | Next | Command |
|---------|------|---------|
| None | Plan | `/pdca plan {content}` |
| Plan | Design | `/pdca design {content}` |
| Design | Do | `/pdca do {content}` |
| Do | Merge | `/pdca merge {content}` |
| Merge | Archive | `/pdca archive {content}` |
