'use client';

import { motion } from 'framer-motion';

import { ParallaxFade, ParallaxReveal } from '@/components';

const projectItems = [
  {
    number: '01',
    title: 'DENIMOLOGY',
    description:
      'A denim-focused design project exploring the relationship between identity, material, form, and contemporary fashion through experimental visual concepts.',
  },
  {
    number: '02',
    title: 'WINBACK',
    description:
      'A strategic design project focused on reconnecting with audiences through compelling visual communication, thoughtful storytelling, and purposeful brand experiences.',
  },
  {
    number: '03',
    title: 'CONCEALED STRENGTH',
    description:
      'An exploration of hidden qualities and structural possibilities, transforming subtle details, materials, and forms into a design that communicates strength beneath the surface.',
  },
];

const galleryItems = [
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Exploring visual ideas and creative possibilities.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Developing concepts through experimentation.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Investigating materials, forms, and visual language.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Refining ideas through an iterative process.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Connecting research with creative decisions.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Creating thoughtful design outcomes.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Experimenting with different visual approaches.',
  },
];

export function DesignProjects() {
  return (
    <article className='relative bg-black py-12 text-white md:py-16 lg:py-20'>
      <div className='container relative'>
        {/* =====================================================
            MAIN LAYOUT — 60% / 40%
        ===================================================== */}
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-[60%_40%] lg:gap-0'>
          {/* =====================================================
              LEFT COLUMN — 60%
              RANDOM 12 IMAGE GRID
          ===================================================== */}
          <div className='lg:pr-8 xl:pr-12'>
            <ParallaxFade>
              <h2 className='py-10 text-[4vw] font-black uppercase leading-[1.05] tracking-tight text-white md:text-[4vw]'>
                <ParallaxReveal paragraph='Design Projects' />
              </h2>
            </ParallaxFade>

            {/* 12 IMAGE RANDOM GRID */}
            <div
              className='
                grid
                auto-rows-[120px]
                grid-cols-2
                gap-2
                sm:auto-rows-[140px]
                md:auto-rows-[150px]
                md:grid-cols-4
                md:gap-3
              '
            >
              {galleryItems.map((item, index) => {
                /*
                  Random-looking masonry layout.
                  Different images receive different sizes.
                */
                const gridClasses = [
                  'col-span-2 row-span-2',
                  'col-span-1 row-span-1',
                  'col-span-1 row-span-2',
                  'col-span-1 row-span-1',
                  'col-span-2 row-span-1',
                  'col-span-1 row-span-2',
                  'col-span-1 row-span-1',
                  'col-span-2 row-span-2',
                  'col-span-1 row-span-1',
                  'col-span-1 row-span-2',
                  'col-span-2 row-span-1',
                  'col-span-1 row-span-1',
                ];

                return (
                  <motion.div
                    key={`${item.image}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 25,
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
                      duration: 0.6,
                      delay: index * 0.05,
                      ease: 'easeOut',
                    }}
                    className={`
                      group
                      relative
                      min-h-0
                      overflow-hidden
                      bg-white/5
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
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      '
                    />

                    {/* DARK OVERLAY */}
                    <div
                      className='
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/10
                        to-transparent
                        opacity-60
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      '
                    />

                    {/* IMAGE NUMBER */}
                    <span
                      className='
                        absolute
                        right-3
                        top-3
                        text-[8px]
                        font-medium
                        tracking-[0.2em]
                        text-white/70
                        md:right-4
                        md:top-4
                        md:text-[9px]
                      '
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* IMAGE DESCRIPTION */}
                    <div
                      className='
                        absolute
                        inset-x-0
                        bottom-0
                        p-3
                        md:p-4
                      '
                    >
                      <p
                        className='
                          max-w-xs
                          text-[10px]
                          leading-relaxed
                          text-white/90
                          md:text-xs
                        '
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN — 40%
              THREE ROWS
          ===================================================== */}
          <div className='lg:pl-8 xl:pl-12'>
            <div className='flex flex-col'>
              {projectItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 20,
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
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className='
                    grid
                    grid-cols-[45px_1fr]
                    gap-4
                    border-t
                    border-white/10
                    py-8
                    md:grid-cols-[55px_1fr]
                    md:gap-6
                    md:py-10
                  '
                >
                  {/* NUMBER */}
                  <div>
                    <span
                      className='
                        text-xs
                        font-medium
                        tracking-[0.2em]
                        text-white/35
                        md:text-sm
                      '
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* TITLE + DESCRIPTION */}
                  <div>
                    <h3
                      className='
                        text-sm
                        font-semibold
                        uppercase
                        leading-tight
                        tracking-tight
                        text-white
                        md:text-base
                      '
                    >
                      {item.title}
                    </h3>

                    <p
                      className='
                        mt-3
                        max-w-md
                        text-xs
                        leading-relaxed
                        text-white/50
                        md:text-sm
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
