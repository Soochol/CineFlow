---
name: suno-prompt
description: |
  Suno AI 프롬프트 레퍼런스. Core Formula, 6-Component Formula,
  Custom Mode 구조, 프롬프트 작성 원칙, 고급 테크닉, Weak vs Strong,
  장르별 실전 예시(EN+KO), Pre-Generation Checklist를 제공한다.
user-invocable: false
---

# Suno AI Prompt Reference

> Core Formula + Custom Mode + 작성 원칙 + 고급 테크닉 + 장르별 예시 + 체크리스트

## Core Formula

모든 Suno 프롬프트에 다음 4요소를 반영한다:

```
[Genre + Era] + [Mood/Emotion] + [Key Instruments] + [Vocal Style]
```

- **최적 디스크립터 수: 4-7개** (너무 적으면 generic, 너무 많으면 AI 혼란)
- "Create a..." 같은 명령어 없이 직접 묘사한다

## Six-Component Formula

일관된 결과를 위한 6요소 공식:

```
Genre + Tempo-Feel + Instrumentation + Vocal Intent + Mix Intent + Mood Axis
```

| 요소 | 역할 | 예시 |
|------|------|------|
| Genre | 장르+서브장르+시대 | "80s synth-pop" |
| Tempo-Feel | 빠르기+그루브 | "120 BPM, driving rhythm" |
| Instrumentation | 주요 악기 2-3개 | "analog synths, drum machine" |
| Vocal Intent | 보컬 스타일/유무 | "breathy female vocals" |
| Mix Intent | 프로덕션 스타일 | "polished, radio-ready" |
| Mood Axis | 감정 축 | "nostalgic yet energizing" |

---

## Custom Mode 구조

Suno Custom Mode에서 Style Prompt와 Lyrics를 분리한다.

### Style Prompt (사운드)

음악적 요소만 기술:

```
[장르] + [무드] + [템포] + [주요 악기] + [프로덕션 스타일] + [보컬 스타일]
```

**예시:** `80s synth-pop, nostalgic and energetic, 120 BPM, analog synths with drum machine, polished production, breathy female vocals`

### Lyrics Prompt (가사 + 구조)

가사 텍스트 + 메타태그:

```
[Intro]
(instrumental, 4 bars)

[Verse 1]
Walking through the neon lights
Every shadow tells a story tonight

[Pre-Chorus]
Can you feel the rhythm in the air

[Chorus]
Dancing under electric skies
We come alive when the sun goes down
```

### 분리 원칙

| Field | 담당 | 포함하지 않는 것 |
|-------|------|----------------|
| Style Prompt | 장르, 무드, 악기, 보컬, 프로덕션 | 가사, 구조 태그 |
| Lyrics | 가사 텍스트, 구조 태그, 퍼포먼스 큐 | 장르, 악기 설명 |

---

## Prompt Structure Rules

### 7가지 핵심 원칙

1. **묘사하라, 명령하지 마라**
   - "Create a chill song" (X) → "chill lo-fi beat, mellow piano, vinyl crackle" (O)
   - Suno는 묘사(description)에 더 잘 반응

2. **시대/연대로 음색을 정밀 제어하라**
   - "synth-pop" (모호) → "80s synth-pop" (정밀)
   - 10년 단위 차이가 극적으로 다른 결과를 생성

3. **감정으로 묘사하라 (음악 이론 아닌)**
   - "C major, 4/4 time" (X) → "upbeat, nostalgic 80s vibe, driving rhythm" (O)
   - Suno는 감정과 분위기에 더 잘 반응

4. **4-7개 디스크립터가 Sweet Spot**
   - 3개 이하: generic, 방향성 부족
   - 8개 이상: AI 혼란, 일관성 저하
   - 4-7개: 최적의 구체성+유연성 균형

5. **Sandwich Method — 중요 요소를 처음과 끝에 배치**
   - Suno는 프롬프트의 처음과 끝 위치에 가중치 부여
   - `Synthwave, analog synths, drum machine, neon aesthetic, 1985, synthwave`

6. **한 프롬프트에 한 가지 핵심 방향**
   - 모순 지시 금지: "calm aggressive metal" (X)
   - 동적 대비 사용: "heavy with melodic interludes" (O)

