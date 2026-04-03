// 'use client'

// import React, { useState } from 'react'
// import { FileAudio, Loader2, Copy, Mic } from 'lucide-react'
// import { extractionService } from '../../../core/services/extractionService'
// import Button from '../shared/Button'

// export default function AnalyzeMeeting({
//   onAnalysisComplete,
// }: {
//   onAnalysisComplete: (data: any) => void
// }) {
//   const [transcript, setTranscript] = useState('')
//   const [isAnalyzing, setIsAnalyzing] = useState(false)
//   const [file, setFile] = useState<File | null>(null)

//   const handleAnalysis = async () => {
//     setIsAnalyzing(true)
//     try {
//       let data
//       if (file) {
//         data = await extractionService.extractFromAudio(file)
//       } else {
//         data = await extractionService.extractFromTranscript(transcript)
//       }
//       onAnalysisComplete(data)
//     } catch (error) {
//       console.error('Extraction failed', error)
//     } finally {
//       setIsAnalyzing(false)
//     }
//   }

//   return (
//     <section
//       id='analyze-meeting'
//       className='w-full py-20 bg-[#F8FAFC] px-6 md:px-16 lg:px-24'
//     >
//       <div className='max-w-[1440px] mx-auto'>
//         <div className='mb-12'>
//           <h2 className='text-3xl md:text-4xl font-black text-[#111111] mb-2'>
//             Analyze your meeting
//           </h2>
//           <p className='text-slate-500 font-medium'>
//             Paste meeting audio or transcript below
//           </p>
//         </div>

//         {/* Responsive Grid: Audio Left, Text Right */}
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
//           {/* Left Side: Audio Upload Box */}
//           <div className='bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm'>
//             <h3 className='text-xl font-bold mb-8'>Upload Audio file</h3>
//             <div className='relative border-2 border-dashed border-slate-200 rounded-[2rem] p-12 flex flex-col items-center group hover:border-[#3B82F6] transition-all bg-[#FCFDFF]'>
//               <div className='w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 border border-slate-50'>
//                 <FileAudio className='text-slate-700' size={32} />
//               </div>

//               <p className='text-slate-400 font-bold text-lg mb-2'>
//                 Paste Transcripts
//               </p>
//               <p className='text-slate-400 font-medium mb-6'>or</p>

//               <input
//                 type='file'
//                 className='hidden'
//                 accept='.mp3,.wav'
//                 onChange={(e) => setFile(e.target.files?.[0] || null)}
//                 id='audio-upload'
//               />
//               <label
//                 htmlFor='audio-upload'
//                 className='bg-[#3B82F6] text-white px-10 py-4 rounded-xl font-bold cursor-pointer hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 mb-4'
//               >
//                 Upload audio
//               </label>
//               <p className='text-[#4ADE80] text-sm font-bold tracking-tight'>
//                 {file ? file.name : 'Supported files (.mp3, .wav)'}
//               </p>
//             </div>
//           </div>

//           {/* Right Side: Transcript/Summary Box */}
//           <div className='bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col h-full min-h-[480px]'>
//             <div className='flex justify-between items-center mb-10'>
//               <h3 className='text-xl font-bold'>File summary</h3>
//               <div className='flex gap-3'>
//                 <button className='p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400'>
//                   <Copy size={20} />
//                 </button>
//               </div>
//             </div>

//             <textarea
//               value={transcript}
//               onChange={(e) => setTranscript(e.target.value)}
//               placeholder='Short clean text overview of the meeting written here.....'
//               className='flex-grow w-full p-0 bg-transparent focus:outline-none text-slate-500 font-medium leading-relaxed resize-none text-lg'
//             />

//             <div className='flex justify-between items-end mt-6'>
//               <Mic className='text-slate-900 mb-2' size={24} />
//               <Button
//                 onClick={handleAnalysis}
//                 disabled={isAnalyzing || (!file && !transcript)}
//                 className='bg-[#3B82F6] text-white rounded-xl px-12 py-4 font-black flex items-center gap-2 hover:scale-105 transition-transform'
//               >
//                 {isAnalyzing ? (
//                   <Loader2 className='animate-spin' />
//                 ) : (
//                   'Analyse transcript'
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React, { useState, useEffect } from 'react'
import { FileAudio, Loader2, Copy, Mic, MicOff, Check } from 'lucide-react'
import { extractionService } from '../../../core/services/extractionService'
import Button from '../shared/Button'

