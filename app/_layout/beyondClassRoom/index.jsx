'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Palette,
  Users,
} from 'lucide-react';

import { ParallaxFade, ParallaxReveal } from '@/components';

const galleryItems = [
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: GraduationCap,
    description: 'Learning through experiences beyond traditional classrooms.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Users,
    description: 'Connecting with people, ideas, and different perspectives.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: MessageCircle,
    description: 'Learning through conversations, collaboration, and exchange.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Lightbulb,
    description: 'Discovering new ideas through curiosity and exploration.',
  },
];

const bottomItems = [
  {
    icon: Users,
    title: 'Learning Together',
    description:
      'Sharing experiences and perspectives creates opportunities for everyone to learn from one another.',
  },
  {
    icon: Lightbulb,
    title: 'Exploring Ideas',
    description:
      'Curiosity encourages me to question, experiment, and discover new ways of understanding.',
  },
  {
    icon: Palette,
    title: 'Creative Growth',
    description:
      'Every project and experience becomes a chance to develop new skills and creative approaches.',
  },
];

const featuredImage = {
  image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
  icon: BookOpen,
  description: 'Every experience becomes an opportunity to learn and grow.',
};

export function BeyondClassRoom() {
  return (
    <article className='container relative py-12 md:py-16 lg:py-20'>
      {/* =====================================================
          TOP SECTION
          LEFT 33% / RIGHT 67%
      ===================================================== */}

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-[33%_67%] lg:gap-0'>
        {/* =================================================
            LEFT COLUMN — 33%
            EXACTLY 1 IMAGE
        ================================================= */}

        <div className='lg:pr-6 xl:pr-10'>
          <ParallaxFade>
            <h2
              className='
                max-w-sm
                text-4xl
                font-black
                uppercase
                leading-[0.92]
                tracking-tight
                text-black
                md:text-5xl
                lg:text-[3.6vw]
              '
            >
              <ParallaxReveal paragraph='Learning Beyond the Classroom' />
            </h2>
          </ParallaxFade>

          <ParallaxFade>
            <p
              className='
                mt-5
                max-w-sm
                text-sm
                leading-relaxed
                text-black/55
                md:mt-6
                md:text-base
              '
            >
              Learning does not end when the classroom does. Every experience,
              conversation, collaboration, and creative challenge can become an
              opportunity to discover something new and develop a deeper
              understanding of the world.
            </p>
          </ParallaxFade>

          {/* FEATURED IMAGE — ONLY ONE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='
              group
              relative
              mt-8
              aspect-[4/3]
              overflow-hidden
              bg-black/5
              md:mt-10
            '
          >
            <img
              src={featuredImage.image}
              alt={featuredImage.description}
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

            <div
              className='
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
                opacity-80
                transition-opacity
                duration-500
                group-hover:opacity-100
              '
            />

            <span
              className='
                absolute
                right-4
                top-4
                text-[9px]
                font-medium
                tracking-[0.2em]
                text-white/70
              '
            >
              01
            </span>

            <div className='absolute inset-x-0 bottom-0 p-4 md:p-5'>
              <div className='flex items-start gap-3'>
                <div
                  className='
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-white/30
                    bg-white/10
                    backdrop-blur-sm
                  '
                >
                  <BookOpen
                    size={15}
                    strokeWidth={1.5}
                    className='text-white'
                  />
                </div>

                <p
                  className='
                    max-w-xs
                    pt-1
                    text-xs
                    leading-relaxed
                    text-white/90
                    md:text-sm
                  '
                >
                  {featuredImage.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            RIGHT COLUMN — 67%
            EXACTLY 4 IMAGES
        ================================================= */}

        <div className='lg:pl-6 xl:pl-10'>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4'>
            {galleryItems.slice(0, 4).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`gallery-image-${index}`}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: 'easeOut',
                  }}
                  className='
                    group
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    bg-black/5
                  '
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
                      via-black/20
                      to-transparent
                      opacity-80
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    '
                  />

                  {/* NUMBER */}
                  <span
                    className='
                      absolute
                      right-4
                      top-4
                      text-[9px]
                      font-medium
                      tracking-[0.2em]
                      text-white/70
                    '
                  >
                    0{index + 2}
                  </span>

                  {/* CONTENT */}
                  <div className='absolute inset-x-0 bottom-0 p-4 md:p-5'>
                    <div className='flex items-start gap-3'>
                      <div
                        className='
                          flex
                          size-8
                          shrink-0
                          items-center
                          justify-center
                          border
                          border-white/30
                          bg-white/10
                          backdrop-blur-sm
                        '
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.5}
                          className='text-white'
                        />
                      </div>

                      <p
                        className='
                          max-w-xs
                          pt-1
                          text-xs
                          leading-relaxed
                          text-white/90
                          md:text-sm
                        '
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SECTION
          EXACTLY 3 COLUMNS
          NO IMAGES
      ===================================================== */}

      <div
        className='
          mt-10
          grid
          grid-cols-1
          border-t
          border-black/10
          md:grid-cols-3
        '
      >
        {bottomItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className='
                border-b
                border-black/10
                px-0
                py-6
                md:border-b-0
                md:border-r
                md:px-6
                md:py-7
                first:md:pl-0
                last:md:border-r-0
                last:md:pr-0
              '
            >
              {/* ICON + NUMBER */}
              <div className='flex items-center justify-between'>
                <Icon size={19} strokeWidth={1.5} className='text-black' />

                <span
                  className='
                    text-[9px]
                    font-medium
                    tracking-[0.2em]
                    text-black/35
                  '
                >
                  0{index + 1}
                </span>
              </div>

              {/* TITLE */}
              <h3
                className='
                  mt-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-tight
                  text-black
                  md:text-sm
                '
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className='
                  mt-2
                  max-w-sm
                  text-xs
                  leading-relaxed
                  text-black/50
                  md:text-sm
                '
              >
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </article>
  );
}