7. **반복 생성을 계획하라**
   - 첫 시도 완벽은 비현실적
   - 6회 이상 재생성 후 판단
   - 15-30초 프리뷰로 먼저 테스트

---

## Advanced Techniques

### Layered Prompting

복잡한 아이디어를 레이어로 분해:

```
[Mood] + [Genre] + [Lead Instrument] + [Supporting Instruments] + [Tempo] + [Production Style]
```

**예시:** `melancholic, indie folk, acoustic guitar lead, strings and piano supporting, slow 70 BPM, raw intimate production`

### Sandwich Method

중요 요소를 처음과 끝에 반복 배치:

```
Synthwave, analog synths, drum machine, neon aesthetic, nostalgic, 1985 production, synthwave
```

### Negative Prompting

피해야 할 요소를 명시:

| 목적 | Negative Prompt |
|------|----------------|
| 보컬 제거 | "No vocals" / "Instrumental only" |
| 오토튠 방지 | "Avoid autotune" / "No autotune" |
| 어쿠스틱 제외 | "No acoustic instruments" |
| 모던 방지 | "Avoid modern production" |
| 페이드 방지 | "No fade in/out" |
| 디스토션 방지 | "Avoid distorted guitars" |

### Reference Stacking

여러 영향을 조합하여 정밀하게 타겟팅:

```
Daft Punk's filtered disco + Kavinsky's darkness + The Midnight's emotional synths
```

### Section-Specific Styling

곡의 다른 섹션에 다른 스타일을 적용:

```
[Verse 1: soft, minimal, acoustic]
[Chorus: full band, powerful, anthemic]
[Bridge: stripped back, piano only, intimate]
```

### Emotional Arc

곡 전체에 감정적 여정을 묘사:

```
Starting with gentle piano, building through layers of strings,
crescendoing into a powerful full orchestra climax,
then fading to a single violin for the outro
```

---

## Lyrics Tips

### 작성 규칙

1. **8-12줄 이하 유지** — 긴 가사는 타이밍 에러 유발
2. **5th-grade reading level** — 간단한 문장이 보컬 명확도 향상
3. **코러스 먼저 테스트** → 버스 추가 → 전체 조합
4. **짧은 섹션으로 분할** — 한 번에 전체보다 파트별 테스트
5. **대문자 = 강조** — Suno가 CAPS를 강조로 인식

### 구조 예시

```
[Intro]
(4 bars, instrumental)

[Verse 1]
(4-8줄, 스토리텔링)

[Pre-Chorus]
(2-4줄, 빌드업)

[Chorus]
(4-6줄, 메인 훅, 캐치)

[Verse 2]
(4-8줄, 스토리 전개)

[Chorus]

[Bridge]
(2-4줄, 대비/전환)

[Final Chorus]
(강화된 코러스)

[Outro]
(페이드 또는 마무리)
```

---

## Weak vs Strong

| 요소 | 약한 프롬프트 | 강한 프롬프트 |
|------|-------------|-------------|
| Genre | "sad song" | "melancholic piano ballad, slow tempo, introspective female vocals" |
| Mood | "upbeat music" | "groovy funk beat with slap bass, electric piano, bright percussion" |
| Specificity | "rock song" | "90s grunge, distorted guitars, raw angst, lo-fi production, raspy male vocals" |
| Contradiction | "calm aggressive metal" | "heavy with melodic interludes, dynamic contrast between crushing riffs and gentle arpeggios" |
| Vagueness | "electronic music" | "deep house, emotional melodic synths, hypnotic rhythms, warm basslines, 122 BPM" |
| Production | "nice sounding" | "warm analog production, tape-saturated, vinyl texture, intimate studio feel" |
| Vocal | "good singer" | "soulful female vocals, breathy tone, subtle vibrato, R&B influenced" |
| Era | "retro" | "1985 synthwave, analog Juno-106 synths, gated reverb drums, neon aesthetic" |

---

## 장르별 프롬프트 예시

### Pop

**EN:** 2020s pop with catchy hooks, female vocals, bright synths, danceable summer vibes, polished production, 118 BPM

**KO:** 2020년대 팝, 캐치한 훅, 여성 보컬, 밝은 신스, 여름 댄서블 바이브, 폴리시드 프로덕션, 118 BPM

---

**EN:** Dark pop, moody atmosphere, breathy female vocals, minimal production, haunting melodies, slow 85 BPM

