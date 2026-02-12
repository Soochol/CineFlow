---
name: suno-domain
description: |
  Suno AI 도메인 레퍼런스. Structure Tags(18종), Vocal Tags(25종+),
  Instrument Tags(60종+), Genre Tags(100종+), Mood/Energy, Production,
  Sound Effect Tags의 전체 분류와 영어 표현을 제공한다.
user-invocable: false
---

# Suno AI Domain Reference

> Structure + Vocal + Instrument + Genre + Mood + Production + SFX — 전체 태그 분류

## Structure Tags (18종)

곡의 구조를 정의하는 태그. Lyrics 필드에 `[태그]` 형식으로 삽입한다.

### Primary Structure

| 태그 | 영어 | 용도 |
|------|------|------|
| 인트로 | `[Intro]` | 도입부, 악기 연주로 시작 |
| 벌스 | `[Verse]` | 주요 스토리텔링 섹션 |
| 프리코러스 | `[Pre-Chorus]` | 코러스 전 빌드업 |
| 코러스 | `[Chorus]` | 메인 훅, 가장 기억에 남는 부분 |
| 포스트코러스 | `[Post-Chorus]` | 코러스 여운/확장 |
| 브릿지 | `[Bridge]` | 대비되는 중간 섹션, 무드 전환 |
| 아웃트로 | `[Outro]` | 마무리 섹션 |
| 훅 | `[Hook]` | 캐치한 멜로디/프레이즈 |

### Dynamic Structure

| 태그 | 영어 | 용도 |
|------|------|------|
| 브레이크 | `[Break]` | 미니멀 편곡, 텐션 다운 |
| 드롭 | `[Drop]` | 고에너지 해방 (EDM) |
| 빌드업 | `[Buildup]` | 텐션 증가 |
| 페이드아웃 | `[Fade Out]` | 점진적 볼륨 감소 |
| 페이드인 | `[Fade In]` | 점진적 볼륨 증가 |
| 인스트루멘탈 | `[Instrumental]` | 보컬 없는 연주 구간 |
| 인터루드 | `[Interlude]` | 짧은 음악적 삽입 |
| 솔로 | `[Solo]` | 특정 악기 스포트라이트 |
| 파이널 코러스 | `[Final Chorus]` | 마지막 코러스 (강화된 버전) |

### 커스텀 변형

- `[Verse 1]`, `[Verse 2]` — 넘버링으로 구분
- `[Chorus x2]` — 반복 횟수 지정
- `[Callback: Chorus melody]` — v4.5+ 콜백 프레이징

---

## Vocal Tags (25종+)

### Gender / Character

| 태그 | 용도 |
|------|------|
| `[Male Vocal]` | 남성 보컬 |
| `[Female Vocal]` | 여성 보컬 |
| `[Male Vocalist]` | 남성 보컬리스트 (동의어) |
| `[Female Vocalist]` | 여성 보컬리스트 (동의어) |
| `[Duet]` | 듀엣 |
| `[Choir]` | 합창 |
| `[Boy]` / `[Girl]` | 소년/소녀 보컬 |
| `[Man]` / `[Woman]` | 성인 남/녀 보컬 |

### Vocal Style

| 태그 | 영어 | 효과 |
|------|------|------|
| 위스퍼 | `[Whisper]` | 친밀한, 조용한 전달 |
| 스포큰워드 | `[Spoken Word]` | 말하기, 노래 아닌 방식 |
| 랩 | `[Rap]` | 힙합 보컬 스타일 |
| 하모니 | `[Harmonies]` | 다중 보컬 레이어 |
| 팔세토 | `[Falsetto]` | 높은 가성 |
| 벨팅 | `[Belting]` | 파워풀한 풀보이스 |
| 그로울 | `[Growl]` | 공격적 메탈 스타일 |
| 크루닝 | `[Crooning]` | 부드럽고 감미로운 |
| 오페라틱 | `[Operatic]` | 클래식 성악 기법 |
| 스캣 | `[Scat]` | 재즈 보컬 임프로비제이션 |
| 멜리스마 | `[Vocal Style: Melismatic]` | 복잡한 보컬 런 |
| 모노톤 | `[Vocal Style: Monotone]` | 실험적 단조로운 보컬 |

### Vocal Effects

