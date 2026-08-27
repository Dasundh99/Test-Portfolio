'use client';

import { motion } from 'framer-motion';

import { ParallaxFade, ParallaxReveal } from '@/components';

const projectItems = [
  {
    number: '01',
    title: 'Denimology',
    description:
      'A research-led exploration of denim examining the relationship between identity, materiality, form, and contemporary fashion through experimental design development.',
  },
  {
    number: '02',
    title: 'Winback',
    description:
      'A strategic fashion design project exploring audience connection through visual communication, narrative development, and considered brand experiences.',
  },
  {
    number: '03',
    title: 'Concealed Strength',
    description:
      'An exploration of hidden qualities and structural possibilities, translating subtle materials, details, and forms into a study of strength beneath the surface.',
  },
];

const galleryItems = [
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Visual research and initial exploration.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Concept development through experimentation.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Material, form, and visual investigation.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Iterative development and refinement.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Research translated into design decisions.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Exploration of alternative visual directions.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Final refinement of the design approach.',
  },
];

const gridClasses = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
];

export function DesignProjects() {
  return (
    <article className='relative overflow-hidden bg-neutral-200 py-16 text-black md:py-20 lg:py-20'>
      <div className='container relative'>
        <div className='grid grid-cols-1 gap-14 lg:grid-cols-[1.55fr_1fr] lg:gap-16 xl:gap-20'>
          {/* =====================================================
              LEFT — VISUAL PROJECT GALLERY
          ===================================================== */}
          <div>
            {/* SECTION HEADER */}
            <ParallaxFade>
              <div className='mb-8 flex items-end justify-between gap-6 md:mb-10'>
                <div>
                  {/* SECTION LABEL */}
                  <span className='mb-7 block text-[10px] uppercase tracking-[0.2em] text-black/40'>
                    Selected Work
                  </span>

                  {/* MAIN TITLE */}
                  <h2
                    className='
                      max-w-3xl
                      overflow-visible
                      py-2
                      text-[clamp(3rem,5vw,4rem)]
                      uppercase
                      leading-[0.94]
                      tracking-[-0.04em]
                      text-black
                    '
                  >
                    <ParallaxReveal paragraph='Design Projects' />
                  </h2>
                </div>
              </div>
            </ParallaxFade>

            {/* =================================================
                GALLERY
            ================================================= */}
            <div
              className='
                grid
                auto-rows-[115px]
                grid-cols-2
                gap-1.5
                sm:auto-rows-[135px]
                md:auto-rows-[145px]
                md:grid-cols-4
                md:gap-2
              '
            >
              {galleryItems.map((item, index) => (
                <motion.div
                  key={`${item.image}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    group
                    relative
                    min-h-0
                    overflow-hidden
                    rounded-xl
                    bg-black/[0.04]
                    ${gridClasses[index]}
                  `}
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.description}
                    className='
                      absolute
                      inset-0
                      size-full
                      object-cover
                      grayscale-[15%]
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    '
                  />

                  {/* DARK GRADIENT OVERLAY */}
                  <div
                    className='
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                      opacity-40
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    '
                  />

                  {/* NUMBER */}
                  <span
                    className='
                      absolute
                      right-3
                      top-3
                      z-10
                      text-[8px]
                      tracking-[0.22em]
                      text-white/45
                      transition-colors
                      duration-500
                      group-hover:text-white/80
                      md:right-4
                      md:top-4
                    '
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* IMAGE LABEL */}
                  <div
                    className='
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      translate-y-2
                      p-3.5
                      opacity-0
                      transition-all
                      duration-500
                      ease-out
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      md:p-4
                    '
                  >
                    <p
                      className='
                        max-w-[220px]
                        text-[9px]
                        leading-[1.6]
                        text-white/90
                        md:text-[10px]
                      '
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT — PROJECT INFORMATION
          ===================================================== */}
          <div className='lg:pt-[5.7rem]'>
            {/* INTRO */}
            <ParallaxFade>
              <div className='mb-8 hidden lg:block'>
                <p
                  className='
                    max-w-sm
                    text-[11px]
                    leading-[1.8]
                    text-black/45
                    md:text-[12px]
                  '
                >
                  A selection of fashion design projects developed through
                  research, experimentation, material exploration, and
                  conceptual development.
                </p>
              </div>
            </ParallaxFade>

            {/* =================================================
                PROJECT CARDS
            ================================================= */}
            <div className='space-y-3'>
              {projectItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-black/5
                    bg-white
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-black/10
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                    md:p-6
                  '
                >
                  {/* SUBTLE HOVER CIRCLE */}
                  <div
                    className='
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      size-28
                      rounded-full
                      bg-black/[0.025]
                      transition-transform
                      duration-700
                      group-hover:scale-[2]
                    '
                  />

                  <div className='relative'>
                    {/* TOP ROW */}
                    <div className='flex items-center justify-between'>
                      {/* PROJECT NUMBER */}
                      <span
                        className='
                          text-[9px]
                          tracking-[0.2em]
                          text-black/30
                          transition-colors
                          duration-300
                          group-hover:text-black/60
                        '
                      >
                        {item.number}
                      </span>

                      {/* PROJECT LABEL */}
                      <span
                        className='
                          text-[8px]
                          uppercase
                          tracking-[0.2em]
                          text-black/25
                          transition-colors
                          duration-300
                          group-hover:text-black/50
                        '
                      >
                        Selected Project
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className='
                        mt-6
                        text-base
                        uppercase
                        leading-tight
                        tracking-[-0.015em]
                        text-black
                        md:text-[17px]
                      '
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className='
                        mt-3
                        max-w-md
                        text-[11px]
                        leading-[1.75]
                        text-black/45
                        md:text-xs
                      '
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
