'use client';

import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
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
    <article className='relative w-full overflow-visible bg-neutral-200 py-12 text-black md:py-16 lg:py-20'>
      <div className='container overflow-visible'>
        <div className='grid grid-cols-1 overflow-visible lg:grid-cols-[26%_74%]'>
          {/* =====================================================
              LEFT — INTRO
          ===================================================== */}
          <div className='lg:pr-10'>
            <div className='lg:sticky lg:top-24'>
              {/* SECTION TITLE */}
              <ParallaxFade>
                <h2
                  className='
                    max-w-3xl
                    overflow-visible
                    py-[0.08em]
                    text-[clamp(3rem,5vw,4rem)]
                    uppercase
                    leading-none
                    tracking-[-0.04em]
                    text-black
                  '
                >
                  <ParallaxReveal paragraph='Research' />
                </h2>
              </ParallaxFade>

              {/* DESCRIPTION */}
              <ParallaxFade>
                <Balancer
                  as='p'
                  className='
                    mt-8
                    max-w-lg
                    text-[14px]
                    font-normal
                    leading-[1.8]
                    text-black/65
                    md:mt-10
                  '
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

          {/* =====================================================
              RIGHT — RESEARCH CARDS
          ===================================================== */}
          <div className='mt-10 overflow-visible lg:mt-0 lg:pl-8'>
            <div className='grid grid-cols-1 gap-3 overflow-visible'>
              {researchItems.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 15,
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
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='
                    group
                    relative
                    overflow-visible
                    rounded-xl
                    border
                    border-black/5
                    bg-white
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-black/10
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                  '
                >
                  {/* =================================================
                      CARD CLIPPING LAYER
                      Only clips the circle animation.
                  ================================================= */}
                  <div
                    className='
                      pointer-events-none
                      absolute
                      inset-0
                      z-0
                      overflow-hidden
                      rounded-xl
                    '
                  >
                    {/* TOP-LEFT CIRCLE */}
                    <div
                      className='
                        absolute
                        -left-10
                        -top-10
                        size-20
                        rounded-full
                        bg-black/[0.035]
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[2.8]
                      '
                    />
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}
                  <div
                    className='
                      relative
                      z-10
                      grid
                      grid-cols-1
                      gap-4
                      p-4
                      md:grid-cols-[1fr_145px]
                      md:items-center
                      md:p-5
                    '
                  >
                    {/* CARD TEXT */}
                    <div className='flex flex-col'>
                      {/* NUMBER */}
                      <div className='mb-4'>
                        <span
                          className='
                            text-[9px]
                            tracking-[0.2em]
                            text-black/30
                            transition-colors
                            duration-300
                            group-hover:text-black/60
                          '
                        >
                          {item.number}
                        </span>
                      </div>

                      {/* TITLE */}
                      <ParallaxFade>
                        <h3
                          className='
                            max-w-xl
                            overflow-visible
                            py-[0.05em]
                            text-[clamp(1rem,1.5vw,1.25rem)]
                            leading-[1.1]
                            tracking-[-0.035em]
                            text-black
                          '
                        >
                          <ParallaxReveal paragraph={item.title} />
                        </h3>
                      </ParallaxFade>

                      {/* DESCRIPTION */}
                      <Balancer
                        as='p'
                        className='
                          mt-2.5
                          max-w-xl
                          text-[10px]
                          leading-[1.65]
                          text-black/50
                          md:text-[11px]
                        '
                      >
                        {item.description}
                      </Balancer>
                    </div>

                    {/* =================================================
                        IMAGE + PREVIEW
                    ================================================= */}
                    <div
                      className='
                        group/image
                        relative
                        z-20
                        aspect-[4/3]
                        w-full
                      '
                    >
                      {/* IMAGE */}
                      <div
                        className='
                          relative
                          size-full
                          overflow-hidden
                          rounded-lg
                          bg-neutral-100
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

                        {/* IMAGE OVERLAY */}
                        <div
                          className='
                            pointer-events-none
                            absolute
                            inset-0
                            bg-black/0
                            transition-all
                            duration-500
                            group-hover/image:bg-black/10
                          '
                        />

                        {/* =================================================
                            SMALL PREVIEW INDICATOR
                        ================================================= */}
                        <div
                          className='
                            absolute
                            bottom-2
                            left-2
                            z-30
                            flex
                            size-5
                            items-center
                            justify-center
                            rounded-full
                            bg-black/25
                            text-white/65
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            group-hover/image:bg-black/40
                            group-hover/image:text-white
                          '
                        >
                          <Eye size={8} strokeWidth={1.4} />
                        </div>
                      </div>

                      {/* =================================================
                          HOVER PREVIEW POPUP
                      ================================================= */}
                      <div
                        className='
                          pointer-events-none
                          absolute
                          right-[calc(100%+20px)]
                          top-1/2
                          z-[9999]
                          hidden
                          w-[360px]
                          -translate-y-1/2
                          translate-x-5
                          scale-95
                          overflow-hidden
                          rounded-lg
                          bg-white
                          opacity-0
                          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
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
                            className='
                              size-full
                              object-cover
                            '
                          />
                        </div>

                        {/* PREVIEW CONTENT */}
                        <div
                          className='
                            border-t
                            border-black/10
                            bg-white
                            px-5
                            py-4
                          '
                        >
                          <span
                            className='
                              text-[8px]
                              uppercase
                              tracking-[0.2em]
                              text-black/40
                            '
                          >
                            {item.tag}
                          </span>

                          <h4
                            className='
                              mt-2
                              text-sm
                              leading-tight
                              text-black
                            '
                          >
                            {item.title}
                          </h4>

                          <p
                            className='
                              mt-2
                              max-w-[320px]
                              text-[10px]
                              leading-[1.6]
                              text-black/50
                            '
                          >
                            {item.previewDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
