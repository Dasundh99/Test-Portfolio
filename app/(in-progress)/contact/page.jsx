import Link from 'next/link';

import { Transition } from '@/layout';

export const metadata = {
  title: 'Contact | Dulashi Kongahawaththa',
  description:
    'Contact Dulashi Kongahawaththa, Fashion Design Lecturer, for collaborations, academic opportunities and creative projects.',
};

export default function Contact() {
  return (
    <Transition>
      <main className='min-h-screen bg-background text-foreground'>
        <section className='mx-auto w-full max-w-[1400px] px-6 py-12 md:px-10 md:py-16 lg:px-16'>
          {/* Header */}
          <div className='border-b border-border/40 pb-10 md:pb-14'>
            <div className='mb-5'>
              <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                Contact
              </span>
            </div>

            <h1 className='max-w-5xl text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.85] tracking-[-0.07em]'>
              Let&apos;s
              <br />
              Connect
            </h1>
          </div>

          {/* Contact content */}
          <div className='grid grid-cols-1 gap-10 py-10 md:grid-cols-12 md:gap-12 md:py-14'>
            {/* Introduction */}
            <div className='md:col-span-4'>
              <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                Get in touch
              </span>

              <p className='mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base'>
                For academic opportunities, creative collaborations, fashion
                projects or professional enquiries, feel free to get in touch.
              </p>
            </div>

            {/* Contact details */}
            <div className='md:col-span-7 md:col-start-6'>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                {/* Email */}
                <div className='border-t border-border/40 pt-3'>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    Email
                  </span>

                  <a
                    href='mailto:your-email@example.com'
                    className='mt-3 block text-lg font-medium transition-opacity hover:opacity-60'
                  >
                    your-email@example.com
                  </a>
                </div>

                {/* Location */}
                <div className='border-t border-border/40 pt-3'>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    Location
                  </span>

                  <p className='mt-3 text-lg font-medium'>Sri Lanka</p>
                </div>

                {/* LinkedIn */}
                <div className='border-t border-border/40 pt-3'>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    LinkedIn
                  </span>

                  <a
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-3 block text-lg font-medium transition-opacity hover:opacity-60'
                  >
                    View Profile
                  </a>
                </div>

                {/* Instagram */}
                <div className='border-t border-border/40 pt-3'>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    Instagram
                  </span>

                  <a
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-3 block text-lg font-medium transition-opacity hover:opacity-60'
                  >
                    View Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className='border-t border-border/40 py-10 md:py-14'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12'>
              <div className='md:col-span-4'>
                <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  Availability
                </span>
              </div>

              <div className='md:col-span-7 md:col-start-6'>
                <p className='max-w-2xl text-xl leading-relaxed tracking-[-0.02em] md:text-2xl lg:text-3xl'>
                  Open to meaningful collaborations, teaching opportunities and
                  creative projects within fashion and design.
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className='border-t border-border/40 pt-10 md:pt-14'>
            <div className='flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'>
              <p className='max-w-2xl text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] -tracking-wider'>
                Have an idea?
                <br />
                Let&apos;s talk.
              </p>

              <Link
                href='mailto:your-email@example.com'
                className='text-[10px] uppercase tracking-[0.2em] underline underline-offset-4 transition-opacity hover:opacity-60'
              >
                Send an email
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}
