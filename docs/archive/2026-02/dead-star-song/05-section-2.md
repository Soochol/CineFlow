# Screenplay — Section 2: 미지의 신호

> 프로젝트: dead-star-song
> 생성일: 2026-02-12

---

## 메타

- **제목**: 죽은 별의 노래 (Dead Star Song)
- **장르**: SF
- **총 씬 수**: 9
- **예상 러닝타임**: 240초

---

## Scene #2

### 씬 정보

| 항목 | 내용 |
|------|------|
| 장소 | INT. 리라 스테이션 관측실 |
| 시간대 | 인공 야간 |
| 등장인물 | @하은, @아리아 (UI/음성) |
| 분위기 | 갑작스러운 변화, 호기심의 점화, 고요한 긴장 |
| 총 시간 | 25초 |

### 스토리

리라 스테이션의 관측실. Section 1의 단조로운 루틴이 깨진다. @아리아의 경고음이 고요를 찢으며 모니터에 비정상적인 주파수 파형이 솟아오른다. 평탄하던 데이터 위에 예측 불가능한 불규칙 파형이 출현 — 기존 카탈로그의 어떤 천체 현상과도 일치하지 않는 비정규 패턴이다. @아리아가 "기존 카탈로그 매칭률 0%. 분류 불가입니다"라고 보고한다.

18개월간 무감각하게 데이터를 확인하던 @하은의 눈에 처음으로 빛이 돈다. 동공이 확대되고, 초점이 되돌아온다. 기계적으로 반복되던 루틴에서 벗어나, 그녀는 의자를 끌어당기며 모니터에 가까이 다가간다 — 촉발 사건. 이 순간부터 @하은의 무감각한 고립은 끝나고, 미지의 신호를 향한 여정이 시작된다.

### 연출 의도

Section 1에서 확립한 단조로운 루틴을 단번에 깨뜨리는 촉발 사건(Inciting Incident)을 구현한다. 핵심은 **대비** — 평탄한 데이터 위에 갑자기 솟아오르는 불규칙 파형, 무감각한 표정에서 생기가 돌아오는 @하은의 눈. 카메라는 모니터(객체) → 하은 얼굴(반응) → 행동(다가감)으로 고전적 리액션 시퀀스를 따르되, 움직임은 최소화하여 고요한 긴장을 유지한다. 색온도는 여전히 cool blue/teal을 유지하지만, @아리아 UI의 앰버 경고색이 미세하게 가미되어 변화의 씨앗을 암시한다.

---

### Shot #1

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | Eye-level |
| **카메라 모션** | Static |
| **프레이밍** | CU (Close-Up) |
| **주체** | 관측실 모니터 화면 — 평탄한 데이터 위에 갑자기 뜨는 불규칙 파형, @아리아 UI 경고 표시 |
| **주체 모션** | 평탄한 스크롤 데이터 → 불규칙 파형 급속 출현, UI 경고 아이콘 앰버색 점멸 |
| **대사/내레이션** | @아리아: "비정상 주파수 패턴 감지." |
| **Duration** | 8s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
A close-up of a dark-themed observatory monitor displaying flat scrolling frequency data in teal lines, then a sudden burst of irregular waveform pattern appears — jagged, unpredictable peaks and valleys in bright cyan against the dark background, an amber warning icon pulses in the upper right corner of the screen, circular_blue_LED indicator on the wall panel behind starts pulsing with alert pattern, cool blue ambient lighting, sci-fi control room atmosphere
```

**모션:**

```
Camera: Static, no movement. Subject motion: Flat teal data lines scroll steadily for 2 seconds, then irregular waveform erupts from the baseline — sharp peaks spike upward unpredictably, the waveform pulses and shifts with organic irregularity, amber warning icon blinks rhythmically (2Hz), circular_blue_LED on wall panel transitions from steady glow to alert pulse pattern, screen brightness increases slightly as new data floods in.
```

#### T2V (Text to Video) 프롬프트

```
[Scene: INT. Space observatory control room, artificial night lighting]
[Camera: Eye-level, static, CU on monitor screen]
[Subject: A dark-themed holographic monitor displaying flat teal frequency data lines that suddenly erupt into wild irregular waveform patterns — jagged unpredictable peaks in bright cyan, amber warning icon pulsing in corner, holographic_waveform_display showing anomalous signal]
[Environment: Dimly lit observatory control room, dark_panel_UI interfaces surrounding the main monitor, ambient_blue_glow from ceiling light strips]
[Lighting: Cool blue-teal monitor glow, amber warning light pulsing, low-key ambient]
[Texture: Crisp digital display, holographic translucency on waveform data, metallic panel surfaces]
[Emotion: Sudden disruption of routine, tension, anomaly detection]
Negative: distorted faces, warped limbs, unrealistic proportions, blur, flicker, cartoonish, bright saturated colors
```

---

### Shot #2

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | Eye-level |
| **카메라 모션** | Slow dolly push-in |
| **프레이밍** | MCU → CU |
| **주체** | @하은 얼굴 — 무심한 표정에서 미세한 변화, 눈이 커지며 초점이 돌아옴, 모니터의 파란 빛 반사 |
| **주체 모션** | 무심한 시선 → 눈 미세 확대, 동공 초점 회복, 입술 미세하게 벌어짐 |
| **대사/내레이션** | @아리아: "기존 카탈로그 매칭률 0%." |
| **Duration** | 8s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
A medium close-up of a Korean woman in her mid-30s with pale skin, dark brown eyes, and black hair in a low ponytail, wearing a navy utility jumpsuit with a gray fleece jacket, silver over-ear headphones around her neck — her face shows a blank, fatigued expression, blue monitor light reflecting on her pale skin, dark observatory control room background with teal monitor glow, mid-30s_Korean_woman, slim_pale_build, black_low_ponytail, navy_jumpsuit_gray_fleece
```

