'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Wrapper } from '../description/index.styled';

const phrase = 'So, Who am I';

export function Description() {
  return (
    <article className='relative w-full px-3'>
      <div
        className='
          relative
          w-full
          px-6
          pb-4
          pt-12
          sm:px-10
          md:px-14
          md:pb-6
          md:pt-16
          lg:px-20
          lg:pb-8
          lg:pt-20
        '
      >
        <Wrapper>
          {/* Left - Image */}
          <div className='w-full lg:w-1/2'>
            <ParallaxFade>
              <div className='aspect-[4/5] w-full overflow-hidden bg-muted-foreground'>
                <img
                  src='https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/anthony-tran-3Xkms-gMvZg-unsplash.jpg'
                  alt='Profile'
                  className='size-full object-cover'
                />
              </div>
            </ParallaxFade>
          </div>

          {/* Right - Content */}
          <div className='flex w-full flex-1 flex-col items-center justify-center text-center lg:w-1/2 lg:ps-16'>
            {/* Heading */}
            <h2 className='max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.98] tracking-[-0.045em] text-black'>
              <ParallaxReveal paragraph={phrase} />
            </h2>

            {/* Description */}
            <ParallaxFade>
              <Balancer
                as='p'
                className='mt-5 max-w-xl text-sm leading-relaxed md:text-base'
              >
                I’m a passionate fashion designer who transforms ideas into
                expressive and contemporary designs. I’m inspired by culture,
                creativity, and the beauty of individuality, with a focus on
                creating pieces that feel both distinctive and timeless. My work
                combines thoughtful details, modern aesthetics, and a strong
                sense of personal expression.
              </Balancer>
            </ParallaxFade>

            {/* About Button */}
            <motion.div
              whileInView={{ y: '-10%' }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-8 flex justify-center'
            >
              <Link href='/about'>
                <MagneticButton variant='ghost' size='md' className='px-5'>
                  About Me
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </Wrapper>
      </div>
    </article>
  );
}
