'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { ParallaxReveal } from '@/components';

export function Journey() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);

  const journeyItems = [
    {
      number: '01',
      title: 'The Beginning',
      description:
        'Every journey starts with curiosity. This is where my passion, creativity, and desire to create something meaningful first began.',
    },
    {
      number: '02',
      title: 'Finding My Direction',
      description:
        'Through different experiences, ideas, and challenges, I discovered the direction that truly reflects who I am and what I want to create.',
    },
    {
      number: '03',
      title: 'Moving Forward',
      description:
        'Today, I continue to explore, learn, and evolve, turning every experience into another step in my creative journey.',
    },
  ];

  return (
    <section ref={containerRef} className='relative z-10 mt-14 overflow-hidden'>
      <div className='flex flex-col'>
        {/* =========================
            TOP SECTION
            ========================= */}
        <div
          className='
            grid
            grid-cols-1
            items-center
            gap-8
            bg-background
            px-6
            py-10
            sm:px-10
            md:grid-cols-2
            md:gap-12
            md:p-12
            lg:px-20
          '
        >
          {/* =========================
              LEFT — MAIN TITLE
              ========================= */}
          <motion.div
            className='flex min-w-0 items-center'
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className='
                max-w-2xl
                overflow-visible
                py-[0.15em]
                text-5xl
                font-medium
                leading-[1.2]
                tracking-tight

                sm:text-6xl

                md:text-6xl
                lg:text-7xl
                [&_*]:!overflow-visible
              '
            >
              <ParallaxReveal paragraph='Where My Journey Begins' />
            </h2>
          </motion.div>

          {/* =========================
              RIGHT — IMAGE
              ========================= */}
          <motion.div
            className='
              relative
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[260px]
              overflow-hidden
              rounded-3xl
              bg-muted
              md:max-w-[280px]
            '
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src='/images/arto-suraj-43nEgDYNGVk-unsplash.jpg'
              alt='Fashion journey'
              fill
              priority
              className='object-cover'
              sizes='(max-width: 768px) 260px, 280px'
            />
          </motion.div>
        </div>

        {/* =========================
            STATIC JOURNEY CARDS
            ========================= */}
        <div className='relative overflow-hidden bg-background py-16 md:py-24'>
          <div
            className='
              flex
              flex-wrap
              justify-center
              gap-6
              px-6
              md:gap-10
              md:px-12
              lg:px-20
            '
          >
            {journeyItems.map(item => (
              <motion.article
                key={item.number}
                className='
                  flex
                  w-full
                  max-w-[400px]
                  flex-col
                  rounded-[2rem]
                  border
                  border-foreground/10
                  p-8
                  md:p-12
                  lg:w-[30%]
                '
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
              >
                {/* =========================
                    NUMBER
                    ========================= */}
                <motion.span
                  className='
                    mb-10
                    block
                    text-sm
                    leading-none
                    opacity-50
                  '
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 0.5,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  {item.number}
                </motion.span>

                {/* =========================
                    CARD TITLE
                    ========================= */}
                <h3
                  className='
                    mb-7
                    overflow-visible
                    py-[0.15em]
                    text-3xl
                    font-medium
                    leading-[1.2]
                    tracking-tight

                    md:text-4xl

                    lg:text-5xl
                    [&_*]:!overflow-visible
                  '
                >
                  <ParallaxReveal paragraph={item.title} />
                </h3>

                {/* =========================
                    DESCRIPTION
                    ========================= */}
                <motion.p
                  className='
                    max-w-lg
                    text-base
                    leading-[1.7]
                    opacity-60
                    md:text-lg
                  '
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 0.6,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                  }}
                >
                  {item.description}
                </motion.p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =========================
            BOTTOM CURVE
            ========================= */}
        <div
          className='w-screen bg-background'
          style={{
            height: '80px',
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>
    </section>
  );
}