**모션:**

```
Camera: Slow dolly push-in from MCU to CU over 8 seconds, gradual and steady. Subject motion: @하은's expression shifts subtly — eyes widen slightly as pupils dilate and refocus with sudden attention, the blank fatigue in her face dissolves into alert awareness, lips part slightly, the blue monitor light on her face flickers with the irregular waveform pattern, a faint amber warning light reflects on the edge of her cheek. Micro-expressions only — no dramatic movement.
```

#### T2V (Text to Video) 프롬프트

```
[Scene: INT. Space observatory control room, artificial night]
[Camera: Eye-level, slow dolly push-in from MCU to CU]
[Subject: A Korean woman in her mid-30s with pale skin, dark brown eyes, and black hair in a low ponytail, wearing a navy utility jumpsuit with a gray fleece jacket, silver over-ear headphones around her neck — her blank expression shifts to alert awareness, eyes widening, pupils refocusing, lips parting slightly]
[Environment: Dark observatory control room, blue-teal monitor glow reflecting on her face, holographic displays in soft focus behind her]
[Lighting: Cool blue-teal key light from monitors on face, subtle amber warning light flicker on cheek edge, low fill, dark background]
[Texture: Natural skin with pale complexion, fabric texture of navy jumpsuit and gray fleece, metallic gleam of silver headphones]
[Emotion: Awakening from numbness, first spark of curiosity, subtle transformation from fatigue to attention]
Negative: distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation, cross-eyed, asymmetric face, unnatural skin, blur, flicker, smiling, cartoonish, bright saturated colors
```

---