| 태그 | 효과 |
|------|------|
| `[Reverb]` | 공간감 리버브 |
| `[Delay]` | 에코/딜레이 |
| `[AutoTune]` | 오토튠 보정 |
| `[No AutoTune]` | 오토튠 없는 자연 보컬 |
| `[Distorted Vocals]` | 디스토션 보컬 |
| `[Filtered Vocals]` | 필터드 보컬 |
| `[Vocoder]` | 보코더 효과 |
| `[Telephone Effect]` | 전화 통화 같은 필터 |

### Vocal Emotion

| 태그 | 영어 | 감정 |
|------|------|------|
| `[Vulnerable]` | 취약한 | 약함, 진솔함 |
| `[Powerful]` | 파워풀한 | 강함, 확신 |
| `[Soft]` | 부드러운 | 차분함, 온화함 |
| `[Aggressive]` | 공격적인 | 강렬함, 분노 |
| `[Melancholic]` | 우울한 | 슬픔, 그리움 |
| `[Joyful]` | 기쁜 | 행복, 축하 |
| `[Sultry]` | 관능적인 | 매혹적, 성숙한 |
| `[Defiant]` | 도전적인 | 반항, 저항 |

### Vocal Dynamics

| 태그 | 효과 |
|------|------|
| `[Soft-spoken]` | 조용하고 부드러운 전달 |
| `[Shouted]` | 크고 강렬한 |
| `[Building intensity]` | 점진적으로 강해짐 |
| `[Fading vocals]` | 점차 조용해짐 |
| `[Harmonized]` | 다중 보컬 하모니 |

---

## Instrument Tags (60종+)

### Keyboard

| 악기 | 태그 | 특징 |
|------|------|------|
| 피아노 | `[Piano]` | 범용, 클래식/팝 |
| 일렉트릭 피아노 | `[Electric Piano]` | 재즈, R&B |
| 로즈 | `[Rhodes]` | 따뜻한 일렉 피아노 |
| 뷔를리처 | `[Wurlitzer]` | 빈티지 일렉 피아노 |
| 오르간 | `[Organ]` | 교회/록 오르간 |
| 해먼드 오르간 | `[Hammond Organ]` | 클래식 록/소울 |
| 신스 | `[Synth]` | 범용 신디사이저 |
| 아날로그 신스 | `[Analog Synth]` | 따뜻한 아날로그 톤 |
| 무그 신스 | `[Moog Synth]` | 클래식 아날로그 |
| 신스 패드 | `[Synth Pad]` | 배경 텍스처 |
| 하프시코드 | `[Harpsichord]` | 바로크 |
| 클라비넷 | `[Clavinet]` | 펑크, 디스코 |

### Strings

| 악기 | 태그 | 특징 |
|------|------|------|
| 어쿠스틱 기타 | `[Acoustic Guitar]` | 포크, 컨트리, 팝 |
| 일렉트릭 기타 | `[Electric Guitar]` | 록, 블루스 |
| 디스토션 기타 | `[Distorted Guitar]` | 하드록, 메탈 |
| 기타 솔로 | `[Guitar Solo]` | 리드 기타 |
| 베이스 기타 | `[Bass Guitar]` | 리듬 섹션 |
| 슬랩 베이스 | `[Slap Bass]` | 펑크, 디스코 |
| 업라이트 베이스 | `[Upright Bass]` | 재즈, 클래식 |
| 바이올린 | `[Violin]` | 클래식, 영화 |
| 스트링스 | `[Strings]` | 오케스트라 현악 |
| 스트링 쿼텟 | `[String Quartet]` | 실내악 |
| 첼로 | `[Cello]` | 깊은 현악 |
| 하프 | `[Harp]` | 몽환적, 우아한 |
| 우쿨렐레 | `[Ukulele]` | 밝은, 하와이안 |
| 밴조 | `[Banjo]` | 블루그래스, 컨트리 |
| 만돌린 | `[Mandolin]` | 포크, 셀틱 |
| 시타르 | `[Sitar]` | 인도, 사이키델릭 |

### Drums & Percussion

