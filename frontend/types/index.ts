export interface ExtractionResponse {
  summary: string
  action_items: string[]
  decisions: string[]
  owners: string[]
  deadlines: string[]
}

export interface TranscriptRequest {
  transcript: string
}



// // frontend/types/index.ts

// /**
//  * Represents a single actionable task extracted from the meeting.
//  */
// export interface ActionItem {
//   task: string
//   owner?: string
//   deadline?: string
// }

// /**
//  * Represents a person and their specific focus/role identified in the meeting.
//  */
// export interface Responsibility {
//   person: string
//   role: string
// }

// /**
//  * The primary data structure returned by the AI Analysis backend.
//  * All arrays are optional to handle cases where the AI might not find
//  * specific data points (e.g., a meeting with no clear decisions).
//  */
// export interface ExtractionResponse {
//   summary: string
//   action_items: ActionItem[]
//   decisions: string[]
//   responsibilities: Responsibility[]
// }

// /**
//  * The payload structure for sending a transcript to the backend.
//  */
// export interface TranscriptRequest {
//   transcript: string
// }
