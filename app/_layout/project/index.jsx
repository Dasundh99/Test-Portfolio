'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { projectOptions } from '@/data';
import { useProjectSlider } from '@/hooks';
import { randomId } from '@/utils';

import { ProjectSlider } from './slider';

export function Project() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);

  const { transformX1, transformX2, transformY } =
    useProjectSlider(containerRef);

  const firstSlider = projectOptions.first.map(({ type, source }) => {
    const id = randomId();

    return <ProjectSlider key={id} type={type} source={source} />;
  });

  const secondSlider = projectOptions.second.map(({ type, source }) => {
    const id = randomId();

    return <ProjectSlider key={id} type={type} source={source} />;
  });

  return (
    <section
      ref={containerRef}
      className='relative z-10 mt-10 overflow-hidden md:mt-14 lg:mt-16'
    >
      <div className='grid items-center'>
        {/* PROJECT SLIDERS */}

        <div className='relative bg-background py-2 md:py-3'>
          {/* FIRST ROW */}

          <motion.div
            className='mb-5 flex gap-5 md:mb-6 md:gap-6'
            style={{
              width: '120vw',
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          {/* SECOND ROW */}

          <motion.div
            className='flex gap-5 md:gap-6'
            style={{
              width: '120vw',
              x: transformX2,
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

        {/* BOTTOM CURVE */}

        <motion.div
          className='w-screen bg-background'
          style={{
            height: transformY,
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>
    </section>
  );
}
