# Screenplay + Sound Design

> 프로젝트: dead-star-song
> 섹션: 5 — 별의 기록

---

## 메타

- **제목**: 죽은 별의 노래 (Dead Star Song)
- **장르**: SF
- **총 씬 수**: 9
- **예상 러닝타임**: 240초

---

## Scene #5

### 씬 정보

| 항목 | 내용 |
|------|------|
| 장소 | INT. 리라 스테이션 관측실 |
| 시간대 | 인공 야간 |
| 등장인물 | 하은, 아리아(UI) |
| 분위기 | 경외와 슬픔, 우주적 스케일의 깨달음 |
| 총 시간 | 25초 (8s + 8s + 9s) |

### 스토리

하은이 신호의 기원점을 역추적한다. 홀로그래픽 스타맵이 은하 전체를 보여주다가, 단숨에 특정 성단, 그리고 하나의 항성계로 줌인한다. 아리아가 결과를 보고한다: NGC-7429 항성계, 거리 4,217광년, 항성 상태 — 소멸. 약 4,200년 전 초신성 폭발로 사라진 별. 스타맵은 소멸한 항성계의 잔해를 시각화한다 — 초신성 잔해 성운, 가스 필라멘트, 빈 궤도, 텅 빈 공간. 아름답지만 아무것도 남지 않은 곳. 누군가가 자신들의 별이 죽기 전에 이 노래를 우주에 실어 보냈다는 사실을 깨달은 하은의 눈에 눈물이 고인다.

### 연출 의도

이 씬은 음악의 발견(Section 4)이 과학적 사실로 확인되며 감정적 충격으로 전환되는 지점이다. 거시적 스케일(은하 → 항성계)의 줌인은 4,200광년이라는 거리와 시간의 무게를 시각적으로 전달한다. 소멸한 항성계의 아름다운 잔해는 '죽은 별'이라는 제목의 시각적 구현이며, 텅 비어 있지만 아름다운 공간은 소멸과 흔적의 양가성을 보여준다. 하은의 눈물은 과학적 데이터가 감정적 깨달음으로 변환되는 순간이다. 색온도는 Section 4에서 시작된 warm amber 전환이 더 강해진다 — 스타맵의 적색 "소멸" 표시와 성운의 금빛 가스가 관측실의 차가운 블루와 대비를 이루며 전환을 가속한다.

---

