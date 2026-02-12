---
name: pdca
description: |
  PDCA 콘텐츠 제작 워크플로우 오케스트레이터.
  Plan/Design은 직접 처리, Do는 메인 에이전트가 Design 분석 후 Task(section-writer)를 직접 병렬 호출한다.
  (서브에이전트는 Task를 재호출할 수 없으므로 계층 평탄화 아키텍처 적용)

  Triggers: pdca, workflow, 콘텐츠 제작, 워크플로우,
  plan, design, do, merge, status, next,
  기획, 설계, 작성, 병합, 상태,
  計画, 設計, 作成, 統合,
  计划, 设计, 创作, 合并

  Do NOT use for: simple queries without PDCA context, reference-only tasks.
argument-hint: "[action] [content]"
user-invocable: true
agents:
  do: null
  treatment: affim-ai:story-designer
  section-writer: affim-ai:section-writer
  # check: affim-ai:analyst (비활성)
  # iterate: affim-ai:improver (비활성)
  default: null
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Task
  - AskUserQuestion
  - TodoWrite
  - Bash
imports:
  - ${PLUGIN_ROOT}/templates/shared/plan.template.md
  - ${PLUGIN_ROOT}/templates/shared/design.template.md
  - ${PLUGIN_ROOT}/templates/film/design.template.md
  - ${PLUGIN_ROOT}/templates/blog/design.template.md
  - ${PLUGIN_ROOT}/templates/narration-video/design.template.md
  - ${PLUGIN_ROOT}/templates/film/logline.template.md
  - ${PLUGIN_ROOT}/templates/film/treatment.template.md
  - ${PLUGIN_ROOT}/templates/film/character.template.md
next-skill: null
pdca-phase: null
---

# PDCA Content Workflow Skill

> Plan → Design → Do → Merge → Archive 콘텐츠 제작 워크플로우 통합 스킬.
> Plan/Design은 사용자와 직접 상호작용하고, Do는 메인 에이전트가 Design 분석 후 Task(section-writer)를 직접 병렬 호출한다.
> **Config-driven**: `affim-ai.config.json`의 `contentTypes[type]`에서 설정을 읽어 동작한다.

## Arguments

| Argument | Description | Example |
|----------|-------------|---------|
| `plan [content]` | 기획서 작성 | `/pdca plan blog-ai-trends` |
| `design [content]` | 설계서 작성 | `/pdca design blog-ai-trends` |
| `do [content]` | 콘텐츠 작성 (Design 분석 → Task(section-writer) 병렬) | `/pdca do blog-ai-trends` |
| `merge [content]` | 스토리 추출 → story.md 병합 | `/pdca merge last-letter` |
| `auto [content]` | 전체 파이프라인 자동 실행 | `/pdca auto blog-ai-trends` |
| `status` | 현재 PDCA 상태 확인 | `/pdca status` |
| `next` | 다음 단계 안내 | `/pdca next` |
| `archive [content]` | 완료 문서 보관 | `/pdca archive blog-ai-trends` |

## Action Details

### plan (Plan Phase) — 스킬 직접 처리

1. `docs/01-plan/features/{content}.plan.md` 존재 여부 확인
2. 존재하면 내용 표시 + 수정 여부 확인
3. 없으면 AskUserQuestion으로 다음 정보 수집:
   - 콘텐츠 목적 (Purpose)
   - 타겟 독자 (Target Audience)
   - 핵심 메시지 (Core Message)
   - 톤앤매너 (Tone & Voice)
   - 콘텐츠 타입 (Content Type: film / blog / etc.)
   - 영상 시간 (Target Runtime: film / narration-video 타입인 경우 — 예: 60초, 120초, 180초)
   - 영상 스타일 (Visual Style: film / narration-video 타입인 경우 — kling3-style 레퍼런스 기반으로 스타일 프리셋, 색감, 조명 선호)
4. `templates/shared/plan.template.md` 기반으로 기획서 생성
5. `docs/.pdca-status.json` 갱신: phase = "plan", status = "done"

**Output Path**: `docs/01-plan/features/{content}.plan.md`

### design (Design Phase) — Config-driven designPhaseSteps

1. Plan 문서 존재 확인 (필수 — 없으면 Plan 먼저 실행 제안)
2. Plan 문서 읽기 → 핵심 메시지, 독자, 톤, 영상 시간(Target Runtime), 영상 스타일(Visual Style) 추출
3. `affim-ai.config.json`에서 `contentTypes[type].designPhaseSteps` 배열 로드
4. **각 step을 순서대로 실행:**

#### Step 타입: `{ "check", "create" }` — 파일 존재 확인 → 스킬로 생성

```json
{ "check": "PRODUCTION/{content}/01-logline.md", "create": "film-logline" }
```
- `check` 경로의 파일 존재 확인 (`{content}`를 실제 콘텐츠명으로 치환)
- 파일이 없으면 → `create`에 명시된 스킬 호출로 생성
- 파일이 있으면 → 스킵

