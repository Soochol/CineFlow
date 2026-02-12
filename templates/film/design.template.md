# Design: {content}

## Overview

| Item | Value |
|------|-------|
| Content Name | {content} |
| Content Type | film |
| Plan Document | docs/01-plan/features/{content}.plan.md |
| Logline | PRODUCTION/{content}/01-logline.md |
| Treatment | PRODUCTION/{content}/02-treatment.md |
| Created | {date} |

## Logline

> {logline}

### 구성 요소

| 요소 | 내용 |
|------|------|
| 주인공 | {protagonist} |
| 결핍/욕구 | {want} |
| 촉발 사건 | {inciting_incident} |
| 장애물 | {obstacle} |
| 핵심 갈등 | {conflict} |
| 스테이크 | {stakes} |

## Film Style

| Item | Value |
|------|-------|
| 장르 | {genre} |
| 톤 | {tone} |
| 스타일 레퍼런스 | {style_reference} |
| 타겟 러닝타임 | {duration} |

## Treatment Summary

### 시놉시스

{synopsis}

### 세계관

| 항목 | 내용 |
|------|------|
| 시대/배경 | {world_setting} |
| 핵심 규칙 | {world_rule} |
| 사회 구조 | {world_society} |
| 제약/금기 | {world_constraint} |

### 3막 구조

| ACT | 핵심 내용 | 전환점 |
|-----|----------|--------|
| ACT 1 — 설정 | {act1_summary} | {act1_turning_point} |
| ACT 2 — 대립 | {act2_summary} | {act2_turning_point} |
| ACT 3 — 해결 | {act3_summary} | {act3_turning_point} |

### 인물

> 상세 프로파일: `PRODUCTION/{content}/characters.md`

| Prompt Label | 인물 | 설명 | 아크 |
|--------------|------|------|------|
| @{character_notation} | {character_name} | {character_desc} | {character_arc} |

## Style Guide

| Item | Value |
|------|-------|
| Tone | {tone} |
| Voice | {voice} |
| Language Level | {languageLevel} |
| Visual Reference | {visual_reference} |
| Lighting Style | {lighting_style} |
| Color Palette | {color_palette} |

## Sections

| # | Title | Description | Target Length | Key Points |
|---|-------|-------------|---------------|------------|
| 1 | {sceneTitle} | {sceneDescription} | {targetLength} | {keyPoints} |

## Section Details

### Section {N}: {sceneTitle}

**Scene Info**:
| 항목 | 내용 |
|------|------|
| 장소 | {location} |
| 시간대 | {time_of_day} |
| 등장인물 | {characters} |
| 분위기 | {mood} |
| 총 시간 | {targetLength} |

**Description**: {sceneDescription}
**Target Length**: {targetLength} (총 러닝타임)
**Shots**: {shotCount}개
**Key Points**:
- {keyPoint1}
- {keyPoint2}

**Shot Breakdown**:

| Shot # | Camera Angle | Camera Motion | Framing | Subject | Duration |
|--------|-------------|---------------|---------|---------|----------|
| 1 | {camera_angle} | {camera_motion} | {framing} | {subject} | {duration_sec}s |

**Audio Design**:
- BGM: {bgm_description}
- SFX: {sfx_description}
- Voice: {voice_description}

## Quality Criteria

| Item | Criteria | Weight |
|------|---------|--------|
| Completeness | 모든 Key Points 반영 | 15% |
| Visual Consistency | 조명/색감/스타일 일관성 | 20% |
| Prompt Quality | Kling 6 Essential Elements 충족 | 20% |
| Narrative Flow | 씬 간 스토리 연결 자연스러움 | 15% |
| Audio Design | BGM/SFX/Voice 씬과 동기화 | 15% |
| Character Consistency | @캐릭터 표기 일관성, 외형/행동 통일 | 15% |

## Notes

{notes}
