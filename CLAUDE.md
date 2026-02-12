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

### 4. Config-driven Architecture
```
콘텐츠 타입별 동작은 affim-ai.config.json의 contentTypes[type]에서 결정된다.
새 콘텐츠 타입 추가 시 코드 변경 없이 config + 템플릿만 추가하면 된다.
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
| `pdca` | 문서 경로, mergeOutputFilename, matchRateThreshold, maxIterations, autoIterate |
| `agents` | taskBased 에이전트 매핑 (section writing→section-writer, team→leader 등) |
| `templates` | 템플릿 디렉토리 및 공유 템플릿 매핑 (`shared/plan`, `shared/design`, `shared/analysis`) |
| `contentTypes` | 콘텐츠 타입별 설정 (아래 상세) |
| `hooks` | 훅별 enabled/timeout/옵션 |
| `automation` | 의도 감지, 지원 언어 |
| `context` | fork 동작, 캐시 TTL |
| `conventions` | 콘텐츠 컨벤션 (파일명, 캐릭터 표기, 섹션 규칙) |
| `team` | 팀 모드 설정 (현재 비활성) |

### contentTypes 스키마

각 콘텐츠 타입(`film`, `blog` 등)은 다음 필드를 갖는다:

| Field | Purpose | Example |
|-------|---------|---------|
| `skills` | 적용할 레퍼런스 스킬 목록 | `["kling3-prompt", "kling3-camera", ...]` |
| `templates.design` | 타입별 설계서 템플릿 | `"templates/film/design.template.md"` |
| `templates.output` | 출력 템플릿 배열 (없으면 Design 구조 따름) | `["templates/film/screenplay.template.md"]` |
| `pipeline` | 스킬 파이프라인 순서 | `["film-logline", "film-treatment", "film-screenplay"]` |
| `sectionOffset` | 섹션 파일명 NN 오프셋 | `3` (film), `0` (blog) |
| `sectionFilePattern` | 섹션 파일 매칭 regex | `"^(\\d{2})-section-(\\d+)\\.md$"` |
| `designPhaseSteps` | Design phase 자동 실행 순서 | check/create, check/agent, use, askUser |
| `mergeStrategy` | 병합 시 콘텐츠 추출 방식 | marker-based 또는 extractFullContent |
| `validationProfile.rules` | section-writer Self-Check 규칙 | `["6-essential-elements", "character-consistency"]` |

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
| `section-writer` | 단일 섹션 작성 + Self-Check (Config-driven 검증 규칙) | opus | acceptEdits | project |
| `story-designer` | film 트리트먼트 + 캐릭터 자동 생성 | - | - | - |

### Hooks Infrastructure

| Event | Matcher | Script | Purpose |
|-------|---------|--------|---------|
| SessionStart | - | `session-start.js` | PDCA 상태 로드, 세션 컨텍스트 제공 |
| Stop | - | `unified-stop.js` | PDCA 상태 저장, 세션 정리 |
| UserPromptSubmit | - | `user-prompt-handler.js` | PDCA 키워드 자동 감지, 액션 제안 |
| PreCompact | - | `context-compaction.js` | 컨텍스트 압축 시 PDCA 상태 보존 |
| PreToolUse | Write\|Edit | `content-write-pre.js` | 콘텐츠 쓰기 전 경로/페이즈 검증 (config-driven) |
| PostToolUse | Skill | `skill-post.js` | 스킬→에이전트 자동 라우팅 |
| PostToolUse | Write | `content-write-post.js` | 섹션 쓰기 후 진행률 추적 (config-driven) |
| PostToolUse | Task | `pdca-task-completed.js` | 에이전트 완료 후 페이즈 자동 전환 |

```
hooks/
├── hooks.json                          # 훅 이벤트 정의
└── scripts/
    ├── lib/
    │   └── config-loader.js            # 공유 유틸리티 (loadConfig, getSectionFileRegex 등)
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
affim-ai.config.json         # 중앙 설정 (PDCA, contentTypes, agent 매핑)
agents/
├── content-orchestrator.md   # [DEPRECATED] 오케스트레이션 프로세스 레퍼런스 (직접 호출 안됨)
├── section-writer.md        # Do phase — 단일 섹션 작성 + Config-driven Self-Check
├── story-designer.md        # film 트리트먼트 + 캐릭터 생성
├── leader.md                # (비활성) 팀 오케스트레이터
├── analyst.md               # (비활성) 갭 분석 — 수동 호출 가능
└── improver.md              # (비활성) 반복 개선 — 수동 호출 가능
skills/
├── pdca/SKILL.md            # PDCA 오케스트레이터 (Config-driven designPhaseSteps)
├── film-logline/            # film 로그라인 생성
├── film-treatment/          # film 트리트먼트 생성
├── film-character/          # film 캐릭터 프로파일 생성
├── film-screenplay/         # film 스크린플레이 생성
├── kling3-prompt/           # Kling 프롬프트 레퍼런스
├── kling3-camera/           # 카메라 레퍼런스
├── kling3-style/            # 스타일 레퍼런스
├── kling3-examples/         # 예제 레퍼런스
├── suno-prompt/             # Suno 프롬프트 레퍼런스
├── suno-domain/             # Suno 도메인 레퍼런스
└── narration-script/        # 나레이션 스크립트 작성 레퍼런스
hooks/
├── hooks.json               # 훅 이벤트 정의
└── scripts/
    ├── lib/config-loader.js # 공유 유틸리티 (config/PDCA 상태 로드)
    ├── session-start.js     # SessionStart → PDCA 상태 로드
    ├── unified-stop.js      # Stop → 상태 저장/정리
    ├── user-prompt-handler.js # UserPromptSubmit → 키워드 감지
    ├── context-compaction.js  # PreCompact → PDCA 컨텍스트 보존
    ├── content-write-pre.js   # PreToolUse(Write|Edit) → 쓰기 전 검증
    ├── content-write-post.js  # PostToolUse(Write) → 진행률 추적
    ├── skill-post.js        # PostToolUse(Skill) → 에이전트 라우팅
    └── pdca-task-completed.js # PostToolUse(Task) → 페이즈 전환
