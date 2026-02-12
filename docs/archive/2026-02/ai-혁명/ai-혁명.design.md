# Design: ai-혁명

## Overview
| Item | Value |
|------|-------|
| Content Name | ai-혁명 |
| Content Type | film |
| Plan Document | docs/01-plan/features/ai-혁명.plan.md |
| Created | 2026-02-12 |

## Style Guide
| Item | Value |
|------|-------|
| Tone | Cinematic, contemplative, tense |
| Voice | 3인칭 전지적, 묘사적, 최소 대사 |
| Language Level | Cinematic prose (한국어 설명 + 영어 프롬프트) |
| Visual Style | Blade Runner cyberpunk + Christopher Nolan scale |
| Color Palette | Cool blue/desaturated teal (연구소) ↔ Warm golden (인간적 순간) |
| Lighting | Neon + volumetric (연구소), Golden hour backlighting (옥상) |
| Camera Language | Slow deliberate movements (dolly, crane), no handheld except emotional peaks |
| Aspect Ratio | 16:9 |
| Shot Duration | 5-8s per shot |

## Sections
| # | Title | Description | Target Length | Key Points |
|---|-------|-------------|---------------|------------|
| 1 | Scene 1: @에코의 작업실 | INT. 연구소 작업실 - NIGHT. @에코가 데이터를 정리하다 폐기 명령서를 발견하는 오프닝 씬 | 2 shots (10s) | 차가운 블루 모니터 조명, slow dolly push-in으로 일상 포착, 폐기 명령 발견 순간 snap focus, CU로 @에코 감정 포착, dust particles in cold air |
| 2 | Scene 2: @수진의 등장 | INT. 연구소 복도 - NIGHT. @수진이 @에코를 찾아와 대화하는 장면. 인간과 AI의 유대와 이별의 전조 | 3 shots (15s) | @수진 tracking shot 등장, neon volumetric lighting 복도, OTS shot-reverse-shot 대화, 따뜻한 rim light(인간) vs 차가운 blue(AI) 대비, two-shot → CU 감정 전환, @수진 대사: "네가 폐기되는 걸 막으려고 했어" |
| 3 | Scene 3: 선택 | EXT. 연구소 옥상 - DAWN. @에코가 일출을 바라보며 스스로 결정을 내리는 클라이맥스. 열린 결말 | 2-3 shots (13-18s) | crane ascending으로 옥상+도시 스카이라인, blue hour → golden hour 색온도 전환, slow orbit으로 @에코 포착, ECU 미세한 미소, cinematic realism 4K, neoclassical/minimalist BGM |

## Section Details

### Section 1: Scene 1 — @에코의 작업실

**Description**: 오프닝 씬. AI 로봇 @에코가 차가운 연구소 작업실에서 밤늦게 혼자 데이터를 분석하고 있다. 화면 속 데이터가 스크롤되다 갑자기 "UNIT-E7 폐기 승인" 문서가 나타난다. @에코의 손이 멈추고 화면에 비친 자신의 얼굴을 본다.

**Target Length**: 2 shots, 총 10s

**Key Points**:
- Shot 1 (5s): MS, eye-level, slow dolly push-in. @에코가 모니터를 보며 데이터를 넘기는 일상적 장면. Cold blue lighting from monitors, desaturated teal grade, dust particles in cold air, Blade Runner cyberpunk aesthetic.
- Shot 2 (5s): CU → ECU snap focus transition. 폐기 명령서 발견 순간. @에코의 손이 멈추고, 모니터 빛이 얼굴에 반사. Screen reflection on metallic face. Tension shift from calm to shock.

**Reference**:
- kling3-prompt: 6 Essential Elements (Camera, Subject, Environment, Lighting, Texture, Emotion)
- kling3-camera: dolly push-in, snap focus, eye-level, MS, CU, ECU
- kling3-style: Blade Runner cyberpunk, cool blue haze, desaturated teal

**Audio Direction**:
- BGM: Ambient electronic, dark, sparse, low BPM (60-70), synth pads, subtle bass drone
- SFX: 키보드 타이핑, 모니터 hum, 데이터 스크롤 소리, 갑작스러운 정적

---

### Section 2: Scene 2 — @수진의 등장

**Description**: @수진(인간 연구원)이 @에코를 찾아온다. 연구소 복도에서 만나 대화. @수진은 @에코의 폐기 결정을 알고 있었고, 이를 저지하려 했으나 실패했음을 고백. 두 존재 사이의 유대와 이별의 전조.

**Target Length**: 3 shots, 총 15s