| 악기 | 태그 | 특징 |
|------|------|------|
| 드럼 | `[Drums]` | 범용 |
| 어쿠스틱 드럼 | `[Acoustic Drums]` | 실제 드럼 |
| 일렉 드럼 | `[Electronic Drums]` | 전자 드럼 |
| 808 | `[808s]` / `[808 Bass]` | 트랩, 힙합 |
| 드럼머신 | `[Drum Machine]` | 전자음악 |
| TR-909 | `[TR-909]` | 하우스, 테크노 |
| 브레이크비트 | `[Breakbeat]` | DnB, 브레이크스 |
| 브러시 드럼 | `[Brush Drums]` | 재즈 |
| 퍼커션 | `[Percussion]` | 타악기 범용 |
| 타이코 | `[Taiko Drums]` | 일본 전통 |
| 콩가 | `[Congas]` | 라틴 |
| 봉고 | `[Bongos]` | 라틴, 재즈 |
| 탬버린 | `[Tambourine]` | 팝, 록 |
| 핸드클랩 | `[Handclaps]` | 리듬 악센트 |

### Wind & Brass

| 악기 | 태그 | 특징 |
|------|------|------|
| 색소폰 | `[Saxophone]` | 재즈, R&B |
| 테너색스 | `[Tenor Sax]` | 깊은 재즈 |
| 알토색스 | `[Alto Sax]` | 밝은 재즈 |
| 트럼펫 | `[Trumpet]` | 재즈, 라틴 |
| 트롬본 | `[Trombone]` | 빅밴드, 재즈 |
| 프렌치 호른 | `[French Horn]` | 오케스트라 |
| 브라스 섹션 | `[Brass Section]` | 혼 섹션 전체 |
| 플루트 | `[Flute]` | 클래식, 뉴에이지 |
| 클라리넷 | `[Clarinet]` | 재즈, 클래식 |
| 하모니카 | `[Harmonica]` | 블루스, 포크 |
| 아코디언 | `[Accordion]` | 프랑스, 탱고 |

### Electronic & Synth

| 태그 | 특징 |
|------|------|
| `[Synth Bass]` | 일렉트로닉 베이스 |
| `[Arpeggiated Synth]` | 아르페지오 패턴 |
| `[Lead Synth]` | 리드 멜로디 신스 |
| `[Synth Stabs]` | 짧은 신스 히트 |
| `[Pad]` | 배경 텍스처 패드 |
| `[Pluck Synth]` | 플럭 사운드 |
| `[Acid Bass]` | TB-303 산성 베이스 |
| `[Supersaw]` | 두꺼운 트랜스/EDM 리드 |
| `[Wobbly Bass]` | 더브스텝 워블 |
| `[Glitch]` | 글리치 이펙트 |

### Orchestral & Cinematic

| 태그 | 특징 |
|------|------|
| `[Orchestra]` / `[Full Orchestra]` | 풀 오케스트라 |
| `[Chamber Orchestra]` | 실내 오케스트라 |
| `[Orchestral Strings]` | 오케스트라 현악 |
| `[Brass Stabs]` | 브라스 스탭 |
| `[Timpani]` | 팀파니 |
| `[Choir Vocals]` | 합창단 보컬 |
| `[Cinematic Percussion]` | 영화적 퍼커션 |

---

## Genre Tags (100종+)

### Electronic / Dance

| 장르 | 특징 | 대표 악기/사운드 |
|------|------|-----------------|
| EDM | 하이에너지 댄스 | Synth, Drums, Drop |
| House | 4-on-the-floor, 120-130BPM | Kick, Hi-hat, Bass |
| Deep House | 감성적 멜로디, 따뜻한 베이스 | Synth Pad, Bass |
| Tech House | 미니멀, 그루비 | Drum Machine, Synth |
| Techno | 다크, 인더스트리얼 | Kick, Synth, Minimal |
| Trance | 유포릭, 빌드업→드롭 | Arpeggiated Synth, Pad |
| Dubstep | 헤비 서브베이스, 워블 | Wobbly Bass, 808 |
| Drum and Bass | 빠른 브레이크, 170BPM+ | Breakbeat, Sub-bass |
| Ambient | 분위기, 배경 텍스처 | Pad, Reverb, Drone |
| Synthwave | 80년대 레트로퓨처리즘 | Analog Synth, Arpeggio |
| Retrowave | 신스웨이브 변형, 네온 | Synth, Drum Machine |
| Chillwave | 몽환적, 로파이 전자음 | Reverb, Lo-fi Synth |
| Future Bass | 밝은, 멜로디 베이스 | Supersaw, Vocal Chops |
| Trap (EDM) | 808, 하이햇 트릴 | 808 Bass, Hi-hat |
| Electro | 기계적, 로봇틱 | Synth, Drum Machine |
| Industrial | 노이지, 공격적 | Distortion, Percussion |
| IDM | 실험적 전자음악 | Glitch, Synth |
| Downtempo | 느린, 분위기 있는 | Pad, Mellow Beat |
| Chillstep | 칠아웃 더브스텝 | Soft Bass, Pad |
| Hardstyle | 150BPM+, 하드킥 | Hard Kick, Synth |

