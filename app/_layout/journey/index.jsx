'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';

import { ParallaxReveal } from '@/components';

export function Journey() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);

  const educationItems = [
    {
      number: '01',
      icon: GraduationCap,
      title: 'Bachelor Of Design',
      subtitle: 'Undergraduate Education',
      description:
        'The foundation of my academic journey, where I developed a strong understanding of my field while building the curiosity and discipline to keep learning.',
    },
    {
      number: '02',
      icon: BookOpen,
      title: "Master's Degree",
      subtitle: 'Advanced Education',
      description:
        'An important step in deepening my knowledge, exploring new perspectives, and developing a more focused academic and professional direction.',
    },
    {
      number: '03',
      icon: Award,
      title: 'Teaching Certificate',
      subtitle: 'Professional Development',
      description:
        'A milestone that strengthened my ability to share knowledge, communicate ideas clearly, and support others throughout their own learning journey.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className='relative z-10 overflow-hidden bg-black px-3 text-white'
    >
      <div className='flex flex-col bg-black'>
        {/* HEADER */}
        <div
          className='
            relative
            grid
            grid-cols-1
            items-center
            gap-8
            bg-black
            px-6
            py-12
            sm:px-10
            md:grid-cols-2
            md:gap-12
            md:px-14
            md:py-16
            lg:p-20
          '
        >
          {/* Background glow */}
          <div
            className='
              pointer-events-none
              absolute
              left-[-10%]
              top-[15%]
              h-[300px]
              w-[300px]
              rounded-full
              bg-white/[0.025]
              blur-[100px]
            '
          />

          {/* LEFT — TITLE */}
          <motion.div
            className='relative min-w-0'
            initial={{
              opacity: 0,
              y: 40,
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
                max-w-4xl
                text-[clamp(2.5rem,5vw,4.5rem)]
                font-black
                uppercase
                leading-[0.98]
                tracking-[-0.045em]
                text-white
              '
            >
              <ParallaxReveal paragraph='Where My Journey Began.' />
            </h2>

            <motion.p
              className='
                mt-5
                max-w-md
                text-sm
                leading-relaxed
                text-white/60
                md:text-base
              '
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >
              A journey shaped by continuous learning, academic growth, and the
              pursuit of knowledge.
            </motion.p>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            className='
              relative
              mx-auto
              w-full
              max-w-[350px]
              overflow-hidden
              border
              border-white/10
              bg-black
              md:max-w-[380px]
            '
            initial={{
              opacity: 0,
              y: 40,
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
              src='https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg'
              alt='Academic journey'
              width={1200}
              height={1600}
              priority
              className='
                h-auto
                w-full
                grayscale
                transition-transform
                duration-700
                hover:scale-105
              '
              sizes='(max-width: 768px) 100vw, 380px'
            />

            <div className='pointer-events-none absolute inset-0 bg-black/25' />

            <div className='pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between'>
              <span className='text-[10px] tracking-wider text-white/40'>
                2020 — 2024
              </span>
            </div>
          </motion.div>
        </div>

        {/* EDUCATION TIMELINE */}
        <div
          className='
            relative
            border-t
            border-white/10
            bg-black
            px-6
            py-12
            sm:px-10
            md:px-14
            md:py-16
            lg:p-20
          '
        >
          {/* Section heading */}
          <motion.div
            className='mb-8 flex items-end justify-between'
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
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div>
              <p className='mb-2 text-[10px] uppercase tracking-[0.2em] text-white/40'>
                Academic milestones
              </p>

              <h3 className='text-xl font-light tracking-tight text-white md:text-2xl'>
                Learning never stops.
              </h3>
            </div>
          </motion.div>

          {/* EDUCATION CARDS */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {educationItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  className='
                    group
                    relative
                    flex
                    min-h-[300px]
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.08]
                    bg-white/[0.015]
                    p-6
                    transition-all
                    duration-500
                    hover:border-white/[0.18]
                    hover:bg-white/[0.035]
                    md:p-7
                  '
                  initial={{
                    opacity: 0,
                    y: 40,
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
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >
                  {/* Subtle hover glow */}
                  <div
                    className='
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      size-40
                      rounded-full
                      bg-white/[0.035]
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    '
                  />

                  {/* Top row */}
                  <div className='relative mb-10 flex items-start justify-between'>
                    <span
                      className='
                        text-[10px]
                        font-medium
                        tracking-[0.2em]
                        text-white/30
                        transition-colors
                        duration-500
                        group-hover:text-white/60
                        md:text-xs
                      '
                    >
                      {item.number}
                    </span>

                    <div
                      className='
                        flex
                        size-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.02]
                        text-white/40
                        transition-all
                        duration-500
                        group-hover:border-white/25
                        group-hover:bg-white/[0.05]
                        group-hover:text-white
                      '
                    >
                      <Icon size={18} strokeWidth={1.3} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='relative'>
                    <p
                      className='
                        mb-3
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.22em]
                        text-white/35
                      '
                    >
                      {item.subtitle}
                    </p>

                    <h3
                      className='
                        mb-5
                        overflow-visible
                        py-[0.1em]
                        text-2xl
                        font-light
                        leading-[0.95]
                        tracking-[-0.035em]
                        md:text-3xl
                        [&_*]:!overflow-visible
                      '
                    >
                      <ParallaxReveal paragraph={item.title} />
                    </h3>

                    <p
                      className='
                        max-w-md
                        text-[13px]
                        leading-6
                        text-white/45
                        transition-colors
                        duration-500
                        group-hover:text-white/60
                      '
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom hover line */}
                  <div
                    className='
                      absolute
                      inset-x-6
                      bottom-0
                      h-px
                      origin-left
                      scale-x-0
                      bg-white/50
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-x-100
                      md:inset-x-7
                    '
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CURVE */}
        <div
          className='w-screen bg-black'
          style={{
            height: '40px',
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>
    </section>
  );
}
