import os

OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]
CHAT_MODEL = "gpt-4o"
WHISPER_MODEL = "whisper-1"

SUPPORTED_AUDIO_FORMATS = [".mp3", ".mp4", ".wav", ".m4a", ".webm", ".ogg"]