"""GPU 및 TTS 환경 확인 스크립트"""
import torch

print(f"PyTorch: {torch.__version__}")
print(f"CUDA available: {torch.cuda.is_available()}")
print(f"Device count: {torch.cuda.device_count()}")

if torch.cuda.is_available():
    print(f"Device: {torch.cuda.get_device_name(0)}")
    print(f"Memory allocated: {torch.cuda.memory_allocated(0) / 1024**2:.0f} MB")
    print(f"Memory reserved: {torch.cuda.memory_reserved(0) / 1024**2:.0f} MB")

    try:
        from qwen_tts import Qwen3TTSModel
        print(f"qwen-tts: installed")
    except ImportError:
        print(f"qwen-tts: NOT installed")
else:
    print("GPU not detected")
