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

const teachingItems = [
  {
    icon: Users,
    number: '01',
    title: 'Learning Together',
    description:
      'Creating an environment where ideas, experiences, and knowledge can be shared openly.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Sharing Ideas',
    description:
      'Helping others discover new perspectives while developing my own understanding through discussion.',
  },
  {
    icon: BookOpen,
    number: '03',
    title: 'Growing Through Teaching',
    description:
      'Teaching becomes a continuous process of learning, reflecting, questioning, and improving together.',
  },
];

const galleryItems = [
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: GraduationCap,
    description: 'Guiding others through new ideas and possibilities.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Users,
    description: 'Learning becomes meaningful when it is shared with others.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: MessageCircle,
    description: 'Encouraging conversations that lead to deeper understanding.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Lightbulb,
    description: 'Turning questions into opportunities for discovery.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Palette,
    description: 'Exploring creative approaches to teaching and learning.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: BookOpen,
    description:
      'Building knowledge through practice, reflection, and experience.',
  },
];

export function Teaching() {
  return (
    <article className='relative bg-black py-12 text-white md:py-16 lg:py-20'>
      <div className='container relative'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[30%_70%] lg:gap-0'>
          {/* =====================================================
              LEFT COLUMN — 30%
          ===================================================== */}
          <div className='lg:pr-8 xl:pr-12'>
            {/* Main Title */}
            <ParallaxFade>
              <h2 className='text-[4vw] font-black uppercase leading-[1.05] tracking-tight text-white md:text-[4vw]'>
                <ParallaxReveal paragraph='Teaching Is Where I Grow Alongside Others' />
              </h2>
            </ParallaxFade>

            {/* Description */}
            <ParallaxFade>
              <p
                className='
                  mt-6
                  max-w-sm
                  text-sm
                  leading-relaxed
                  text-white/55
                  md:text-base
                '
              >
                Teaching is not simply about passing knowledge forward. It is a
                shared process where explaining, listening, questioning, and
                collaborating help everyone grow.
              </p>
            </ParallaxFade>

            {/* =================================================
                THREE TEACHING ROWS
            ================================================= */}
            <div className='mt-10 md:mt-14'>
              {teachingItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
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
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    className='
                      grid
                      grid-cols-[32px_32px_1fr]
                      gap-3
                      border-t
                      border-white/10
                      py-5
                      md:grid-cols-[36px_36px_1fr]
                      md:gap-4
                      md:py-6
                    '
                  >
                    {/* 1st COLUMN — ICON */}
                    <div className='flex items-start pt-0.5'>
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className='text-white'
                      />
                    </div>

                    {/* 2nd COLUMN — NUMBER */}
                    <span
                      className='
                        pt-0.5
                        text-[10px]
                        font-medium
                        tracking-[0.15em]
                        text-white/35
                      '
                    >
                      {item.number}
                    </span>

                    {/* 3rd COLUMN — TITLE + DESCRIPTION */}
                    <div>
                      <h3
                        className='
                          text-xs
                          font-semibold
                          uppercase
                          leading-tight
                          tracking-tight
                          text-white
                          md:text-sm
                        '
                      >
                        {item.title}
                      </h3>

                      <p
                        className='
                          mt-2
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
                );
              })}
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN — 70%
          ===================================================== */}
          <div className='lg:pl-8 xl:pl-12'>
            {/* =================================================
                IMAGE GALLERY — 6 IMAGES
            ================================================= */}
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4'>
              {galleryItems.map((item, index) => {
                const Icon = item.icon;

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
                      bg-white/5
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

                    {/* DARK GRADIENT */}
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

                    {/* IMAGE NUMBER */}
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
                      0{index + 1}
                    </span>

                    {/* IMAGE CONTENT */}
                    <div
                      className='
                        absolute
                        inset-x-0
                        bottom-0
                        p-4
                        md:p-5
                      '
                    >
                      <div className='flex items-start gap-3'>
                        {/* ICON */}
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

                        {/* DESCRIPTION */}
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
      </div>
    </article>
  );
}
