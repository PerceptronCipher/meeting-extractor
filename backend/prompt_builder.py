def build_extraction_prompt(transcript: str) -> str:
    return f"""You are an expert meeting analyst. Extract structured information from the meeting transcript below and return a JSON object only — no extra text, no markdown, no backticks.

Transcript:
\"\"\"{transcript}\"\"\"

Extract the following:
- summary: A concise 3-5 sentence overview of the meeting
- action_items: List of specific tasks that need to be done
- decisions: List of decisions that were made during the meeting
- owners: List of people assigned to tasks or responsibilities
- deadlines: List of deadlines or due dates mentioned

Return ONLY this JSON structure:
{{
  "summary": "",
  "action_items": [],
  "decisions": [],
  "owners": [],
  "deadlines": []
}}"""