scripts/
└── merge-sections.js        # 섹션 콘텐츠 추출 → story.md 병합 (config-driven mergeStrategy)
templates/
├── shared/                  # 공유 템플릿 (모든 콘텐츠 타입 공통)
│   ├── plan.template.md     # 기획서 템플릿
│   ├── design.template.md   # 기본 설계서 템플릿
│   └── analysis.template.md # 분석 보고서 템플릿
├── film/                    # film 전용 템플릿
│   ├── design.template.md   # film 설계서 템플릿 (Logline, Treatment, 씬/샷, Audio)
│   ├── screenplay.template.md # 스크린플레이 출력 템플릿
│   ├── sound-design.template.md # 사운드 디자인 출력 템플릿
│   ├── logline.template.md  # 로그라인 템플릿
│   ├── treatment.template.md # 트리트먼트 템플릿
│   └── character.template.md # 캐릭터 프로파일 템플릿
├── blog/                    # blog 전용 템플릿
│   └── design.template.md   # 블로그 설계서 템플릿 (SEO, Hook/CTA)
└── narration-video/         # narration-video 전용 템플릿
    ├── design.template.md   # 나레이션 영상 설계서 (Global Image Style 포함)
    └── scene.template.md    # 씬 출력 템플릿 (나레이션 + Kling 이미지 프롬프트)
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
2. 없으면 AskUserQuestion으로 정보 수집 후 `templates/shared/plan.template.md` 기반 생성
3. 콘텐츠 목적, 타겟 독자, 핵심 메시지, 톤앤매너 정의

**Output**: `docs/01-plan/features/{content}.plan.md`

### Design (설계) — Config-driven designPhaseSteps

1. Plan 문서 존재 확인 (필수 - 없으면 Plan 먼저 실행 제안)
2. `contentTypes[type].designPhaseSteps` 배열을 순서대로 실행
   - `{ check, create }`: 파일 존재 확인 → 없으면 스킬로 생성
   - `{ check, agent }`: 파일 존재 확인 → 없으면 에이전트 호출
   - `{ use, template }`: 타입별 설계 템플릿으로 설계서 작성
   - `{ askUser }`: AskUserQuestion으로 추가 정보 수집
3. 섹션별 구조 설계 (Title, Description, Target Length, Key Points)
4. Style Guide, Quality Criteria 정의

**Output**: `docs/02-design/features/{content}.design.md`

### Do (작성) — 메인 에이전트 직접 오케스트레이션

1. Design 문서 존재 확인 (필수)
2. Design의 Sections 테이블 파싱 → 섹션 목록 + Key Points 추출
3. `contentTypes[type]`에서 출력 템플릿/sectionOffset/skills 확인
4. 섹션 브리프 생성 (전환 포인트 명시)
5. **Task(section-writer) × N 한 메시지에서 동시 병렬 호출**
6. 각 section-writer가 **Self-Check** (Key Points 대조, 분량, 톤, 흐름 + validationProfile.rules) 후 저장

