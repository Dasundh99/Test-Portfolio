import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Transition } from '@/layout';

export const metadata = {
  title: 'About | Dulashi Kongahawaththa',
  description:
    'Dulashi Kongahawaththa is a Fashion Design Lecturer exploring fashion through creativity, craftsmanship and contemporary design.',
};

export default function About() {
  return (
    <Transition>
      <main className='min-h-screen bg-background text-foreground'>
        <section className='mx-auto w-full max-w-[1400px] px-6 py-8 md:p-10 lg:px-16'>
          {/* Intro */}
          <div className='border-b border-border/40 pb-8 md:pb-10'>
            <div className='mb-6 flex items-center justify-between'>
              <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                About
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

            <h1 className='max-w-5xl text-[clamp(3.25rem,8vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.07em]'>
              Dulashi
              <br />
              Kongahawaththa
            </h1>
          </div>

          {/* About content */}
          <div className='grid grid-cols-1 gap-8 py-8 md:grid-cols-12 md:gap-10 md:py-10'>
            {/* Image */}
            <div className='md:col-span-4'>
              <p className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                Fashion Design Lecturer
              </p>

              <div className='mt-4 overflow-hidden'>
                <Image
                  src='/images/tri-vo-ItwNHDcO590-unsplash.jpg'
                  alt='Dulashi Kongahawaththa - Fashion Design Lecturer'
                  width={700}
                  height={900}
                  className='h-auto w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03]'
                  priority
                />
              </div>
            </div>

            {/* Description */}
            <div className='max-w-2xl md:col-span-7 md:col-start-6'>
              <p className='text-xl leading-relaxed tracking-[-0.02em] md:text-2xl lg:text-3xl'>
                Exploring fashion through creativity, craftsmanship and
                contemporary design.
              </p>

              <div className='mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base'>
                <p>
                  Dulashi Kongahawaththa is a Fashion Design Lecturer with a
                  passion for creative exploration, thoughtful design and the
                  relationship between fashion, culture and contemporary visual
                  expression.
                </p>

                <p>
                  Her approach to fashion brings together creative thinking,
                  craftsmanship and an appreciation for detail. Through teaching
                  and design, she encourages experimentation while developing a
                  strong understanding of material, form and construction.
                </p>

                <p>
                  Her work reflects an interest in creating meaningful fashion
                  experiences that balance creativity with functionality,
                  allowing traditional craftsmanship and contemporary ideas to
                  exist together.
                </p>
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className='border-t border-border/40 py-8 md:py-10'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10'>
              {/* Image */}
              <div className='md:col-span-4'>
                <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  Approach
                </span>

                <div className='mt-4 overflow-hidden'>
                  <Image
                    src='/images/tri-vo-ItwNHDcO590-unsplash.jpg'
                    alt='Dulashi Kongahawaththa - Fashion Design Approach'
                    width={700}
                    height={900}
                    className='h-auto w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.03]'
                  />
                </div>
              </div>

              {/* Approach items */}
              <div className='md:col-span-7 md:col-start-6'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2'>
                  {/* 01 */}
                  <div className='border-t border-border/40 pt-3'>
                    <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                      01
                    </span>

                    <h2 className='mt-2 text-lg font-medium'>
                      Creative Direction
                    </h2>

                    <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                      Developing visual concepts and creative ideas through
                      fashion, form and contemporary design.
                    </p>
                  </div>

                  {/* 02 */}
                  <div className='border-t border-border/40 pt-3'>
                    <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                      02
                    </span>

                    <h2 className='mt-2 text-lg font-medium'>Craftsmanship</h2>

                    <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                      Exploring materials, construction and detail to create
                      considered and expressive fashion pieces.
                    </p>
                  </div>

                  {/* 03 */}
                  <div className='border-t border-border/40 pt-3'>
                    <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                      03
                    </span>

                    <h2 className='mt-2 text-lg font-medium'>
                      Contemporary Design
                    </h2>

                    <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                      Connecting contemporary aesthetics with ideas, influences
                      and techniques rooted in fashion.
                    </p>
                  </div>

                  {/* 04 */}
                  <div className='border-t border-border/40 pt-3'>
                    <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                      04
                    </span>

                    <h2 className='mt-2 text-lg font-medium'>Education</h2>

                    <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                      Supporting emerging designers through creative thinking,
                      experimentation and practical design development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className='border-t border-border/40 pt-8 md:pt-10'>
            <p className='max-w-3xl text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] -tracking-wider'>
              Fashion is a continuous conversation between ideas, materials,
              people and culture.
            </p>
          </div>
        </section>
      </main>
    </Transition>
  );
}
