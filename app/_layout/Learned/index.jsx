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
        {/* ================= HEADER ================= */}
        <div className='mb-16 grid gap-6 lg:grid-cols-2 lg:items-end'>
          <div>
            <ParallaxFade>
              <span className='mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-black/40'>
                Professional & Academic Journey
              </span>
            </ParallaxFade>

            <h2 className='max-w-xl text-[8vw] font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-[6vw] lg:text-[4.5vw]'>
              <ParallaxReveal paragraph={phrase} />
            </h2>
          </div>

          <ParallaxFade>
            <p className='max-w-md text-xs leading-6 text-black/50 lg:ml-auto lg:text-sm'>
              Each stage of my journey has contributed to the way I approach
              research, teaching, creativity, collaboration, and continuous
              professional growth.
            </p>
          </ParallaxFade>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className='relative hidden lg:block'>
          {/* Main journey area */}
          <div className='relative min-h-[500px]'>
            {/* ================= ROAD ================= */}
            <div className='absolute inset-x-0 top-1/2 z-0 h-[46px] -translate-y-1/2'>
              {/* Road */}
              <div className='absolute inset-0 rounded-full bg-black/[0.045]' />

              {/* Road outline */}
              <div className='absolute inset-0 rounded-full border border-black/10' />

              {/* Center marking */}
              <div className='absolute inset-x-0 top-1/2 border-t border-dashed border-black/20' />
            </div>

            {/* ================= JOURNEY ITEMS ================= */}
            <div className='relative grid h-[500px] grid-cols-5'>
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
                    className='relative flex h-full justify-center'
                  >
                    {/* ================= TOP CONTENT ================= */}
                    {isTop && (
                      <div className='absolute bottom-[calc(50%+72px)] left-1/2 w-[190px] -translate-x-1/2 text-center'>
                        <span className='text-[9px] font-medium uppercase tracking-[0.18em] text-black/35'>
                          {item.duration}
                        </span>

                        <h3 className='mt-2 text-sm font-semibold leading-tight tracking-tight'>
                          {item.title}
                        </h3>

                        <p className='mt-2 text-[10px] leading-[1.7] text-black/50'>
                          {item.description}
                        </p>
                      </div>
                    )}

                    {/* ================= TOP CONNECTOR ================= */}
                    {isTop && (
                      <div className='absolute bottom-[calc(50%+27px)] left-1/2 z-20 h-[45px] w-px -translate-x-1/2 bg-black/15' />
                    )}

                    {/* ================= ICON ================= */}
                    <div className='absolute left-1/2 top-1/2 z-30 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white'>
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    {/* ================= BOTTOM CONNECTOR ================= */}
                    {!isTop && (
                      <div className='absolute left-1/2 top-[calc(50%+27px)] z-20 h-[45px] w-px -translate-x-1/2 bg-black/15' />
                    )}

                    {/* ================= BOTTOM CONTENT ================= */}
                    {!isTop && (
                      <div className='absolute left-1/2 top-[calc(50%+72px)] w-[190px] -translate-x-1/2 text-center'>
                        <span className='text-[9px] font-medium uppercase tracking-[0.18em] text-black/35'>
                          {item.duration}
                        </span>

                        <h3 className='mt-2 text-sm font-semibold leading-tight tracking-tight'>
                          {item.title}
                        </h3>

                        <p className='mt-2 text-[10px] leading-[1.7] text-black/50'>
                          {item.description}
                        </p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className='relative lg:hidden'>
          {/* Vertical road */}
          <div className='absolute inset-y-0 left-[15px] w-[32px]'>
            <div className='absolute inset-0 rounded-full bg-black/[0.035]' />

            <div className='absolute left-1/2 top-0 h-full border-l border-dashed border-black/20' />
          </div>

          <div className='relative space-y-8'>
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
                  }}
                  className='relative pl-12'
                >
                  {/* Marker */}
                  <div className='absolute left-0 top-5 z-10 flex size-8 items-center justify-center rounded-full border border-black/15 bg-white shadow-sm'>
                    <Icon size={13} strokeWidth={1.5} />
                  </div>

                  {/* Card */}
                  <div className='relative z-10 rounded-xl border border-black/10 bg-white p-4'>
                    <span className='text-[9px] font-medium uppercase tracking-[0.18em] text-black/35'>
                      {item.duration}
                    </span>

                    <h3 className='mt-1.5 text-sm font-semibold tracking-tight'>
                      {item.title}
                    </h3>

                    <p className='mt-2 text-[10px] leading-[1.8] text-black/50'>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <ParallaxFade>
          <div className='mt-14 border-t border-black/10 pt-6 text-center'></div>
        </ParallaxFade>
      </div>
    </article>
  );
}
