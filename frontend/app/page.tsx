'use client'

import React, { useState } from 'react'
import Hero from '../app/components/hero/Hero'
import AnalyzeMeeting from '../app//components/analyzer/AnalyzeMeeting'
import SmartBreakdown from '../app//components/analyzer/SmartBreakdown'
import FeatureGrid from '../app//components/features/FeatureGrid'
import HowItWorks from '../app//components/steps/HowItWorks'
import Button from '../app//components/shared/Button'
import { ExtractionResponse } from '../types/index'

export default function Home() {
  const [analysisData, setAnalysisData] = useState<ExtractionResponse | null>(
    null,
  )

  // Scroll to results once they are ready
  const handleComplete = (data: ExtractionResponse) => {
    setAnalysisData(data)
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <Hero />

      <AnalyzeMeeting onAnalysisComplete={handleComplete} />

      {/* Conditionally render results based on API response */}
      {analysisData && (
        <section id='results' className='bg-[#ECECEC]'>
          <SmartBreakdown data={analysisData} />
        </section>
      )}

      <FeatureGrid />

      <HowItWorks />

      {/* Final CTA Section from Mockup */}
      <section className='py-20 bg-[#ECECEC] px-6 md:px-16 lg:px-24'>
        <div className='max-w-[1440px] mx-auto'>
          <div className='bg-[#D1E5F7] rounded-[3rem] p-16 md:p-24 text-center border border-blue-100/50 shadow-sm'>
            <h2 className='text-4xl md:text-6xl font-[900] text-[#111111] mb-8 leading-[1.1] tracking-tighter'>
              Stop Rewatching Meetings <br className='hidden md:block' />
              Start Taking Action
            </h2>

            <p className='text-[#3B82F6] font-extrabold text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed'>
              Let AI Handle The Notes So You Can Focus On Execution
            </p>

            <div className='flex justify-center'>
              <Button
                className='bg-[#3B82F6] text-white px-16 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-blue-400/20 hover:scale-105 transition-transform'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
