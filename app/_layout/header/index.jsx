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
          src='https://res.cloudinary.com/d2kn5xts/image/upload/v1787580875/ionela-mat-wh6ZDpz65cI-unsplash.jpg'
          alt='Fashion design background'
          fill
          className='object-cover object-center'
          priority
        />

        <div className='absolute inset-0 bg-black/20' />
      </div>

      {/* Top Information */}
      <div className='absolute inset-x-8 top-8 z-30 md:inset-x-12 md:top-10 lg:inset-x-16'>
        <p className='text-[10px] font-medium uppercase tracking-[0.28em] text-white/75 sm:text-[11px]'>
          DULASHI KONGAHAWATHTHA
        </p>
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex h-full flex-col justify-end px-8 pb-10 md:px-12 md:pb-14 lg:px-16 lg:pb-16'>
        {/* Name */}
        <div>
          <p className='mb-2 pl-1 text-[11px] font-light uppercase tracking-[0.28em] text-white/70 sm:text-xs'>
            HI, I&apos;M
          </p>

          <h1 className='text-[clamp(4.5rem,10vw,11rem)] font-medium uppercase leading-[0.78] tracking-[-0.055em]'>
            DULASHI
          </h1>
        </div>

        {/* Introduction */}
        <div className='mt-8 max-w-xl md:mt-10'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
              <span className='text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 sm:text-[11px]'>
                Lecturer
              </span>

              <span className='text-[9px] text-white/40'>•</span>

              <span className='text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 sm:text-[11px]'>
                Researcher
              </span>

              <span className='text-[9px] text-white/40'>•</span>

              <span className='text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 sm:text-[11px]'>
                Designer
              </span>
            </div>

            <p className='max-w-md text-[10px] font-light leading-[1.7] tracking-wide text-white/60 sm:text-[11px] md:text-xs'>
              Exploring fashion through education, research, and contemporary
              design.
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
