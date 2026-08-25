'use client';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade, ParallaxReveal } from '@/components';

const researchItems = [
  {
    number: '01',
    title: 'Textile & Material Exploration',
    description:
      'An exploration of textiles, surface qualities, textures, and material behaviour within fashion design. This research examines how different fabrics and construction techniques can influence the visual identity, functionality, movement, and overall expression of a garment.',
    previewDescription:
      'Exploring texture, fabric behaviour, surface qualities, and construction techniques.',
    tag: 'Material Study',
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580872/freestocks-_3Q3tsJ01nc-unsplash.jpg',
  },
  {
    number: '02',
    title: 'Cultural & Traditional Influences',
    description:
      'Research into traditional clothing, cultural symbolism, craftsmanship, and regional dress practices. The study considers how cultural references can be thoughtfully interpreted through contemporary fashion while preserving their visual and contextual significance.',
    previewDescription:
      'Examining traditional dress, cultural symbolism, craftsmanship, and regional identity.',
    tag: 'Cultural Research',
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580872/freestocks-_3Q3tsJ01nc-unsplash.jpg',
  },
  {
    number: '03',
    title: 'Contemporary Fashion & Visual Culture',
    description:
      'An investigation into contemporary fashion movements, emerging aesthetics, and visual culture. This research explores how social change, technology, media, and evolving consumer perspectives influence modern fashion design and creative direction.',
    previewDescription:
      'Exploring contemporary aesthetics, media, technology, and changing visual influences.',
    tag: 'Visual Culture',
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580872/freestocks-_3Q3tsJ01nc-unsplash.jpg',
  },
  {
    number: '04',
    title: 'Sustainable Design Practices',
    description:
      'Research focused on sustainable approaches to fashion design, including responsible material selection, textile waste reduction, reuse, and conscious production methods. The study explores how sustainability can become an integral part of the creative and design development process.',
    previewDescription:
      'Investigating responsible materials, textile waste, reuse, and conscious production.',
    tag: 'Sustainability',
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580872/freestocks-_3Q3tsJ01nc-unsplash.jpg',
  },
];