**KO:** 다크 팝, 무디한 분위기, 숨결 섞인 여성 보컬, 미니멀 프로덕션, 으스스한 멜로디, 느린 85 BPM

---

**EN:** K-pop, energetic mixed group vocals, dance break, polished production, catchy chorus hook, 128 BPM

**KO:** K-팝, 에너제틱 혼성 그룹 보컬, 댄스 브레이크, 폴리시드 프로덕션, 캐치한 코러스 훅, 128 BPM

### Rock

**EN:** Classic 1970s arena rock, powerful guitar riffs, raspy male vocals, soaring guitar solo, anthemic chorus, driving drums

**KO:** 클래식 70년대 아레나 록, 파워풀한 기타 리프, 허스키한 남성 보컬, 솔링 기타 솔로, 앤써믹 코러스, 드라이빙 드럼

---

**EN:** 90s grunge, Seattle aesthetic, distorted guitars, raw angst, lo-fi production, gritty male vocals, 95 BPM

**KO:** 90년대 그런지, 시애틀 에스테틱, 디스토션 기타, 날것의 앵스트, 로파이 프로덕션, 그리티한 남성 보컬, 95 BPM

### Hip-Hop

**EN:** Boom bap, old school, jazz samples, storytelling flow, 1990s New York, scratching, confident male vocals, 92 BPM

**KO:** 붐뱁, 올드스쿨, 재즈 샘플, 스토리텔링 플로우, 90년대 뉴욕, 스크래칭, 자신감 있는 남성 보컬, 92 BPM

---

**EN:** Trap, heavy 808s, hi-hat trills, dark atmospheric production, confident male vocals, 140 BPM

**KO:** 트랩, 헤비 808, 하이햇 트릴, 다크 애트머스페릭 프로덕션, 자신감 있는 남성 보컬, 140 BPM

---

**EN:** Lo-fi hip-hop, vinyl crackle, mellow beats, jazz piano, instrumental, chill vibes, study music, 80 BPM

**KO:** 로파이 힙합, 바이닐 크래클, 멜로우 비트, 재즈 피아노, 인스트루멘탈, 칠 바이브, 공부 음악, 80 BPM

### Electronic / EDM

**EN:** Deep house, emotional melodic synths, hypnotic rhythms, warm basslines, female vocal chops, 122 BPM

**KO:** 딥 하우스, 감성적 멜로디 신스, 최면적 리듬, 웜 베이스라인, 여성 보컬 챕, 122 BPM

---

**EN:** Synthwave, 1980s retrofuturism, analog synths, neon aesthetic, driving arpeggios, drum machine, nostalgic, 110 BPM

**KO:** 신스웨이브, 80년대 레트로퓨처리즘, 아날로그 신스, 네온 에스테틱, 드라이빙 아르페지오, 드럼머신, 노스탤직, 110 BPM

---

**EN:** Techno, dark industrial sound, pounding kick drums, minimal Berlin club vibe, hypnotic, 130 BPM

**KO:** 테크노, 다크 인더스트리얼 사운드, 파운딩 킥 드럼, 미니멀 베를린 클럽 바이브, 최면적, 130 BPM

---

**EN:** Drum and bass, fast breaks, heavy sub-bass, liquid melodic, energetic, 174 BPM

**KO:** 드럼앤베이스, 빠른 브레이크, 헤비 서브베이스, 리퀴드 멜로딕, 에너제틱, 174 BPM

### Jazz

**EN:** Smooth jazz, mellow saxophone lead, gentle piano accompaniment, mellow double bass, relaxed groove, late night, 95 BPM

**KO:** 스무스 재즈, 멜로우 색소폰 리드, 젠틀 피아노 반주, 멜로우 더블 베이스, 릴렉스드 그루브, 레이트 나이트, 95 BPM

---

**EN:** Bossa nova, Brazilian rhythm, nylon guitar, warm bass, intimate 1960s elegance, soft female vocals, 110 BPM

**KO:** 보사노바, 브라질 리듬, 나일론 기타, 웜 베이스, 인티밋한 60년대 엘레강스, 소프트 여성 보컬, 110 BPM

### Classical / Cinematic

**EN:** Cinematic orchestral, full symphony, triumphant crescendo, film score quality, epic brass and strings, 100 BPM

