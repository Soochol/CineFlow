---
name: screenplay
description: |
  스크린플레이 생성 스킬. 트리트먼트를 기반으로
  Scene별 스토리/연출 의도, Shot별 카메라/모션/대사/프롬프트를 자동 생성한다.

  Triggers: screenplay, 스크린플레이, 각본, 씬, 샷, scene, shot, script
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
  - ${PLUGIN_ROOT}/templates/screenplay.template.md
next-skill: null
---

# Screenplay Skill

> 트리트먼트 기반 → Scene 분해 → Shot 단위 프롬프트 자동 생성

## Actions

| Action | Description | Example |
|--------|-------------|---------|
| `screenplay {project}` | 전체 스크린플레이 생성 | `/screenplay my-film` |
| `screenplay {project} scene {N}` | 특정 씬만 생성 | `/screenplay my-film scene 3` |

## Prerequisites

- `PRODUCTION/{project}/02-treatment.md` 존재 필수
- 없으면 → "트리트먼트를 먼저 생성하세요. `/treatment {project}`" 안내

## Process

### Step 1: 트리트먼트 분석

**Input**:
- `PRODUCTION/{project}/02-treatment.md`
- `PRODUCTION/{project}/characters.md` — 인물 외형/의상/Kling 프롬프트

**Decision**: 트리트먼트에서 다음을 파악한다:
- 세계관의 규칙과 제약
- 3막 구조의 전환점 (촉발 사건, 미드포인트, 클라이맥스)
- 인물 관계와 감정 변화의 흐름

이 요소들이 씬 분해의 기준이 된다.

### Step 2: Scene 분해

**Input**: Step 1에서 파악한 3막 구조 + 세계관 + 인물

**Decision**: 3막 구조를 Scene 단위로 분해한다.
각 씬은 "이 이야기를 영상으로 어떻게 보여줄 것인가"를 중심으로 구성한다.

**Output 구조 — 씬 정보:**

| 항목 | 설명 |
|------|------|
| 장소 | INT/EXT, 구체적 장소명 |
| 시간대 | DAY/NIGHT/DAWN/DUSK |
| 등장인물 | 해당 씬에 출연하는 인물 |
| 스토리 | 이 씬에서 일어나는 이야기 |

**Output 구조 — 영상 각색:**

| 항목 | 판단 기준 |
|------|-----------|
| 감정 톤 | 이 씬이 시청자에게 전달해야 할 감정 |
| 시각적 접근 | 이 감정을 영상으로 어떻게 표현할 것인가 (공간, 조명, 색감, 카메라 톤) |
| 핵심 순간 | 씬에서 가장 강렬한 한 장면 — Shot 분해의 중심이 된다 |
| 전환 | 이전 씬과 다음 씬을 어떻게 연결할 것인가 |

### Step 3: Shot 분해

**Input**: Step 2의 각 Scene — 특히 영상 각색의 핵심 순간

**Decision**: Scene을 Shot 단위로 나눈다.
각 Shot은 "이 순간을 관객에게 어떤 크기와 움직임으로 보여줄 것인가"를 결정한다.
카메라는 `kling3-camera`의 앵글/모션/프레이밍/렌즈 중에서 선택한다.

**Output 구조:**

| 항목 | 설명 |
|------|------|
| 주체 | 샷의 중심 피사체 (인물명, 사물, 장소) |
| 주체 모션 | 피사체의 구체적 동작 |
| 카메라 | 앵글 + 모션 + 프레이밍 |
| 대사/내레이션 | 해당 샷의 음성 또는 "없음" |
| Duration | 샷 길이 (3s, 5s, 8s) |

### Step 4: 프롬프트 생성

**Input**: Step 3의 각 Shot

**Decision**: 각 Shot에 대해 이미지 프롬프트와 비디오 프롬프트를 생성한다.
6 Essential Elements와 프롬프트 구조는 `kling3-prompt`를 적용한다.
스타일/색감/조명은 `kling3-style`을 적용한다.
프롬프트 안에서 등장인물은 `@이름` 형식으로 표기한다. (예: `@에코`, `@수진`)
등장인물 샷: `characters.md`의 "English Visual Reference Prompt" 기반으로 Subject 작성한다.
외형/의상: `characters.md`의 Visual Design 내용을 정확히 반영한다.

**I2V (Image to Video) 프롬프트** — 키 프레임 이미지를 생성한 뒤, 그 이미지에서 모션을 생성한다.

키 프레임 (정지 프레임):

| 항목 | 설명 |
|------|------|
| 환경 | 장소, 시간대, 공간 묘사 |
| 주체 | 외형, 자세, 위치 (동작이 아닌 정지 상태) |
| 조명 | 구체적 광원, 색온도 |
| 카메라 | 앵글 + 프레이밍 (모션 없음) |
| 스타일 | 색감, 시네마틱 톤, 텍스처 |

모션 (이미지에서 시작하는 변화만 서술):

