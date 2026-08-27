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
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: GraduationCap,
    description: 'Guiding others through new ideas and possibilities.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Users,
    description: 'Learning becomes meaningful when it is shared with others.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: MessageCircle,
    description: 'Encouraging conversations that lead to deeper understanding.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Lightbulb,
    description: 'Turning questions into opportunities for discovery.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Palette,
    description: 'Exploring creative approaches to teaching and learning.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: BookOpen,
    description:
      'Building knowledge through practice, reflection, and experience.',
  },
];

export function Teaching() {
  return (
    <article className='relative bg-neutral-200 py-10 text-black md:py-12 lg:py-16'>
      <div className='container relative'>
        <div className='grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[30%_70%] lg:gap-0'>
          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}
          <div className='flex h-full flex-col lg:pr-8 xl:pr-12'>
            {/* MAIN TITLE */}
            <ParallaxFade>
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
                <ParallaxReveal paragraph='Teaching Is Where I Grow Alongside Others' />
              </h2>
            </ParallaxFade>

            {/* DESCRIPTION */}
            <ParallaxFade>
              <p
                className='
                  mt-5
                  max-w-sm
                  text-[13px]
                  leading-[1.65]
                  text-black/60
                  md:text-[14px]
                '
              >
                Teaching is not simply about passing knowledge forward. It is a
                shared process where explaining, listening, questioning, and
                collaborating help everyone grow.
              </p>
            </ParallaxFade>

            {/* =================================================
                THREE TEACHING CARDS
            ================================================= */}
            <div className='mt-8 space-y-2.5 md:mt-10'>
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
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className='
                      md:p-4.5
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      border-black/5
                      bg-white
                      p-4
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-black/10
                      hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                    '
                  >
                    {/* SUBTLE HOVER ELEMENT */}
                    <div
                      className='
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        size-24
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
                        {/* ICON */}
                        <div
                          className='
                            flex
                            size-8
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-black/10
                            bg-neutral-100
                            transition-all
                            duration-500
                            group-hover:bg-black
                            group-hover:text-white
                          '
                        >
                          <Icon
                            size={15}
                            strokeWidth={1.4}
                            className='transition-colors duration-500'
                          />
                        </div>

                        {/* NUMBER */}
                        <span
                          className='
                            text-[9px]
                            tracking-[0.2em]
                            text-black/30
                          '
                        >
                          {item.number}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3
                        className='
                          mt-3.5
                          text-sm
                          uppercase
                          leading-tight
                          tracking-[-0.01em]
                          text-black
                          md:text-[15px]
                        '
                      >
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className='
                          mt-1.5
                          max-w-sm
                          text-xs
                          leading-[1.6]
                          text-black/50
                          md:text-[13px]
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
              RIGHT COLUMN
          ===================================================== */}
          <div className='flex h-full lg:pl-8 xl:pl-12'>
            {/* IMAGE GALLERY */}
            <div className='grid w-full grid-cols-1 content-start gap-2.5 sm:grid-cols-2 md:gap-3'>
              {galleryItems.map((item, index) => {
                const Icon = item.icon;

                return (
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className='
                      group
                      relative
                      aspect-[4/3]
                      overflow-hidden
                      rounded-xl
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
                        right-3.5
                        top-3.5
                        text-[9px]
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
                        flex
                        justify-center
                        p-2.5
                        md:p-3
                      '
                    >
                      <div
                        className='
                          flex
                          w-fit
                          max-w-full
                          items-center
                          justify-center
                          gap-2
                        '
                      >
                        {/* ICON */}
                        <div
                          className='
                            flex
                            size-6
                            shrink-0
                            items-center
                            justify-center
                          '
                        >
                          <Icon
                            size={12}
                            strokeWidth={1.5}
                            className='text-white'
                          />
                        </div>

                        {/* DESCRIPTION */}
                        <p
                          className='
                            text-center
                            text-[10px]
                            leading-[1.4]
                            text-white/85
                            md:text-[11px]
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
