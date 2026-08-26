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
      <div className='bg-black'>
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div
          className='
            relative
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-1
            items-center
            gap-8
            px-6
            py-10
            sm:px-10
            md:grid-cols-2
            md:gap-10
            md:px-14
            md:py-12
            lg:gap-16
            lg:px-20
            lg:py-14
          '
        >
          {/* Background glow */}
          <div
            className='
              pointer-events-none
              absolute
              left-[-10%]
              top-[15%]
              h-[260px]
              w-[260px]
              rounded-full
              bg-white/[0.025]
              blur-[100px]
            '
          />

          {/* LEFT */}
          <motion.div
            className='relative min-w-0'
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className='mb-2 flex items-center gap-4'>
              <span
                className='
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                '
              >
                Academic Journey
              </span>
            </div>

            {/* TITLE */}
            <h2
              className='
                max-w-3xl
                text-[clamp(3rem,5vw,4rem)]
                uppercase
                leading-[0.94]
                tracking-[-0.04em]
                text-white
              '
            >
              <ParallaxReveal paragraph='Where My Journey Began.' />
            </h2>

            {/* PARAGRAPH */}
            <motion.p
              className='
                mt-4
                max-w-md
                text-[12px]
                leading-[1.65]
                text-white/70
                md:text-[13px]
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

            <motion.div
              className='
                mt-6
                flex
                items-center
                gap-3
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/30
              '
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            />
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className='
              relative
              mx-auto
              w-full
              max-w-[320px]
              md:ml-auto
              md:max-w-[340px]
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
            <div className='relative overflow-hidden bg-black'>
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
                sizes='(max-width: 768px) 100vw, 340px'
              />

              <div className='pointer-events-none absolute inset-0 bg-black/25' />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            EDUCATION
        ===================================================== */}
        <div
          className='
            relative
            bg-black
            px-6
            py-9
            sm:px-10
            md:px-14
            md:py-10
            lg:px-20
            lg:py-12
          '
        >
          <div className='mx-auto max-w-[1600px]'>
            {/* SECTION HEADING */}
            <motion.div
              className='
                mb-6
                flex
                items-end
                justify-between
              '
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
                {/* SLIGHTLY LARGER THAN CARD TITLES */}
                <h3
                  className='
                    text-[clamp(1.75rem,3vw,2rem)]
                    leading-[1.1]
                    tracking-[-0.03em]
                    text-white
                  '
                >
                  Learning never stops.
                </h3>
              </div>
            </motion.div>

            {/* =================================================
                THREE CARDS
            ================================================= */}
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-4'>
              {educationItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.number}
                    className='
                      group
                      relative
                      flex
                      min-h-[280px]
                      flex-col
                      overflow-hidden
                      border
                      border-white/[0.08]
                      bg-white/[0.015]
                      p-5
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-white/[0.18]
                      hover:bg-white/[0.035]
                      md:p-6
                    '
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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* TOP */}
                    <div className='relative mb-7 flex items-start justify-between'>
                      <span
                        className='
                          text-[10px]
                          leading-none
                          tracking-[0.2em]
                          text-white/30
                          transition-colors
                          duration-500
                          group-hover:text-white/60
                        '
                      >
                        {item.number}
                      </span>

                      <div
                        className='
                          flex
                          size-9
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
                        <Icon size={17} strokeWidth={1.3} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className='relative flex flex-1 flex-col'>
                      {/* LABEL */}
                      <p
                        className='
                          mb-2
                          text-[10px]
                          uppercase
                          leading-none
                          tracking-[0.2em]
                          text-white/35
                        '
                      >
                        {item.subtitle}
                      </p>

                      {/* REDUCED CARD TITLE */}
                      <h3
                        className='
                          mb-3
                          overflow-visible
                          py-[0.1em]
                          text-[clamp(1.25rem,2vw,1.5rem)]
                          leading-[1.1]
                          tracking-[-0.03em]
                          text-white
                          [&_*]:!overflow-visible
                        '
                      >
                        <ParallaxReveal paragraph={item.title} />
                      </h3>

                      {/* BODY */}
                      <p
                        className='
                          max-w-md
                          text-[14px]
                          leading-[1.7]
                          text-white/45
                          transition-colors
                          duration-500
                          group-hover:text-white/60
                        '
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* HOVER LINE */}
                    <motion.div
                      className='
                        absolute
                        bottom-0
                        left-0
                        h-px
                        bg-white
                      '
                      initial={{
                        width: '0%',
                      }}
                      whileHover={{
                        width: '100%',
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM CURVE */}
        <div
          className='h-[30px] w-screen bg-black'
          style={{
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>
    </section>
  );
}
