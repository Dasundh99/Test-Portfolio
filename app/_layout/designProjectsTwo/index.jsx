'use client';

import { motion } from 'framer-motion';
import { Pencil } from 'lucide-react';

import { ParallaxFade, ParallaxReveal } from '@/components';

const galleryItems = [
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Exploring visual ideas and creative possibilities.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Developing concepts through experimentation.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Investigating materials, forms, and visual language.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Refining ideas through an iterative process.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Connecting research with creative decisions.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Creating thoughtful design outcomes.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Experimenting with different visual approaches.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Building visual narratives through design.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Exploring relationships between image and form.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Turning observations into visual concepts.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Testing new directions and compositions.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    description: 'Developing ideas through a playful process.',
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
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
];

export function DesignProjectsTwo() {
  return (
    <article className='relative bg-neutral-200 py-12 text-black md:py-16 lg:py-20'>
      <div className='container relative'>
        {/* =====================================================
            PAGE TITLE
        ===================================================== */}
        <ParallaxFade>
          <div className='mb-10 md:mb-14 lg:mb-16'>
            <h2
              className='
                overflow-visible
                py-2
                text-[11px]
                uppercase
                leading-[1.1]
                tracking-[0.2em]
                text-black/50
                md:text-xs
              '
            >
              <ParallaxReveal paragraph='Continues . . .' />
            </h2>
          </div>
        </ParallaxFade>

        {/* =====================================================
            IMAGE GRID
        ===================================================== */}
        <div
          className='
            grid
            auto-rows-[90px]
            grid-cols-2
            gap-2
            sm:auto-rows-[120px]
            sm:gap-2
            md:auto-rows-[140px]
            md:grid-cols-4
            lg:auto-rows-[150px]
            lg:gap-3
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
                bg-white
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

              {/* BLACK FADE OVERLAY */}
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
                  right-2
                  top-2
                  z-10
                  text-[8px]
                  tracking-[0.2em]
                  text-white/70
                  transition-colors
                  duration-300
                  group-hover:text-white
                  md:right-3
                  md:top-3
                  md:text-[9px]
                '
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* DESCRIPTION */}
              <div
                className='
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  translate-y-2
                  p-2
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

        {/* =====================================================
            BOTTOM CONTENT
        ===================================================== */}
        <div
          className='
            mt-12
            text-center
            md:mt-16
            lg:mt-20
          '
        >
          <div className='mx-auto flex max-w-2xl flex-col items-center'>
            {/* PENCIL ICON */}
            <ParallaxFade>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 3,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='
                  mb-4
                  flex
                  size-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-black/[0.03]
                  text-black/45
                  transition-colors
                  duration-300
                  hover:border-black/20
                  hover:bg-black/[0.06]
                  hover:text-black
                '
              >
                <Pencil size={16} strokeWidth={1.4} />
              </motion.div>
            </ParallaxFade>

            {/* TITLE */}
            <ParallaxFade>
              <div
                className='
                  overflow-visible
                  py-1
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-black
                  md:text-sm
                '
              >
                <ParallaxReveal paragraph='Designing Through Exploration' />
              </div>
            </ParallaxFade>

            {/* DESCRIPTION */}
            <ParallaxFade>
              <div
                className='
                  mt-3
                  max-w-xl
                  overflow-visible
                  py-1
                  text-[11px]
                  leading-[1.75]
                  text-black/45
                  md:text-xs
                '
              >
                <ParallaxReveal paragraph='A collection of visual experiments, material studies, and creative explorations developed through observation, experimentation, and an ongoing process of making.' />
              </div>
            </ParallaxFade>
          </div>
        </div>
      </div>
    </article>
  );
}
