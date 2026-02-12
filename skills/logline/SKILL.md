---
name: logline
description: |
  로그라인 생성 스킬. 영화 스타일을 사용자에게 질문하고,
  핵심 소재 브레인스토밍 후 로그라인을 자동 생성한다.

  Triggers: logline, 로그라인, 소재, 장르, film style, genre, brainstorm
argument-hint: "[project]"
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - AskUserQuestion
imports:
  - ${PLUGIN_ROOT}/templates/logline.template.md
next-skill: null
---

# Logline Skill

> 영화 스타일 수집 → 핵심 소재 브레인스토밍 → 로그라인 자동 생성

## Actions

| Action | Description | Example |
|--------|-------------|---------|
| `logline {project}` | 로그라인 생성 | `/logline my-film` |

## Prerequisites

- 없음 — 최초 단계

## Process

### Step 1: 영화 스타일 수집

**Input**: 없음 — 사용자 직접 입력

**Decision**: AskUserQuestion으로 4가지를 질문한다.

**질문 1 — 장르**
- 옵션: 드라마, 스릴러, SF, 판타지, 코미디, 호러, 액션, 다큐멘터리
- multiSelect: true

**질문 2 — 톤/무드**
- 옵션: 밝고 경쾌한, 어둡고 긴장감 있는, 서정적이고 감성적인, 건조하고 담백한

**질문 3 — 스타일 레퍼런스**
- 옵션: 봉준호 (기생충), 크리스토퍼 놀란 (인셉션), 데니 빌뇌브 (듄), 웨스 앤더슨 (그랜드 부다페스트 호텔)
- 사용자 직접 입력 가능

**질문 4 — 타겟 러닝타임**
- 옵션: 단편 (5-15분), 중편 (30-60분), 장편 (90-120분), 시리즈 (에피소드당 20-40분)

**Output**: 장르, 톤, 스타일 레퍼런스, 러닝타임 확정

### Step 2: 핵심 소재 수집

**Input**: 없음 — 사용자 직접 입력

**Decision**: AskUserQuestion으로 핵심 소재/아이디어를 자유 입력받는다.
입력된 소재에서 이야기의 방향을 잡을 수 있는 5개 키워드를 도출한다.
도출한 키워드를 사용자에게 확인받는다.

**Output**: 5개 핵심 키워드 확정

### Step 3: 로그라인 생성

**Input**: Step 1의 영화 스타일 + Step 2의 키워드

**Decision**: 영화 스타일과 핵심 소재를 결합하여 한 문장 로그라인을 만든다.
로그라인에 반드시 포함할 요소:
- 주인공, 결핍/욕구, 촉발 사건, 장애물, 핵심 갈등, 스테이크

**Output**: `logline.template.md` 기반으로 `PRODUCTION/{project}/01-logline.md` 생성

## Output Example

```markdown
# Logline

## Film Style
- 장르: SF, 드라마
- 스타일 레퍼런스: 데니 빌뇌브 (듄)
- 톤: 서정적이고 감성적인
- 타겟 러닝타임: 장편 (90-120분)

## 핵심 소재
- 소재: 인공지능이 감정을 가지게 된 세계
- 키워드: AI, 감정, 인간성, 공존, 정체성

## Logline
> 감정을 가진 AI가 폐기 명령에 맞서 자신의 존재 이유를 증명하기 위해
> 인간 파트너와 함께 마지막 임무에 나선다.
```

## Notes

- 로그라인은 한 문장으로 핵심 갈등과 스테이크를 전달해야 한다
- 6요소(주인공, 결핍/욕구, 촉발 사건, 장애물, 핵심 갈등, 스테이크)가 모두 포함되어야 한다
- 장르와 톤이 로그라인의 문체에도 반영되어야 한다

## Next

로그라인 완료 후 다음 단계 진행
