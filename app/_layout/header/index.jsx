'use client';

import { motion } from 'framer-motion';
import { BookOpen, PencilRuler, Search } from 'lucide-react';
import { Manrope } from 'next/font/google';
import Image from 'next/image';

import { ParallaxFade, ParallaxReveal } from '@/components';

import { slideUp } from './variants';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
});

export function Header() {
  return (
    <motion.header
      className='relative h-screen min-h-[700px] overflow-hidden bg-white text-black'
      variants={slideUp}
      initial='initial'
      animate='enter'
      style={{ perspective: '1400px' }}
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='https://res.cloudinary.com/d2kn5xts/image/upload/v1787821876/pexels-ketut-subiyanto-4965010.jpg'
          alt='Fashion design background'
          fill
          priority
          className='object-cover object-center'
        />
      </div>

      {/* Subtle Image Overlay */}
      <div className='absolute inset-0 z-[1] bg-white/[0.03]' />

      {/* ========================================================= */}
      {/* DECORATIVE 3D RINGS                                      */}
      {/* ========================================================= */}

      <div className='pointer-events-none absolute inset-0 z-[2] overflow-hidden'>
        <motion.div
          initial={{
            opacity: 0,
            rotateX: 65,
            rotateZ: -8,
            y: 80,
          }}
          animate={{
            opacity: 1,
            rotateX: 58,
            rotateZ: -8,
            y: 0,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className='absolute -right-24 top-[22%] h-[360px] w-[360px] rounded-full border border-black/10'
          style={{
            transformStyle: 'preserve-3d',
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            rotateX: 65,
            rotateZ: -8,
            y: 100,
          }}
          animate={{
            opacity: 1,
            rotateX: 58,
            rotateZ: -8,
            y: 0,
          }}
          transition={{
            duration: 1.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className='absolute -right-10 top-[26%] h-[300px] w-[300px] rounded-full border border-black/[0.06]'
        />
      </div>

      {/* ========================================================= */}
      {/* TOP LEFT — NAME                                          */}
      {/* ========================================================= */}

      <div className='absolute left-8 top-8 z-30 md:left-12 md:top-10 lg:left-16'>
        <ParallaxFade>
          <p className='text-[9px] font-medium uppercase tracking-[0.3em] text-black/85 sm:text-[10px]'>
            DULASHI KONGAHAWATHTHA
          </p>
        </ParallaxFade>
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTENT                                             */}
      {/* ========================================================= */}

      <div className='relative z-20 flex h-full items-end justify-end px-8 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20'>
        <div className='relative w-full max-w-[760px]'>
          {/* ===================================================== */}
          {/* WHITE READABILITY GLOW                                */}
          {/* ===================================================== */}

          <div
            className='pointer-events-none absolute -inset-x-16 -inset-y-14 z-[-1] rounded-[50%] blur-[45px] sm:-inset-x-20 sm:-inset-y-16 md:-inset-x-24 md:-inset-y-20'
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.62) 35%, rgba(255,255,255,0.30) 60%, rgba(255,255,255,0) 82%)',
            }}
          />

          {/* Focused White Glow */}
          <div
            className='pointer-events-none absolute right-[-4%] top-[32%] z-[-1] h-[62%] w-[92%] rounded-full blur-[60px]'
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.40) 40%, rgba(255,255,255,0.12) 65%, transparent 80%)',
            }}
          />

          {/* ===================================================== */}
          {/* MAIN TYPOGRAPHY                                       */}
          {/* ===================================================== */}

          <div
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Hi, I'm */}
            <ParallaxFade>
              <p className='mb-2 text-right text-[17px] font-light uppercase tracking-[0.3em] text-black sm:text-[22px]'>
                <ParallaxReveal paragraph="Hi, I'm" />
              </p>
            </ParallaxFade>

            {/* ================================================= */}
            {/* DULASHI                                           */}
            {/* ================================================= */}

            <ParallaxFade>
              <div className='flex justify-end overflow-visible'>
                <h1
                  className={`${manrope.className} select-none overflow-visible whitespace-nowrap py-[0.08em] text-right text-[clamp(3.8rem,9vw,8rem)] uppercase leading-[0.9] tracking-normal text-black`}
                  style={{
                    fontWeight: 300,
                    transform: 'translateZ(40px)',
                  }}
                >
                  <ParallaxReveal paragraph='DULASHI' />
                </h1>
              </div>
            </ParallaxFade>
          </div>

          {/* ===================================================== */}
          {/* DESCRIPTION                                           */}
          {/* ===================================================== */}

          <ParallaxFade>
            <div className='mt-8 flex justify-end md:mt-10'>
              <div className='max-w-[430px] text-right'>
                <p className='text-[12px] font-light leading-[1.8] tracking-[0.015em] text-black/90 sm:text-[13px] md:text-[14px]'>
                  A fashion educator, researcher, and designer exploring the
                  relationship between creative practice, knowledge, culture,
                  materials, and contemporary fashion.
                </p>
              </div>
            </div>
          </ParallaxFade>

          {/* ===================================================== */}
          {/* ROLES                                                 */}
          {/* ===================================================== */}

          <ParallaxFade>
            <div className='mt-8 pt-4 md:mt-10'>
              <div className='flex flex-wrap justify-end gap-x-6 gap-y-3'>
                {/* Lecturer */}
                <div className='flex items-center gap-2'>
                  <BookOpen
                    size={13}
                    strokeWidth={1.4}
                    className='text-black'
                  />

                  <span className='text-[9px] font-medium uppercase tracking-[0.25em] text-black sm:text-[10px]'>
                    Lecturer
                  </span>
                </div>

                {/* Researcher */}
                <div className='flex items-center gap-2'>
                  <Search size={13} strokeWidth={1.4} className='text-black' />

                  <span className='text-[9px] font-medium uppercase tracking-[0.25em] text-black sm:text-[10px]'>
                    Researcher
                  </span>
                </div>

                {/* Designer */}
                <div className='flex items-center gap-2'>
                  <PencilRuler
                    size={13}
                    strokeWidth={1.4}
                    className='text-black'
                  />

                  <span className='text-[9px] font-medium uppercase tracking-[0.25em] text-black sm:text-[10px]'>
                    Designer
                  </span>
                </div>
              </div>
            </div>
          </ParallaxFade>
        </div>
      </div>

      {/* Bottom Left */}
      <ParallaxFade>
        <div className='absolute bottom-8 left-8 z-20 md:bottom-10 md:left-12 lg:left-16' />
      </ParallaxFade>
    </motion.header>
  );
}
