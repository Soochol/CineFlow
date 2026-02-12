# Screenplay

> 프로젝트: dead-star-song
> 생성일: 2026-02-12

---

## 메타

- **제목**: 죽은 별의 노래 (Dead Star Song)
- **장르**: SF
- **총 씬 수**: 9
- **예상 러닝타임**: 240초

---

## Scene #3 — 해독 시도

### 씬 정보

| 항목 | 내용 |
|------|------|
| 장소 | INT. 리라 스테이션 관측실 |
| 시간대 | 시간 경과 (빠른 편집으로 암시) |
| 등장인물 | 하은, 아리아 (UI/음성) |
| 분위기 | 집중과 좌절, 시간과의 경쟁, 점증하는 압박 |
| 총 시간 | 25초 (8s + 8s + 9s) |

### 스토리

하은이 모든 과학적 분석 방법을 동원한다. 스펙트럼 분석, 수학적 패턴 매칭, 기존 데이터베이스 대조. 모니터마다 다른 분석 화면이 펼쳐져 있고, 하은의 손가락은 쉬지 않고 키보드 위를 달린다. 그러나 모든 시도가 같은 결론으로 돌아온다 — "분류 불가". 아리아의 보고가 기계적으로 반복될 때마다 좌절이 깊어진다. 그때 하은은 모니터 한쪽의 신호 강도 그래프가 서서히 우하향하고 있음을 발견한다. 예상 소멸까지 71시간 42분. 시간이 없다. 하은은 두 손으로 머리를 감싸쥐고 깊은 한숨을 내쉰다. 모니터의 차가운 빛만이 그녀의 좌절을 비추고 있다.

### 연출 의도

Section 2에서 호기심으로 점화된 하은의 에너지가 과학적 벽에 부딪혀 좌절로 전환되는 과정을 압축적으로 보여준다. 하이앵글 오비트로 시작해 하은의 고군분투를 객관적으로 조망한 뒤, 모니터의 "분류 불가" 반복과 소멸 카운트다운으로 클로즈업하여 절박함을 극대화한다. 마지막 로우앵글 정적 샷은 하은을 작고 무력하게 보이게 하여 과학적 방법론의 한계를 시각적으로 각인시킨다. 이 좌절의 극점이 Section 4의 전환점(가청 주파수 변환이라는 직관적 도약)을 위한 필수적인 감정 기반이 된다.

---

### Shot #1

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | High-angle |
| **카메라 모션** | Slow orbit |
| **프레이밍** | WS |
| **주체** | 관측실 전경 — 모든 모니터에 스펙트럼 분석, 패턴 매칭, 데이터베이스 대조 화면이 펼쳐짐. 하은이 중앙에서 빠르게 키보드를 조작함 |
| **주체 모션** | 하은의 손이 빠르게 키보드를 두드리며, 고개를 돌려 여러 모니터를 번갈아 확인. 시간 경과를 암시하는 편집 리듬 |
| **대사/내레이션** | — |
| **Duration** | 8s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
High-angle wide shot of a dimly lit space observatory control room, multiple monitors displaying spectral analysis data with blue and teal waveforms, frequency charts, and pattern matching grids. @하은 — a Korean woman in her mid-30s with pale skin, dark brown eyes, black hair in a low ponytail, wearing a navy utility jumpsuit with gray fleece jacket — sits at the central console, hands poised over keyboard. Cool blue monitor light illuminates the room, casting long shadows on dark slate walls. Ambient teal glow from LED strips along ceiling edges. Fine dust particles visible in monitor backlight. Tense, concentrated atmosphere of scientific urgency.
```

**모션:**

```
Camera slowly orbits clockwise from high angle. @하은's fingers type rapidly across keyboard, head turning between monitors. Monitor screens refresh with new analysis data scrolling. Subtle flicker of screen reflections on desk surface. Air circulation causing faint movement in @하은's loose hair strands near temples. Keyboard clicks create rhythmic urgency. Environmental hum of processing systems.
```

#### T2V (Text to Video) 프롬프트

```
High-angle slow orbit wide shot of a space observatory control room. Multiple monitors display spectral analysis waveforms, frequency charts, and pattern matching data in cool blue and teal. @하은 — mid-30s Korean woman, pale skin, black low ponytail, navy jumpsuit with gray fleece — sits at central console typing rapidly, turning between screens. Cool blue monitor glow on dark slate walls, ambient teal LED strips along ceiling. Fine dust particles float in backlight. Tense scientific urgency, Denis Villeneuve cinematography, 16:9 cinematic.
```

**Negative Prompt:**

```
distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation, cross-eyed, asymmetric face, unnatural skin, blur, flicker, smiling, cartoonish, bright saturated colors
```

---

### Shot #2

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | Eye-level |
| **카메라 모션** | Slow push-in |
| **프레이밍** | CU → ECU |
| **주체** | 모니터 화면 — "분류 불가" 텍스트가 반복적으로 표시됨. 신호 강도 그래프가 우하향 곡선을 그리며, 하단에 "예상 소멸: 71:42:08" 카운트다운 표시 |
| **주체 모션** | "분류 불가" 알림이 차례로 팝업, 신호 강도 바가 천천히 하락, 카운트다운 숫자가 감소 |
| **대사/내레이션** | 아리아: "분류 불가입니다. 분석을 계속할까요?" |
| **Duration** | 8s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
Close-up of a dark-themed observatory monitor display. Multiple "UNCLASSIFIED" / "분류 불가" warning labels in amber text overlaid on spectral analysis graphs. A signal strength indicator graph shows a clear downward curve in teal-blue line against dark grid background. Bottom of screen displays countdown timer "예상 소멸: 71:42:08" in red-amber digits. @아리아 — circular pale-blue LED indicator on dark panel — pulses gently beside the monitor. Cool blue and amber light reflecting off glass screen surface. Condensation-like texture on monitor bezels. Urgent, clinical atmosphere of failing analysis.
```

