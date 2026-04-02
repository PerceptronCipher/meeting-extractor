// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Button from '../shared/Button'
// import heroRobot from '../../images/heroRobot.png'

// export default function Hero() {
//   return (
//     <section className='relative w-full pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-white'>
//       <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12'>
//         {/* Left Content */}
//         <div className='flex-1 text-center md:text-left z-10'>
//           <h1 className='text-5xl md:text-6xl lg:text-7xl font-[900] text-[#111111] leading-[1.1] tracking-tight'>
//             Turn meeting into clear action <br />
//             <span className='text-[#3B82F6]'>INSTANTLY...</span>
//           </h1>

//           <p className='mt-8 text-lg text-slate-500 font-medium max-w-[540px] leading-relaxed mx-auto md:mx-0'>
//             Upload audio or paste transcripts and get structured summaries, key
//             decisions and assign action items in seconds.
//           </p>

//           <div className='mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start'>
//             <Link href='#analyze-meeting' className='w-full sm:w-auto'>
//               <Button className='w-full sm:px-10 py-4 bg-[#3B82F6] text-white rounded-xl font-bold shadow-lg shadow-blue-200'>
//                 Upload Meeting
//               </Button>
//             </Link>

//             <Link href='#use-case' className='w-full sm:w-auto'>
//               <Button
//                 variant='secondary'
//                 className='w-full sm:px-10 py-4 bg-[#DCE7F9] text-[#3B82F6] border-none rounded-xl font-bold'
//               >
//                 View use case
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Content: Robot Arm Visual */}
//         <div className='flex-1 relative w-full flex justify-center md:justify-end'>
//           <div className='relative w-full max-w-[500px] aspect-square animate-float'>
//             <Image
//               src={heroRobot}
//               alt='AI Meeting Assistant'
//               fill
//               priority
//               className='object-contain'
//             />

//             {/* Play Button Overlay (Optional Decor) */}
//             <div className='absolute top-10 left-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center'>
//               <div className='w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#3B82F6] border-b-[8px] border-b-transparent ml-1' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../shared/Button'
import heroRobot from '../../images/heroRobot.png'

export default function Hero() {
  return (
    <section className='relative w-full pt-24 pb-16 md:pt-48 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#ECECEC]'>
      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20'>
        {/* Left Content */}
        <div className='flex-1 text-center md:text-left z-10'>
          <h1 className='text-5xl md:text-5xl font-[900] text-[#111111] leading-[1.1] tracking-tight'>
            Turn meeting into clear action <br />
            <span className='text-[#3B82F6]'>INSTANTLY...</span>
          </h1>

          <p className='mt-8 text-lg text-slate-500 font-medium max-w-[540px] leading-relaxed mx-auto md:mx-0'>
            Upload audio or paste transcripts and get structured summaries, key
            decisions and assign action items in seconds.
          </p>

          <div className='mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start'>
            <Link href='#analyze-meeting' className='w-full sm:w-auto'>
              <Button className='w-full sm:px-10 py-4 bg-[#3B82F6] text-white rounded-xl font-bold shadow-lg shadow-blue-200'>
                Upload Meeting
              </Button>
            </Link>

            <Link href='#use-case' className='w-full sm:w-auto'>
              <Button
                variant='secondary'
                className='w-full sm:px-10 py-4 bg-[#DCE7F9] text-[#3B82F6] border-none rounded-xl font-bold'
              >
                View use case
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content: Robot Arm Visual pushed to the back */}
        <div className='flex-1 relative w-full flex justify-center md:justify-end perspective-1000'>
          <div
            className='relative w-full max-w-[420px] aspect-square animate-float 
            /* Push back using translateZ and subtle 3D rotation */
            transform md:translate-z-[-60px] md:-rotate-y-12 transition-transform duration-1000 ease-in-out'
          >
            <Image
              src={heroRobot}
              alt='AI Meeting Assistant'
              fill
              priority
              className='object-contain'
            />

            {/* Play Button Overlay */}
            <div className='absolute top-[-5px] left-[-35px] w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center animate-pulse'>
              <div className='w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#3B82F6] border-b-[8px] border-b-transparent ml-1' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}