#### Step 타입: `{ "check", "agent" }` — 파일 존재 확인 → 에이전트 호출

```json
{ "check": "PRODUCTION/{content}/02-treatment.md", "agent": "story-designer" }
```
- `check` 경로의 파일 존재 확인
- 파일이 없으면 → `agent`에 명시된 에이전트 호출 (agents frontmatter에서 매핑)
- 파일이 있으면 → 스킵

#### Step 타입: `{ "use" }` — 설계 템플릿 기반 설계서 작성

```json
{ "use": "design", "template": "film" }
```
- `template` 값에 해당하는 타입의 설계 템플릿 사용
  - `"film"` → `templates/film/design.template.md`
  - `"blog"` → `templates/blog/design.template.md`
  - 값이 없으면 → `templates/shared/design.template.md` (기본)
- 이전 step들의 산출물을 설계서에 통합
- Style Guide, Sections 테이블, Quality Criteria 구성

#### Step 타입: `{ "askUser" }` — 사용자 추가 정보 수집

```json
{ "use": "design", "template": "blog", "askUser": ["blogType", "primaryKeyword", "targetPlatform"] }
```
- `askUser` 배열의 항목에 대해 AskUserQuestion 호출
- 수집한 정보를 설계서에 반영

5. `docs/.pdca-status.json` 갱신: phase = "design", status = "done"

**Output Path**: `docs/02-design/features/{content}.design.md`

**Sections 테이블 형식** (Do phase에서 메인 에이전트가 파싱):
```markdown
## Sections
| # | Title | Description | Target Length | Key Points |
|---|-------|-------------|---------------|------------|
| 1 | 서론  | 주제 도입과 독자 흥미 유발 | 500자 | 핵심 질문 제기, 통계 인용 |
| 2 | 본론1 | AI 트렌드 현황 분석     | 1000자 | 최신 사례, 시장 데이터 |
```

### do (Do Phase) — 메인 에이전트 직접 오케스트레이션

> 서브에이전트는 Task를 재호출할 수 없으므로, 메인 에이전트가 Design 분석 + 브리프 생성 후
> Task(section-writer)를 직접 병렬 호출한다. (계층 평탄화 아키텍처)

#### Step 1: Design 문서 분석

1. Design 문서 존재 확인 (필수 — 없으면 Design 먼저 실행 제안)
2. `docs/02-design/features/{content}.design.md` 읽기
3. Sections 테이블에서 섹션 목록 추출 (Title, Description, Target Length, Key Points)
4. Style Guide 섹션에서 톤앤매너 확인

#### Step 2: 콘텐츠 타입별 설정 로드 (Config-driven)

1. `affim-ai.config.json`의 `contentTypes[type]` 로드
2. 출력 템플릿:
   - `contentTypes[type].templates.output` 배열이 있으면 해당 템플릿 전달
   - 없으면 → Design 문서 섹션 구조를 그대로 따름
3. `sectionOffset` 값 확인 (파일명 NN 계산용)
4. `skills` 배열에서 적용 스킬 목록 확인 (section-writer에 전달)

#### Step 3: 섹션 브리프 생성

1. Design 문서의 Sections 테이블 기반으로 전체 섹션 브리프 작성
2. 각 section-writer가 다른 섹션의 예상 내용과 전환 포인트를 파악할 수 있게 함
3. 브리프 형식:
   ```
   Section 1 (총 시간: 15초): [핵심 내용 요약] → [마무리/전환 포인트]
   Section 2 (총 시간: 15초): [이전 섹션 연결] → [핵심 내용] → [마무리/전환 포인트]
   ...
   ```

#### Step 4: Task(section-writer) 병렬 호출

**한 메시지에서 모든 섹션의 Task(section-writer)를 동시 호출하여 병렬 실행한다.**

각 Task에 전달할 컨텍스트:
- Design 문서 전체 (전체 맥락 유지)
- 담당 섹션의 상세 정보 (Title, Description, Target Length, Key Points)
- 전체 섹션 브리프 (모든 섹션의 예상 내용 + 전환 포인트)
- 콘텐츠 타입 + 적용 스킬 목록 (`contentTypes[type].skills`)
- 출력 템플릿 경로 (있으면)
- **Character Document (film 등)**: `PRODUCTION/{content}/03-characters.md` (존재 시)
- **Section Offset**: `sectionOffset` 값 → 파일명 `{NN}-section-{N}.md` 생성용

#### Step 5: 결과 확인

1. 모든 Task 완료 대기
2. `PRODUCTION/{content}/` 하위에 섹션 파일 존재 확인
3. `docs/.pdca-status.json` 갱신: phase = "do", status = "done"

**Output Path**: `PRODUCTION/{content}/{NN}-section-{N}.md` (NN = sectionOffset + N)

### merge (Merge Phase) — 스킬 직접 처리