**모션:**

```
Camera slowly pushes in from close-up to extreme close-up on monitor. New "분류 불가" alerts pop up sequentially across the screen. Signal strength graph line continues its gradual descent. Countdown timer digits tick down. @아리아 LED pulses with each alert notification. Faint screen refresh scanlines visible. Reflected ambient light shifts subtly on glass surface.
```

#### T2V (Text to Video) 프롬프트

```
Eye-level slow push-in from close-up to extreme close-up on observatory monitor screen. Dark-themed display showing repeated "분류 불가" amber warning labels over spectral analysis data. Signal strength graph with teal-blue line curves downward. Countdown "예상 소멸: 71:42:08" in red-amber digits at bottom. @아리아 circular pale-blue LED pulses on adjacent dark panel. Cool blue and amber monitor glow, glass screen reflections, clinical precision. Urgent analytical failure, Denis Villeneuve cinematography, 16:9 cinematic.
```

**Negative Prompt:**

```
distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation, blur, flicker, smiling, cartoonish, bright saturated colors, illegible text, warped typography
```

---

### Shot #3

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | Low-angle |
| **카메라 모션** | Static |
| **프레이밍** | MCU |
| **주체** | 하은 — 두 손으로 머리를 감싸쥐고 깊은 한숨을 내쉬는 모습. 모니터의 차가운 블루 빛이 아래에서 얼굴을 비춤 |
| **주체 모션** | 양손으로 천천히 머리를 감싸쥐며, 눈을 감고, 깊은 한숨. 어깨가 내려앉음. 미세한 떨림 |
| **대사/내레이션** | 하은: (작게) "...왜 안 맞는 거야" |
| **Duration** | 9s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
Low-angle medium close-up of @하은 — a Korean woman in her mid-30s with pale skin, dark brown eyes, black hair in a low ponytail, wearing a navy utility jumpsuit with gray fleece jacket, silver over-ear headphones around her neck. She sits at her console, hands beginning to rise toward her head. Cool blue monitor light illuminates her face from below, casting upward shadows that emphasize fatigue and frustration. Dark observatory ceiling visible above. Teal-blue ambient glow from surrounding monitors creates cold rim light on her shoulders. Fine texture of fleece jacket visible. Defeated, exhausted atmosphere of intellectual collapse.
```

**모션:**

```
Static camera, low angle. @하은 slowly brings both hands up to cradle her head, fingers pressing into her temples and hair. Eyes close. A deep exhale — shoulders drop visibly. Subtle trembling in her fingers. Loose strands of hair shift with the movement. Monitor light flickers faintly on her skin. Micro-motion: visible breath in the cold air of the station. After the sigh, she remains still, head bowed, bathed in cold blue light.
```

#### T2V (Text to Video) 프롬프트

```
Low-angle static medium close-up of @하은 — mid-30s Korean woman, pale skin, dark brown eyes, black low ponytail, navy jumpsuit with gray fleece, silver headphones around neck — slowly cradling her head in both hands, eyes closing, exhaling deeply. Shoulders drop in defeat. Cool blue monitor light from below casts upward shadows on her face. Dark observatory interior, teal ambient glow on shoulders. Visible breath in cold station air. Frustrated exhaustion, Denis Villeneuve cinematography, 16:9 cinematic.
```

**Negative Prompt:**

```
distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation, cross-eyed, asymmetric face, unnatural skin, blur, flicker, smiling, cartoonish, bright saturated colors
```

---

# Sound Design

> 프로젝트: dead-star-song
> 생성일: 2026-02-12

---

## 글로벌 사운드 설정

- **음악 장르**: Dark ambient / Cinematic tension
- **전체 무드**: 고요하고 장엄한, 서서히 감정이 차오르는 (Quiet grandeur)
- **BPM 범위**: 30-50 BPM

---

## Scene #3 — Audio

### BGM

| 항목 | 값 |
|------|-----|
| **무드** | 긴장 상승, 절박한 시간 압박, 좌절의 깊어짐 |
| **장르** | Dark ambient + Cinematic tension |
| **템포** | 40-50 BPM, 전자 펄스가 점점 빨라지는 패턴 |
| **악기** | Low bass drone (sustained), electronic pulse synth (accelerating), unstable rhythmic oscillator, sub-bass |
| **Duration** | 25s |

#### 음악 프롬프트

```
Dark ambient, cinematic tension, accelerating electronic pulse pattern over deep sustained bass drone, unstable rhythmic oscillator building urgency, sub-bass pressure, cold digital texture, clinical anxiety, no vocals, instrumental only, Jóhann Jóhannsson inspired, 45 BPM accelerating to 50 BPM, dark ambient
```

### SFX (효과음)

| # | 효과음 | 타이밍 | Duration |
|---|--------|--------|----------|
| 1 | 키보드 빠른 타이핑 (연속적, 긴박한 리듬) | 0:00-0:08 | 8s |
| 2 | 아리아 "분류 불가" 알림 비프 (이중 톤, 반복) | 0:04 | 0.5s |
| 3 | 아리아 "분류 불가" 알림 비프 (이중 톤, 반복) | 0:07 | 0.5s |
| 4 | 시스템 경고 비프 (소멸 카운트다운 활성화) | 0:14 | 1s |
| 5 | 공기순환 장치 배경 화이트노이즈 (지속) | 0:00-0:25 | 25s |
| 6 | 한숨 / 숨 내쉬는 소리 | 0:18 | 1.5s |

### Voice (대사/내레이션)

| # | 인물 | 대사 | 톤 | Duration |
|---|------|------|----|----------|
| 1 | 아리아 | "분류 불가입니다. 분석을 계속할까요?" | 균일하고 중성적인 합성음, 감정 없음, 기계적 반복 | 3s |
| 2 | 하은 | "...왜 안 맞는 거야" | 작고 지친 목소리, 독백, 좌절과 피로가 섞인 낮은 톤 | 2s |

---

## Self-Check

### 1. Key Points 전수 대조

| Key Point | 반영 여부 | 반영 위치 |
|-----------|----------|----------|
| 스펙트럼 분석 화면들 | O | Shot #1 — 모든 모니터에 스펙트럼 분석, 패턴 매칭, 데이터베이스 대조 화면 |
| 데이터 대조 실패 | O | Shot #2 — "분류 불가" 반복, 스토리 본문에서 모든 시도 실패 서술 |
| "분류 불가" 반복 | O | Shot #2 — 모니터에 "분류 불가" 텍스트 반복 표시, 아리아 대사 |
| 신호 감쇠 발견 | O | Shot #2 — 신호 강도 그래프 우하향 곡선 |
| 72시간 카운트다운 | O | Shot #2 — "예상 소멸: 71:42:08" 카운트다운 표시 |

### 2. 분량 검증

- Target Length: 25초 (3 shots)
- 실제: 25초 (8s + 8s + 9s = 25s) -- 일치

### 3. 톤앤매너 일관성

- Quiet grandeur 톤 유지: 과장 없이 절제된 좌절 표현
- Denis Villeneuve 스타일: 고요한 긴장, 넓은 공간 속 인간의 작음
- 대사 최소화 원칙 준수: 아리아 보고 1문장 + 하은 독백 1문장

### 4. 흐름 연결

- **이전 섹션 연결**: Section 2에서 호기심으로 모니터에 다가간 하은이, 본격적인 분석에 착수한 상태로 자연스럽게 이어짐
- **다음 섹션 전환**: 좌절의 극점(머리를 감싸쥐는 동작)이 Section 4의 전환점(과학적 방법론을 벗어난 직관적 도약 — 가청 주파수 변환)을 위한 감정적 기반을 형성

### 5. Film 전용 검증

- **6 Essential Elements**: 모든 프롬프트에 Camera(앵글/모션), Subject(외형/액션), Environment(관측실/모니터), Lighting(cool blue/teal), Texture(dust, glass reflection, breath, fleece), Emotion(urgency, frustration, defeat) 포함
- **캐릭터 일관성**: 프롬프트 블록 내 @하은/@아리아 표기, 씬 정보/스토리에서 이름만 표기. 외형/의상 Character Document 일치 (navy jumpsuit, gray fleece, silver headphones, low ponytail)
- **Shot Duration**: 8s + 8s + 9s = 25초, Design Target Length 25초와 일치
- **Audio 동기화**: SFX 타이밍이 Shot 전환과 매칭 (Shot 1: 0:00-0:08 타이핑, Shot 2: 0:04-0:14 알림/경고, Shot 3: 0:18 한숨)
- **Negative Prompt**: 모든 샷에 포함 (범용 + 시리어스 + 인물 품질)
- **템플릿 구조**: screenplay.template.md (Scene/Shot/I2V/T2V) + sound-design.template.md (BGM/SFX/Voice) 준수
