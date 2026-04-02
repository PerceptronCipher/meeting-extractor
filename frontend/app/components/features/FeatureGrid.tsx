'use client'

import React from 'react'
import {
  Mic,
  Zap,
  Target,
  Lightbulb,
  MousePointerClick,
  Search,
} from 'lucide-react'

const features = [
  {
    title: 'Audio to text',
    desc: 'Automatically transcribes meeting audio with high accuracy.',
    icon: <Mic size={22} />,
  },
  {
    title: 'Action Extraction',
    desc: 'Pulls out specific tasks and assigns them to the right people.',
    icon: <Target size={22} />,
  },
  {
    title: 'Responsibility detection',
    desc: 'Identifies who is responsible for what during the call.',
    icon: <Search size={22} />,
  },
  {
    title: 'One click copy',
    desc: 'Easily copy results to your clipboard or workflow tools.',
    icon: <MousePointerClick size={22} />,
  },
  {
    title: 'Instant results',
    desc: 'Get your structured meeting notes in seconds, not hours.',
    icon: <Zap size={22} />,
  },
  {
    title: 'Smart summaries',
    desc: 'Condenses long conversations into key executive insights.',
    icon: <Lightbulb size={22} />,
  },
]

export default function FeatureGrid() {
  return (
    <section
      id='features'
      className='py-32 bg-[#ECECEC] px-6 md:px-16 lg:px-24'
    >
      <div className='max-w-[1440px] mx-auto'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-black text-[#111111] mb-5 tracking-tighter uppercase'>
            Features
          </h2>
          <p className='text-slate-500 font-bold text-lg max-w-xl mx-auto'>
            Everything you need from your meeting
          </p>
        </div>

        {/* Grid adjusted for tighter fit and better gap distribution */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
          {features.map((f, i) => (
            <div
              key={i}
              className='p-10 rounded-[2.5rem] bg-white border border-transparent hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-300 group flex flex-col items-start justify-between min-h-[280px]'
            >
              <div>
                <div className='w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-8 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#3B82F6] transition-all duration-300 transform group-hover:scale-110'>
                  {f.icon}
                </div>
                <h3 className='text-2xl font-black text-slate-900 mb-4 tracking-tight'>
                  {f.title}
                </h3>
                <p className='text-slate-500 font-medium leading-relaxed'>
                  {f.desc}
                </p>
              </div>

              {/* Subtle accent line for "fitness" */}
              <div className='w-8 h-1 bg-slate-100 mt-6 group-hover:w-16 group-hover:bg-[#3B82F6] transition-all duration-500 rounded-full' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
