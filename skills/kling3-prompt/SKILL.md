---
name: kling3-prompt
description: |
  Kling 3.0 프롬프트 레퍼런스. 6 Essential Elements, 프롬프트 구조,
  7가지 핵심 원칙, 멀티샷/I2V 규칙, 네거티브 프롬프트, 체크리스트를 제공한다.
user-invocable: false
---

# Kling 3.0 Prompt Reference

> 6 Essential Elements + 프롬프트 구조 + 핵심 원칙 + 멀티샷/I2V 규칙

## 6 Essential Elements

모든 프롬프트에 다음 6요소를 반영한다:

1. **Camera** — 샷 타입 + 앵글 + 무브먼트
2. **Subject** — 주체 + 외형 + 액션
3. **Environment** — 환경 + 세팅 + 시간대
4. **Lighting** — 구체적 조명원 + 색온도
5. **Texture** — 물리적 디테일 (비, 먼지, 연기, 반사)
6. **Emotion** — 무드 + 시네마틱 톤

## Prompt Structure

프롬프트는 씬의 맥락과 배경으로 시작하고, 주체의 외형과 행동을 묘사한 뒤, 시간 순서에 따른 액션을 전개한다. 이어서 카메라 앵글과 움직임을 지정하고, 오디오와 분위기를 더한 뒤, 스타일과 기술 사양으로 마무리한다.

프롬프트 안에서 등장인물은 `@이름` 형식으로 표기한다.

---

## Core Rules

### 7가지 핵심 원칙

1. **Think in Shots, Not Clips**
   - 사진가가 아닌 영화 감독(Director of Photography)처럼 사고
   - Kling 3.0은 시간과 공간을 이해 — 시네마틱 의도를 서술

2. **Motion Verbs Matter**
   - "moves" 대신 "dolly push-in", "whip-pan", "shoulder-cam drift"
   - 구체적 영화 촬영 용어가 정확한 결과를 만듦

3. **Texture = Credibility**
   - 물리적 디테일이 리얼리즘을 결정
   - "rain beading on leather", "condensation on glass", "visible breath"

4. **Temporal Flow**
   - 시간 진행을 명시: beginning → middle → end
   - "At the 8-second mark, the camera zooms into a close-up"

5. **Name Real Light Sources**
   - "dramatic lighting" (X) → "neon signs casting magenta and cyan across wet pavement" (O)
   - 구체적 광원이 일관된 조명 결과를 생성

6. **One Main Action**
   - 주체 하나, 주요 액션 하나에 집중
   - 보조 동작(미세 모션)으로 디테일 추가

7. **Micro-motions**
   - 호흡, 눈 깜빡임, 머리카락 흔들림, 옷 흔들림
   - 먼지, 파편, 물방울 등 환경 미세 모션

---

## Multi-Shot Rules

### 구조

- `Shot 1:` ~ `Shot 6:` 라벨링
- 각 샷에 반드시 포함: 프레이밍 + 주체 + 모션
- 10-15초 비디오 = 4-6 shots 권장

### 연결 언어

| 연결어 | 용도 |
|--------|------|
| "Cut to" | 즉각적인 장면 전환 |
| "Continuing" | 같은 흐름 유지 |
| "Meanwhile" | 동시 진행 다른 시점 |
| "Immediately" | 빠른 연쇄 동작 |
| "After a beat" | 짧은 정적 후 전환 |

### 캐릭터 일관성

- 첫 등장 시 상세 묘사 (외형, 옷, 특징)
- 이후 동일 라벨 유지: `[Character A: Black-suited Agent]`
- 프롬프트 전체에서 대명사 대신 라벨 사용

### 멀티샷 Duration 가이드

| 총 길이 | 권장 샷 수 | 샷당 평균 |
|---------|-----------|-----------|
| 5-6초 | 2-3 | 2-3초 |
| 8-10초 | 3-4 | 2-3초 |
| 10-12초 | 4-5 | 2-3초 |
| 12-15초 | 5-6 | 2-3초 |

---

## Image-to-Video Rules

1. **이미지를 앵커 포인트로 취급** — 시작 프레임
2. **보이는 것을 묘사하지 말 것** — 변화/진행만 묘사
3. **카메라 모션에 집중** — orbit, push-in, pull-back
4. **환경 변화 추가** — 바람, 빛 변화, 물결
5. **미세한 움직임** — 호흡, 눈 깜빡임, 옷 흔들림
6. **텍스트/로고 보존 가능** — "maintaining text readability"

### 잘 작동하는 입력 이미지

- 제품 사진 (광고 용도)
- 인물 사진 (캐릭터 애니메이션)
- 풍경/설정 사진 (시네마틱 리빌)
- 텍스트/로고 이미지 (브랜딩)

