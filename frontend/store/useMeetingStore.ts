import { create } from 'zustand'

interface MeetingData {
  summary: string
  action_items: string[]
  decisions: string[]
  owners: string[]
  deadlines: string[]
}

interface MeetingStore {
  data: MeetingData | null
  isLoading: boolean
  error: string | null
  setMeetingData: (data: MeetingData) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useMeetingStore = create<MeetingStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  setMeetingData: (data) => set({ data, error: null }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}))