export function Research() {
  return (
    <article className='relative w-full bg-black py-12 text-white md:py-16 lg:py-20'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-[26%_74%]'>
          {/* LEFT — INTRO */}
          <div className='lg:pr-10'>
            <div className='lg:sticky lg:top-24'>
              <ParallaxFade>
                <h2 className='max-w-4xl text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.98] tracking-[-0.045em] text-white'>
                  <ParallaxReveal paragraph='Research' />
                </h2>
              </ParallaxFade>

              <ParallaxFade>
                <Balancer
                  as='p'
                  className='mt-6 max-w-xs text-[13px] leading-[1.75] text-white/50 md:text-sm'
                >
                  Research is an essential part of my creative and academic
                  practice, providing a foundation for exploring ideas,
                  developing concepts, and understanding the relationship
                  between fashion, culture, materials, and society. My research
                  process involves investigating textiles, traditional
                  craftsmanship, cultural heritage, contemporary fashion
                  movements, sustainable practices, and emerging visual
                  influences. Through observation, experimentation, and critical
                  analysis, I explore how these elements can inform new
                  approaches to design and creative expression. Research allows
                  me to connect theoretical knowledge with practical
                  experimentation, encouraging thoughtful decision-making
                  throughout the design process. It also helps me develop
                  concepts that are meaningful, relevant, visually engaging, and
                  responsive to contemporary fashion practices.
                </Balancer>
              </ParallaxFade>
            </div>
          </div>

          {/* RIGHT — RESEARCH TABLE */}
          <div className='mt-10 lg:mt-0 lg:pl-8'>
            {/* TABLE HEADER */}
            <div
              className='
                hidden
                grid-cols-[48px_0.7fr_1.5fr_150px]
                gap-5
                border-y
                border-white/10
                px-4
                py-3
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/30
                md:grid
              '
            >
              <span>No.</span>
              <span>Research Area</span>
              <span>Description</span>
              <span>Visual</span>
            </div>

            {/* TABLE ROWS */}
            <div className='relative'>
              {researchItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: 'easeOut',
                  }}
                  className='
                    group
                    relative
                    grid
                    grid-cols-[32px_1fr_110px]
                    items-center
                    gap-4
                    border-b
                    border-white/10
                    px-4
                    py-5
                    transition-all
                    duration-500
                    md:grid-cols-[48px_0.7fr_1.5fr_150px]
                    md:gap-5
                    md:py-6
                  '
                >
                  {/* NUMBER */}
                  <div className='self-start pt-1'>
                    <span className='text-[10px] font-medium tracking-[0.15em] text-white/30 md:text-xs'>
                      {item.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className='self-start'>
                    <h3 className='text-sm leading-tight tracking-[-0.015em] text-white md:text-[15px]'>
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className='col-span-3 col-start-2 mt-1 self-start md:col-span-1 md:col-start-auto md:mt-0'>
                    <Balancer
                      as='p'
                      className='max-w-lg text-[11px] leading-[1.7] text-white/45 md:text-xs'
                    >
                      {item.description}
                    </Balancer>
                  </div>

                  {/* IMAGE */}
                  <div
                    className='
                      group/image
                      relative
                      col-start-3
                      row-start-1
                      aspect-[4/3]
                      w-full
                      md:col-start-4
                    '
                  >
                    {/* TABLE IMAGE */}
                    <div
                      className='
                        relative
                        size-full
                        cursor-pointer
                        overflow-hidden
                        bg-neutral-900
                      '
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className='
                          size-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover/image:scale-105
                        '
                      />

                      {/* DARK HOVER OVERLAY */}
                      <div
                        className='
                          absolute
                          inset-0
                          bg-black/0
                          transition-all
                          duration-300
                          group-hover/image:bg-black/25
                        '
                      />

                      {/* PREVIEW INDICATOR */}
                      <div
                        className='
                          absolute
                          bottom-2
                          left-2
                          z-10
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-white/20
                          bg-black/45
                          px-2
                          py-1
                          backdrop-blur-md
                        '
                      >
                        {/* MAGNIFYING GLASS */}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.8'
                          className='size-2.5 text-white/90'
                        >
                          <circle cx='11' cy='11' r='6' />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m16 16 4 4'
                          />
                        </svg>
                      </div>
                    </div>

                    {/* LARGE IMAGE PREVIEW */}
                    <div
                      className='
                        pointer-events-none
                        absolute
                        right-full
                        top-1/2
                        z-[999]
                        mr-6
                        hidden
                        w-[390px]
                        -translate-y-1/2
                        translate-x-5
                        scale-90
                        overflow-hidden
                        rounded-sm
                        bg-neutral-950
                        opacity-0
                        shadow-[0_30px_100px_rgba(0,0,0,0.8)]
                        transition-all
                        duration-500
                        ease-out
                        group-hover/image:translate-x-0
                        group-hover/image:scale-100
                        group-hover/image:opacity-100
                        md:block
                      '
                    >
                      {/* PREVIEW IMAGE */}
                      <div className='relative aspect-[4/3] w-full overflow-hidden'>
                        <img
                          src={item.image}
                          alt={item.title}
                          className='size-full object-cover'
                        />

                        {/* NUMBER */}
                        <div className='absolute left-4 top-4'>
                          <span
                            className='
                              inline-flex
                              border
                              border-white/30
                              bg-black/30
                              px-2
                              py-1
                              text-[8px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-white/80
                              backdrop-blur-sm
                            '
                          >
                            {item.number}
                          </span>
                        </div>
                      </div>

                      {/* PREVIEW CONTENT */}
                      <div className='border-t border-white/10 px-5 py-4'>
                        <div className='mb-2'>
                          <span
                            className='
                              text-[8px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-white/40
                            '
                          >
                            {item.tag}
                          </span>
                        </div>

                        <h4 className='text-sm font-medium leading-tight text-white'>
                          {item.title}
                        </h4>

                        <p className='mt-2 max-w-[320px] text-[10px] leading-[1.6] text-white/45'>
                          {item.previewDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
