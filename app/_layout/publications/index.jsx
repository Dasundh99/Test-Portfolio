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
    <article className='container relative py-8 md:py-10 lg:py-20'>
      <div className='grid grid-cols-1 gap-7 lg:grid-cols-[45%_55%] lg:gap-8 xl:gap-20'>
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
                rounded-2xl
                bg-black/[0.03]
                md:aspect-[5/6]
                lg:aspect-[5/4.8]
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

              <div className='pointer-events-none absolute inset-0 bg-black/[0.08]' />
            </motion.div>
          </ParallaxFade>
        </div>

        {/* PUBLICATIONS */}
        <div className='lg:pt-0'>
          {/* HEADER */}
          <header>
            <ParallaxFade>
              <span
                className='
                  mb-1.5
                  block
                  text-[10px]
                  uppercase
                  leading-none
                  tracking-[0.2em]
                  text-black/40
                '
              >
                Selected Academic Work
              </span>
            </ParallaxFade>

            <ParallaxFade>
              {/* Added vertical padding to prevent ParallaxReveal cropping */}
              <h2
                className='
                  max-w-3xl
                  overflow-visible
                  py-2
                  text-[clamp(3rem,5vw,4rem)]
                  uppercase
                  leading-[0.94]
                  tracking-[-0.04em]
                  text-black
                '
              >
                <ParallaxReveal paragraph='Publications' />
              </h2>
            </ParallaxFade>
          </header>

          {/* PUBLICATION ARCHIVE */}
          <div className='mt-1'>
            {publications.map((publication, index) => (
              <motion.section
                key={publication.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='py-4 md:py-5'
              >
                {/* PUBLICATION TITLE */}
                <div className='flex items-start gap-2'>
                  <span className='pt-1 text-[9px] tracking-[0.15em] text-black/30'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3
                    className='
                      max-w-2xl
                      text-[clamp(0.9rem,1.25vw,1.1rem)]
                      leading-[1.2]
                      tracking-[-0.015em]
                      text-black
                    '
                  >
                    {publication.title}
                  </h3>
                </div>

                {/* KEY CONTRIBUTIONS */}
                <div className='ml-0 mt-3 md:ml-8'>
                  <div>
                    {publication.points.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        initial={{
                          opacity: 0,
                          x: -8,
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
                          duration: 0.4,
                          delay: pointIndex * 0.045,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className='
                          group/point
                          flex
                          items-start
                          gap-3
                          py-1.5
                        '
                      >
                        {/* NUMBER */}
                        <div
                          className='
                            flex
                            size-[25px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-black/10
                            bg-white
                            transition-all
                            duration-300
                            group-hover/point:border-black
                            group-hover/point:bg-black
                          '
                        >
                          <span
                            className='
                              text-[8px]
                              font-medium
                              tracking-[0.08em]
                              text-black/45
                              transition-colors
                              duration-300
                              group-hover/point:text-white
                            '
                          >
                            {String(pointIndex + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* POINT TEXT */}
                        <p
                          className='
                            max-w-xl
                            pt-[2px]
                            text-[13px]
                            leading-normal
                            text-black/55
                            transition-all
                            duration-300
                            group-hover/point:translate-x-1
                            group-hover/point:text-black
                            md:text-[14px]
                          '
                        >
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
