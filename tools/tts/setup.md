# Qwen3-TTS 로컬 환경 설정

## 하드웨어

- HP ZBook Ultra G1a
- AMD Ryzen AI Max+ PRO 395 / Radeon 8060S (gfx1151)
- 128GB LPDDR5x

## 설치 (이미 완료됨)

venv 위치: `tools/tts/.venv/` (프로젝트 루트 기준)

```cmd
:: 1. venv 생성 (프로젝트 루트에서 실행)
"C:\Users\bless\AppData\Local\Programs\Python\Python312\python.exe" -m venv tools\tts\.venv

:: 2. gfx1151 나이틀리 PyTorch 설치
tools\tts\.venv\Scripts\pip.exe install --index-url https://d2awnip2yjpvqn.cloudfront.net/v2/gfx1151/ --upgrade torch torchaudio torchvision

:: 3. qwen-tts 설치
tools\tts\.venv\Scripts\pip.exe install -U qwen-tts soundfile
```

## 사용법

```cmd
tools\tts\.venv\Scripts\python.exe tools\tts\scripts\generate.py --text "안녕하세요"
tools\tts\.venv\Scripts\python.exe tools\tts\scripts\generate.py --text "Hello" --speaker Eric --lang English
tools\tts\.venv\Scripts\python.exe tools\tts\scripts\generate.py --text "속삭이는 목소리" --instruct "whispering"
```

## ROCm gfx1151 주의사항

- `torch.backends.cudnn.enabled = False` 필수 (MIOpen Conv1d 미지원)
- 환경변수: `TORCH_ROCM_AOTRITON_ENABLE_EXPERIMENTAL=1`, `HSA_ENABLE_SDMA=0`
- 현재 RTF ~3.5 (실시간 아님, 배치 작업용)
- ROCm MIOpen gfx1151 Conv1d 최적화 진행 중: https://github.com/ROCm/TheRock/issues/724