**KO:** 시네마틱 오케스트라, 풀 심포니, 트라이엄펀트 크레셴도, 영화 스코어 퀄리티, 에픽 브라스와 스트링, 100 BPM

---

**EN:** Minimalist classical, repetitive piano patterns, slowly evolving, meditative modern sound, intimate, 60 BPM

**KO:** 미니멀리스트 클래식, 반복적 피아노 패턴, 천천히 진화하는, 명상적 모던 사운드, 인티밋, 60 BPM

---

**EN:** Neoclassical, emotional piano and strings, contemporary cinematic ambient, bittersweet, 75 BPM

**KO:** 네오클래식, 감성적 피아노와 스트링, 컨템포러리 시네마틱 앰비언트, 비터스윗, 75 BPM

### Lo-Fi

**EN:** Classic lo-fi hip-hop, vinyl crackle, dusty samples, mellow beat, study music, jazzy piano, 78 BPM

**KO:** 클래식 로파이 힙합, 바이닐 크래클, 더스티 샘플, 멜로우 비트, 공부 음악, 재지 피아노, 78 BPM

---

**EN:** Lo-fi bedroom pop, hazy vocals, warped synths, intimate production, dreamy, tape-saturated, 90 BPM

**KO:** 로파이 베드룸 팝, 헤이지 보컬, 워프드 신스, 인티밋 프로덕션, 드리미, 테이프 새츄레이티드, 90 BPM

### R&B / Soul

**EN:** Modern R&B, smooth production, male falsetto, minimalist beats, sensual atmosphere, 88 BPM

**KO:** 모던 R&B, 스무스 프로덕션, 남성 팔세토, 미니멀리스트 비트, 센슈얼 분위기, 88 BPM

---

**EN:** Neo-soul, live instruments, warm bass, conscious lyrics, organic production, female vocals, 95 BPM

**KO:** 네오소울, 라이브 악기, 웜 베이스, 콘셔스 가사, 오가닉 프로덕션, 여성 보컬, 95 BPM

### Metal

**EN:** Heavy metal, powerful guitar riffs, soaring male vocals, epic guitar solos, 1980s influence, driving double bass drums, 140 BPM

**KO:** 헤비 메탈, 파워풀 기타 리프, 솔링 남성 보컬, 에픽 기타 솔로, 80년대 영향, 드라이빙 더블 베이스 드럼, 140 BPM

---

**EN:** Doom metal, slow heavy crushing riffs, dark atmosphere, despair, growling vocals, tuned low, 60 BPM

**KO:** 둠 메탈, 슬로우 헤비 크러싱 리프, 다크 분위기, 절망, 그로울링 보컬, 로우 튜닝, 60 BPM

### Country

**EN:** Modern country, polished male vocals, acoustic guitar, steel guitar, storytelling lyrics, warm production, 105 BPM

**KO:** 모던 컨트리, 폴리시드 남성 보컬, 어쿠스틱 기타, 스틸 기타, 스토리텔링 가사, 웜 프로덕션, 105 BPM

---

**EN:** Bluegrass, acoustic instruments, fast picking, harmonized vocals, Appalachian style, banjo and fiddle, 140 BPM

**KO:** 블루그래스, 어쿠스틱 악기, 빠른 피킹, 하모나이즈드 보컬, 애팔래치안 스타일, 밴조와 피들, 140 BPM

### World / Latin

**EN:** Reggaeton, urban Latin vibes, dembow rhythm, 808 bass, Spanish vocals, party energy, 95 BPM

**KO:** 레게톤, 어반 라틴 바이브, 뎀보 리듬, 808 베이스, 스패니쉬 보컬, 파티 에너지, 95 BPM

---

**EN:** Afrobeat, West African rhythms, horn section, funky guitar, polyrhythmic percussion, energetic, 110 BPM

**KO:** 아프로비트, 서아프리카 리듬, 혼 섹션, 펑키 기타, 폴리리드믹 퍼커션, 에너제틱, 110 BPM

### Ambient / Experimental

**EN:** Dark ambient, deep drones, atmospheric textures, no vocals, cinematic tension, sparse, evolving, 60 BPM

**KO:** 다크 앰비언트, 딥 드론, 앳머스페릭 텍스처, 보컬 없음, 시네마틱 텐션, 스파스, 이볼빙, 60 BPM

---

