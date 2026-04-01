'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  Upload,
  Sparkles,
  CheckCircle2,
  Loader2,
  Trash2,
  ChevronLeft,
  Copy,
  Check,
  AlertCircle,
  FileAudio,
} from 'lucide-react'
import { extractionService } from '@/core/services/api-client'
import { useMeetingStore } from '@/store/useMeetingStore'

export default function ExtractorWorkbench() {
  const { data, isLoading, setLoading, setMeetingData, setError, error } =
    useMeetingStore()
  const [transcript, setTranscript] = useState('')
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleCopy = () => {
    if (!data) return
    const text = `Summary: ${data.summary}\n\nAction Items: ${data.action_items.join(', ')}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Client-side size validation
    if (file.size > 50 * 1024 * 1024) {
      setError('FILE_TOO_LARGE: 50MB LIMIT EXCEEDED')
      return
    }

    setLoading(true)
    try {
      const result = await extractionService.extractFromAudio(file)
      setMeetingData(result)
    } catch (err) {
      setError('Neural audio processing failed.')
    } finally {
      setLoading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const handleTextSubmit = async () => {
    if (!transcript.trim()) return
    setLoading(true)
    try {
      const result = await extractionService.extractFromTranscript(transcript)
      setMeetingData(result)
    } catch (err) {
      setError('Transcript extraction failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='min-h-screen bg-background text-foreground flex flex-col'>
      {/* 🏛️ Fixed Header */}
      <header className='sticky top-0 z-50 w-full border-b border-glass-border bg-background/80 backdrop-blur-md px-8 py-4'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <Link
              href='/'
              className='p-2 hover:bg-white/5 rounded-lg transition-colors'
            >
              <ChevronLeft size={18} />
            </Link>
            <div>
              <h1 className='text-lg font-black tracking-tighter italic uppercase'>
                Meeting<span className='text-primary'>.</span>AI
              </h1>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            {isLoading && (
              <Loader2 className='animate-spin text-primary' size={16} />
            )}
            <div className='px-3 py-1 rounded-full border border-glass-border bg-glass text-[9px] font-bold text-primary tracking-widest'>
              {isLoading ? 'ANALYZING_DATA' : 'SYSTEM_READY'}
            </div>
          </div>
        </div>
      </header>

      {/* 🏛️ Output Area (Scrollable) */}
      <section className='flex-1 overflow-y-auto p-8'>
        <div className='max-w-6xl mx-auto'>
          {!data && !isLoading && (
            <div className='h-[40vh] flex flex-col items-center justify-center text-center opacity-30'>
              <Sparkles size={40} className='mb-4' />
              <p className='text-sm font-mono uppercase tracking-[0.3em]'>
                Awaiting intelligence input...
              </p>
            </div>
          )}

          {data && (
            <div className='animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6 pb-32'>
              <div className='flex justify-between items-end border-b border-glass-border pb-4'>
                <h2 className='text-[10px] font-black tracking-[0.4em] text-primary uppercase'>
                  Generated_Intelligence
                </h2>
                <button
                  onClick={handleCopy}
                  className='flex items-center gap-2 text-[10px] font-bold hover:text-primary transition-colors uppercase tracking-widest'
                >
                  {copied ? (
                    <Check size={14} className='text-green-500' />
                  ) : (
                    <Copy size={14} />
                  )}
                  {copied ? 'Copied' : 'Copy_Result'}
                </button>
              </div>

              <div className='glass-card p-8 bg-white/[0.01] border-primary/10'>
                <p className='text-xl md:text-2xl font-medium leading-relaxed italic text-secondary'>
                  "{data.summary}"
                </p>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <h3 className='text-[9px] font-black text-primary uppercase tracking-[0.3em] ml-2'>
                    Action_Matrix
                  </h3>
                  <div className='space-y-2'>
                    {data.action_items.map((item, i) => (
                      <div
                        key={i}
                        className='flex gap-4 p-4 bg-glass border border-glass-border rounded-xl text-sm'
                      >
                        <CheckCircle2
                          className='text-primary shrink-0'
                          size={18}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-[9px] font-black text-amber-500 uppercase tracking-[0.3em] ml-2'>
                    Stakeholders
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {data.owners.map((owner, i) => (
                      <span
                        key={i}
                        className='px-4 py-2 bg-white/5 border border-glass-border rounded-lg text-[10px] font-bold uppercase tracking-wider'
                      >
                        {owner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 🏛️ Input Dock (Sticky Bottom) */}
      <footer className='sticky bottom-0 w-full border-t border-glass-border bg-background/95 backdrop-blur-xl p-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-[1.2fr_2fr_auto] gap-4 items-end'>
            {/* 🛠️ Audio/File Upload with Explicit Limits */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className='h-32 flex flex-col items-center justify-center border-2 border-dashed border-glass-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group relative overflow-hidden'
            >
              <input
                type='file'
                ref={fileInputRef}
                onChange={handleAudioUpload}
                className='hidden'
                accept='audio/*,.mp3,.wav,.m4a'
              />
              <div className='absolute top-2 right-3 text-[7px] font-mono text-secondary/50 uppercase tracking-tighter'>
                Limit: 50MB
              </div>
              <FileAudio
                className='text-secondary group-hover:text-primary mb-2 transition-colors'
                size={24}
              />
              <span className='text-[9px] font-black text-secondary uppercase tracking-widest text-center px-2'>
                Upload_Audio_Files
              </span>
              <span className='text-[7px] text-secondary/40 mt-1 uppercase font-mono'>
                WAV / MP3 / M4A
              </span>
            </div>

            {/* 🛠️ Text Input with Clearer Instruction */}
            <div className='relative'>
              <div className='absolute -top-6 left-1 text-[8px] font-black text-secondary/60 uppercase tracking-[0.2em]'>
                Raw_Transcript_Input
              </div>
              <textarea
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                className='w-full h-32 bg-black/40 border border-glass-border rounded-2xl p-4 text-xs font-mono text-secondary resize-none focus:outline-none focus:border-primary/40 placeholder:opacity-30'
                placeholder='Paste raw text or meeting dialogue here for immediate analysis...'
              />
              {transcript && (
                <button
                  onClick={() => setTranscript('')}
                  className='absolute top-3 right-3 text-secondary hover:text-red-400 transition-colors'
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleTextSubmit}
              disabled={isLoading || (!transcript.trim() && !isLoading)}
              className='h-32 px-10 bg-primary text-white rounded-2xl font-black text-[11px] tracking-[0.2em] hover:bg-blue-600 disabled:opacity-20 transition-all flex flex-col items-center justify-center gap-3 shadow-lg shadow-primary/10'
            >
              <Sparkles size={24} />
              EXTRACT
            </button>
          </div>

          {error && (
            <div className='flex items-center gap-2 mt-4 text-[10px] text-red-400 font-bold uppercase tracking-wider animate-in fade-in slide-in-from-left-2'>
              <AlertCircle size={14} /> {error}
            </div>
          )}
        </div>
      </footer>
    </main>
  )
}
