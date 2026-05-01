'use client'

import React from 'react'
import Link from 'next/link'
import { Share2, Globe } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'How it works', href: '#how-it-works' },
      { name: 'Analyze Meeting', href: '#analyze-meeting' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  }

  return (
    <footer
      id='footer'
      className='bg-[#F8FAFC] pt-24 pb-12 px-6 md:px-16 lg:px-24 border-t border-slate-100'
    >
      <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-20'>
        {/* Brand Column */}
        <div className='col-span-1 md:col-span-1'>
          <Link
            href='/'
            className='text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter inline-block'
          >
            Clutch<span className='text-[#3B82F6]'>AI</span>
          </Link>
          <p className='text-slate-500 text-sm leading-relaxed font-medium max-w-[200px]'>
            From conversation to clear action turn every meeting into structured
            insights, decisions and next steps
          </p>
          <div className='flex gap-4 mt-8'>
            <button
              aria-label='Share'
              className='w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-500 cursor-pointer hover:bg-blue-50 hover:text-[#3B82F6] transition-all'
            >
              <Share2 size={18} />
            </button>
            <button
              aria-label='Website'
              className='w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center text-slate-500 cursor-pointer hover:bg-blue-50 hover:text-[#3B82F6] transition-all'
            >
              <Globe size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Link Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} id={`footer-${title.toLowerCase()}`}>
            <h4 className='font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest'>
              {title}
            </h4>
            <ul className='space-y-4 text-sm text-slate-500 font-medium'>
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='hover:text-[#3B82F6] transition-colors duration-200'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className='max-w-[1440px] mx-auto pt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]'>
        <p>© {currentYear} Meeting notes @BuildOn AI. All rights reserved.</p>
        <div className='flex items-center gap-2'>
          <div className='w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse' />
          <p>Trusted by HR professionals worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
