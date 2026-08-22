'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  Palette,
  Users,
} from 'lucide-react';

import { ParallaxFade, ParallaxReveal } from '@/components';

const phrase = "What I've Learned Along the Way";

const journey = [
  {
    title: 'Fashion Design Intern',
    duration: '2021 – 2022',
    description:
      'Gained practical experience in design development, visual research, creative problem-solving, and professional collaboration.',
    icon: Palette,
    position: 'top',
  },
  {
    title: 'Assistant Lecturer',
    duration: '2022 – 2023',
    description:
      'Supported academic teaching while developing stronger skills in communication, mentoring, lesson preparation, and student engagement.',
    icon: GraduationCap,
    position: 'bottom',
  },
  {
    title: "Master's Research Scholar",
    duration: '2023 – Present',
    description:
      'Developed research experience through structured inquiry, experimentation, critical analysis, and independent academic work.',
    icon: FlaskConical,
    position: 'top',
  },
  {
    title: 'Research Student Member',
    duration: '2023 – Present',
    description:
      'Contributed to collaborative research activities while strengthening teamwork, academic communication, and problem-solving abilities.',
    icon: Users,
    position: 'bottom',
  },
  {
    title: 'Visiting Lecturer',
    duration: '2024 – Present',
    description:
      'Engaged in teaching and mentoring, translating knowledge into clear learning experiences while supporting students in their academic development.',
    icon: BookOpen,
    position: 'top',
  },
];

