'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from '../shared/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-50'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 h-24 flex items-center justify-between relative'>
        {/* Logo (Left) */}
        <Link href='/' className='flex items-center gap-1 z-10'>
          <span className='text-2xl font-black text-[#111111] uppercase tracking-tighter'>
            Clutch<span className='text-[#3B82F6]'>AI</span>
          </span>
        </Link>

        {/* Desktop Links (Centered and Fitted) */}
        <div className='hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12'>
          {['Home', 'Features', 'How it works', 'Use case'].map((item) => (
            <Link
              key={item}
              href={
                item === 'Home'
                  ? '/'
                  : `#${item.toLowerCase().replace(/\s+/g, '-')}`
              }
              className='text-sm font-bold text-slate-500 hover:text-[#3B82F6] transition-all duration-300 uppercase tracking-widest'
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Button (Right) */}
        <div className='hidden md:block z-10'>
          <Link href='#analyze-meeting'>
            <Button className='bg-[#3B82F6] text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-transform'>
              Upload
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden text-slate-900 z-10'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-slate-100 p-8 flex flex-col gap-6 shadow-xl'>
          {['Home', 'Features', 'How it works', 'Use case'].map((item) => (
            <Link
              key={item}
              href={
                item === 'Home'
                  ? '/'
                  : `#${item.toLowerCase().replace(/\s+/g, '-')}`
              }
              onClick={() => setIsOpen(false)}
              className='text-xl font-black text-slate-900 border-b border-slate-50 pb-4'
            >
              {item}
            </Link>
          ))}
          <Link href='#analyze-meeting' onClick={() => setIsOpen(false)}>
            <Button className='w-full bg-[#3B82F6] text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-blue-200'>
              Upload
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}
