'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Wrapper } from '../description/index.styled';

const phrase = 'So, Who am I';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        {/* Left - Image */}
        <div className='w-full lg:w-1/2'>
          <ParallaxFade>
            <div className='aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted-foreground'>
              <img
                src='/images/anthony-tran-3Xkms-gMvZg-unsplash.jpg'
                alt='Profile'
                className='size-full object-cover'
              />
            </div>
          </ParallaxFade>
        </div>

        {/* Right - Content */}
        <div className='flex w-full flex-1 flex-col justify-center lg:w-1/2 lg:ps-16'>
          {/* Heading */}
          <h2 className='text-[4vw] font-black uppercase leading-[1.05] tracking-tight text-black md:text-[4vw]'>
            <ParallaxReveal paragraph={phrase} />
          </h2>

          {/* Description */}
          <ParallaxFade>
            <Balancer
              as='p'
              className='mt-4 max-w-xl text-base leading-relaxed lg:text-lg'
            >
              I’m a passionate fashion designer who transforms ideas into
              expressive and contemporary designs. I’m inspired by culture,
              creativity, and the beauty of individuality, with a focus on
              creating pieces that feel both distinctive and timeless. My work
              combines thoughtful details, modern aesthetics, and a strong sense
              of personal expression.
            </Balancer>
          </ParallaxFade>

          {/* About Button */}
          <motion.div
            whileInView={{ y: '-10%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='mt-8 flex justify-center'
          >
            <Link href='/about'>
              <MagneticButton variant='ghost' size='xl' className='px-8'>
                About Me
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </Wrapper>
    </article>
  );
}