### Hip-Hop / R&B

| 장르 | 특징 |
|------|------|
| Hip Hop | 범용 힙합 |
| Boom Bap | 올드스쿨, 재즈 샘플, 90년대 뉴욕 |
| Trap | 헤비 808, 하이햇, 다크 |
| Atlanta Rap | 서던 트랩, 바운시 |
| Lo-fi Hip Hop | 바이닐 크래클, 재즈 피아노, 칠 |
| Cloud Rap | 에테리얼, 오토튠, 스페이시 |
| R&B | 스무스, 감성적 |
| Neo-Soul | 라이브 악기, 오가닉 |
| Soul | 클래식 소울 |
| Funk | 그루비, 슬랩 베이스 |
| Contemporary R&B | 모던 프로덕션, 미니멀 비트 |

### Rock / Alternative

| 장르 | 특징 |
|------|------|
| Classic Rock | 70년대, 기타 리프, 아레나 |
| Indie Rock | 인디, 로파이, 개러지 |
| Alternative Rock | 얼터너티브, 90년대 |
| Pop Rock | 팝+록 하이브리드 |
| Hard Rock | 하드, 디스토션, 파워풀 |
| Punk Rock | 빠르고, 날것, 에너지 |
| Post-Punk | 다크, 아트 록 |
| Grunge | 시애틀, 디스토션, 앵스트 |
| Metal | 헤비, 강렬한 |
| Heavy Metal | 파워 리프, 솔링 보컬 |
| Progressive Rock | 복잡, 오케스트라, 서사적 |
| Psychedelic Rock | 트리피, 실험적, 60년대 |
| Garage Rock | 로파이, 날것의 에너지 |
| Blues Rock | 블루스+록 |
| Southern Rock | 서던, 기타 중심 |
| Shoegaze | 노이즈, 리버브, 드리미 |
| Emo | 감성적, 고백적 |
| Post-Hardcore | 하드코어+멜로디 |

### Pop

| 장르 | 특징 |
|------|------|
| Pop | 범용 팝 |
| Synth Pop | 신디사이저 기반 팝 |
| Electropop | 일렉트로닉+팝 |
| Indie Pop | 인디, 드리미, 소프트 |
| Dream Pop | 몽환적, 리버브, 에테리얼 |
| Bedroom Pop | 헤이지, 인티밋, 로파이 |
| Art Pop | 실험적, 아트 |
| Dance Pop | 댄서블, 클럽 레디 |
| K-Pop | 한국 팝, 에너제틱, 폴리시드 |
| J-Pop | 일본 팝 |
| City Pop | 80년대 일본, 펑키, 노스탤직 |
| Bubblegum Pop | 밝은, 캐치한, 10대 |

### Country / Folk

| 장르 | 특징 |
|------|------|
| Country | 범용 컨트리 |
| Modern Country | 폴리시드, 모던 |
| Outlaw Country | 그리티, 반항적, 70년대 |
| Bluegrass | 어쿠스틱, 빠른 피킹 |
| Folk | 포크, 어쿠스틱 |
| Indie Folk | 인디+포크 |
| Americana | 아메리카나 루츠 |
| Singer-Songwriter | 싱어송라이터, 개인적 |
| Celtic | 셀틱, 아이리시 |

### Jazz / Blues

| 장르 | 특징 |
|------|------|
| Jazz | 범용 재즈 |
| Smooth Jazz | 멜로우, 색소폰 |
| Bebop | 빠르고, 임프로비제이션 |
| Cool Jazz | 차분, 릴렉스드 |
| Jazz Fusion | 재즈+록/펑크 |
| Bossa Nova | 브라질, 나일론 기타 |
| Modal Jazz | 미니멀, 분위기 |
| Blues | 범용 블루스 |
| Delta Blues | 어쿠스틱, 루츠 |
| Chicago Blues | 일렉트릭, 어반 |
| Soul Jazz | 소울+재즈 |
| Swing | 빅밴드, 스윙 |

### World / Latin