### Shot #3

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | OTS (하은 뒤) |
| **카메라 모션** | Slow push-in |
| **프레이밍** | MS |
| **주체** | @하은이 의자를 당겨 모니터에 다가감, 화면에 파형이 계속 출렁임, @아리아 LED 활성화 |
| **주체 모션** | 의자를 끌어당기며 상체 전진, 양손 콘솔 모서리 잡기, 모니터를 응시 |
| **대사/내레이션** | @아리아: "분류 불가입니다." |
| **Duration** | 9s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
An over-the-shoulder shot from behind a Korean woman in her mid-30s with black hair in a low ponytail, wearing a navy utility jumpsuit with a gray fleece jacket — she sits before a wide curved monitor displaying irregular waveform patterns in bright cyan against dark background, a circular pale-blue LED indicator on the dark observatory wall panel pulses with alert pattern, surrounded by minimalist dark-themed holographic displays, cool blue-teal ambient lighting, mid-30s_Korean_woman, black_low_ponytail, navy_jumpsuit_gray_fleece, circular_blue_LED, dark_panel_UI
```

**모션:**

```
Camera: OTS angle from behind @하은, slow push-in over 9 seconds, gradually tightening the frame. Subject motion: @하은 grips the edges of her rolling chair and pulls herself forward toward the monitor — the chair slides on metal floor with slight friction, her hands move to grip the console edge, she leans in studying the screen intently. On the monitor, irregular waveform continues to pulse and shift with organic unpredictability. The circular_blue_LED on the wall panel brightens and pulses faster — transitioning from passive monitoring to active alert state, holographic_waveform_display data streams accelerate.
```

#### T2V (Text to Video) 프롬프트

```
[Scene: INT. Space observatory control room, artificial night]
[Camera: OTS from behind subject, slow push-in, MS framing]
[Subject: A Korean woman in her mid-30s with black hair in a low ponytail, wearing a navy utility jumpsuit with a gray fleece jacket, pulling her rolling chair forward toward a wide curved monitor, gripping console edge and leaning in — her posture shifts from passive to engaged, back straightening with sudden purpose]
[Environment: Dark observatory control room, wide curved monitor displaying irregular cyan waveform patterns, a circular pale-blue LED indicator on dark wall panel pulsing with alert pattern, minimalist dark-themed holographic displays surrounding the workspace, ambient_blue_glow from ceiling strips]
[Lighting: Cool blue-teal from monitors as primary light source, circular_blue_LED casting subtle pulse shadows, ambient blue strips on ceiling edges, overall low-key dark atmosphere]
[Texture: Metallic floor and console surfaces, fabric of jumpsuit and fleece, translucent holographic display panels, glowing LED glass surface]
[Emotion: Awakened curiosity, purposeful movement, engagement with the unknown, transition from passive routine to active investigation]
Negative: distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation, cross-eyed, asymmetric face, unnatural skin, blur, flicker, smiling, cartoonish, bright saturated colors
```

---

---

# Sound Design — Section 2: 미지의 신호

> 프로젝트: dead-star-song
> 생성일: 2026-02-12

---

## 글로벌 사운드 설정

- **음악 장르**: Dark Ambient / Sci-Fi Score
- **전체 무드**: 고요한 긴장 → 호기심 점화
- **BPM 범위**: 50-65 BPM

---

## Scene #2 — Audio

### BGM

| 항목 | 값 |
|------|-----|
| **무드** | 고요한 긴장 위 미세한 호기심의 점화, 불안과 기대가 공존 |
| **장르** | Dark Ambient + Tension Underscore |
| **템포** | 55-60 BPM (Section 1의 30 BPM에서 미세하게 상승) |
| **악기** | Sub bass drone (지속), high-frequency sine tone (0:03~ 등장), tension string harmonics (미세), electronic pulse (0:12~) |
| **Duration** | 25s |

#### 음악 프롬프트

```
A 25-second dark ambient sci-fi underscore transitioning from stillness to quiet tension. Opens with a sustained sub-bass drone continuing from the previous scene. At 0:03, a thin high-frequency sine tone emerges — barely audible, unsettling, like a distant anomaly signal. String harmonics enter at 0:08 — sparse, glassy, creating an eerie shimmer. At 0:12, a subtle electronic pulse begins — slow, rhythmic, suggesting awakening heartbeat or emerging pattern. Tension builds gradually through layering — never loud, never sudden, but the accumulated frequencies create growing unease and curiosity. The drone shifts pitch upward by a semitone at 0:18, suggesting something has changed irrevocably. Final seconds: all elements sustain at heightened tension, unresolved, leading directly into Section 3.

