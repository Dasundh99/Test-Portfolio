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
    <footer className='w-full px-6 pb-20 pt-0 md:px-10 md:pb-16 md:pt-0 lg:px-16'>
      <div className='mx-auto w-full max-w-7xl'>
        {/* Main Footer */}
        <div className='grid gap-6 md:grid-cols-[1.4fr_0.6fr] md:gap-10'>
          {/* Left */}
          <div>
            {/* Availability */}
            <div className='mb-4 flex items-center gap-3'>
              <div className='relative size-10 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10'>
                <Image
                  src='https://res.cloudinary.com/d2kn5xts/image/upload/v1787580875/ionela-mat-wh6ZDpz65cI-unsplash.jpg'
                  alt='Profile'
                  fill
                  sizes='40px'
                  className='object-cover'
                />
              </div>

              <div>
                <p className='text-[9px] font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40'>
                  Available
                </p>

                <p className='mt-0.5 text-[11px] text-black/60 dark:text-white/60'>
                  For selected opportunities
                </p>
              </div>
            </div>

            {/* Heading */}
            <h2 className='max-w-4xl text-[clamp(3.4rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.065em] text-black dark:text-white'>
              Let&apos;s work
              <br />
              <span className='ml-[7vw]'>together.</span>
            </h2>
          </div>

          {/* Right */}
          <div className='flex flex-col justify-end md:pb-0'>
            <p className='mb-3 max-w-xs text-sm leading-6 text-black/50 dark:text-white/50'>
              Have a project, collaboration, or opportunity in mind? Feel free
              to get in touch.
            </p>

            {/* Contact Links */}
            <div className='flex flex-col'>
              {/* Email */}
              <a
                href='mailto:your@email.com'
                className='group flex items-center justify-between border-b border-black/10 py-3 transition-colors duration-300 hover:border-black/40 dark:border-white/10 dark:hover:border-white/40'
              >
                <div>
                  <p className='mb-1 text-[9px] font-medium uppercase tracking-[0.2em] text-black/35 dark:text-white/35'>
                    Email
                  </p>

                  <p className='text-[13px] text-black dark:text-white'>
                    your@email.com
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.2}
                  className='text-black/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/50'
                />
              </a>

              {/* Phone */}
              <a
                href='tel:+1234567890'
                className='group flex items-center justify-between border-b border-black/10 py-3 transition-colors duration-300 hover:border-black/40 dark:border-white/10 dark:hover:border-white/40'
              >
                <div>
                  <p className='mb-1 text-[9px] font-medium uppercase tracking-[0.2em] text-black/35 dark:text-white/35'>
                    Phone
                  </p>

                  <p className='text-[13px] text-black dark:text-white'>
                    +1 234 567 890
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.2}
                  className='text-black/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/50'
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='mt-8 flex flex-col gap-4 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10'>
          {/* Copyright */}
          <p className='text-[9px] uppercase tracking-[0.18em] text-black/35 dark:text-white/35'>
            © {new Date().getFullYear()} · All rights reserved
          </p>

          {/* Social */}
          <div className='flex items-center gap-5'>
            <a
              href='https://instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-black/50 transition-colors duration-300 hover:text-black dark:text-white/50 dark:hover:text-white'
            >
              <FaInstagram
                size={13}
                className='transition-transform duration-300 group-hover:scale-110'
              />
              <span>Instagram</span>
            </a>

            <a
              href='https://facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-black/50 transition-colors duration-300 hover:text-black dark:text-white/50 dark:hover:text-white'
            >
              <FaFacebookF
                size={12}
                className='transition-transform duration-300 group-hover:scale-110'
              />
              <span>Facebook</span>
            </a>

            <a
              href='https://linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-black/50 transition-colors duration-300 hover:text-black dark:text-white/50 dark:hover:text-white'
            >
              <FaLinkedinIn
                size={13}
                className='transition-transform duration-300 group-hover:scale-110'
              />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            type='button'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='group flex items-center gap-2 self-start text-[9px] font-medium uppercase tracking-[0.18em] text-black/50 transition-colors duration-300 hover:text-black sm:self-auto dark:text-white/50 dark:hover:text-white'
          >
            Back to top
            <ArrowUpRight
              size={13}
              strokeWidth={1.2}
              className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
