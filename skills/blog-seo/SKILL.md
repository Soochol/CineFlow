---
name: blog-seo
description: |
  블로그 SEO 레퍼런스. E-E-A-T 체크리스트, 키워드 전략,
  메타 요소(Title/Description/Schema), 가독성 규칙,
  AEO(AI Answer Engine Optimization), 내부/외부 링크 전략을 제공한다.
user-invocable: false
---

# Blog SEO Reference

> E-E-A-T + 키워드 전략 + 메타 요소 + 가독성 + AEO + 링크 전략

## E-E-A-T Checklist

### Experience (경험)

| 신호 | 구현 방법 | 예시 |
|------|-----------|------|
| 직접 경험 서술 | 1인칭 경험담, "직접 테스트해 본 결과" | "3개월간 이 도구를 사용한 결과..." |
| 사례 기반 설명 | 실제 프로젝트/고객 사례 인용 | "A사에 적용했을 때 전환율이 23% 상승했다" |
| 환경 묘사 | 구체적 상황, 맥락 서술 | "50명 규모의 마케팅팀에서..." |
| 시행착오 공유 | 실패 경험과 교훈 | "처음에는 X 방법을 시도했지만 실패했다" |

### Expertise (전문성)

| 신호 | 구현 방법 | 예시 |
|------|-----------|------|
| 정확한 데이터 인용 | 출처 명시 + 최신 통계 | "Gartner(2025)에 따르면..." |
| 전문 용어 적절 사용 | 도메인 전문어 + 쉬운 설명 병행 | "LTV(고객 생애 가치)란..." |
| 깊이 있는 분석 | 표면적 설명을 넘어선 인사이트 | "이 트렌드의 근본 원인은..." |
| 방법론 제시 | 체계적 프레임워크/단계 | "3단계 프레임워크로 접근하면..." |

### Authoritativeness (권위)

| 신호 | 구현 방법 | 예시 |
|------|-----------|------|
| 출처 명시 | 학술 논문, 업계 리포트 링크 | "[McKinsey Digital Report, 2025]" |
| 전문가 인용 | 업계 인사 직접 인용 | "Google의 John Mueller는..." |
| 자격/경력 언급 | 저자 소개, 관련 경력 | "10년간 SEO 컨설팅 경험" |
| 기관 연계 | 인정받는 기관/미디어 연결 | ".edu, .gov 출처 참조" |

### Trustworthiness (신뢰)

| 신호 | 구현 방법 | 예시 |
|------|-----------|------|
| 정확한 날짜 표기 | 작성일, 수정일 명시 | "최종 업데이트: 2026-02-12" |
| 면책 조항 | 이해 충돌, 제휴 관계 공개 | "이 글에는 제휴 링크가 포함되어 있습니다" |
| 투명한 관점 | 한계점 인정, 균형 잡힌 시각 | "이 방법은 B2B에 적합하며, B2C에는 한계가 있다" |
| 팩트 체크 | 2개 이상 출처 교차 검증 | 동일 주장에 복수 출처 |

---

## Keyword Strategy

### Keyword Types

| 유형 | 영어 | 설명 | 배치 위치 | 권장 밀도 |
|------|------|------|-----------|-----------|
| 핵심 키워드 | Primary Keyword | 글의 주제를 대표하는 키워드 | Title, H1, 첫 문단, Meta | 1~2% |
| 보조 키워드 | Secondary Keywords | 핵심 키워드의 변형/관련어 | H2, 본문 | 0.5~1% |
| 롱테일 키워드 | Long-tail Keywords | 구체적인 검색 의도 반영 | H3, FAQ | 자연스럽게 |
| 잠재 의미 키워드 | LSI (Latent Semantic) | 핵심 키워드와 의미적 연관어 | 본문 전체 | 관련어 확산 |
| 엔티티 키워드 | Entity Keywords | 고유명사, 브랜드, 제품명 | 본문 | 해당 시 |

### Keyword Placement Rules

| 위치 | 규칙 | 우선순위 |
|------|------|----------|
| Title Tag | Primary keyword 앞쪽 배치 | 최우선 |
| H1 | Primary keyword 포함 | 최우선 |
| 첫 100단어 | Primary keyword 자연스럽게 삽입 | 높음 |
| H2 Headings | Secondary keywords 분배 | 높음 |
| Image ALT | Primary 또는 Secondary keyword | 중간 |
| URL Slug | Primary keyword (kebab-case) | 중간 |
| Meta Description | Primary keyword + CTA | 중간 |
| 본문 전체 | LSI keywords 자연 분포 | 보통 |

