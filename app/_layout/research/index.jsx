'use client';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade, ParallaxReveal } from '@/components';

const researchItems = [
  {
    number: '01',
    title: 'Title 1',
    description:
      'A short description for the first research topic. Add your research details and key findings here.',
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580872/freestocks-_3Q3tsJ01nc-unsplash.jpg',
  },
  {
    number: '02',
    title: 'Title 2',
    description:
      'A short description for the second research topic. Add your research details and key findings here.',
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580872/freestocks-_3Q3tsJ01nc-unsplash.jpg',
  },
  {
    number: '03',
    title: 'Title 3',
    description:
      'A short description for the third research topic. Add your research details and key findings here.',
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580872/freestocks-_3Q3tsJ01nc-unsplash.jpg',
  },
  {
    number: '04',
    title: 'Title 4',
    description:
      'A short description for the fourth research topic. Add your research details and key findings here.',
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580872/freestocks-_3Q3tsJ01nc-unsplash.jpg',
  },
];

export function Research() {
  return (
    <article className='relative w-full bg-black py-12 text-white md:py-16 lg:py-20'>
      <div className='container bg-black'>
        <div className='grid grid-cols-1 bg-black lg:grid-cols-[25%_50%_25%]'>
          {/* LEFT — 25% */}
          <div className='bg-black lg:pr-8'>
            <div className='lg:sticky lg:top-24'>
              <ParallaxFade>
                <h2 className='max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.98] tracking-[-0.045em] text-white'>
                  <ParallaxReveal paragraph='Research' />
                </h2>
              </ParallaxFade>

              <ParallaxFade>
                <Balancer
                  as='p'
                  className='mt-5 max-w-sm text-sm leading-relaxed text-white/60 md:text-base'
                >
                  Research is an important part of my creative journey, allowing
                  me to explore ideas, concepts, materials, techniques, and
                  visual influences in greater depth. Through research, I
                  investigate different perspectives, study existing work,
                  experiment with new approaches, and develop a stronger
                  understanding of design and creativity. Each research process
                  helps me discover meaningful connections between culture,
                  people, materials, and contemporary visual expression. It also
                  allows me to challenge familiar ideas and transform
                  inspiration into thoughtful outcomes. These explorations
                  continuously shape my creative direction, strengthen my
                  problem-solving abilities, and provide a foundation for
                  developing work that is expressive, relevant, considered, and
                  personally meaningful.
                </Balancer>
              </ParallaxFade>
            </div>
          </div>

          {/* MIDDLE — 50% */}
          <div className='grid border-white/10 bg-black lg:ml-10 lg:border-x'>
            {researchItems.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: 'easeOut',
                }}
                className='
                  grid
                  min-h-[130px]
                  grid-cols-[40px_minmax(90px,0.8fr)_1.5fr]
                  gap-3
                  border-b
                  border-white/10
                  bg-black
                  px-4
                  py-5
                  first:border-t
                  md:min-h-[150px]
                  md:grid-cols-[55px_minmax(120px,0.8fr)_1.5fr]
                  md:gap-5
                  md:p-6
                '
              >
                <div>
                  <span className='text-[11px] font-medium tracking-wider text-white/40 md:text-xs'>
                    {item.number}
                  </span>
                </div>

                <div>
                  <h3 className='text-xs font-medium leading-tight tracking-tight text-white md:text-sm'>
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className='text-xs leading-relaxed text-white/60 md:text-sm'>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — 25% */}
          <div className='grid bg-black'>
            {researchItems.map((item, index) => (
              <ParallaxFade key={item.number}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: 'easeOut',
                  }}
                  className='
                    relative
                    min-h-[130px]
                    w-full
                    overflow-hidden
                    border-b
                    border-white/10
                    bg-black
                    md:min-h-[150px]
                  '
                >
                  <img
                    src={item.image}
                    alt={item.title}
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
                </motion.div>
              </ParallaxFade>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
