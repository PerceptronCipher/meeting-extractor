'use client'

import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility to merge tailwind classes safely
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-[#3B82F6] text-white hover:bg-blue-600',
    secondary: 'bg-[#DCE7F9] text-[#3B82F6] hover:bg-blue-200',
    outline:
      'border-2 border-slate-200 text-slate-600 hover:border-[#3B82F6] hover:text-[#3B82F6]',
  }

  return (
    <button
      className={cn(
        'px-6 py-3 rounded-xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
