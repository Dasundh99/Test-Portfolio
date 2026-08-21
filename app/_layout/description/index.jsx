'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Wrapper } from './index.styled';

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
          <h2 className='text-2xl font-medium lg:text-2xl'>
            <ParallaxReveal paragraph={phrase} />
          </h2>

          <ParallaxFade>
            <Balancer
              as='p'
              className='mt-6 max-w-xl text-base leading-relaxed lg:text-lg'
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
            whileInView={{ y: '-15%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mt-10'
          >
            <Link href='/about' passHref>
              <MagneticButton variant='ghost' size='xl'>
                About me
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </Wrapper>
    </article>
  );
}