export function Learned() {
  return (
    <article className='relative overflow-hidden bg-white py-16 text-black md:py-20'>
      <div className='container relative z-10'>
        {/* HEADER */}
        <div className='mb-16'>
          <ParallaxFade>
            <span className='mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-black/40'>
              Professional & Academic Journey
            </span>
          </ParallaxFade>

          <h2 className='text-[4vw] font-black uppercase leading-[1.05] tracking-tight text-black md:text-[4vw]'>
            <ParallaxReveal paragraph={phrase} />
          </h2>
        </div>

        {/* DESKTOP JOURNEY */}
        <div className='relative hidden lg:block'>
          <div className='relative mx-auto h-[560px] w-full'>
            {/* ROAD */}
            <div className='absolute inset-x-0 top-1/2 z-0 h-[42px] -translate-y-1/2'>
              <div className='absolute inset-0 rounded-full bg-black/[0.035]' />

              <div className='absolute inset-0 rounded-full border border-black/[0.08]' />

              <div className='absolute inset-x-0 top-1/2 border-t border-dashed border-black/15' />

              {/* TRAVELING GIRL */}
              <motion.div
                className='absolute left-0 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2'
                animate={{
                  left: ['0%', '25%', '50%', '75%', '100%'],
                }}
                transition={{
                  duration: 9,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -2, 0, -1, 0],
                  }}
                  transition={{
                    duration: 0.65,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                  className='relative flex flex-col items-center'
                >
                  {/* Hair */}
                  <div className='absolute -top-1.5 size-3 rounded-full bg-black/90' />

                  {/* Head */}
                  <div className='relative z-10 size-2 rounded-full bg-black' />

                  {/* Dress */}
                  <div
                    className='mt-0.5 h-4 w-3 bg-black'
                    style={{
                      clipPath: 'polygon(35% 0, 65% 0, 100% 100%, 0 100%)',
                    }}
                  />

                  {/* Legs */}
                  <div className='relative -mt-0.5 h-2.5 w-3'>
                    <motion.span
                      animate={{
                        rotate: [-25, 25, -25],
                      }}
                      transition={{
                        duration: 0.65,
                        repeat: Infinity,
                      }}
                      className='absolute left-1/2 top-0 h-2.5 w-px origin-top bg-black'
                    />

                    <motion.span
                      animate={{
                        rotate: [25, -25, 25],
                      }}
                      transition={{
                        duration: 0.65,
                        repeat: Infinity,
                      }}
                      className='absolute left-1/2 top-0 h-2.5 w-px origin-top bg-black'
                    />
                  </div>

                  {/* Shadow */}
                  <motion.div
                    animate={{
                      scaleX: [1, 0.65, 1],
                      opacity: [0.15, 0.05, 0.15],
                    }}
                    transition={{
                      duration: 0.65,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }}
                    className='absolute -bottom-1 h-px w-5 bg-black'
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* MILESTONES */}
            <div className='absolute inset-0 grid grid-cols-5'>
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isTop = item.position === 'top';

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: isTop ? -20 : 20,
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
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className='relative h-full'
                  >
                    {/* CONTENT */}
                    <div
                      className={[
                        'absolute left-1/2 z-20',
                        'w-[clamp(150px,13vw,210px)]',
                        '-translate-x-1/2 text-center',
                        isTop
                          ? 'bottom-[calc(50%+82px)]'
                          : 'top-[calc(50%+82px)]',
                      ].join(' ')}
                    >
                      <span className='text-[9px] font-medium uppercase tracking-[0.18em] text-black/35'>
                        {item.duration}
                      </span>

                      <h3 className='mt-2 text-[13px] font-semibold leading-tight tracking-tight xl:text-sm'>
                        {item.title}
                      </h3>

                      <p className='mt-2 text-[10px] leading-[1.65] text-black/50'>
                        {item.description}
                      </p>
                    </div>

                    {/* CONNECTOR */}
                    <div
                      className={[
                        'absolute left-1/2 z-10 w-px',
                        '-translate-x-1/2 bg-black/15',
                        isTop
                          ? 'bottom-[calc(50%+28px)] h-[54px]'
                          : 'top-[calc(50%+28px)] h-[54px]',
                      ].join(' ')}
                    />

                    {/* ICON */}
                    <div className='absolute left-1/2 top-1/2 z-30 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white'>
                      <Icon size={17} strokeWidth={1.5} aria-hidden='true' />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE JOURNEY */}
        <div
          className='relative lg:hidden'
          style={{
            '--timeline-x': '32px',
          }}
        >
          {/* MOBILE ROAD */}
          <div
            className='pointer-events-none absolute inset-y-0 z-0 w-[32px]'
            style={{
              left: 'calc(var(--timeline-x) - 16px)',
            }}
          >
            <div className='absolute inset-0 rounded-full bg-black/[0.035]' />

            <div className='absolute inset-0 rounded-full border border-black/[0.06]' />

            <div className='absolute left-1/2 top-0 h-full -translate-x-1/2 border-l border-dashed border-black/20' />
          </div>

          {/* MOBILE ITEMS */}
          <div className='relative z-10 space-y-8'>
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='relative min-h-[108px]'
                >
                  {/* MOBILE ICON */}
                  <div
                    className='absolute top-4 z-30 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-black/15 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.07)] transition-all duration-300 hover:bg-black hover:text-white'
                    style={{
                      left: 'var(--timeline-x)',
                    }}
                  >
                    <Icon size={13} strokeWidth={1.5} aria-hidden='true' />
                  </div>

                  {/* CONNECTOR */}
                  <div
                    className='absolute top-[31px] z-20 h-px bg-black/10'
                    style={{
                      left: 'var(--timeline-x)',
                      width: '24px',
                    }}
                  />

                  {/* CONTENT CARD */}
                  <div className='relative z-10 ml-[56px] rounded-xl border border-black/[0.08] bg-white p-4 shadow-[0_5px_25px_rgba(0,0,0,0.025)]'>
                    <span className='text-[9px] font-medium uppercase tracking-[0.18em] text-black/35'>
                      {item.duration}
                    </span>

                    <h3 className='mt-1.5 text-sm font-semibold leading-tight tracking-tight'>
                      {item.title}
                    </h3>

                    <p className='mt-2 text-[10px] leading-[1.75] text-black/50'>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
