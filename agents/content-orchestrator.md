---
name: content-orchestrator
description: |
  [DEPRECATED] 오케스트레이션 로직이 PDCA 스킬 Do phase로 이전됨.
  서브에이전트는 Task를 재호출할 수 없으므로 계층 평탄화 아키텍처를 적용.
  이 문서는 오케스트레이션 프로세스의 레퍼런스로만 유지한다.

  현재 Do phase 실행 흐름:
  PDCA 스킬 (메인 에이전트) → Design 분석 + 브리프 생성 → Task(section-writer) × N 직접 병렬 호출
---

# Content Orchestrator Reference

> **DEPRECATED**: 이 에이전트는 직접 호출되지 않는다.
> 오케스트레이션 로직은 `skills/pdca/SKILL.md`의 Do phase로 이전되었다.
> 서브에이전트가 Task를 재호출할 수 없는 Claude Code 제약으로 인해 계층 평탄화를 적용했다.

## Architecture Change

```
[기존 - 불가능]
PDCA skill → Task(content-orchestrator) → Task(section-writer) × N
                                          ↑ 서브에이전트는 Task 호출 불가

[현재 - 계층 평탄화]
PDCA skill (메인 에이전트가 직접):
  1. Design 분석           ← 이 문서의 Step 1
  2. 콘텐츠 타입 판별       ← 이 문서의 Step 2
  3. 섹션 브리프 생성       ← 이 문서의 Step 3
  4. Task(section-writer) × N 병렬 호출  ← 이 문서의 Step 4
  5. 결과 확인              ← 이 문서의 Step 5
```

## Orchestration Process Reference

아래 프로세스는 PDCA 스킬의 Do phase에서 메인 에이전트가 직접 수행한다.

### Step 1: Design 문서 분석

**Input**: `docs/02-design/features/{content}.design.md`

- Sections 테이블에서 섹션 목록 추출 (Title, Description, Target Length, Key Points)
- Style Guide 섹션에서 톤앤매너 확인

### Step 2: 콘텐츠 타입 판별

**Input**: Design 문서 + `affim-ai.config.json`의 `contentTypes`

- **film**: kling3-prompt, kling3-camera, kling3-style, suno-prompt 지식 적용
- **blog**: blog-writing, blog-seo 지식 적용 + Design의 SEO Strategy 참조
- 기타: Design의 Style Guide 따름
- 출력 템플릿 경로 추출:
  - film: `templates/screenplay.template.md`, `templates/sound-design.template.md`
  - blog: 출력 템플릿 없음

### Step 3: 섹션 브리프 생성

**Input**: 섹션 목록 + Key Points

- 각 section-writer가 다른 섹션의 예상 내용과 전환 포인트를 파악할 수 있게 함
- 섹션 간 전환 포인트를 명시하여 병렬 작성 시에도 자연스러운 흐름 보장

브리프 형식:
```
Section 1: [핵심 내용 요약] → [마무리/전환 포인트]
Section 2: [이전 섹션 연결] → [핵심 내용] → [마무리/전환 포인트]
...
```

### Step 4: Task(section-writer) 병렬 호출

**한 메시지에서 모든 섹션의 Task(section-writer)를 동시 호출.**

각 Task에 전달할 컨텍스트:
- Design 문서 전체 (전체 맥락 유지)
- 담당 섹션의 상세 정보 (Title, Description, Target Length, Key Points)
- 전체 섹션 브리프 (모든 섹션의 예상 내용 + 전환 포인트)
- 콘텐츠 타입 + 출력 템플릿 경로
- **Character Document (film)**: `PRODUCTION/{content}/03-characters.md`
- **Section Offset**: `contentTypes[type].sectionOffset` 값 (film=3, blog=0)

**Output**: `PRODUCTION/{content}/{NN}-section-{N}.md` (NN = sectionOffset + N, 2자리 zero-pad)

### Step 5: 결과 확인

- `PRODUCTION/{content}/` 하위에 섹션 파일 존재 확인
- `docs/.pdca-status.json` 갱신: Do phase → done

## Output Structure

### film (sectionOffset=3)
```
PRODUCTION/{content}/
├── 01-logline.md        (기존)
├── 02-treatment.md      (기존)
├── 03-characters.md     (기존)
├── 04-section-1.md      (NN = 3+1 = 04)
├── 05-section-2.md      (NN = 3+2 = 05)
└── ...
```

### blog (sectionOffset=0)
```
PRODUCTION/{content}/
├── 01-section-1.md      (NN = 0+1 = 01)
├── 02-section-2.md      (NN = 0+2 = 02)
└── ...
```

### Prefix Formula
`{String(sectionOffset + N).padStart(2, '0')}-section-{N}.md`

## Context Preservation Rules

- 모든 section-writer에 Design 문서 전체를 포함한다
- 섹션 간 연속성을 위해 **전체 섹션 브리프**를 모든 section-writer에 동일하게 전달한다
- 스타일 가이드는 모든 section-writer에 동일하게 적용한다
- 콘텐츠 타입별 레퍼런스 스킬 지식은 section-writer의 skills: 필드로 자동 주입된다