export default function AnalyzeMeeting({
  onAnalysisComplete,
}: {
  onAnalysisComplete: (data: any) => void
}) {
  const [transcript, setTranscript] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  // States for interactive features
  const [isRecording, setIsRecording] = useState(false)
  const [copied, setCopied] = useState(false)

  // Function to handle Text Copy
  const handleCopy = async () => {
    if (!transcript) return
    await navigator.clipboard.writeText(transcript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Function to handle Voice Recording (Web Speech API)
  const toggleRecording = () => {
    if (
      !('webkitSpeechRecognition' in window) &&
      !('speechRecognition' in window)
    ) {
      alert("Browser doesn't support speech recognition.")
      return
    }

    if (isRecording) {
      setIsRecording(false)
      return
    }

    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).speechRecognition
    const recognition = new SpeechRecognition()

    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onstart = () => setIsRecording(true)
    recognition.onend = () => setIsRecording(false)

    recognition.onresult = (event: any) => {
      let interimTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + ' ' + event.results[i][0].transcript)
        }
      }
    }

    recognition.start()

    // Stop recognition if user clicks mic again
    if (!isRecording) {
      setTimeout(() => {
        if (isRecording) recognition.stop()
      }, 30000) // Auto stop after 30 seconds of silence/testing
    }
  }

  const handleAnalysis = async () => {
    setIsAnalyzing(true)
    try {
      let data
      if (file) {
        data = await extractionService.extractFromAudio(file)
      } else {
        data = await extractionService.extractFromTranscript(transcript)
      }
      onAnalysisComplete(data)
    } catch (error) {
      console.error('Extraction failed', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <section
      id='analyze-meeting'
      className='w-full py-20 bg-[#F8FAFC] px-6 md:px-16 lg:px-24'
    >
      <div className='max-w-[1440px] mx-auto'>
        <div className='mb-12'>
          <h2 className='text-3xl md:text-4xl font-black text-[#111111] mb-2 tracking-tight'>
            Analyze your meeting
          </h2>
          <p className='text-slate-500 font-medium'>
            Paste meeting audio or transcript below
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
          {/* Left Side: Audio Upload Box */}
          <div className='bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm'>
            <h3 className='text-xl font-bold mb-8'>Upload Audio file</h3>
            <div className='relative border-2 border-dashed border-slate-200 rounded-[2rem] p-12 flex flex-col items-center group hover:border-[#3B82F6] transition-all bg-[#FCFDFF]'>
              <div className='w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 border border-slate-50'>
                <FileAudio className='text-slate-700' size={32} />
              </div>

              <p className='text-slate-400 font-bold text-lg mb-2'>
                Paste Transcripts
              </p>
              <p className='text-slate-400 font-medium mb-6'>or</p>

              <input
                type='file'
                className='hidden'
                accept='.mp3,.wav'
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                id='audio-upload'
              />
              <label
                htmlFor='audio-upload'
                className='bg-[#3B82F6] text-white px-10 py-4 rounded-xl font-bold cursor-pointer hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 mb-4'
              >
                Upload audio
              </label>
              <p className='text-[#4ADE80] text-sm font-bold tracking-tight text-center truncate w-full px-4'>
                {file ? file.name : 'Supported files (.mp3, .wav)'}
              </p>
            </div>
          </div>

          {/* Right Side: Transcript/Summary Box */}
          <div className='bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col h-full min-h-[480px]'>
            <div className='flex justify-between items-center mb-10'>
              <h3 className='text-xl font-bold'>File summary</h3>
              <div className='flex gap-3'>
                <button
                  onClick={handleCopy}
                  className={`p-2 rounded-lg transition-all ${copied ? 'text-green-500 bg-green-50' : 'text-slate-400 hover:bg-slate-50'}`}
                  title='Copy transcript'
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
            </div>

            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder='Short clean text overview of the meeting written here.....'
              className='flex-grow w-full p-0 bg-transparent focus:outline-none text-slate-500 font-medium leading-relaxed resize-none text-lg'
            />

            <div className='flex justify-between items-end mt-6'>
              <button
                onClick={toggleRecording}
                className={`group relative mb-2 p-3 rounded-full transition-all ${isRecording ? 'bg-red-50 text-red-500 ring-4 ring-red-100' : 'text-slate-900 hover:bg-slate-100'}`}
              >
                {isRecording ? (
                  <>
                    <MicOff size={24} />
                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-red-500 uppercase animate-pulse'>
                      Recording
                    </span>
                  </>
                ) : (
                  <Mic size={24} />
                )}
              </button>

              <Button
                onClick={handleAnalysis}
                disabled={isAnalyzing || (!file && !transcript)}
                className='bg-[#3B82F6] text-white rounded-xl px-12 py-4 font-black flex items-center gap-2 hover:scale-105 transition-transform'
              >
                {isAnalyzing ? (
                  <Loader2 className='animate-spin' />
                ) : (
                  'Analyse transcript'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}