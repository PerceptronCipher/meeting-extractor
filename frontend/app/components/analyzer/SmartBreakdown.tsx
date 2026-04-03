// 'use client'

// import React from 'react'
// import { CheckCircle, MessageSquare, Users, AlertCircle } from 'lucide-react'

// interface BreakdownProps {
//   data: {
//     summary: string
//     action_items: string[]
//     decisions: string[]
//     owners: string[]
//     deadlines: string[]
//   }
// }

// export default function SmartBreakdown({ data }: BreakdownProps) {
//   return (
//     <div className='max-w-7xl mx-auto py-20 px-6'>
//       <div className='text-center mb-12'>
//         <h2 className='text-4xl font-black text-[#111111] mb-2'>
//           Smart Meeting Breakdown
//         </h2>
//         <p className='text-slate-500 font-medium'>Key Discussion Points</p>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
//         {/* Action Items */}
//         <div className='bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow'>
//           <div className='w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#3B82F6]'>
//             <CheckCircle size={24} />
//           </div>
//           <h3 className='text-xl font-bold text-slate-900 mb-6'>
//             Action Items
//           </h3>
//           <ul className='space-y-4'>
//             {data.action_items.map((item, i) => (
//               <li
//                 key={i}
//                 className='flex gap-3 text-sm text-slate-600 font-medium leading-relaxed'
//               >
//                 <span className='text-[#3B82F6]'>•</span> {item}
//               </li>
//             ))}
//           </ul>
//           <div className='mt-8 pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest'>
//             <span>Deadline: {data.deadlines[0] || 'TBD'}</span>
//           </div>
//         </div>

//         {/* Decisions Made */}
//         <div className='bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow'>
//           <div className='w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#3B82F6]'>
//             <AlertCircle size={24} />
//           </div>
//           <h3 className='text-xl font-bold text-slate-900 mb-6'>
//             Decisions Made
//           </h3>
//           <ul className='space-y-4'>
//             {data.decisions.map((decision, i) => (
//               <li
//                 key={i}
//                 className='flex gap-3 text-sm text-slate-600 font-medium leading-relaxed'
//               >
//                 <span className='text-[#3B82F6]'>✓</span> {decision}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Responsibilities */}
//         <div className='bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow'>
//           <div className='w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#3B82F6]'>
//             <Users size={24} />
//           </div>
//           <h3 className='text-xl font-bold text-slate-900 mb-6'>
//             Responsibilities
//           </h3>
//           <div className='space-y-4'>
//             {data.owners.map((owner, i) => (
//               <div
//                 key={i}
//                 className='flex justify-between items-center text-sm'
//               >
//                 <span className='text-slate-900 font-bold'>{owner}</span>
//                 <span className='text-slate-400 font-medium italic'>
//                   Assignee
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Summary Banner */}
//       <div className='mt-12 bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm'>
//         <h4 className='text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4'>
//           File summary
//         </h4>
//         <p className='text-lg text-slate-700 font-medium leading-relaxed'>
//           {data.summary}
//         </p>
//       </div>
//     </div>
//   )
// }

'use client'

import React from 'react'
import { CheckCircle, MessageSquare, Users, AlertCircle } from 'lucide-react'

interface BreakdownProps {
  data: {
    summary: string
    action_items: string[]
    decisions: string[]
    owners: string[]
    deadlines: string[]
  }
}

export default function SmartBreakdown({ data }: BreakdownProps) {
  return (
    <div className='max-w-[1440px] mx-auto py-32 px-6 md:px-16 lg:px-24'>
      <div className='text-center mb-20'>
        <h2 className='text-4xl md:text-5xl font-black text-[#111111] mb-4 tracking-tighter uppercase'>
          Smart Meeting Breakdown
        </h2>
        <p className='text-slate-500 font-bold tracking-widest text-xs uppercase'>
          Key Discussion Points
        </p>
      </div>

      {/* Grid: 2 columns on small screens, 3 on large */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {/* Action Items */}
        <div className='col-span-1 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300'>
          <div className='w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-[#3B82F6]'>
            <CheckCircle size={26} />
          </div>
          <h3 className='text-2xl font-black text-slate-900 mb-6 tracking-tight'>
            Action Items
          </h3>
          <ul className='space-y-4'>
            {data.action_items.map((item, i) => (
              <li
                key={i}
                className='flex gap-3 text-base text-slate-600 font-semibold leading-relaxed'
              >
                <span className='text-[#3B82F6]'>•</span> {item}
              </li>
            ))}
          </ul>
          <div className='mt-10 pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest'>
            <span>Deadline: {data.deadlines[0] || 'TBD'}</span>
          </div>
        </div>

        {/* Responsibilities */}
        <div className='col-span-1 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300'>
          <div className='w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-[#3B82F6]'>
            <Users size={26} />
          </div>
          <h3 className='text-2xl font-black text-slate-900 mb-6 tracking-tight'>
            Responsibilities
          </h3>
          <div className='space-y-5'>
            {data.owners.map((owner, i) => (
              <div
                key={i}
                className='flex justify-between items-center text-base border-b border-slate-50 pb-2 last:border-0'
              >
                <span className='text-slate-900 font-extrabold'>{owner}</span>
                <span className='text-slate-400 font-bold text-xs uppercase tracking-tighter'>
                  Assignee
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decisions Made - Spans 2 cols on mobile/tablet, 1 on desktop */}
        <div className='col-span-2 lg:col-span-1 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300'>
          <div className='w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-[#3B82F6]'>
            <AlertCircle size={26} />
          </div>
          <h3 className='text-2xl font-black text-slate-900 mb-6 tracking-tight'>
            Decisions Made
          </h3>
          <ul className='space-y-5'>
            {data.decisions.map((decision, i) => (
              <li
                key={i}
                className='flex gap-4 text-lg text-slate-700 font-bold leading-relaxed'
              >
                <span className='text-[#3B82F6]'>✓</span> {decision}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Summary Banner */}
      <div className='mt-16 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm'>
        <h4 className='text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6'>
          Meeting summary
        </h4>
        <p className='text-xl text-slate-700 font-semibold leading-[1.6] max-w-5xl'>
          {data.summary}
        </p>
      </div>
    </div>
  )
}