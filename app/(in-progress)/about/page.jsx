'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ParallaxFade, ParallaxReveal } from '@/components';
import { Transition } from '@/layout';

const approachItems = [
  {
    number: '01',
    title: 'Creative Direction',
    description:
      'Developing visual concepts and creative ideas through fashion, form and contemporary design.',
  },
  {
    number: '02',
    title: 'Craftsmanship',
    description:
      'Exploring materials, construction and detail to create considered and expressive fashion pieces.',
  },
  {
    number: '03',
    title: 'Contemporary Design',
    description:
      'Connecting contemporary aesthetics with ideas, influences and techniques rooted in fashion.',
  },
  {
    number: '04',
    title: 'Education',
    description:
      'Supporting emerging designers through creative thinking, experimentation and practical design development.',
  },
];

const imageUrl =
  'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg';

const titleLines = ['Dulashi', 'Kongahawaththa'];

export default function AboutContent() {
  return (
    <Transition>
      <main className='min-h-screen bg-background text-foreground'>
        <section className='mx-auto w-full max-w-[1400px] px-6 py-8 md:p-10 lg:px-16'>
          {/* =====================================================
              INTRO
          ===================================================== */}
          <div className='pb-8 md:pb-10'>
            {/* TOP ROW */}
            <ParallaxFade>
              <div className='mb-6 flex items-center justify-between'>
                <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  About
                </span>

                <Link
                  href='/'
                  className='
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-border/60
                    px-4
                    py-2.5
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    hover:bg-foreground
                    hover:text-background
                  '
                >
                  <ArrowLeft
                    size={13}
                    strokeWidth={1.5}
                    className='transition-transform duration-300 group-hover:-translate-x-1'
                  />

                  <span>Back to Home</span>
                </Link>
              </div>
            </ParallaxFade>

            {/* MAIN TITLE */}
            <div className='max-w-5xl overflow-visible'>
              {titleLines.map((line, index) => (
                <div key={line} className='overflow-visible'>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className='
                      overflow-visible
                      text-[clamp(3rem,7vw,7.5rem)]
                      font-medium
                      leading-[0.9]
                      tracking-[-0.07em]
                    '
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              ABOUT CONTENT
          ===================================================== */}
          <div className='grid grid-cols-1 gap-8 py-8 md:grid-cols-12 md:gap-10 md:py-10'>
            {/* IMAGE */}
            <motion.div
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
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='md:col-span-4'
            >
              <ParallaxFade>
                <p className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  Fashion Design Lecturer
                </p>
              </ParallaxFade>

              <div className='mt-4 overflow-hidden rounded-xl'>
                <Image
                  src={imageUrl}
                  alt='Dulashi Kongahawaththa - Fashion Design Lecturer'
                  width={700}
                  height={900}
                  className='h-auto w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03]'
                  priority
                />
              </div>
            </motion.div>

            {/* DESCRIPTION */}
            <div className='max-w-2xl md:col-span-7 md:col-start-6'>
              {/* LEAD STATEMENT */}
              <ParallaxFade>
                <p
                  className='
                    text-xl
                    leading-relaxed
                    tracking-[-0.02em]
                    md:text-2xl
                    lg:text-3xl
                  '
                >
                  Exploring fashion through creativity, craftsmanship and
                  contemporary design.
                </p>
              </ParallaxFade>

              {/* BODY CONTENT */}
              <div className='mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base'>
                {[
                  'Dulashi Kongahawaththa is a Fashion Design Lecturer with a passion for creative exploration, thoughtful design and the relationship between fashion, culture and contemporary visual expression.',
                  'Her approach to fashion brings together creative thinking, craftsmanship and an appreciation for detail. Through teaching and design, she encourages experimentation while developing a strong understanding of material, form and construction.',
                  'Her work reflects an interest in creating meaningful fashion experiences that balance creativity with functionality, allowing traditional craftsmanship and contemporary ideas to exist together.',
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
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
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              APPROACH
          ===================================================== */}
          <div className='py-8 md:py-10'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10'>
              {/* IMAGE */}
              <motion.div
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
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='md:col-span-4'
              >
                <ParallaxFade>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    Approach
                  </span>
                </ParallaxFade>

                <div className='mt-4 overflow-hidden rounded-xl'>
                  <Image
                    src={imageUrl}
                    alt='Dulashi Kongahawaththa - Fashion Design Approach'
                    width={700}
                    height={900}
                    className='h-auto w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03]'
                  />
                </div>
              </motion.div>

              {/* APPROACH CARDS */}
              <div className='md:col-span-7 md:col-start-6'>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                  {approachItems.map((item, index) => (
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
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.65,
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
                        hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)]
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
                        {/* NUMBER */}
                        <span className='text-[9px] tracking-[0.2em] text-black/30'>
                          {item.number}
                        </span>

                        {/* TITLE */}
                        <h2 className='mt-3 text-[15px] font-medium leading-tight tracking-[-0.01em] text-black'>
                          {item.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className='mt-2 text-xs leading-[1.6] text-black/50 md:text-[13px]'>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CLOSING STATEMENT
          ===================================================== */}
          <ParallaxFade>
            <div className='pt-8 md:pt-10'>
              <p
                className='
                  max-w-3xl
                  overflow-visible
                  text-[clamp(2rem,4vw,4rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.04em]
                '
              >
                <ParallaxReveal paragraph='Fashion is a continuous conversation between ideas, materials, people and culture.' />
              </p>
            </div>
          </ParallaxFade>
        </section>
      </main>
    </Transition>
  );
}
