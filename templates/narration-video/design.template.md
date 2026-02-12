# Design: {content}

## Overview

| Item | Value |
|------|-------|
| Content Name | {content} |
| Content Type | narration-video |
| Plan Document | docs/01-plan/features/{content}.plan.md |
| Created | {date} |

## Narration Style

| Item | Value |
|------|-------|
| 주제 | {topic} |
| 타겟 감정 | {target_emotion} |
| 톤 | {tone} |
| 나레이션 스타일 | {narration_style} |
| 예상 총 길이 | {total_duration} |

## Global Image Style

> 모든 씬에 일관되게 적용할 비주얼 스타일 정의.
> section-writer는 이 섹션을 참조하여 각 씬의 이미지 프롬프트를 생성한다.

### Style Direction

| Item | Value |
|------|-------|
| Visual Style | {visual_style} |
| Color Palette | {color_palette} |
| Lighting Mood | {lighting_mood} |
| Framing Preference | {framing_preference} |

### Kling Prompt Base

모든 씬 프롬프트 끝에 추가할 글로벌 스타일 구문:

```
{global_prompt_base}
```

### Negative Prompt (Global)

```
{global_negative_prompt}
```

## Style Guide

| Item | Value |
|------|-------|
| Tone | {tone} |
| Voice | {voice} |
| Language Level | {languageLevel} |
| Honorific Style | {honorificStyle} |

## Sections

| # | Scene Title | Key Visual | Narration Summary | Target Length | Emotion |
|---|-------------|------------|-------------------|---------------|---------|
| 1 | {sceneTitle} | {keyVisual} | {narrationSummary} | {duration}s | {emotion} |

## Section Details

### Section {N}: {sceneTitle}

**Scene Info**:
| 항목 | 내용 |
|------|------|
| 장소 | {location} |
| 시간대 | {time_of_day} |
| 핵심 비주얼 | {key_visual} |
| 감정 톤 | {emotion_tone} |
| Duration | {duration}s |

**Key Points**:
- {keyPoint1}
- {keyPoint2}

**Transition**: {transition_to_next}

## Quality Criteria

| Item | Criteria | Weight |
|------|---------|--------|
| Completeness | 모든 Key Points 반영 | 20% |
| Narration Flow | 나레이션 자연스러움, 감정 전달력 | 25% |
| Visual Consistency | 글로벌 이미지 스타일 일관성 | 20% |
| Image Prompt Quality | Kling 6 Essential Elements 충족 | 20% |
| Emotion Delivery | 타겟 감정 효과적 전달 | 15% |
