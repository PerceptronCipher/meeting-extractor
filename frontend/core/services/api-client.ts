import axios from 'axios'

const API_BASE_URL = 'https://meeting-extractor-backend.onrender.com'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const extractionService = {
  // POST /extract/audio
  extractFromAudio: async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    const { data } = await apiClient.post('/extract/audio', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return data
  },

  // POST /extract/transcript
  extractFromTranscript: async (transcript: string) => {
    const { data } = await apiClient.post('/extract/transcript', {
      transcript,
    })
    return data
  },
}
