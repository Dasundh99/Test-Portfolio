'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { UserDetails } from './components';

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);

  return (
    <motion.footer
      ref={containerRef}
      className='relative max-h-screen bg-foreground text-background'
      style={{ y: transformY }}
    >
      <div style={{ paddingBlock: 'clamp(5em, 5vh, 5em)' }}>
        <UserDetails transformX={transformX} />
      </div>
    </motion.footer>
  );
}
