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
    <article className='relative bg-black py-12 text-white md:py-16 lg:py-20'>
      <div className='container relative'>
        {/* PAGE TITLE */}
        <ParallaxFade>
          <div className='mb-10 md:mb-14 lg:mb-16'>
            <h2
              className='
                text-[2vw]
                font-black
                uppercase
                leading-[1.05]
                tracking-tight
                text-white
              '
            >
              <ParallaxReveal paragraph='Continues' />
            </h2>
          </div>
        </ParallaxFade>

        {/* IMAGE GRID */}
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
                y: 30,
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
                delay: index * 0.04,
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

              {/* OVERLAY */}
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
                  font-medium
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
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  md:p-4
                '
              >
                <p
                  className='
                    max-w-xs
                    text-[9px]
                    leading-relaxed
                    text-white/90
                    md:text-xs
                  '
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CONTENT */}
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
                  scale: 1.08,
                  rotate: 5,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className='
                  mb-4
                  flex
                  size-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/55
                  transition-colors
                  duration-300
                  hover:border-white/25
                  hover:bg-white/[0.06]
                  hover:text-white
                '
              >
                <Pencil size={16} strokeWidth={1.4} />
              </motion.div>
            </ParallaxFade>

            {/* TITLE — SAME REVEAL AS "CONTINUES" */}
            <div
              className='
                overflow-hidden
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-white
                md:text-sm
              '
            >
              <ParallaxReveal paragraph='Designing Through Exploration' />
            </div>

            {/* DESCRIPTION — SAME REVEAL STYLE */}
            <div
              className='
                mt-3
                max-w-xl
                overflow-hidden
                text-[11px]
                leading-[1.75]
                text-white/45
                md:text-xs
              '
            >
              <ParallaxReveal paragraph='A collection of visual experiments, material studies, and creative explorations developed through observation, experimentation, and an ongoing process of making.' />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
