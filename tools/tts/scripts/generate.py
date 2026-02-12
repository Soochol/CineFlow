"""
Qwen3-TTS 음성 생성 스크립트
사용법: python generate.py --text "텍스트" [--speaker Sohee] [--lang Korean] [--output output.wav]
"""
import os
os.environ["TORCH_ROCM_AOTRITON_ENABLE_EXPERIMENTAL"] = "1"
os.environ["HSA_ENABLE_SDMA"] = "0"

import argparse
import time
import torch

torch.backends.cudnn.enabled = False  # ROCm gfx1151 MIOpen Conv1d 우회

from qwen_tts import Qwen3TTSModel
import soundfile as sf

SPEAKERS = ["Vivian", "Serena", "Uncle_Fu", "Dylan", "Eric", "Ryan", "Aiden", "Ono_Anna", "Sohee"]
LANGUAGES = ["Chinese", "English", "Japanese", "Korean", "German", "French", "Russian", "Portuguese", "Spanish", "Italian"]

def main():
    parser = argparse.ArgumentParser(description="Qwen3-TTS 음성 생성")
    parser.add_argument("--text", "-t", required=True, help="생성할 텍스트")
    parser.add_argument("--speaker", "-s", default="Sohee", choices=SPEAKERS, help="화자 (기본: Sohee)")
    parser.add_argument("--lang", "-l", default="Korean", choices=LANGUAGES, help="언어 (기본: Korean)")
    parser.add_argument("--output", "-o", default=None, help="출력 파일 경로 (기본: outputs/ 자동 생성)")
    parser.add_argument("--instruct", "-i", default=None, help="음성 지시어 (예: 'whispering', 'excited')")
    args = parser.parse_args()

    # 출력 경로 결정
    if args.output is None:
        outputs_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "outputs")
        os.makedirs(outputs_dir, exist_ok=True)
        timestamp = time.strftime("%Y%m%d-%H%M%S")
        args.output = os.path.join(outputs_dir, f"tts-{args.speaker}-{timestamp}.wav")

    print(f"GPU: {torch.cuda.get_device_name(0)}")
    print(f"PyTorch: {torch.__version__}")
    print()

    # 모델 로드
    print("모델 로딩 중...")
    start = time.time()
    model = Qwen3TTSModel.from_pretrained(
        "Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice",
        device_map="cuda:0",
        dtype=torch.bfloat16,
    )
    print(f"모델 로드: {time.time() - start:.1f}초")
    print()

    # 음성 생성
    print(f"화자: {args.speaker} | 언어: {args.lang}")
    print(f"텍스트: {args.text[:80]}{'...' if len(args.text) > 80 else ''}")
    print("생성 중...")

    start = time.time()
    generate_kwargs = dict(
        text=args.text,
        language=args.lang,
        speaker=args.speaker,
    )
    if args.instruct:
        generate_kwargs["instruct"] = args.instruct

    wavs, sr = model.generate_custom_voice(**generate_kwargs)
    elapsed = time.time() - start

    sf.write(args.output, wavs[0], sr)

    duration = len(wavs[0]) / sr
    rtf = elapsed / duration

    print(f"완료!")
    print(f"  출력: {args.output}")
    print(f"  오디오: {duration:.1f}초 | 생성: {elapsed:.1f}초 | RTF: {rtf:.2f}")
    print(f"  VRAM: {torch.cuda.memory_allocated(0) / 1024**2:.0f} MB")

if __name__ == "__main__":
    main()
