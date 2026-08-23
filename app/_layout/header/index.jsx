'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen min-h-[700px] overflow-hidden bg-black text-white'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/ionela-mat-wh6ZDpz65cI-unsplash.jpg'
          alt='Fashion design background'
          fill
          className='object-cover object-center'
          priority
        />

        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/45' />

        {/* Bottom gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent' />

        {/* Side gradient */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20' />
      </div>

      {/* Decorative border */}
      {/* <div className='pointer-events-none absolute inset-5 z-20 border border-white/20 md:inset-8' /> */}

      {/* Top information */}
      <div className='absolute inset-x-8 top-8 z-30 flex items-start justify-between md:inset-x-12 md:top-10'>
        <p className='text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 md:text-xs'>
          DULASHI KONGAHAWATHTHA
        </p>
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex h-full flex-col justify-end pb-10 md:pb-14'>
        {/* Name */}
        <div className='px-8 md:px-12'>
          <h1 className='leading-[0.82] tracking-[-0.055em]'>
            <span className='block pl-1 text-[4vw] font-light uppercase text-white/80 md:text-[4vw]'>
              HI, I&apos;M
            </span>

            <span className='block text-[9vw] font-medium uppercase md:text-[11vw]'>
              DULASHI
            </span>
          </h1>
        </div>

        {/* Professional Introduction */}
        <div className='mt-8 px-8 md:mt-10 md:px-12'>
          <div className='border-t border-white/20 pt-5'>
            {/* Centered Roles + Description */}
            <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
              {/* Roles */}
              <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2'>
                <span className='text-sm font-light uppercase tracking-[0.12em] text-white/80 md:text-base'>
                  Lecturer
                </span>

                <span className='text-white/30'>•</span>

                <span className='text-sm font-light uppercase tracking-[0.12em] text-white/80 md:text-base'>
                  Researcher
                </span>

                <span className='text-white/30'>•</span>

                <span className='text-sm font-light uppercase tracking-[0.12em] text-white/80 md:text-base'>
                  Designer
                </span>
              </div>

              {/* Description */}
              <p className='mt-4 max-w-xl text-sm font-light leading-relaxed tracking-wide text-white/60 md:text-base'>
                Exploring fashion through education, research, and contemporary
                design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