### Korean Keyword Specifics

| 항목 | Naver | Google Korea |
|------|-------|-------------|
| 형태소 분석 | 조사 포함 키워드 인식 | 어근 중심 매칭 |
| 키워드 변형 | "AI 마케팅" = "AI마케팅" 동일 처리 | 띄어쓰기 구분 |
| 조사 포함 | "AI 마케팅을", "AI 마케팅이" 별도 인식 | 조사 무시 경향 |
| 추천 전략 | 조사 포함/미포함 모두 자연 삽입 | 어근 키워드 집중 |

---

## Meta Elements

### Title Tag

| 항목 | 규칙 |
|------|------|
| 영문 길이 | 50~60 characters |
| 한국어 길이 | 25~30자 |
| 키워드 배치 | Primary keyword를 앞쪽에 |
| 브랜드 | `\| Brand`를 끝에 (선택) |
| Power Words | Ultimate, Complete, Essential, 완벽 가이드, 핵심 정리, TOP |

### Meta Description

| 항목 | 규칙 |
|------|------|
| 영문 길이 | 150~160 characters |
| 한국어 길이 | 80~100자 |
| 필수 포함 | Primary keyword + 가치 제안 |
| CTA 포함 | 클릭을 유도하는 문구 |
| 고유성 | 페이지마다 고유한 설명 |

### Schema Markup

| Schema Type | 적합 유형 | 핵심 필드 |
|-------------|-----------|-----------|
| Article | 모든 블로그 | headline, author, datePublished, dateModified, image |
| FAQ | Q&A 포함 글 | mainEntity, acceptedAnswer |
| HowTo | How-To 가이드 | step, name, text, image |
| BreadcrumbList | 모든 글 | itemListElement |

### Open Graph / Social

| 태그 | 규칙 |
|------|------|
| og:title | Title Tag와 동일 또는 소셜 최적화 버전 |
| og:description | Meta Description과 동일 또는 소셜 최적화 |
| og:image | 1200x630 px 권장 |
| og:type | article |
| twitter:card | summary_large_image |

---

## Readability Rules

### Flesch Reading Ease (영문)

| 점수 | 레벨 | 블로그 적합도 |
|------|------|-------------|
| 70~80 | Fairly Easy | B2C, 일반 독자 — 권장 |
| 60~70 | Standard | 대부분의 블로그에 적합 — 기본 타겟 |
| 50~60 | Fairly Difficult | 기술/전문 블로그 |
| 30~50 | Difficult | 학술/리서치 — 블로그 비권장 |

### Korean Readability

| 항목 | 규칙 |
|------|------|
| 문장 길이 | 40자 이내 권장 |
| 한자어 비율 | 30% 이하 |
| 피동/사동 표현 | 최소화 ("~되어지다" → "~하다") |
| 외래어 | 한국어 대체 가능 시 한국어 우선 |
| 전문 용어 | 첫 등장 시 풀어쓰기 |

### Scannability

| 요소 | 규칙 | 목적 |
|------|------|------|
| 소제목 | 300 단어(영) / 500자(한)마다 | 시각적 구분 |
| 목록 | 연속 3항목 이상이면 Bullet/Numbered | 스캔성 |
| 강조 | 문단당 1~2개 Bold 키워드 | 핵심 강조 |
| 짧은 문단 | 2~3 문장 (영) / 3~4 문장 (한) | 가독성 |
| 시각 요소 | 500 단어(영) / 800자(한)마다 이미지/콜아웃 | 시각적 휴식 |
| 여백 | 충분한 줄 간격과 여백 | 밀도 완화 |

---

## AEO (AI Answer Engine Optimization)

### Principles

| 원칙 | 설명 | 구현 방법 |
|------|------|-----------|
| Direct Answer | 질문에 대한 직접 답변 | 첫 1~2문장에 핵심 답변 배치 |
| Entity-First | 개체 중심 서술 | Wikipedia 스타일 정의문으로 시작 |
| Structured Data | 테이블, 목록, 단계별 구조 | 정보를 구조화된 형태로 제공 |
| Concise Paragraphs | 짧고 명확한 문단 | 40~60 단어(영) / 80~120자(한) |
| FAQ Section | 관련 질문 Q&A 블록 | "자주 묻는 질문" 섹션 추가 |