### Shot #1

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | Eye-level |
| **카메라 모션** | Static → crash zoom |
| **프레이밍** | MS → ECU |
| **주체** | 홀로그래픽 스타맵 확대: 은하 → 성단 → 항성계, 최종 포인트에 적색 "소멸" 마커 |
| **주체 모션** | 스타맵이 은하 전체에서 특정 포인트로 단계적으로 줌인, 최종 포인트에서 적색 "EXTINCT" 마커 활성화, 데이터 텍스트 오버레이 |
| **대사/내레이션** | 아리아: "신호 발원점: NGC-7429 항성계." |
| **Duration** | 8s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
Cinematic sci-fi observatory interior, dark ambient, eye-level medium shot of a large holographic star map floating above console, displaying a rotating spiral galaxy with billions of tiny light points, @하은 visible at edge of frame watching the map, cool blue-teal monitor glow mixed with holographic light, dark slate observatory walls, holographic UI elements floating in mid-air, shallow depth of field on the star map, cinematic realism, 4K, Denis Villeneuve inspired quiet grandeur, desaturated blue-grey palette with subtle amber holographic accents
```

**모션:**

```
Crash zoom: holographic star map rapidly zooms from full galaxy view through a star cluster to a single star system, cascading data overlays appear during zoom — distance markers, coordinate grids, spectral data, final zoom point reveals a red pulsing "EXTINCT" marker at the target star system, @하은's silhouette remains static at frame edge, holographic light shifts from blue-white to amber-red as zoom reaches destination, micro-motion: floating dust particles illuminated by holographic light, UI data text flickering, duration: 8s
```

#### T2V (Text to Video) 프롬프트

```
Cinematic sci-fi observatory interior at artificial night, dark ambient atmosphere. Eye-level shot of a large holographic star map floating above a dark console, initially showing a full rotating spiral galaxy with billions of tiny light points. Crash zoom through the holographic map — galaxy to star cluster to single star system — cascading data overlays appear during rapid zoom, coordinate grids and distance markers. Final zoom point reveals a red pulsing "EXTINCT" marker at NGC-7429 star system. @하은 mid-30s_Korean_woman, slim_pale_build, black_low_ponytail, navy_jumpsuit_gray_fleece, visible at edge of frame, her silhouette lit by shifting holographic light. Cool blue-teal monitor glow transitions to amber-red as zoom reaches destination. Floating dust particles in holographic light, UI text flickering. Cinematic realism, 4K, desaturated blue-grey palette with growing amber accents, Denis Villeneuve inspired. Duration: 8s.
```

**Negative Prompt:**
```
blur, flicker, distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation, ugly, disfigured, low quality, artifacts, glitch, smiling, cartoonish, bright saturated colors, cross-eyed, asymmetric face, unnatural skin
```

---

### Shot #2

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | Eye-level |
| **카메라 모션** | Slow orbit |
| **프레이밍** | WS |
| **주체** | 소멸한 항성계 시각화 — 초신성 잔해, 가스 성운, 빈 궤도, 텅 빈 공간 |
| **주체 모션** | 성운 가스 필라멘트가 느리게 부유, 초신성 잔해 파편이 빈 궤도를 따라 미세하게 표류, 빈 공간 중심에서 희미한 에너지 방출 |
| **대사/내레이션** | 아리아: "거리: 4,217광년. 항성 상태: 소멸. 추정 소멸 시기: 약 4,200년 전." |
| **Duration** | 8s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
Cinematic wide shot of a holographic visualization of an extinct star system floating in dark observatory space, supernova remnant nebula with filaments of glowing gas in amber and gold tones, scattered stellar debris along empty orbital paths, hollow center where the star once existed — beautiful but utterly empty, faint data overlays showing orbital trajectories and extinction markers, dark void beyond the nebula, eye-level framing, volumetric holographic light casting amber reflections on nearby observatory surfaces, cinematic realism, 4K, Denis Villeneuve inspired awe and melancholy, warm amber and gold nebula against cool dark blue-slate background
```

**모션:**

```
Slow orbit around the holographic extinct star system visualization, 180-degree arc over 8 seconds, nebula gas filaments drift slowly and organically, supernova debris fragments float along empty orbital paths with subtle tumbling motion, faint energy pulses emanate from the hollow center, data overlay text subtly updates with extinction data, holographic light particles scatter gently, ambient dust motes float through the holographic projection, duration: 8s
```

#### T2V (Text to Video) 프롬프트

```
Cinematic wide shot of a holographic visualization of an extinct star system suspended in a dark observatory. Slow orbit around the display — supernova remnant nebula with filaments of glowing amber and gold gas, scattered stellar debris floating along empty orbital paths, a hollow center where the star once existed, beautiful but utterly empty. Faint data overlays show orbital trajectories and extinction timestamps. Nebula gas drifts slowly, debris fragments tumble with micro-motion. Volumetric holographic light casts warm amber reflections on dark slate observatory walls. Dust motes float through the projection. Eye-level framing, cinematic realism, 4K, warm amber-gold nebula against cool dark blue background, Denis Villeneuve inspired awe and melancholy. Duration: 8s.
```

**Negative Prompt:**
```
blur, flicker, distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation, ugly, disfigured, low quality, artifacts, glitch, smiling, cartoonish, bright saturated colors, cross-eyed, asymmetric face, unnatural skin
```

---