섹션 파일들에서 콘텐츠를 추출하여 단일 파일로 병합한다.
`merge-sections.js`가 config의 `contentTypes[type].mergeStrategy`를 읽어 추출 방식을 결정한다.

1. Do phase 완료 확인 (`PRODUCTION/{content}/` 하위에 섹션 파일 존재 확인)
2. `scripts/merge-sections.js {content}` Bash 실행
3. 결과 확인: `PRODUCTION/{content}/story.md` 생성 여부
4. `docs/.pdca-status.json` 갱신: phase = "merge", status = "done"

**Merge Strategy (config-driven):**
- `{ extractFullContent: true }` → 섹션 파일 전체 내용 병합 (blog 등)
- `{ sectionHeadingPattern, storyMarker, stopMarker }` → 마커 기반 추출 (film 등)

**Output Path**: `PRODUCTION/{content}/story.md`

### auto (Full Pipeline)

Plan → Design → Do → Merge를 순차 실행한다.
Design 내부에서 designPhaseSteps를 자동 처리한다.

1. Plan phase 실행 (기존 Plan 있으면 스킵)
2. Design phase 실행 (기존 Design 있으면 스킵)
   - designPhaseSteps의 check/create/agent step들을 자동 처리
3. Do phase → 메인 에이전트가 Design 분석 + 브리프 생성 → Task(section-writer) 병렬 호출
4. Merge phase → 콘텐츠 추출 → story.md 생성
5. 완료 안내

### status (Status Check)

1. `docs/.pdca-status.json` 읽기
2. 현재 콘텐츠, phase, Match Rate, 반복 횟수 표시

**Output Example**:
```
PDCA Status
─────────────────────────────
Content: blog-ai-trends
Type: blog
Phase: Do (Content Writing)
─────────────────────────────
[Plan] done → [Design] done → [Do] active → [Merge] pending → [Archive] pending
```

### next (Next Phase Guide)

1. 현재 PDCA phase 확인
2. 다음 단계 안내 + 명령어 제안

**Phase Guide** (모든 콘텐츠 타입 공통):
| Current | Next | Command |
|---------|------|---------|
| None | Plan | `/pdca plan {content}` |
| Plan | Design | `/pdca design {content}` |
| Design | Do | `/pdca do {content}` |
| Do | Merge | `/pdca merge {content}` |
| Merge | Archive | `/pdca archive {content}` |

### archive (Archive Phase)

1. Merge phase 완료 확인 (또는 Do phase 완료)
2. `docs/archive/YYYY-MM/{content}/` 폴더 생성
3. Plan, Design, Analysis 문서 이동
4. PRODUCTION/{content}/ 콘텐츠 이동
5. `docs/.pdca-status.json` 갱신: phase = "archived"

**Output Path**: `docs/archive/YYYY-MM/{content}/`

## State Management

`docs/.pdca-status.json` 파일로 워크플로우 상태를 추적한다.

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

## Agent Integration

| Action | Agent | Role |
|--------|-------|------|
| do (section) | affim-ai:section-writer | 단일 섹션 작성 + Self-Check (메인 에이전트가 직접 병렬 호출) |
| treatment (film) | affim-ai:story-designer | 로그라인 기반 트리트먼트 + 캐릭터 자동 생성 |

- Plan/Design/Archive: 사용자 상호작용이 필요하므로 스킬이 직접 처리
- Do: 메인 에이전트가 Design 분석 + 브리프 생성 후 Task(section-writer) x N 직접 병렬 호출
  - 서브에이전트는 Task를 재호출할 수 없으므로 계층 평탄화 적용

## Template References (Config-driven)

| Action | Config Path | Purpose |
|--------|-------------|---------|
| plan | `templates.shared.plan` | 기획서 구조 |
| design (shared) | `templates.shared.design` | 기본 설계서 구조 |
| design (type) | `contentTypes[type].templates.design` | 타입별 설계서 구조 |
| do (output) | `contentTypes[type].templates.output` | 출력 템플릿 (있으면 전달) |

## Usage Examples

```bash
# 새 콘텐츠 시작
/pdca plan blog-ai-trends

# 설계서 작성
/pdca design blog-ai-trends

# 콘텐츠 작성 (Design 분석 → section-writer 병렬 호출)
/pdca do blog-ai-trends

# 전체 자동 파이프라인
/pdca auto blog-ai-trends

# 상태 확인
/pdca status

# 다음 단계 안내
/pdca next

# 스토리 추출 병합
/pdca merge blog-ai-trends

# 완료 후 보관
/pdca archive blog-ai-trends
```

## Auto Triggers

다음 키워드 감지 시 관련 액션을 자동 제안한다:

| Keyword | Suggested Action |
|---------|------------------|
| "기획", "plan", "planning" | plan |
| "설계", "design", "구조" | design |
| "작성", "write", "생성" | do |
| "병합", "merge", "합치기", "스토리 추출" | merge |
| "보관", "archive", "완료" | archive |
