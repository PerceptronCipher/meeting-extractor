from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transcriber import transcribe_audio
from extractor import extract

app = FastAPI(title="AI Meeting Notes & Action Extractor")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class TranscriptRequest(BaseModel):
    transcript: str


@app.post("/extract/audio")
async def extract_from_audio(file: UploadFile = File(...)):
    content = await file.read()
    try:
        transcript = transcribe_audio(file.filename, content)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    result = extract(transcript)
    result["transcript"] = transcript
    return result


@app.post("/extract/transcript")
def extract_from_transcript(req: TranscriptRequest):
    if not req.transcript.strip():
        raise HTTPException(status_code=400, detail="Transcript cannot be empty.")
    return extract(req.transcript)