import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Transition } from '@/layout';

export const metadata = {
  title: 'Contact | Dulashi Kongahawaththa',
  description:
    'Contact Dulashi Kongahawaththa, Fashion Design Lecturer, for collaborations, academic opportunities and creative projects.',
};

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
  return (
    <Transition>
      <main className='min-h-screen bg-background text-foreground'>
        <section className='mx-auto w-full max-w-[1400px] px-6 py-8 md:p-10 lg:px-16'>
          {/* Header */}
          <div className='border-b border-border/40 pb-8 md:pb-10'>
            <div className='mb-6 flex items-center justify-between'>
              <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                Contact
              </span>

              {/* Back to Home */}
              <Link
                href='/'
                className='group inline-flex items-center gap-3 rounded-full border border-border/60 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-foreground hover:text-background'
              >
                <ArrowLeft
                  size={13}
                  strokeWidth={1.5}
                  className='transition-transform duration-300 group-hover:-translate-x-1'
                />

                <span>Back to Home</span>
              </Link>
            </div>

            <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
              <h1 className='max-w-5xl text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]'>
                Let&apos;s
                <br />
                Connect
              </h1>

              <p className='max-w-xs pb-1 text-sm leading-relaxed text-muted-foreground md:text-right'>
                Conversations, collaborations and creative opportunities in
                fashion and design.
              </p>
            </div>
          </div>

          {/* Main contact area */}
          <div className='grid grid-cols-1 gap-10 py-8 md:grid-cols-12 md:gap-10 md:py-10'>
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

            {/* Contact links */}
            <div className='md:col-span-7 md:col-start-6'>
              <div className='border-t border-border/40'>
                {contactItems.map(({ number, label, value, href }) => (
                  <a
                    key={number}
                    href={href}
                    target={href === '#' ? '_blank' : undefined}
                    rel={href === '#' ? 'noopener noreferrer' : undefined}
                    className='group flex items-center justify-between border-b border-border/40 py-4 transition-opacity hover:opacity-60 md:py-5'
                  >
                    <div className='flex items-center gap-5 md:gap-8'>
                      <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                        {number}
                      </span>

                      <div>
                        <span className='block text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                          {label}
                        </span>

                        <span className='mt-1 block text-base font-medium md:text-lg'>
                          {value}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                    />
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className='mt-6 flex items-center justify-between'>
                <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  Based in
                </span>

                <span className='text-sm font-medium'>Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className='border-t border-border/40 py-8 md:py-10'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10'>
              <div className='md:col-span-4'>
                <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  Availability
                </span>

                <p className='mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground'>
                  Currently open to selected opportunities and collaborations.
                </p>
              </div>

              <div className='md:col-span-7 md:col-start-6'>
                <p className='max-w-3xl text-[clamp(1.8rem,3.5vw,3.5rem)] font-medium leading-none tracking-[-0.04em]'>
                  Let&apos;s create something thoughtful, meaningful and
                  distinctly yours.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='border-t border-border/40 pt-8 md:pt-10'>
            <a href='mailto:your-email@example.com' className='group block'>
              <div className='flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'>
                <div>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    Start a conversation
                  </span>

                  <h2 className='mt-3 text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.06em]'>
                    Have an idea?
                  </h2>
                </div>

                <div className='flex items-center gap-3 pb-1'>
                  <span className='text-[10px] uppercase tracking-[0.2em] underline underline-offset-4'>
                    Send an email
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                  />
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </Transition>
  );
}
