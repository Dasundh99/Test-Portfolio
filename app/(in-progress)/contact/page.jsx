'use client';

import { useEffect } from 'react';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { ParallaxFade, ParallaxReveal } from '@/components';
import { Transition } from '@/layout';

const contactItems = [
  {
    number: '01',
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
  {
    number: '02',
    label: 'LinkedIn',
    value: 'View Profile',
    href: '#',
  },
  {
    number: '03',
    label: 'Instagram',
    value: 'View Instagram',
    href: '#',
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Dulashi Kongahawaththa';
  }, []);

  return (
    <Transition>
      <main className='min-h-screen bg-background text-foreground'>
        <section className='mx-auto w-full max-w-[1400px] px-6 py-8 md:p-10 lg:px-16'>
          {/* =====================================================
              HEADER
          ===================================================== */}
          <div className='pb-8 md:pb-10'>
            {/* TOP ROW */}
            <ParallaxFade>
              <div className='mb-6 flex items-center justify-between'>
                <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  Contact
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

            {/* MAIN HEADER */}
            <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
              {/* TITLE */}
              <div className='max-w-5xl overflow-visible'>
                <div className='overflow-visible py-1'>
                  <motion.div
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
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 0.8,
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
                    Let&apos;s
                  </motion.div>
                </div>

                <div className='overflow-visible py-1'>
                  <motion.div
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
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.08,
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
                    Connect
                  </motion.div>
                </div>
              </div>

              {/* HEADER DESCRIPTION */}
              <ParallaxFade>
                <p
                  className='
                    max-w-xs
                    text-[13px]
                    leading-[1.7]
                    text-muted-foreground
                    md:pb-1
                    md:text-right
                  '
                >
                  Conversations, collaborations and creative opportunities in
                  fashion and design.
                </p>
              </ParallaxFade>
            </div>
          </div>

          {/* =====================================================
              MAIN CONTACT AREA
          ===================================================== */}
          <div className='grid grid-cols-1 gap-10 py-8 md:grid-cols-12 md:gap-10 md:py-10'>
            {/* INTRODUCTION */}
            <div className='md:col-span-4'>
              <ParallaxFade>
                <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  Get in touch
                </span>
              </ParallaxFade>

              <ParallaxFade>
                <p
                  className='
                    mt-5
                    max-w-sm
                    text-[13px]
                    leading-[1.7]
                    text-muted-foreground
                    md:text-sm
                  '
                >
                  For academic opportunities, creative collaborations, fashion
                  projects or professional enquiries, feel free to get in touch.
                </p>
              </ParallaxFade>
            </div>

            {/* CONTACT CARDS */}
            <div className='md:col-span-7 md:col-start-6'>
              <div className='space-y-3'>
                {contactItems.map(({ number, label, value, href }, index) => (
                  <motion.a
                    key={number}
                    href={href}
                    target={href === '#' ? '_blank' : undefined}
                    rel={href === '#' ? 'noopener noreferrer' : undefined}
                    initial={{
                      opacity: 0,
                      x: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className='
                        md:p-4.5
                        group
                        relative
                        flex
                        items-center
                        justify-between
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
                    {/* HOVER CIRCLE */}
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

                    <div className='relative flex items-center gap-5 md:gap-8'>
                      <span className='text-[9px] tracking-[0.2em] text-black/30'>
                        {number}
                      </span>

                      <div>
                        <span
                          className='
                              block
                              text-[9px]
                              uppercase
                              tracking-[0.2em]
                              text-black/40
                            '
                        >
                          {label}
                        </span>

                        <span
                          className='
                              mt-1.5
                              block
                              text-sm
                              font-medium
                              text-black
                              md:text-[15px]
                            '
                        >
                          {value}
                        </span>
                      </div>
                    </div>

                    {/* ARROW */}
                    <div
                      className='
                          relative
                          flex
                          size-8
                          shrink-0
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
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className='
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          '
                      />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* LOCATION */}
              <ParallaxFade>
                <div className='mt-5 flex items-center justify-between'>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    Based in
                  </span>

                  <span className='text-sm font-medium'>Sri Lanka</span>
                </div>
              </ParallaxFade>
            </div>
          </div>

          {/* =====================================================
              AVAILABILITY
          ===================================================== */}
          <div className='py-8 md:py-10'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10'>
              {/* LEFT */}
              <div className='md:col-span-4'>
                <ParallaxFade>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    Availability
                  </span>
                </ParallaxFade>

                <ParallaxFade>
                  <p
                    className='
                      mt-3
                      max-w-xs
                      text-[13px]
                      leading-[1.7]
                      text-muted-foreground
                    '
                  >
                    Currently open to selected opportunities and collaborations.
                  </p>
                </ParallaxFade>
              </div>

              {/* STATEMENT */}
              <div className='md:col-span-7 md:col-start-6'>
                <ParallaxFade>
                  <div className='max-w-3xl overflow-visible'>
                    {/* Extra line-box room ONLY for the reveal */}
                    <div className='overflow-visible py-2'>
                      <p
                        className='
                          overflow-visible
                          text-[clamp(1.8rem,3.5vw,3.5rem)]
                          font-medium
                          leading-[1.18]
                          tracking-[-0.04em]
                        '
                      >
                        <ParallaxReveal paragraph="Let's create something thoughtful, meaningful and distinctly yours." />
                      </p>
                    </div>
                  </div>
                </ParallaxFade>
              </div>
            </div>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}
          <div className='pt-8 md:pt-10'>
            <a href='mailto:your-email@example.com' className='group block'>
              <div className='flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'>
                {/* CTA TITLE */}
                <div>
                  <ParallaxFade>
                    <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                      Start a conversation
                    </span>
                  </ParallaxFade>

                  <div className='mt-3 overflow-visible py-1'>
                    <h2
                      className='
                        overflow-visible
                        text-[clamp(2.5rem,6vw,6rem)]
                        font-medium
                        leading-[0.92]
                        tracking-[-0.06em]
                      '
                    >
                      <ParallaxReveal paragraph='Have an idea?' />
                    </h2>
                  </div>
                </div>

                {/* SEND EMAIL */}
                <ParallaxFade>
                  <div className='flex items-center gap-3 pb-1'>
                    <span
                      className='
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        underline
                        underline-offset-4
                      '
                    >
                      Send an email
                    </span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className='
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      '
                    />
                  </div>
                </ParallaxFade>
              </div>
            </a>
          </div>
        </section>
      </main>
    </Transition>
  );
}