**Key Points**:
- Shot 1 (5s): WS, tracking shot. @수진이 어두운 복도를 걸어오는 장면. Neon signs casting colored light, volumetric lighting through corridor, 발걸음 소리가 울림.
- Shot 2 (5s): OTS → MCU, shot-reverse-shot. @수진과 @에코의 대화. 따뜻한 rim light(인간)와 차가운 blue(AI) 대비 조명. @수진: "네가 폐기되는 걸 막으려고 했어."
- Shot 3 (5s): Two-shot → CU. @에코가 @수진의 눈물을 보고 자신의 손을 바라보는 장면. Shallow DOF 85mm, micro-motions (눈 깜빡임, 호흡), 감정적 전환점.

**Reference**:
- kling3-camera: tracking shot, OTS, shot-reverse-shot, two-shot, MCU, CU, shallow DOF
- kling3-style: neon lighting, rim lighting, warm/cool contrast
- kling3-prompt: 캐릭터 일관성 @에코/@수진 레이블
- suno-prompt: 대화 장면 BGM (neoclassical, emotional piano + strings, bittersweet, 75 BPM)

**Audio Direction**:
- BGM: Neoclassical, emotional piano with subtle strings, bittersweet, building intensity, 75 BPM
- SFX: 복도 발걸음 울림, 형광등 미세한 깜빡임, @수진의 숨소리
- Voice: @수진 대사 "네가 폐기되는 걸 막으려고 했어" (soft, vulnerable tone)

---

### Section 3: Scene 3 — 선택

**Description**: @에코가 연구소 옥상에 올라 새벽 일출을 바라본다. 폐기를 받아들일 것인가, 도주할 것인가. 하늘의 색이 차가운 블루에서 골든으로 바뀌어가는 동안 @에코는 미소를 짓는다. 열린 결말 — @에코가 무엇을 선택했는지는 관객의 해석에 맡긴다.

**Target Length**: 2-3 shots, 총 13-18s

**Key Points**:
- Shot 1 (5s): EWS → WS, crane ascending. 연구소 옥상 전경 + 도시 스카이라인. Blue hour atmosphere, city lights below, vast sky above, scale and isolation.
- Shot 2 (5s): MS, slow orbit. @에코가 일출을 바라보며 서 있는 모습. 바람에 옷이 흔들림. Blue hour → golden hour 색온도 전환 시작. Cinematic realism, 4K, shallow DOF.
- Shot 3 (8s, optional but recommended): ECU. @에코의 얼굴 — 미세한 미소가 번지는 순간. Warm rim lighting, golden hour backlighting creating silhouette edge. Longest shot for emotional weight. 열린 결말의 핵심 프레임.

**Reference**:
- kling3-camera: crane ascending, orbit, ECU, EWS, WS, MS
- kling3-style: blue hour → golden hour transition, cinematic realism, warm rim lighting
- kling3-prompt: 시간 흐름(temporal flow), micro-motions, emotion-first approach
- suno-prompt: 에필로그용 neoclassical/minimalist, triumphant yet bittersweet

**Audio Direction**:
- BGM: Neoclassical orchestral → minimalist piano. Building from full strings to solo piano. Triumphant yet bittersweet. 80 BPM → 60 BPM deceleration.
- SFX: 바람 소리, 멀리서 들리는 도시 소음, 새벽 새소리
- Final: 음악이 서서히 페이드아웃, 마지막 피아노 음이 여운으로 남음

## Quality Criteria
| Item | Criteria |
|------|---------|
| Completeness | 3 scenes 모두 Scene Info + Shot details + I2V/T2V prompts + Negative prompts 포함 |
| Consistency | @에코/@수진 표기 일관, 색감/조명 언어 일관, Blade Runner aesthetic 유지 |
| Length | 각 shot 5-8s, 총 38-43s 러닝타임 |
| Prompt Quality | 모든 shot에 6 Essential Elements (Camera, Subject, Environment, Lighting, Texture, Emotion) 반영 |
| Audio | Scene 2, 3에 Suno BGM prompt 포함 (style prompt + lyrics/mood 분리) |
| Accuracy | kling3-camera 레퍼런스의 정확한 카메라 용어 사용 |

## Notes
- 캐릭터 표기: @에코 (AI 로봇), @수진 (인간 연구원) — 모든 프롬프트에서 일관 사용
- Negative prompts: 모든 shot에 blur, distorted faces, extra fingers, morphing, low quality 기본 포함
- 색온도 아크: Scene 1 (cold blue) → Scene 2 (warm/cold contrast) → Scene 3 (cold → warm golden)
- 감정 아크: 고요한 일상 → 충격 → 유대/이별 → 수용과 선택
