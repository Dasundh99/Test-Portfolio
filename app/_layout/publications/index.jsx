'use client';

import { motion } from 'framer-motion';

import { ParallaxFade, ParallaxReveal } from '@/components';

const publications = [
  {
    title: 'Publication Title One',
    points: [
      'First publication research finding or key contribution.',
      'Second important idea, observation, or research outcome.',
      'Third point describing the relevance of the publication.',
    ],
  },
  {
    title: 'Publication Title Two',
    points: [
      'First publication research finding or key contribution.',
      'Second important idea, observation, or research outcome.',
      'Third point describing the relevance of the publication.',
      'Fourth point highlighting an important concept or discovery.',
      'Fifth point explaining the research process or approach.',
      'Sixth point describing the impact or significance of the work.',
      'Seventh point summarising the overall publication outcome.',
    ],
  },
];

export function Publications() {
  return (
    <article className='container relative py-12 md:py-16 lg:py-20'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-[48%_52%] lg:gap-16 xl:gap-20'>
        {/* IMAGE */}
        <div className='lg:sticky lg:top-10 lg:self-start'>
          <ParallaxFade>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
              }}
              className='
                group
                relative
                aspect-[4/5]
                w-full
                overflow-hidden
                bg-black/[0.03]
                md:aspect-[5/6]
                lg:aspect-[4/5]
              '
            >
              <img
                src='https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/anthony-tran-3Xkms-gMvZg-unsplash.jpg'
                alt='Publication research'
                className='
                  absolute
                  inset-0
                  size-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-[1.04]
                '
              />
            </motion.div>
          </ParallaxFade>
        </div>

        {/* PUBLICATIONS */}
        <div className='lg:pt-2'>
          {/* Main Title */}
          <ParallaxFade>
            <h2 className='max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.98] tracking-[-0.045em] text-black'>
              <ParallaxReveal paragraph='Publications' />
            </h2>
          </ParallaxFade>

          {/* Intro */}
          <ParallaxFade>
            <p className='mt-6 max-w-md text-xs leading-relaxed text-black/50 md:text-sm'>
              Selected research, publications, and academic contributions
              exploring contemporary approaches to fashion, design, and creative
              practice.
            </p>
          </ParallaxFade>

          {/* Publication List */}
          <div className='mt-10 space-y-10 md:mt-14 md:space-y-14'>
            {publications.map((publication, index) => (
              <motion.section
                key={publication.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
              >
                {/* Publication heading */}
                <div className='mb-6 flex items-start gap-5'>
                  <span
                    className='
                      pt-0.5
                      text-[10px]
                      font-medium
                      tracking-[0.2em]
                      text-black/35
                    '
                  >
                    0{index + 1}
                  </span>

                  <h3
                    className='
                      flex-1
                      text-sm
                      font-semibold
                      uppercase
                      leading-tight
                      tracking-tight
                      text-black
                      md:text-base
                    '
                  >
                    {publication.title}
                  </h3>
                </div>

                {/* Points */}
                <ul className='ml-9 space-y-3 md:space-y-3.5'>
                  {publication.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.35,
                        delay: pointIndex * 0.04,
                        ease: 'easeOut',
                      }}
                      className='
                        relative
                        max-w-xl
                        pl-4
                        text-xs
                        leading-[1.7]
                        text-black/55
                        md:text-sm
                      '
                    >
                      <span
                        className='
                          absolute
                          left-0
                          top-[0.72em]
                          size-1
                          rounded-full
                          bg-black/35
                        '
                      />

                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
