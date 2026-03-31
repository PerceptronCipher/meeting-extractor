import os
from openai import OpenAI
from config import OPENAI_API_KEY, WHISPER_MODEL, SUPPORTED_AUDIO_FORMATS

client = OpenAI(api_key=OPENAI_API_KEY)


def transcribe_audio(filename: str, content: bytes) -> str:
    ext = os.path.splitext(filename)[-1].lower()
    if ext not in SUPPORTED_AUDIO_FORMATS:
        raise ValueError(f"Unsupported audio format: {ext}. Supported: {SUPPORTED_AUDIO_FORMATS}")

    # Whisper requires a file-like object with a name
    import io
    audio_file = io.BytesIO(content)
    audio_file.name = filename

    response = client.audio.transcriptions.create(
        model=WHISPER_MODEL,
        file=audio_file,
    )

    return response.text