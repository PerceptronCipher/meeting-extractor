'use client'

import React from 'react'
import { Upload, BrainCircuit, FileSpreadsheet } from 'lucide-react'

const steps = [
  {
    title: 'Upload or paste audio',
    desc: 'Add meeting audio or transcript to the analyzer.',
    color: 'bg-pink-500', // Slightly more vibrant pink
    icon: <Upload size={32} className='text-white' />,
  },
  {
    title: 'AI Analysis',
    desc: 'The AI processes and understands the conversation.',
    color: 'bg-emerald-600', // Richer green
    icon: <BrainCircuit size={32} className='text-white' />,
  },
  {
    title: 'Get structured output',
    desc: 'Receive summaries, tasks, and decisions instantly.',
    color: 'bg-[#3B82F6]',
    icon: <FileSpreadsheet size={32} className='text-white' />,
  },
]

export default function HowItWorks() {
  return (
    <section
      id='how-it-works'
      className='py-20 bg-[#ECECEC] px-6 md:px-16 lg:px-24'
    >
      <div className='max-w-[1440px] mx-auto flex flex-col items-center'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-black text-[#111111] mb-4 tracking-tighter uppercase'>
            How it works
          </h2>
          <p className='text-slate-500 font-bold text-lg'>
            Three simple steps to meeting mastery
          </p>
        </div>

        <div className='w-full max-w-4xl space-y-6'>
          {steps.map((step, i) => (
            <div
              key={i}
              className='group flex items-center gap-8 p-8 md:p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300'
            >
              {/* Premium Icon Container */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl shrink-0 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-500 ${step.color}`}
              >
                {step.icon}
              </div>

              <div className='flex flex-col'>
                {/* Step Indicator */}
                <span className='text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.3em] mb-2'>
                  Step 0{i + 1}
                </span>
                <h3 className='text-2xl font-black text-slate-900 mb-2 tracking-tight'>
                  {step.title}
                </h3>
                <p className='text-slate-500 font-medium text-base md:text-lg leading-relaxed max-w-xl'>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