Style: Jóhann Jóhannsson meets Ben Salisbury, clinical sci-fi tension, cool and precise
Instruments: Sub bass synthesizer, high sine oscillator, glass string harmonics, minimal electronic pulse
Tempo: 55-60 BPM
Key: D minor (shifting)
```

### SFX (효과음)

| # | 효과음 | 타이밍 | Duration |
|---|--------|--------|----------|
| 1 | @아리아 경고 알림음 — 짧은 이중 톤 (D5-A5), 깨끗하고 날카로운 전자음 | 0:00 | 1.2s |
| 2 | 모니터 파형 출현 — 데이터 스크롤 가속, 디지털 글리치 텍스처 | 0:01 | 3.0s |
| 3 | @아리아 LED 활성화 — 미세한 전자 차임, 저주파 펄스 | 0:04 | 1.5s |
| 4 | @하은 의자 금속 마찰음 — 금속 레일 위 롤링 체어 슬라이딩 | 0:12 | 1.8s |
| 5 | 콘솔 손잡이 그립 — 손가락이 금속 모서리를 잡는 미세한 접촉음 | 0:14 | 0.5s |
| 6 | 파형 데이터 스크롤 사운드 — 지속적 디지털 스크롤, 미세한 전자 텍스처 | 0:04 | 21.0s (배경, 끝까지 지속) |

### Voice (대사/내레이션)

| # | 인물 | 대사 | 톤 | Duration |
|---|------|------|----|----------|
| 1 | @아리아 | "비정상 주파수 패턴 감지." | 균일하고 중성적인 합성음, 경고 프로토콜 톤, 감정 없음 | 2.0s |
| 2 | @아리아 | "기존 카탈로그 매칭률 0%." | 동일한 합성음, 사무적 보고, 약간의 데이터 처리 지연 느낌 | 2.5s |
| 3 | @아리아 | "분류 불가입니다." | 동일한 합성음이나 미세하게 느린 템포, 결론적 어조, 마침표 느낌의 정적 뒤따름 | 1.8s |

---

## 오디오 타임라인

```
0:00  ├─ @아리아 경고 알림음 (이중 톤)
0:00  ├─ @아리아 Voice: "비정상 주파수 패턴 감지."
0:01  ├─ 모니터 파형 출현 SFX
0:03  ├─ BGM: 고주파 사인 톤 등장
0:04  ├─ @아리아 LED 활성화 SFX
0:04  ├─ 파형 스크롤 사운드 시작 (배경, 끝까지)
0:06  ├─ @아리아 Voice: "기존 카탈로그 매칭률 0%."
0:08  ├─ [Shot #2 시작] BGM: 스트링 하모닉스 진입
0:12  ├─ BGM: 전자 펄스 시작
0:12  ├─ 의자 금속 마찰음 SFX
0:14  ├─ 콘솔 그립 SFX
0:16  ├─ [Shot #3 시작]
0:16  ├─ @아리아 Voice: "분류 불가입니다."
0:18  ├─ BGM: 드론 반음 상승
0:25  └─ [Section 2 종료 → Section 3 전환]
```

---

## Self-Check

### Key Points 대조

| Key Point | 반영 여부 | 위치 |
|-----------|----------|------|
| 화면에 뜨는 비정규 파형 | O | Shot #1 — 모니터 CU, 평탄한 데이터 위 불규칙 파형 급속 출현 |
| @아리아 "분류 불가" 보고 | O | Shot #3 대사 "분류 불가입니다." + Shot #1-2에서 전체 보고 시퀀스 |
| @하은 눈에 처음으로 빛 | O | Shot #2 — 무심→변화, 눈 커짐, 동공 초점 회복, 입술 벌어짐 |
| 촉발 사건 (Inciting Incident) | O | 전체 섹션이 촉발 사건 구현, 스토리에서 명시적 언급 |

### 분량 확인

| 항목 | 목표 | 실제 |
|------|------|------|
| 총 러닝타임 | 25초 | 25초 (8s + 8s + 9s) |
| Shot 수 | 3 | 3 |

### 톤/스타일 일관성

- [O] Cool blue/teal 색온도 유지 (ACT 1 구간, 아직 warm 전환 전)
- [O] @아리아 UI에 앰버 경고색 미세 등장 (변화의 씨앗)
- [O] Quiet grandeur 톤 — 극적 액션 없이 미세한 변화로 긴장 구축
- [O] 최소 대사 — @아리아 보고 음성만, @하은 무언
- [O] Denis Villeneuve 스타일 참조 — 고전적 리액션 시퀀스, 절제된 연출

### 캐릭터 일관성

- [O] @하은 Visual: mid-30s_Korean_woman, slim_pale_build, black_low_ponytail, navy_jumpsuit_gray_fleece 태그 일관 사용
- [O] @아리아 Visual: circular_blue_LED, dark_panel_UI, holographic_waveform_display, ambient_blue_glow 태그 일관 사용
- [O] @하은 행동 아크: 무감각 → 각성 (ACT 1 전환점에 부합)
- [O] @아리아 행동 아크: 기능적 도구 단계 — 프로토콜 기반 경고/보고

### 흐름 확인

- [O] Section 1(루틴) → Section 2(촉발 사건): 단조로운 일상에서 갑작스러운 변화로 자연스러운 전환
- [O] Section 2(호기심) → Section 3(해독 시도): 분석 착수로의 연결 — @하은이 모니터에 다가가며 종료, 능동적 분석 시작 암시
- [O] Negative prompt 전체 적용

### 6 Essential Elements 확인 (모든 T2V 프롬프트)

| Element | Shot #1 | Shot #2 | Shot #3 |
|---------|---------|---------|---------|
| Camera | O | O | O |
| Subject | O | O | O |
| Environment | O | O | O |
| Lighting | O | O | O |
| Texture | O | O | O |
| Emotion | O | O | O |