### Shot #3

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | Eye-level |
| **카메라 모션** | Slow dolly push-in |
| **프레이밍** | MCU → CU |
| **주체** | 하은 — 스타맵을 바라보며 눈에 눈물, 입술 떨림, 모니터 앰버 빛이 눈물에 반사 |
| **주체 모션** | 미세한 호흡, 눈에 눈물이 차오르며 한 줄기 흘러내림, 입술이 떨리며 감정 억제, 손가락이 콘솔 위에서 미세하게 경련 |
| **대사/내레이션** | 없음 |
| **Duration** | 9s |

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
Cinematic medium close-up of @하은, a Korean woman in her mid-30s with pale skin, dark brown eyes, and black hair in a low ponytail, wearing a navy utility jumpsuit with a gray fleece jacket, silver over-ear headphones around her neck, looking off-screen at something with an expression of dawning realization and grief, eyes glistening with forming tears, lips slightly parted, amber holographic light from the star map reflecting warmly on her face and in her eyes, mixed with cool blue monitor glow from the side, dark observatory background, shallow depth of field isolating her face, cinematic realism, 4K, warm amber reflections on tear-wet eyes contrasting with cool blue-teal skin tones, Denis Villeneuve inspired emotional restraint
```

**모션:**

```
Slow dolly push-in from medium close-up to close-up over 9 seconds, @하은's eyes fill with tears — one tear rolls slowly down her left cheek, lips tremble with suppressed emotion, subtle breathing visible in chest movement, fingers on console edge twitch with micro-tremor, amber holographic light from the star map plays across her face — reflecting golden in the tear track, soft light shift as the star map projection subtly pulses, hair strands near temple shift with breathing, duration: 9s
```

#### T2V (Text to Video) 프롬프트

```
Cinematic slow dolly push-in from medium close-up to close-up. @하은 mid-30s_Korean_woman, slim_pale_build, black_low_ponytail, navy_jumpsuit_gray_fleece, silver headphones around neck, gazing off-screen at the holographic star map with an expression of dawning grief. Her dark brown eyes glisten as tears form — one tear rolls slowly down her left cheek. Lips tremble with suppressed emotion, subtle breathing, fingers on console edge twitch with micro-tremor. Amber holographic light from the star map reflects warmly on her face and glows golden in the tear track, mixed with cool blue-teal monitor glow from the side. Dark observatory background, shallow depth of field on her face, hair strands shift with breathing. Cinematic realism, 4K, Denis Villeneuve inspired emotional restraint, warm amber and cool blue contrast. Duration: 9s.
```

**Negative Prompt:**
```
distorted faces, warped limbs, unrealistic proportions, deformed hands, extra fingers, mutation, cross-eyed, asymmetric face, unnatural skin, blur, flicker, cartoonish, smiling, bright saturated colors, ugly, disfigured, low quality, artifacts, glitch
```

---

## Scene #5 — Audio

### BGM

| 항목 | 값 |
|------|-----|
| **무드** | 장엄하고 슬픈, 경외와 비탄의 교차, 우주적 스케일의 감정 |
| **장르** | Neoclassical + cinematic ambient + ethereal alien melody |
| **템포** | Slow, 50-55 BPM |
| **악기** | 외계 선율(에테리얼 보컬 패드 지속) + 저음 첼로 + 비올라 트레몰로 + 딥 앰비언트 드론 + 미니멀 피아노 |
| **Duration** | 25s |

#### 음악 프롬프트

```
Neoclassical cinematic ambient, ethereal alien vocal melody continuing from previous scene — otherworldly and hauntingly beautiful, joined by deep cello and viola creating majestic sorrowful harmony, slow 50 BPM, minimal piano notes, deep space drone underneath, building emotional weight, bittersweet grandeur, Denis Villeneuve Arrival inspired, raw intimate orchestral production, neoclassical cinematic ambient
```

### SFX (효과음)

| # | 효과음 | 타이밍 | Duration |
|---|--------|--------|----------|
| 1 | 스타맵 줌인 UI 사운드 — 홀로그래픽 인터페이스 확대, 디지털 스케일링 톤(고→저 스위프), 데이터 스트림 사운드 | 0:00-0:08 | 8s |
| 2 | 데이터 표시음 — "소멸" 마커 활성화 시 저음 펄스 경고음, 데이터 오버레이 텍스트 출력 클릭 | 0:06-0:08 | 2s |
| 3 | 성운 시각화 앰비언스 — 홀로그래픽 가스 부유 미세 입자음, 부드러운 에너지 진동 | 0:08-0:16 | 8s |
| 4 | 눈물 장면 정적 — SFX 페이드아웃, 미세한 관측소 공기순환 화이트노이즈만 잔존 | 0:16-0:25 | 9s |

### Voice (대사/내레이션)

| # | 인물 | 대사 | 톤 | Duration |
|---|------|------|----|----------|
| 1 | 아리아 | "신호 발원점: NGC-7429 항성계." | 균일한 합성음, 감정 없는 보고 톤 | 3s |
| 2 | 아리아 | "거리: 4,217광년. 항성 상태: 소멸. 추정 소멸 시기: 약 4,200년 전." | 균일한 합성음, 감정 없는 보고 톤 — 그러나 내용의 무게가 역설적으로 감정을 만듦 | 6s |

---

## Self-Check

### 1. Key Points 전수 대조

| Key Point | 반영 여부 | 반영 위치 |
|-----------|-----------|-----------|
| 스타맵 줌인 | O | Shot #1 — crash zoom, 은하→성단→항성계 줌인 |
| 소멸한 항성계 시각화 | O | Shot #2 — 초신성 잔해, 가스 성운, 빈 궤도, 텅 빈 공간 |
| 문명의 마지막 송신 | O | 스토리/연출 의도에서 "별이 죽기 전에 노래를 우주에 실어 보냄" 서술, Voice에서 소멸 시기 보고 |
| @하은 눈물 | O | Shot #3 — 눈물 고임, 한 줄기 흘러내림, 앰버 빛 반사 |

### 2. 분량 검증

- Target Length: 25초
- 실제: 8s + 8s + 9s = 25초 (100%, 범위 내)

### 3. 톤앤매너 일관성

- Quiet grandeur 톤 유지 — 장엄하지만 고요한 감정 표현
- 최소 대사: 아리아 보고 음성만 사용, 하은은 침묵(눈물로 반응)
- 시각 언어 중심: 스타맵 줌인, 성운 시각화, 눈물 반사가 핵심 비주얼

### 4. 흐름 연결

- 이전 섹션(Section 4): 하은이 신호가 음악임을 발견(미드포인트) → Section 5는 그 음악의 기원을 역추적하는 자연스러운 후속
- 다음 섹션(Section 6): 하은이 헤드폰을 쓰고 노래에 몰입 → Section 5의 감정적 충격(눈물)이 Section 6의 능동적 듣기 선택으로 이어짐
- 색온도: Section 4에서 시작된 warm amber 전환이 스타맵의 적색/금빛 성운으로 가속

### 5. Film 전용 검증

- **6 Essential Elements**: 모든 프롬프트에 Camera, Subject, Environment, Lighting, Texture, Emotion 포함 확인
- **캐릭터 일관성**: 프롬프트 블록 내 `@하은` 형식 사용, 씬 정보/일반 텍스트에서는 "하은" 표기, English Visual Reference Prompt 및 Consistency Tags 반영
- **Shot Duration**: 8s + 8s + 9s = 25초, Design Target Length(25초)와 일치
- **총 시간 표기**: 씬 정보 테이블에 "25초 (8s + 8s + 9s)" 기재
- **Audio 동기화**: BGM 25s 전체, SFX 타이밍이 Shot 전환에 동기화, Voice Shot #1(0:00-0:03), Shot #2(0:08-0:16)
- **Negative Prompt**: 모든 샷에 포함 확인
- **템플릿 구조**: screenplay.template.md의 Shot 구조(I2V/T2V 포함) + sound-design.template.md의 BGM/SFX/Voice 테이블 준수