| 항목 | 설명 |
|------|------|
| 카메라 모션 | 이미지 프레임에서 시작하는 카메라 움직임 |
| 주체 모션 | 피사체의 동작 변화 |
| 환경 모션 | 미세 모션, 환경 변화 (빛, 바람, 먼지) |
| Duration | 샷 길이 |

키 프레임에 이미 보이는 것은 반복하지 않는다 — 변화만 서술한다.
I2V Rules는 `kling3-prompt`를 적용한다.

**T2V (Text to Video) 프롬프트** — 씬과 모션을 하나의 프롬프트로 생성한다.

`kling3-prompt`의 Prompt Structure를 따른다.
6 Essential Elements를 모두 포함하되, 모션과 Duration을 함께 서술한다.

### Step 5: 문서 구성

**Action**: `screenplay.template.md` 기반으로 Step 1~4의 결과를 통합하여 문서를 생성한다.

**Output**: `PRODUCTION/{project}/03-screenplay.md`

## Output Example

```markdown
## Scene #1

### 씬 정보
| 항목 | 내용 |
|------|------|
| 장소 | INT. 연구소 - 에코의 작업실 |
| 시간대 | NIGHT |
| 등장인물 | 에코 |
| 스토리 | 에코가 혼자 작업실에서 데이터를 정리하다가 자신의 폐기 명령서를 발견한다 |

### 영상 각색
| 항목 | 내용 |
|------|------|
| 감정 톤 | 고요함 속 충격, 존재의 위기 |
| 시각적 접근 | 차가운 블루 조명의 좁은 작업실, 모니터 빛만이 에코의 얼굴을 비춘다. 느린 dolly-in 위주, 핸드헬드 없이 정적인 카메라로 고요함을 유지 |
| 핵심 순간 | 폐기 명령서가 화면에 뜨는 순간 — 에코의 손이 멈추는 클로즈업 |
| 전환 | 이전 씬 없음 (오프닝). 다음 씬으로 컷 전환, 수진의 전화벨 소리 |

---

### Shot #1
| 항목 | 값 |
|------|-----|
| 카메라 앵글 | eye-level |
| 카메라 모션 | slow dolly-in |
| 프레이밍 | medium |
| 주체 | 에코 |
| 주체 모션 | 모니터를 응시하며 데이터를 넘기고 있다 |
| 대사/내레이션 | 없음 |
| Duration | 5s |

#### I2V 프롬프트

**키 프레임:**
cinematic, sci-fi lab interior, night, cold blue lighting,
humanoid robot sitting at desk looking at monitor,
eye-level, medium shot,
quiet tension, desaturated blue-grey palette

**모션:**
slow dolly-in, humanoid robot scrolling data on monitor,
subtle screen light flickering on face,
duration: 5s

#### T2V 프롬프트
Sci-fi lab interior at night, cold blue lighting from monitors.
Humanoid robot sits at desk, scrolling data on screen.
Slow dolly-in from medium shot, screen light flickering on face,
dust particles floating in cold air, quiet tension,
desaturated blue-grey palette, cinematic realism,
duration: 5s
```

## Quality Criteria

### 1. Scene-Treatment 정합성
- 3막 전환점(촉발 사건, 미드포인트, 클라이맥스)이 모두 씬으로 구현됨
- 세계관 규칙/제약이 씬 배경에 반영됨
- 인물 관계와 감정 변화가 Treatment의 아크와 일치

### 2. 6 Essential Elements
- 모든 I2V/T2V 프롬프트에 Camera, Subject, Environment, Lighting, Texture, Emotion 포함

### 3. 캐릭터 일관성
- 프롬프트 블록에서 `@이름` 형식 통일 (characters.md Prompt Label)
- 씬 정보/Shot 테이블에서는 이름만 사용
- 외형/의상이 characters.md Visual Design과 일치
- Kling 프롬프트에 English Visual Reference Prompt 반영

### 4. I2V/T2V 프롬프트 포맷
- I2V: 키 프레임(정지)과 모션(변화)이 분리되어 서술됨
- T2V: 단일 프롬프트에 씬+모션+Duration 통합 서술됨
- 키 프레임에 이미 보이는 요소를 모션에서 반복하지 않음

### 5. Shot 기술 완성도
- 각 Shot에 카메라 앵글/모션/프레이밍, 주체/주체 모션, 대사/내레이션, Duration 모두 명시
- 카메라 모션이 Shot당 1-2개 이내

## Notes

- 카메라/렌즈 선택은 `kling3-camera` 레퍼런스를 기준으로 한다
- I2V와 T2V 프롬프트 모두 6 Essential Elements를 포함해야 한다
- 등장인물은 프롬프트 블록 안에서 `@이름` 형식을 일관되게 유지한다 (씬 정보/Shot 테이블에서는 이름만 사용)
- 한 Shot에 과도한 카메라 모션을 넣지 않는다 (1-2개 적절)

## Next

스크린플레이 완료 후 다음 단계 진행
