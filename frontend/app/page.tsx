'use client'

import Link from 'next/link'
import { Sparkles, ArrowRight, Shield, Zap, Cpu } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className='min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 overflow-hidden relative'>
      {/* 🏛️ Subtle Background - Reduced Blur and Intensity */}
      <div className='absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px]' />
      <div className='absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]' />

      <div className='max-w-2xl w-full text-center space-y-8 relative z-10'>
        {/* 🏛️ Minimalist Badge */}
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass/50 text-[9px] font-bold tracking-[0.15em] text-primary/80 uppercase'>
          <Zap size={10} /> Powered by BuildON
        </div>

        {/* 🏛️ Hero Section - Scaled Down for Sophistication */}
        <div className='space-y-3'>
          <h1 className='uppercase text-4xl md:text-5xl font-black tracking-tight leading-tight'>
            meeting<span className='text-primary'>.</span>extractor
          </h1>
          <p className='text-secondary text-sm md:text-base max-w-lg mx-auto font-medium leading-relaxed opacity-80'>
            Convert chaotic audio and raw transcripts into
            <span className='text-foreground'> structured intelligence</span>.
            The professional standard for high-output governance.
          </p>
        </div>

        {/* 🏛️ Professional Intro - Tightened & Focused */}
        <div className='max-w-md mx-auto py-5 border-y border-glass-border/50'>
          <p className='text-[11px] text-secondary/70 leading-relaxed font-mono uppercase tracking-wide'>
            A neural-first engine designed to isolate action items and summarize
            executive decisions with zero latency.
            <span className='text-primary/80 ml-1 font-bold'>
              Verified Precision.
            </span>
          </p>
        </div>

        {/* 🏛️ CTA Group - Refined Button Sizing */}
        <div className='flex flex-col sm:flex-row gap-3 justify-center items-center pt-2'>
          <Link
            href='/extractor'
            className='group px-7 py-3 bg-primary text-white rounded-xl font-bold text-[11px] tracking-widest flex items-center gap-2 hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-primary/10'
          >
            LAUNCH_TERMINAL
            <ArrowRight
              className='group-hover:translate-x-1 transition-transform'
              size={14}
            />
          </Link>
          <button className='px-7 py-3 border border-glass-border bg-glass/20 rounded-xl font-bold text-[11px] tracking-widest hover:bg-white/5 transition-all text-secondary'>
            DOCUMENTATION
          </button>
        </div>

        {/* 🏛️ Tech Specs - Clean & Minimal */}
        <div className='grid grid-cols-3 gap-4 pt-10 border-t border-glass-border/30 max-w-sm mx-auto'>
          <div className='space-y-1'>
            <Cpu className='mx-auto text-primary/40' size={18} />
            <p className='text-[9px] font-black tracking-widest uppercase'>
              NEURAL_V4
            </p>
          </div>
          <div className='space-y-1 border-x border-glass-border/30'>
            <Shield className='mx-auto text-primary/40' size={18} />
            <p className='text-[9px] font-black tracking-widest uppercase'>
              ENCRYPTED
            </p>
          </div>
          <div className='space-y-1'>
            <Sparkles className='mx-auto text-primary/40' size={18} />
            <p className='text-[9px] font-black tracking-widest uppercase'>
              DIRECTOR
            </p>
          </div>
        </div>
      </div>

      {/* 🏛️ System Footer */}
      <div className='absolute bottom-6 flex items-center gap-2 text-[7px] font-bold text-secondary/40 tracking-[0.5em] uppercase pointer-events-none'>
        System_Status: Optimal // Location: Global_Node
      </div>
    </main>
  )
}