| 장르 | 특징 |
|------|------|
| Afrobeat | 아프리카 리듬, 펑키 |
| Reggae | 자메이칸, 오프비트 |
| Dancehall | 댄스홀, 에너제틱 |
| Latin | 범용 라틴 |
| Salsa | 살사, 브라스, 퍼커션 |
| Bachata | 바차타, 로맨틱 |
| Reggaeton | 레게톤, 어반 라틴 |
| Flamenco | 플라멩코, 스페인 기타 |
| World Music | 월드뮤직 범용 |

### Classical / Orchestral

| 장르 | 특징 |
|------|------|
| Classical | 범용 클래식 |
| Baroque | 바로크, 하프시코드, 1700년대 |
| Romantic | 로맨틱 시대, 감정적 |
| Orchestral | 풀 오케스트라 |
| Chamber Music | 실내악 |
| Cinematic | 영화 스코어 |
| Epic | 에픽, 대규모, 트라이엄펀트 |
| Minimalist | 미니멀, 반복, 명상적 |
| Contemporary Classical | 현대 클래식 |
| Neoclassical | 네오클래식, 피아노+스트링 |
| Opera | 오페라, 성악 |

### Other

| 장르 | 특징 |
|------|------|
| Gospel | 가스펠, 합창, 영적 |
| New Age | 뉴에이지, 명상, 힐링 |
| Acoustic | 어쿠스틱 범용 |
| Lo-fi | 로파이 범용 |
| Ballad | 발라드, 슬로우, 감성 |
| Vaporwave | 슬로우드 샘플, 80년대 노스탤지어 |

---

## Mood Tags (20종)

| 무드 | 영어 | 사용 장면 |
|------|------|-----------|
| 업리프팅 | Uplifting | 희망, 긍정, 축하 |
| 우울한 | Melancholic | 슬픔, 그리움, 상실 |
| 으스스한 | Haunting | 미스터리, 호러, 초자연 |
| 어두운 | Dark | 무거운, 위협적 |
| 즐거운 | Joyful | 행복, 경쾌, 밝은 |
| 노스탤직 | Nostalgic | 추억, 회상, 향수 |
| 솜브레 | Somber | 엄숙한, 무거운 |
| 로맨틱 | Romantic | 사랑, 친밀감 |
| 인텐스 | Intense | 긴장, 고조, 강렬 |
| 드리미 | Dreamy | 몽환적, 부유하는 |
| 피스풀 | Peaceful | 평화, 안정, 자연 |
| 앵시어스 | Anxious | 불안, 긴장 |
| 유포릭 | Euphoric | 황홀, 최고조 |
| 미스테리어스 | Mysterious | 신비, 의문 |
| 어그레시브 | Aggressive | 공격적, 분노 |
| 플레이풀 | Playful | 장난스러운, 가벼운 |
| 에픽 | Epic | 대규모, 웅장한 |
| 인티밋 | Intimate | 친밀, 개인적 |
| 비터스윗 | Bittersweet | 달콤쓸쓸한 |
| 트라이엄펀트 | Triumphant | 승리, 영광 |

---

## Energy Tags (10종)

| 에너지 | 영어 | BPM 참고 |
|--------|------|----------|
| 하이 에너지 | High Energy | 130+ BPM |
| 미디엄 에너지 | Medium Energy | 100-130 BPM |
| 로우 에너지 | Low Energy | 60-100 BPM |
| 칠 | Chill | 70-100 BPM |
| 드라이빙 | Driving | 120-140 BPM |
| 익스플로시브 | Explosive | 140+ BPM |
| 빌딩 | Building | 가변 (점진적 증가) |
| 릴렉스드 | Relaxed | 60-90 BPM |
| 프랜틱 | Frantic | 160+ BPM |
| 스테디 | Steady | 100-120 BPM |

---

## Production / Texture Tags (14종)

| 프로덕션 | 영어 | 효과 |
|---------|------|------|
| 로파이 | Lo-fi | 바이닐 크래클, 테이프 히스 |
| 그리티 | Gritty | 거친, 날것의 텍스처 |
| 클린 | Clean | 깨끗한 믹스 |
| 로우 | Raw | 가공 안 된, 날것 |
| 러시 | Lush | 풍성한, 레이어드 |
| 스파스 | Sparse | 미니멀, 여백 |
| 테이프 새츄레이티드 | Tape-Saturated | 아날로그 테이프 포화 |
| 바이닐 히스 | Vinyl Hiss | LP 잡음 텍스처 |
| 앳머스페릭 | Atmospheric | 공간감, 분위기 |
| 펀치 | Punchy | 타격감, 임팩트 |
| 웜 | Warm | 따뜻한 톤 |
| 브라이트 | Bright | 밝은, 하이 프리퀀시 |
| 폴리시드 | Polished | 세련된, 프로덕션 완성도 높은 |
| 머디 | Muddy | 탁한 (보통 피해야 할 특성) |

