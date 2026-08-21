'use client';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

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
      <div className='grid grid-cols-1 gap-0 lg:grid-cols-[60%_40%]'>
        {/* =====================================================
            LEFT — 60%
        ===================================================== */}
        <div className='border-black/10 lg:border-r lg:pr-10 xl:pr-14'>
          {/* Main Title */}
          <ParallaxFade>
            <h2
              className='
                text-4xl
                font-black
                uppercase
                leading-none
                tracking-tight
                text-black
                md:text-5xl
                lg:text-[5vw]
              '
            >
              <ParallaxReveal paragraph='Publications' />
            </h2>
          </ParallaxFade>

          {/* Publication Sections */}
          <div className='mt-10 md:mt-14'>
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
                className={`
                  ${index !== 0 ? 'border-t border-black/10 pt-8 md:pt-10' : ''}
                  ${index === 0 ? 'pb-8 md:pb-10' : ''}
                `}
              >
                {/* Small Title */}
                <div className='mb-5 flex items-start gap-4'>
                  <span className='pt-0.5 text-[10px] font-medium tracking-[0.2em] text-black/40'>
                    0{index + 1}
                  </span>

                  <h3
                    className='
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

                {/* Bullet Points */}
                <ul className='ml-7 space-y-3 md:space-y-3.5'>
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
                        pl-4
                        text-xs
                        leading-relaxed
                        text-black/60
                        md:text-sm
                      '
                    >
                      <span
                        className='
                          absolute
                          left-0
                          top-[0.55em]
                          size-1
                          rounded-full
                          bg-black/50
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

        {/* =====================================================
            RIGHT — 40%
        ===================================================== */}
        <div className='mt-10 lg:mt-0 lg:pl-10 xl:pl-14'>
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
                relative
                min-h-[420px]
                w-full
                overflow-hidden
                bg-black/5
                md:min-h-[560px]
                lg:h-full
                lg:min-h-[680px]
              '
            >
              <img
                src='/images/anthony-tran-3Xkms-gMvZg-unsplash.jpg'
                alt='Publication research'
                className='
                  absolute
                  inset-0
                  size-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                '
              />

              {/* Subtle overlay */}
              <div className='absolute inset-0 bg-black/5' />
            </motion.div>
          </ParallaxFade>
        </div>
      </div>
    </article>
  );
}
