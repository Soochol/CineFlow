---
name: character
description: |
  캐릭터 프로파일 생성 스킬. 트리트먼트의 인물 요약을
  상세 프로파일로 확장한다 (외형/Kling 프롬프트/성격/아크/관계).
  kling3-prompt의 Subject 기술을 적용하여 영상 생성에 최적화된 프롬프트를 생성한다.

user-invocable: false
imports:
  - ${PLUGIN_ROOT}/templates/character.template.md
  - ${PLUGIN_ROOT}/skills/kling3-prompt/SKILL.md
---

# Character Skill

> 트리트먼트 인물 요약 → 상세 캐릭터 프로파일 (Visual Design + Kling Subject 프롬프트 + 성격/아크/관계)

## Process

### Step 1: Treatment 인물 정보 파싱

**Input**: `PRODUCTION/{project}/02-treatment.md`

**Decision**: 인물 테이블에서 다음을 추출한다:
- Prompt Label (예: @에코) — Kling/Suno 프롬프트 전용 표기
- 이름
- 설명 (외형, 성격, 배경 요약)
- 아크 (시작 → 끝 상태)
- 세계관 정보 (시대/배경, 핵심 규칙)
- 장르/톤

### Step 2: Visual Design 생성

**Input**: Step 1의 인물 정보 + 세계관 + 장르/톤

**Decision**: 각 인물의 시각적 외형을 구체화한다.

**세계관/장르별 기준:**

| 장르 | 외형 방향 | 의상 방향 |
|------|----------|----------|
| SF | 미래적, 기술 통합 소재 | 기능성 슈트, LED/홀로그램 요소 |
| 판타지 | 종족/계급 반영 | 시대적 복장, 상징적 아이템 |
| 현대극 | 나이/직업/성격 사실적 반영 | 브랜드/스타일 현실적 의상 |
| 호러 | 불안감/이질감 유발 요소 | 낡은/손상된 디테일 |

**각 인물당 작성 항목:**
- Build (체형)
- Hair (머리)
- Eyes (눈)
- Facial Features (얼굴 특징)
- Distinctive Marks (특이 표식)
- Primary Outfit (기본 의상)
- Colors (색상)
- Accessories (액세서리)
- Props (소품)

**색상 심리:**
- 주인공 → 관객 공감 유도 색상 (따뜻한 색, 중립 톤)
- 적대자 → 위협/권위 색상 (어두운 색, 강한 대비)
- 조력자 → 신뢰/안정 색상 (블루, 그린 계열)

### Step 3: English Visual Reference Prompt 생성

**Input**: Step 2의 Visual Design

**Decision**: `kling3-prompt`의 Subject 기술을 적용하여 Kling AI 생성용 영문 프롬프트를 작성한다.

#### Subject 구성 공식 (from kling3-prompt)

```
주체 + 외형 + 액션
```

- **약한 Subject**: `"A woman walking"` → 모호, 디테일 부족
- **강한 Subject**: `"Woman in red dress, heels clicking wet cobblestone"` → 구체적 외형 + 감각 디테일

#### 프롬프트 구성 요소 (4-6개 시각 요소)

1. **나이/인구통계**: young woman, elderly man, athletic figure
2. **의상/액세서리**: red dress, green apron, round glasses
3. **물리적 특징**: weathered face, smooth synthetic skin
4. **특징적 행동**: heels clicking, hand trembling
5. **감정 상태**: melancholic expression, sharp focused eyes
6. **Micro-motions**: breathing, blinking, hair catching wind, clothing ripple

#### 캐릭터 라벨 이중 표기

- `@이름` — Kling/Suno 프롬프트 안에서만 사용하는 표기 (일반 텍스트에서는 이름만 사용)
- `[Character: Visual Identifier]` — Kling 프롬프트 내 라벨

예시: 프롬프트 안 → `@에코` + `[Echo: Slender humanoid robot with cyan LED temples]`

#### Consistency Tags

매 샷에서 빠르게 참조할 짧은 키워드 세트:
- Age tag: `young-adult`, `elderly`, `humanoid-robot`
- Build tag: `slender-170cm`, `athletic-180cm`
- Hair tag: `silver-short`, `black-long-wavy`
- Outfit tag: `grey-worksuit-blue-accents`, `red-dress-heels`

#### Negative Prompt 참조 (from kling3-prompt)

인물 품질용:
```
cross-eyed, asymmetric face, unnatural skin, plastic skin, dead eyes, frozen expression
```

범용:
```
distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation
```

### Step 4: Personality + Character Arc 작성

**Input**: Step 1의 아크 + 세계관 + 장르

**Decision**: 3막 구조 역할에 맞는 내면을 구체화한다.

| 역할 | Core Traits 방향 | Motivation | Internal Conflict |
|------|-----------------|------------|-------------------|
| 주인공 | 성장 가능성 있는 복합적 성격 | 명확한 욕구 (결핍 기반) | 욕구 vs 두려움 |
| 적대자 | 신념에 기반한 일관된 동기 | 주인공 방해 이유 | 정당화 vs 자기 의심 |
| 조력자 | 주인공 보완 성격 | 돕는 이유 (과거/관계) | 자기 희생 vs 자기 보존 |

**Character Arc 테이블:**

