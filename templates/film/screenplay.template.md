# Screenplay

> 프로젝트: {project}
> 생성일: {date}

---

## 메타

- **제목**: {title}
- **장르**: {genre}
- **총 씬 수**: {total_scenes}
- **예상 러닝타임**: {duration}

---

## Scene #{scene_number}

### 씬 정보

| 항목 | 내용 |
|------|------|
| 장소 | {location} |
| 시간대 | {time_of_day} |
| 등장인물 | {characters} |
| 분위기 | {mood} |
| 총 시간 | {total_duration} |

### 스토리

{scene_story}

### 연출 의도

{scene_direction_intent}

---

### Shot #{shot_number}

| 항목 | 값 |
|------|-----|
| **카메라 앵글** | {camera_angle} |
| **카메라 모션** | {camera_motion} |
| **프레이밍** | {framing} |
| **주체** | {subject} |
| **주체 모션** | {subject_motion} |
| **대사/내레이션** | {dialogue} |
| **Duration** | {duration_sec}s |

#### 나레이션 스크립트

{narration_script}

#### I2V (Image to Video) 프롬프트

**키 프레임:**

```
{i2v_keyframe}
```

**모션:**

```
{i2v_motion}
```

#### T2V (Text to Video) 프롬프트

```
{t2v_prompt}
```

---

<!--
씬/샷 반복 패턴:

## Scene #2
### Shot #1
### Shot #2
...

## Scene #N
### Shot #1
...
-->