**Output**: `PRODUCTION/{content}/{NN}-section-{N}.md` (NN = sectionOffset + N)

### Merge (병합) — 스킬 직접 처리

1. Do phase 완료 확인
2. `scripts/merge-sections.js {content}` 실행
3. config의 `mergeStrategy`에 따라 콘텐츠 추출:
   - `extractFullContent: true` → 섹션 전체 내용 (blog 등)
   - `sectionHeadingPattern + storyMarker + stopMarker` → 마커 기반 추출 (film 등)
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
| `/pdca merge {content}` | 콘텐츠 추출 병합 | 스킬 직접 |
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
[Design] {content}      ← 스킬 직접 (designPhaseSteps 자동 실행)
  ↓ (blockedBy)
[Do] {content}          ← 메인 에이전트 → Task(section-writer) × N 병렬 (Self-Check 포함)
  ↓ (blockedBy)
[Merge] {content}       ← 스킬 직접 (mergeStrategy 기반 추출 → story.md)
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
    ├── story.md           # Merge phase — 콘텐츠 추출 병합본
    ├── 01-logline.md      # film 전용 (designPhaseSteps로 생성)
    ├── 02-treatment.md    # film 전용 (designPhaseSteps로 생성)
    ├── 03-characters.md   # film 전용 (story-designer가 생성)
    ├── 04-section-1.md    # film: offset=3
    ├── 05-section-2.md    # blog/narration-video: 01-section-1.md (offset=0)
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
        2. 기획서 기반으로 설계 문서 생성 (designPhaseSteps 자동 실행)
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

---

## Adding a New Content Type

새 콘텐츠 타입 추가 시 필요한 작업:

| 단계 | 작업 | 예시 (life-story) |
|------|------|-------------------|
| 1 | 타입별 템플릿 생성 | `templates/life-story/design.template.md` |
| 2 | `affim-ai.config.json`에 contentType 추가 | skills, templates, designPhaseSteps, mergeStrategy, validationProfile |
| 3 | PDCA skill의 imports에 템플릿 경로 추가 | `${PLUGIN_ROOT}/templates/life-story/design.template.md` |
| 4 | (선택) 타입 전용 스킬 추가 | `skills/life-story-writing/SKILL.md` |
| 5 | (선택) section-writer 검증 규칙 추가 | validationProfile.rules 테이블에 행 추가 |

**훅/스크립트 코드 변경: 불필요** — config-driven 아키텍처로 자동 적용됨.

---

## Local TTS (Qwen3-TTS)

스크립트: `tools/tts/` | venv: `tools/tts/.venv/` | 설정 가이드: `tools/tts/setup.md`

### 환경

| Item | Value |
|------|-------|
| 모델 | Qwen3-TTS-12Hz-1.7B-CustomVoice |
| GPU | AMD Radeon 8060S (gfx1151, Strix Halo) |
| PyTorch | 2.10.0 + ROCm 7.12.0 (gfx1151 나이틀리) |
| Python | 3.12 (venv: `tools/tts/.venv/`) |
| 설치 소스 | `https://d2awnip2yjpvqn.cloudfront.net/v2/gfx1151/` |

### 실행 방법

```cmd
tools\tts\.venv\Scripts\python.exe tools\tts\scripts\generate.py --text "안녕하세요"
tools\tts\.venv\Scripts\python.exe tools\tts\scripts\generate.py --text "Hello" --speaker Eric --lang English
tools\tts\.venv\Scripts\python.exe tools\tts\scripts\generate.py --text "속삭이는 목소리" --instruct "whispering"
```

### 필수 설정 (ROCm gfx1151 호환성)

`generate.py` 내부에 이미 적용됨:

- `torch.backends.cudnn.enabled = False`: MIOpen의 gfx1151 Conv1d 커널 미최적화 우회 ([TheRock #724](https://github.com/ROCm/TheRock/issues/724))
- Conv1d는 GPU에서 PyTorch native HIP 커널로 실행됨 (CPU 폴백 아님)
- 현재 RTF ~3.5 (6초 음성 → 21초 생성)

### 화자 목록

Vivian, Serena, Uncle_Fu, Dylan, Eric, Ryan, Aiden, Ono_Anna, **Sohee** (한국어)

### 폴더 구조

```
tools/tts/
├── .venv/              # Python 3.12 venv (gitignored, ~13GB)
├── setup.md            # 설치 및 사용 가이드
├── scripts/
│   ├── generate.py     # 메인 TTS 생성 (argparse CLI)
│   └── check_gpu.py    # GPU 환경 확인
└── outputs/            # 생성된 wav 파일 (gitignored)
```