### AI Search Engine Targets

| 엔진 | 최적화 포인트 |
|------|--------------|
| Google AI Overviews | 구조화 데이터, Direct Answer, 인용 가능한 짧은 문장 |
| Perplexity | 출처 명시, 단계적 설명, 신뢰 신호 (데이터 + 출처) |
| Naver AI | 한국어 자연어 최적화, 네이버 플랫폼 연계 콘텐츠 |
| ChatGPT Browse | 명확한 정보 구조, 최신 날짜 표기, 팩트 기반 |

---

## Link Strategy

### Internal Links

| 규칙 | 설명 |
|------|------|
| Contextual links | 관련 키워드에 자연스럽게 삽입 |
| Hub-spoke model | 필라 글 ↔ 클러스터 글 상호 링크 |
| 앵커 텍스트 | Descriptive 텍스트 (URL 직접 사용 지양) |
| 빈도 | 1,000 단어(영) / 1,500자(한)당 3~5개 |
| 배치 | 본문 상단 + 중간 + 하단 골고루 분배 |

### External Links

| 규칙 | 설명 |
|------|------|
| 권위 출처 | 학술 논문, 업계 리포트, 공식 문서 |
| 경쟁사 링크 | 직접 경쟁사 링크 지양 |
| nofollow | 광고/제휴 링크에 rel="nofollow" |
| 새 탭 열기 | 외부 링크는 target="_blank" |
| 빈도 | 글당 3~5개 (과도한 외부 링크 지양) |

---

## Weak vs Strong

| 요소 | 약한 SEO | 강한 SEO |
|------|----------|----------|
| Title | "AI 블로그" | "2026 AI 마케팅 트렌드 완벽 가이드 \| Affim" |
| Meta | (없음) | "2026년 AI 마케팅 핵심 트렌드 7가지를 데이터와 사례로 정리했습니다. 실무 적용법까지." |
| Heading | "소개" | "AI 마케팅이 2026년에 필수인 3가지 이유" |
| Link | "여기를 클릭하세요" | "AI 마케팅 자동화 가이드에서 자세히 확인" |
| Image ALT | "image1.png" | "2026 AI 마케팅 시장 규모 그래프" |
| 키워드 | 동일 키워드 반복 | Primary + Secondary + LSI 자연 분포 |
| 구조 | 제목만 있는 긴 텍스트 | H2/H3 계층 + 목록 + 테이블 + 이미지 |

---

## SEO Checklist

- [ ] Title Tag이 50~60자(영) / 25~30자(한)이며 Primary keyword가 앞에 배치되었는가
- [ ] Meta Description이 150~160자(영) / 80~100자(한)이며 CTA를 포함하는가
- [ ] H1이 1개이며 Primary keyword를 포함하는가
- [ ] H2에 Secondary keyword가 분배되었는가
- [ ] Primary keyword가 첫 100단어(영) / 200자(한) 내에 등장하는가
- [ ] Keyword density가 1~2% 범위인가
- [ ] 내부 링크가 1,000단어(영) / 1,500자(한)당 3~5개 포함되었는가
- [ ] 외부 링크가 권위 있는 출처를 참조하는가
- [ ] 이미지에 Descriptive ALT 텍스트가 있는가
- [ ] Schema Markup(Article/FAQ/HowTo)이 적용되었는가
- [ ] E-E-A-T 신호가 충분한가 (출처, 경험, 전문성)
- [ ] AEO Direct Answer 포맷이 적용되었는가 (첫 1~2문장 답변)

## Notes

- SEO와 가독성이 상충할 때 **가독성을 우선**한다
- 키워드 밀도를 억지로 맞추지 않고 자연스러운 작성을 우선한다
- 한국어 블로그는 Naver SEO와 Google SEO를 동시에 고려해야 한다
- AEO는 2026년 이후 SEO의 핵심 축이므로 반드시 적용한다
- 모든 데이터/통계는 출처를 명시한다

## Related Skills

- `blog-writing` — 블로그 유형별 구조, 섹션 작성 규칙, 톤/보이스 가이드
