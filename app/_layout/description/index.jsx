'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

export function Description() {
  return (
    <article className='container relative py-12 md:py-16 lg:py-20'>
      <div className='grid grid-cols-1 gap-0 lg:grid-cols-[50%_50%]'>
        {/* LEFT — IMAGE */}
        <div className='lg:pr-10 xl:pr-14'>
          <ParallaxFade>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='
                group
                relative
                min-h-[420px]
                w-full
                overflow-hidden
                bg-black/5
                md:min-h-[540px]
                lg:min-h-[620px]
              '
            >
              <img
                src='https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/anthony-tran-3Xkms-gMvZg-unsplash.jpg'
                alt='Fashion design portrait'
                className='
                  absolute
                  inset-0
                  size-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-[1.04]
                '
              />

              <div className='absolute inset-0 bg-black/[0.04]' />
            </motion.div>
          </ParallaxFade>
        </div>

        {/* RIGHT — CONTENT */}
        <div className='mt-10 flex flex-col lg:mt-0 lg:pl-10 xl:pl-14'>
          {/* Small Label */}
          <ParallaxFade>
            <p className='mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-black/40'>
              A little about me
            </p>
          </ParallaxFade>

          {/* Heading */}
          <ParallaxFade>
            <h2
              className='
                max-w-3xl
                text-[clamp(2.75rem,5vw,4.5rem)]
                font-black
                uppercase
                leading-[0.92]
                -tracking-wider
                text-black
              '
            >
              <ParallaxReveal paragraph='So, Who am I' />
            </h2>
          </ParallaxFade>

          {/* Description */}
          <ParallaxFade>
            <Balancer
              as='p'
              className='
                mt-8
                max-w-lg
                text-sm
                leading-[1.8]
                text-black/55
                md:mt-10
                md:text-[15px]
              '
            >
              I’m a passionate fashion designer who transforms ideas into
              expressive and contemporary designs. I’m inspired by culture,
              creativity, and the beauty of individuality, with a focus on
              creating pieces that feel both distinctive and timeless. My work
              combines thoughtful details, modern aesthetics, and a strong sense
              of personal expression.
            </Balancer>
          </ParallaxFade>

          {/* Bottom Area */}
          <div className='mt-10 border-t border-black/10 pt-7 md:mt-12 md:pt-8'>
            {/* Supporting text */}
            <ParallaxFade>
              <div>
                <span className='mb-2 block text-[9px] uppercase tracking-[0.2em] text-black/35'>
                  Discover more
                </span>

                <p className='max-w-[230px] text-[11px] leading-[1.6] text-black/45'>
                  Explore my background, creative journey, and approach to
                  fashion design.
                </p>
              </div>
            </ParallaxFade>

            {/* About Button — centered to the entire right-side div */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: 'easeOut',
              }}
              className='mt-6 flex w-full justify-center'
            >
              <Link href='/about'>
                <MagneticButton variant='ghost' size='md' className='px-5'>
                  About Me
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
}