**EN:** Vaporwave, slowed 80s samples, heavy reverb, surreal nostalgia, lo-fi aesthetic, chopped and screwed, 75 BPM

**KO:** 베이퍼웨이브, 슬로우드 80년대 샘플, 헤비 리버브, 초현실적 노스탤지어, 로파이 에스테틱, 찹드 앤 스크루드, 75 BPM

---

## 장르 조합 추천

씬의 감정과 맥락에 따라 자유롭게 조합한다. 아래는 자주 쓰이는 패턴이다.

| 목적 | 장르 조합 |
|------|-----------|
| 긴장감 있는 장면 | Dark ambient + Cinematic orchestral |
| 액션 장면 | Trap + EDM + Epic orchestral |
| 로맨틱 장면 | Bossa nova / Neo-soul / Dream pop |
| 회상 장면 | Lo-fi hip-hop / Vaporwave / Chillwave |
| 미래/SF | Synthwave / Cyberpunk ambient / IDM |
| 코미디 장면 | Electro swing / Bubblegum pop / Funk |
| 호러 장면 | Dark ambient + Industrial + Dissonant strings |
| 에필로그 | Neoclassical / Minimalist classical / Acoustic |

---

## Pre-Generation Checklist

생성 전 다음을 확인:

- [ ] 장르가 명시되었는가 (시대/서브장르 포함)
- [ ] 무드/감정이 구체적인가 (1-2개 키워드)
- [ ] 주요 악기가 2-3개 지정되었는가
- [ ] 보컬 스타일이 정의되었는가 (또는 "Instrumental only")
- [ ] 디스크립터가 4-7개 범위인가
- [ ] 템포(BPM)가 명시되었는가
- [ ] Custom Mode에서 Style과 Lyrics가 분리되었는가
- [ ] 모순된 지시가 없는가
- [ ] 중요 요소가 처음과 끝에 배치되었는가 (Sandwich)
- [ ] Lyrics가 8-12줄 이하인가

## Post-Generation Checklist

생성 후 다음을 검증:

- [ ] 결과물의 장르/무드가 프롬프트 의도와 일치하는가
- [ ] 악기 구성이 지정한 대로 반영되었는가
- [ ] 보컬 스타일이 기대와 맞는가 (불일치 시 재생성)
- [ ] 곡 구조([Verse]/[Chorus]/[Bridge])가 의도대로 구성되었는가
- [ ] 템포/에너지 레벨이 영상 씬의 감정과 동기화되는가
- [ ] 곡 길이가 영상 Duration과 매칭되는가
- [ ] 영상 타이밍에 맞는 빌드업/드롭 포인트가 있는가
- [ ] Style Prompt와 Lyrics가 혼재되지 않았는가

---

## Common Mistakes

| 문제 | 원인 | 해결 |
|------|------|------|
| 결과가 너무 generic | 디스크립터 부족 (3개 이하) | 4-7개로 구체화, 시대+서브장르 추가 |
| AI가 혼란스러운 결과 | 디스크립터 과다 (8개+) | 핵심 4-7개로 축소 |
| 의도와 다른 무드 | 모순 용어 | 동적 대비 표현으로 수정 |
| 구조가 엉망 | Lyrics 필드 미활용 | 메타태그로 구조 명시 |
| 보컬이 기대와 다름 | 보컬 태그 불안정성 | 6회 이상 재생성, 구체적 스타일 명시 |
| 코러스가 너무 지배적 | 섹션 라벨 미지정 | 명확한 [Verse]/[Chorus] 구분 |
| 타이밍 에러 | 가사가 너무 긺 | 8-12줄 이하로 축소 |
| 첫 시도 실패 | 기대치 문제 | 6+ 재생성 → 15-30초 프리뷰 테스트 |

## Notes

- 프롬프트 길이: 4-7개 디스크립터가 최적 (너무 적으면 generic, 너무 많으면 AI 혼란)
- Sandwich Method로 중요 요소를 처음과 끝에 배치
- Custom Mode에서 Style Prompt와 Lyrics를 반드시 분리
- 보컬 태그는 불안정하므로 6회 이상 재생성을 계획
- 15-30초 프리뷰로 먼저 테스트 후 전체 생성

## Related Skills

- `suno-domain` — Suno AI 전체 태그 분류 (Structure, Vocal, Instrument, Genre, Mood, Production, SFX)
