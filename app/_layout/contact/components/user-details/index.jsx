'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <section className='w-full px-6 py-16 md:px-10 lg:px-16'>
      <div className='mx-auto w-full max-w-7xl'>
        {/* Header */}
        <div className='border-b border-black/10 pb-10 dark:border-white/10'>
          <div className='mb-8 flex items-center gap-4'>
            <div className='relative size-12 overflow-hidden rounded-full'>
              <Image
                src='https://res.cloudinary.com/d2kn5xts/image/upload/v1787580875/ionela-mat-wh6ZDpz65cI-unsplash.jpg'
                alt='Profile'
                fill
                sizes='48px'
                className='object-cover'
              />
            </div>

            <span className='text-xs uppercase tracking-[0.18em] text-black/50 dark:text-white/50'>
              Available for selected opportunities
            </span>
          </div>

          <h2 className='max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.85] tracking-[-0.06em] text-black dark:text-white'>
            Let&apos;s work
            <br />
            <span className='ml-[8vw]'>together.</span>
          </h2>
        </div>

        {/* Contact */}
        <div className='grid gap-10 pt-10 md:grid-cols-[1fr_auto] md:items-end'>
          <div className='grid gap-3 sm:grid-cols-2'>
            {/* Email */}
            <a
              href='mailto:your@email.com'
              className='group flex items-center justify-between border border-black/10 p-5 transition-all duration-300 hover:border-black dark:border-white/10 dark:hover:border-white'
            >
              <div>
                <p className='mb-2 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40'>
                  Email
                </p>

                <p className='text-sm text-black dark:text-white'>
                  your@email.com
                </p>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
                className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
              />
            </a>

            {/* Phone */}
            <a
              href='tel:+1234567890'
              className='group flex items-center justify-between border border-black/10 p-5 transition-all duration-300 hover:border-black dark:border-white/10 dark:hover:border-white'
            >
              <div>
                <p className='mb-2 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40'>
                  Phone
                </p>

                <p className='text-sm text-black dark:text-white'>
                  +1 234 567 890
                </p>
              </div>

              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
                className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
              />
            </a>
          </div>

          {/* Social Links */}
          <div className='flex items-center gap-2'>
            <a
              href='https://instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='flex size-11 items-center justify-center rounded-full border border-black/10 text-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black'
            >
              <FaInstagram size={16} />
            </a>

            <a
              href='https://facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='flex size-11 items-center justify-center rounded-full border border-black/10 text-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black'
            >
              <FaFacebookF size={15} />
            </a>

            <a
              href='https://linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='flex size-11 items-center justify-center rounded-full border border-black/10 text-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black'
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