### 피해야 할 입력 이미지

- 복잡한 다층 텍스트
- 작은 얼굴이 여러 개
- 추상적 구성

---

## Weak vs Strong

| 요소 | 약한 프롬프트 | 강한 프롬프트 |
|------|-------------|-------------|
| Camera | "Camera follows person" | "Handheld shoulder-cam drifts behind with subtle sway" |
| Subject | "A woman walking" | "Woman in red dress, heels clicking wet cobblestone" |
| Environment | "In a city" | "Narrow Tokyo alley, steam from grates, glowing vending machines" |
| Lighting | "Dramatic lighting" | "Flickering neon casting magenta and cyan across wet pavement" |
| Texture | "It looks realistic" | "Rain beading on leather, condensation on glass, visible breath" |
| Motion | "She walks away" | "Turns slowly, hair catches light, disappears around corner" |

---

## Negative Prompt Library

### 범용 (기본 추천 - 모든 영상에 사용)

```
blur, flicker, distorted faces, warped limbs, unrealistic proportions, blurry textures, morphing, deformed hands, extra fingers, mutation, ugly, disfigured, low quality, artifacts, glitch
```

### 시리어스/무거운 분위기용 (추가)

```
smiling, laughing, cartoonish, bright colors, overly vibrant colors
```

### 텍스트 포함 영상용 (추가)

```
blurry text, illegible text, warped typography, distorted letters
```

### 모션 안정용 (추가)

```
shaking, jittery, circular motion, unstable face, morphing textures, flickering subject
```

### 인물 품질용 (추가)

```
cross-eyed, asymmetric face, unnatural skin, plastic skin, dead eyes, frozen expression
```

### 네거티브 프롬프트 사용 규칙

- "no" 접두사 불필요 — Kling이 자동으로 부정어로 인식
- 장면 특성에 맞는 카테고리를 범용과 조합하여 사용
- Kling 3.0은 기본적으로 밝은 표정을 생성하므로, 무거운 분위기에는 반드시 시리어스용 추가

---

## Aspect Ratio & Duration

### 화면 비율

| 비율 | 해상도 예시 | 용도 |
|------|-------------|------|
| 16:9 | 1920x1080 | 기본 시네마틱, YouTube |
| 9:16 | 1080x1920 | Shorts, Reels, TikTok |
| 21:9 | 2560x1080 | 울트라와이드 시네마틱 |
| 1:1 | 1080x1080 | Instagram 스퀘어 |

### 영상 길이 가이드

| 장면 유형 | 권장 길이 | 적합한 구성 |
|-----------|-----------|-------------|
| 단순 장면/제품 | 5-6초 | 단일 샷, 단순 모션 |
| 단일 액션 시퀀스 | 8초 | 1-2 샷, 하나의 완결된 행동 |
| 멀티샷 내러티브 | 10-12초 | 4-6 샷, 스토리 전개 |
| 복잡한 대사 장면 | 12-15초 | 대사 + 리액션 + 환경 |

---

## Pre-Generation Checklist

생성 전 다음을 확인:

- [ ] 카메라 앵글 + 모션이 명시되었는가
- [ ] 피사체의 액션이 구체적인가 (모호한 동사 지양)
- [ ] 환경/조명이 구체적인가 (real light sources)
- [ ] 물리적 텍스처가 포함되었는가
- [ ] 씬의 무드와 시네마틱 톤이 반영되었는가
- [ ] 등장인물이 `@이름` 형식으로 표기되었는가
- [ ] 멀티샷이면 각 샷이 라벨링되었는가
- [ ] 네거티브 프롬프트가 포함되었는가
- [ ] 길이와 화면 비율이 적절한가

## SFX — 환경음

프롬프트에 환경음 묘사를 추가하면 자동 생성:
- "soft jazz humming in background"
- "rain tapping against windows"
- "ambient café chatter"
- "distant traffic, occasional horn"

---

## Notes

- 프롬프트 길이: 1-3문장이 최적 (충분한 디테일 + 모델 혼란 방지)
- 모순된 지시 금지 (차분한 장면 + 격렬한 액션 동시 기술)
- 20초 이상의 실시간 액션을 요구하는 모션 지양
- 구체적 숫자/카운팅 기대는 비추천
- 네거티브 프롬프트는 별도 필드에 입력 (프롬프트 본문에 넣지 않음)

## Related Skills

- `kling3-camera` — 카메라 앵글/모션/샷타입/렌즈 상세 레퍼런스
- `kling3-style` — 스타일 프리셋/색감/조명 레퍼런스
- `kling3-examples` — 12개 카테고리 실전 프롬프트 예시
