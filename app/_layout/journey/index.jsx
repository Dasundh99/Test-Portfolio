'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Award, BookOpen, GraduationCap, X } from 'lucide-react';
import Image from 'next/image';

import { ParallaxFade, ParallaxReveal } from '@/components';

export function Journey() {
  const containerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const educationItems = [
    {
      number: '01',
      icon: GraduationCap,
      title: 'Bachelor Of Design',
      subtitle: 'Undergraduate Education',
      description:
        'The foundation of my academic journey, where I developed a strong understanding of my field while building the curiosity and discipline to keep learning.',
      details:
        'This stage established the creative and academic foundation of my design practice. Through studio work, research, experimentation, and critical thinking, I developed a deeper understanding of design principles and their application.',
      highlights: [
        'Developed strong foundations in design theory and practice',
        'Explored creative research and visual communication',
        'Built practical skills through studio-based learning',
      ],
    },
    {
      number: '02',
      icon: BookOpen,
      title: "Master's Degree",
      subtitle: 'Advanced Education',
      description:
        'An important step in deepening my knowledge, exploring new perspectives, and developing a more focused academic and professional direction.',
      details:
        'Advanced study provided an opportunity to explore design from a more analytical and research-oriented perspective. It encouraged independent thinking, experimentation, and the development of a more defined professional identity.',
      highlights: [
        'Expanded knowledge through advanced research',
        'Explored contemporary design perspectives',
        'Strengthened analytical and critical-thinking skills',
      ],
    },
    {
      number: '03',
      icon: Award,
      title: 'Teaching Certificate',
      subtitle: 'Professional Development',
      description:
        'A milestone that strengthened my ability to share knowledge, communicate ideas clearly, and support others throughout their own learning journey.',
      details:
        'Professional development in teaching strengthened my approach to education and communication. It helped me understand how creative knowledge can be shared effectively while encouraging students to develop their own ideas and perspectives.',
      highlights: [
        'Developed effective teaching and communication approaches',
        'Strengthened student-focused learning methods',
        'Connected academic knowledge with practical learning',
      ],
    },
  ];

  const activeItem =
    selectedItem !== null ? educationItems[selectedItem] : null;

  useEffect(() => {
    if (selectedItem !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          JOURNEY SECTION
      ===================================================== */}
      <section
        ref={containerRef}
        className='relative z-10 overflow-hidden bg-neutral-200 px-3 text-black'
      >
        <div className='bg-neutral-200'>
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
                bg-black/[0.025]
                blur-[100px]
              '
            />

            {/* LEFT */}
            <div className='relative min-w-0'>
              {/* Section Label */}
              <ParallaxFade>
                <div className='mb-2 flex items-center gap-4'>
                  <span
                    className='
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-black/40
                    '
                  >
                    Academic Journey
                  </span>
                </div>
              </ParallaxFade>

              {/* Main Heading */}
              <ParallaxFade>
                <h2
                  className='
                    max-w-3xl
                    overflow-visible
                    py-[0.08em]
                    text-[clamp(3rem,5vw,4rem)]
                    uppercase
                    leading-none
                    tracking-[-0.04em]
                    text-black
                  '
                >
                  <ParallaxReveal paragraph='Where My Journey Began.' />
                </h2>
              </ParallaxFade>

              {/* Description */}
              <ParallaxFade>
                <p
                  className='
                    mt-8
                    max-w-lg
                    text-[14px]
                    font-normal
                    leading-[1.8]
                    text-black/60
                    md:mt-10
                  '
                >
                  A journey built through years of continuous learning, academic
                  exploration, and intellectual growth, driven by curiosity and
                  a constant desire to discover, understand, and transform
                  knowledge into meaningful experiences.
                </p>
              </ParallaxFade>
            </div>

            {/* =====================================================
                RIGHT IMAGE
            ===================================================== */}
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
              <div
                className='
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-black
                '
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
                    object-cover
                    grayscale
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  '
                  sizes='(max-width: 768px) 100vw, 340px'
                />

                <div className='pointer-events-none absolute inset-0 bg-black/25' />
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              EDUCATION SECTION
          ===================================================== */}
          <div
            className='
              relative
              bg-neutral-200
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
              <ParallaxFade>
                <div className='mb-7 flex items-end justify-between'>
                  <h3
                    className='
                      overflow-visible
                      py-[0.04em]
                      text-[clamp(1.75rem,3vw,2rem)]
                      leading-[1.15]
                      tracking-[-0.03em]
                      text-black
                    '
                  >
                    <ParallaxReveal paragraph='Learning never stops.' />
                  </h3>

                  <span
                    className='
                      hidden
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-black/30
                      md:block
                    '
                  >
                    Education / 01—03
                  </span>
                </div>
              </ParallaxFade>

              {/* =================================================
                  THREE WHITE CARDS
              ================================================= */}
              <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                {educationItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.number}
                      className='
                        group
                        relative
                        flex
                        min-h-[310px]
                        flex-col
                        overflow-hidden
                        rounded-xl
                        border
                        border-black/5
                        bg-white
                        p-6
                        text-black
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-black/10
                        hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                        md:p-7
                      '
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
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {/* TOP-LEFT CIRCLE ANIMATION */}
                      <div
                        className='
                          pointer-events-none
                          absolute
                          -left-10
                          -top-10
                          z-0
                          size-20
                          rounded-full
                          bg-black/[0.035]
                          opacity-0
                          transition-all
                          duration-700
                          ease-out
                          group-hover:scale-[2.8]
                          group-hover:opacity-100
                        '
                      />

                      {/* CARD CONTENT */}
                      <div className='relative z-10 flex h-full flex-1 flex-col'>
                        {/* CARD TOP */}
                        <div className='flex items-start justify-between'>
                          <span
                            className='
                              text-[9px]
                              tracking-[0.2em]
                              text-black/30
                              transition-colors
                              duration-300
                              group-hover:text-black/60
                            '
                          >
                            {item.number}
                          </span>

                          <div
                            className='
                              flex
                              size-9
                              shrink-0
                              items-center
                              justify-center
                              text-black/35
                              transition-all
                              duration-500
                              group-hover:text-black
                            '
                          >
                            <Icon size={17} strokeWidth={1.2} />
                          </div>
                        </div>

                        {/* DIVIDER */}
                        <div
                          className='
                            mt-7
                            h-px
                            w-full
                            bg-black/[0.08]
                          '
                        />

                        {/* CARD CONTENT */}
                        <div className='flex flex-1 flex-col pt-7'>
                          <div className='mb-3 flex items-center gap-3'>
                            <p
                              className='
                                text-[9px]
                                uppercase
                                tracking-[0.2em]
                                text-black/35
                              '
                            >
                              {item.subtitle}
                            </p>
                          </div>

                          {/* CARD TITLE */}
                          <ParallaxFade>
                            <h3
                              className='
                                mb-4
                                overflow-visible
                                py-[0.05em]
                                text-[clamp(1.25rem,1.8vw,1.55rem)]
                                leading-[1.1]
                                tracking-[-0.035em]
                                text-black
                              '
                            >
                              <ParallaxReveal paragraph={item.title} />
                            </h3>
                          </ParallaxFade>

                          {/* CARD DESCRIPTION */}
                          <ParallaxFade>
                            <p
                              className='
                                max-w-[360px]
                                text-[12px]
                                leading-[1.7]
                                text-black/50
                                transition-colors
                                duration-500
                                group-hover:text-black/70
                              '
                            >
                              {item.description}
                            </p>
                          </ParallaxFade>
                        </div>

                        {/* BOTTOM ACTION */}
                        <div
                          className='
                            mt-7
                            flex
                            shrink-0
                            items-center
                            justify-between
                            border-t
                            border-black/[0.08]
                            pt-4
                          '
                        >
                          <span
                            className='
                              text-[8px]
                              uppercase
                              tracking-[0.2em]
                              text-black/25
                              transition-colors
                              duration-300
                              group-hover:text-black/45
                            '
                          >
                            View details
                          </span>

                          <button
                            type='button'
                            aria-label={`View more details about ${item.title}`}
                            onClick={() => setSelectedItem(index)}
                            className='
                              flex
                              size-9
                              shrink-0
                              cursor-pointer
                              items-center
                              justify-center
                              border
                              border-black/[0.12]
                              text-black/40
                              transition-all
                              duration-300
                              ease-out
                              hover:border-black
                              hover:bg-black
                              hover:text-white
                              focus:outline-none
                              focus:ring-1
                              focus:ring-black/30
                            '
                          >
                            <ArrowUpRight
                              size={16}
                              strokeWidth={1.2}
                              className='
                                transition-transform
                                duration-300
                                ease-out
                                group-hover:-translate-y-[2px]
                                group-hover:translate-x-[2px]
                              '
                            />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>

          {/* BOTTOM SPACE */}
          <div className='h-[30px] w-screen bg-neutral-200' />
        </div>
      </section>

      {/* =====================================================
          DETAILS MODAL
      ===================================================== */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className='
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/90
              px-4
              py-6
              backdrop-blur-md
              sm:px-6
            '
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onMouseDown={event => {
              if (event.target === event.currentTarget) {
                setSelectedItem(null);
              }
            }}
          >
            <motion.div
              role='dialog'
              aria-modal='true'
              aria-labelledby='journey-modal-title'
              className='
                relative
                my-auto
                w-full
                max-w-[760px]
                overflow-hidden
                border
                border-white/[0.14]
                bg-[#090909]
                shadow-[0_25px_100px_rgba(0,0,0,0.7)]
              '
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseDown={event => {
                event.stopPropagation();
              }}
            >
              {/* MODAL TOP BAR */}
              <div
                className='
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.08]
                  px-6
                  py-5
                  sm:px-8
                '
              >
                <div className='flex items-center gap-4'>
                  <span
                    className='
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                    '
                  >
                    Academic Journey
                  </span>

                  <span className='h-px w-6 bg-white/20' />

                  <span
                    className='
                      text-[10px]
                      tracking-[0.15em]
                      text-white/30
                    '
                  >
                    {activeItem.number}
                  </span>
                </div>

                <button
                  type='button'
                  aria-label='Close details'
                  onClick={() => setSelectedItem(null)}
                  className='
                    flex
                    size-9
                    cursor-pointer
                    items-center
                    justify-center
                    border
                    border-white/[0.1]
                    text-white/45
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                    focus:outline-none
                  '
                >
                  <X size={16} strokeWidth={1.2} />
                </button>
              </div>

              {/* MODAL CONTENT */}
              <div className='px-6 py-8 sm:p-10'>
                {/* ICON + CATEGORY */}
                <div className='flex items-center gap-4'>
                  <div
                    className='
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/[0.12]
                      text-white/60
                    '
                  >
                    {(() => {
                      const ActiveIcon = activeItem.icon;

                      return <ActiveIcon size={19} strokeWidth={1.2} />;
                    })()}
                  </div>

                  <p
                    className='
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35
                    '
                  >
                    {activeItem.subtitle}
                  </p>
                </div>

                {/* TITLE */}
                <ParallaxFade>
                  <h2
                    id='journey-modal-title'
                    className='
                      mt-7
                      max-w-[620px]
                      overflow-visible
                      py-[0.08em]
                      text-[clamp(2rem,5vw,3.5rem)]
                      leading-none
                      tracking-[-0.045em]
                      text-white
                    '
                  >
                    <ParallaxReveal paragraph={activeItem.title} />
                  </h2>
                </ParallaxFade>

                {/* DIVIDER */}
                <div className='my-8 h-px w-full bg-white/[0.1]' />

                {/* DETAILS */}
                <div className='grid gap-8 md:grid-cols-[1.1fr_0.9fr]'>
                  {/* OVERVIEW */}
                  <ParallaxFade>
                    <div>
                      <p
                        className='
                          mb-4
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-white/30
                        '
                      >
                        Overview
                      </p>

                      <p
                        className='
                          text-[13px]
                          leading-[1.85]
                          text-white/60
                        '
                      >
                        {activeItem.details}
                      </p>
                    </div>
                  </ParallaxFade>

                  {/* HIGHLIGHTS */}
                  <ParallaxFade>
                    <div>
                      <p
                        className='
                          mb-4
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-white/30
                        '
                      >
                        Key Developments
                      </p>

                      <div className='space-y-4'>
                        {activeItem.highlights.map(highlight => (
                          <div key={highlight} className='flex gap-3'>
                            <span
                              className='
                                mt-[7px]
                                size-1
                                shrink-0
                                rounded-full
                                bg-white/50
                              '
                            />

                            <p
                              className='
                                text-[12px]
                                leading-[1.65]
                                text-white/50
                              '
                            >
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ParallaxFade>
                </div>

                {/* MODAL FOOTER */}
                <div
                  className='
                    mt-10
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.08]
                    pt-5
                  '
                >
                  <span
                    className='
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/25
                    '
                  >
                    Continuous Learning
                  </span>

                  <button
                    type='button'
                    onClick={() => setSelectedItem(null)}
                    className='
                      cursor-pointer
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/40
                      transition-colors
                      duration-300
                      hover:text-white
                    '
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