---

## Production Effect Tags (10종+)

| 이펙트 | 태그 | 효과 |
|--------|------|------|
| 로파이 | `[Effect: Lo-fi]` | 로파이 텍스처 적용 |
| 홀 리버브 | `[Effect: Reverb: Hall]` | 넓은 공간 리버브 |
| 핑퐁 딜레이 | `[Effect: Delay: Ping-pong]` | 좌우 교차 딜레이 |
| 디스토션 | `[Effect: Distortion]` | 왜곡 이펙트 |
| 그레이니 | `[Texture: Grainy]` | 입자감 있는 텍스처 |
| 사이드체인 | `[Effect: Sidechain]` | 사이드체인 컴프레션 |
| 비트크러셔 | `[Effect: Bitcrusher]` | 비트 감소 이펙트 |
| 라디오 필터 | `[Effect: Radio Filter]` | 라디오 톤 필터 |

---

## Sound Effect Tags

### Environmental

| 효과 | 태그 |
|------|------|
| 새소리 | `[Birds Chirping]` |
| 비 | `[Rain]` |
| 천둥 | `[Thunder]` |
| 바람 | `[Wind]` |
| 파도 | `[Ocean Waves]` |
| 도시 소음 | `[City Ambience]` |
| 숲 | `[Forest]` |
| 모닥불 | `[Fire Crackling]` |

### Human Sounds

| 효과 | 태그 |
|------|------|
| 박수 | `[Applause]` |
| 환호 | `[Cheering]` |
| 손뼉 | `[Clapping]` |
| 속삭임 | `[Whispers]` |
| 휘파람 | `[Whistling]` |
| 비명 | `[Screams]` |
| 한숨 | `[Sighs]` |
| 웃음 | `[Audience Laughing]` |
| 기침 | `[Cough]` |
| 헛기침 | `[Clears Throat]` |

### Musical Effects

| 효과 | 태그 |
|------|------|
| 침묵 | `[Silence]` |
| 검열음 | `[Censored]` |
| 페이드 | `[Fade]` |
| 스톱 | `[Stop]` |
| 레코드 스크래치 | `[Record Scratch]` |
| 정전기 | `[Static]` |

---

## Atmosphere Tags (v4.5+)

| 분위기 | 태그 | 용도 |
|--------|------|------|
| 유포릭 | `[Mood: Euphoric]` | 최고조 감정 |
| 멜랑콜릭 | `[Mood: Melancholic]` | 우울, 슬픔 |
| 드리미 | `[Atmosphere: Dreamy]` | 몽환적 분위기 |
| 익스플로시브 | `[Energy: Explosive]` | 폭발적 에너지 |
| 노스탤직 | `[Mood: Nostalgic]` | 향수, 회상 |
| 다크 | `[Mood: Dark]` | 어두운, 무거운 |
| 칠 | `[Mood: Chill]` | 릴렉스, 편안한 |
| 사이버펑크 | `[Atmosphere: Cyberpunk]` | 사이버펑크 세계관 |
| 중세 | `[Atmosphere: Medieval]` | 중세 세계관 |

---

## Notes

- **Structure tags가 style prompt보다 10배 강력** — 곡 구조 제어의 핵심
- **최적 조합**: 1-2 genres + 2-3 instruments + 1-2 mood (과도한 태그는 AI 혼란 유발)
- **태그 위치**: 첫 20-30 words와 섹션 전환점에서 최적 작동
- **v4.5+**: 8분까지 지원, Studio Timeline, 인페인팅, 콜백 프레이징 가능
- **v3.5/v4**: 4분 제한, 단일 장르에 최적, 엄격한 태그 준수 필요
- **Custom Mode**: Style Prompt에 음악적 요소, Lyrics에 태그+가사를 분리하면 일관성 향상
- **보컬 태그는 불안정** — 반복 생성(iteration)을 예상해야 함
- **섹션당 퍼포먼스 큐는 1-3개** — 과도한 태그는 노이즈를 유발

## Related Skills

- `suno-prompt` — 프롬프트 작성 원칙, Weak vs Strong, 장르별 예시, 체크리스트