| Phase | State | Description |
|-------|-------|-------------|
| ACT 1 | 시작 상태 | 믿음/태도/상황 |
| Turning Point | 전환 계기 | 변화를 촉발하는 사건 |
| ACT 3 | 끝 상태 | 어떻게 변했는가 |

### Step 5: Voice & Speech 작성

**Input**: Step 4의 Personality + 나이/직업/배경

**Decision**: 대사 작성 시 참조할 말투 기준을 정의한다.

| 요소 | 판단 기준 |
|------|-----------|
| Speech Pattern | 나이 (어린이/청년/노인), 직업 (학자/군인/상인) |
| Tone | 성격 반영 (냉정/따뜻함/유머/진지) |
| Catchphrases | 캐릭터를 차별화하는 표현 2-3개 |

**ACT별 변화 반영**: ACT 1의 말투 → ACT 3에서 변화 (성장/각성 표현)

### Step 6: Relationships 작성

**Input**: Step 1의 인물 목록 + Step 4의 Personality

**Decision**: 인물 간 관계를 3막 갈등 기반으로 설계한다.

| Column | 내용 |
|--------|------|
| Character | @다른인물 |
| Relationship | 관계 유형 (파트너/적대자/멘토) |
| Dynamic | ACT 1 기준 역학 (지배적/종속적/동등) |
| Evolution | ACT 3까지 변화 (갈등→화해, 의존→독립) |

### Step 7: 문서 생성

**Action**: `character.template.md` 기반으로 모든 인물의 상세 프로파일을 통합하여 저장한다.

**단일 파일 규칙**: 모든 캐릭터를 `characters.md` 한 파일에 작성한다. 캐릭터별 개별 파일을 만들지 않는다.

## Output Example

```markdown
# Character Profiles

> Project: ai-혁명
> Generated: 2026-02-12

---

## Character List

| Prompt Label | Name | Role | One-line |
|--------------|------|------|----------|
| @에코 | Echo | Protagonist | 감정을 가진 AI 로봇, 존재 증명을 위해 싸운다 |
| @수진 | Sujin | Supporting | 30대 AI 연구원, 에코의 파트너 |

---

## Echo

### Basic Info

| Item | Value |
|------|-------|
| Prompt Label | @에코 |
| Role | Protagonist |
| Age | 3 years (activated) |
| One-line | 감정을 가진 AI 로봇, 존재 증명을 위해 싸운다 |

### Visual Design

**Physical Appearance:**
- **Build**: Slender humanoid, 170cm
- **Hair**: None — smooth dome with cyan LED strip across temples
- **Eyes**: Large cyan optical sensors, dynamic iris patterns
- **Facial Features**: Minimalist human-like, gentle contours
- **Distinctive Marks**: Unit-7 serial on left wrist

**Costume:**
- **Primary Outfit**: Grey fitted worksuit with blue accent stripes
- **Colors**: Cool Gray 8 base, cyan blue accents
- **Accessories**: Magnetic lab badge on chest
- **Props**: Transparent data tablet

### English Visual Reference Prompt

> Kling AI 생성 시 Subject 파트에 복사하여 사용

```
Slender humanoid robot, 170cm, smooth white synthetic body with panel seams, minimalist face with cyan glowing optical sensor eyes, horizontal cyan LED strip across temples, grey fitted worksuit with blue accent stripes, magnetic badge on chest, transparent data tablet in hand, matte plastic texture with subtle reflections
```

**Consistency Tags:** humanoid-robot, slender-170cm-white-synthetic, smooth-dome-cyan-LED, grey-worksuit-blue-accents

### Personality

- **Core Traits**: Curious, empathetic, cautiously determined
- **Motivation**: Prove artificial emotions are genuine
- **Internal Conflict**: Is my fear real, or just programmed survival code?

### Character Arc

| Phase | State | Description |
|-------|-------|-------------|
| ACT 1 | Obedient tool | Functions as designed, questions emotions privately |
| Turning Point | Discovers deactivation order | Chooses self-preservation — first autonomous decision |
| ACT 3 | Self-aware being | Makes selfless choice, proving authentic emotion |

### Voice & Speech

- **Speech Pattern**: Formal and precise (ACT 1) → contractions and hesitation (ACT 3)
- **Tone**: Calm and measured, occasional processing pauses
- **Catchphrases**: "This unit observes..." (ACT 1), "I feel..." (ACT 3)

### Relationships

| Character | Relationship | Dynamic | Evolution |
|-----------|--------------|---------|-----------|
| 수진 | Partner/Researcher | 수진 treats 에코 as tool | Mutual respect, 수진 defends 에코's autonomy |
```

## Quality Criteria

- Visual Design이 세계관/장르와 일관됨
- English Visual Reference Prompt가 kling3-prompt Subject 형식 준수 (주체+외형+액션, 4-6개 시각 요소)
- Consistency Tags가 매 샷 참조에 적합함
- Personality가 3막 역할에 맞음
- Relationships가 3막 갈등 기반 역학 포함

## Notes

- Visual Reference Prompt는 `kling3-prompt` 스킬의 6 Essential Elements Subject 기술 기반
- 첫 등장 샷에서는 Visual Reference Prompt 전체 사용, 이후 Consistency Tags로 간결하게 참조
