'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Palette,
  Users,
} from 'lucide-react';

import { ParallaxFade, ParallaxReveal } from '@/components';

const galleryItems = [
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: GraduationCap,
    description: 'Learning through experiences beyond traditional classrooms.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Users,
    description: 'Connecting with people, ideas, and different perspectives.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: MessageCircle,
    description: 'Learning through conversations, collaboration, and exchange.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Lightbulb,
    description: 'Discovering new ideas through curiosity and exploration.',
  },
  {
    image: '/images/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Palette,
    description: 'Developing creativity through experimentation and making.',
  },
];

export function BeyondClassRoom() {
  return (
    <article className='container relative py-12 md:py-16 lg:py-20'>
      {/* =====================================================
          2 ROW × 3 COLUMN GRID

          ROW 1:
          [ IMAGE ] [ TITLE + DESCRIPTION ] [ IMAGE ]

          ROW 2:
          [ IMAGE ] [ IMAGE ]             [ IMAGE ]
      ===================================================== */}

      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3'>
        {/* CELL 01 — IMAGE */}

        <GalleryImage item={galleryItems[0]} index={0} />

        {/* CELL 02 — TITLE + DESCRIPTION */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='
            flex
            aspect-[4/3]
            flex-col
            items-center
            justify-center
            bg-white
            px-6
            text-center
            md:p-8
            lg:p-8
          '
        >
          <ParallaxFade>
            <h2 className='text-[4vw] font-black uppercase leading-[1.05] tracking-tight text-black md:text-[4vw]'>
              <ParallaxReveal paragraph='Learning Beyond the Classroom' />
            </h2>
          </ParallaxFade>

          <ParallaxFade>
            <p
              className='
                mt-5
                max-w-md
                text-xs
                leading-relaxed
                text-black/55
                md:mt-6
                md:text-sm
              '
            >
              Learning does not end when the classroom does. Every experience,
              conversation, collaboration, and creative challenge can become an
              opportunity to discover something new and develop a deeper
              understanding of the world.
            </p>
          </ParallaxFade>
        </motion.div>

        {/* CELL 03 — IMAGE */}

        <GalleryImage item={galleryItems[1]} index={1} />

        {/* CELL 04 — IMAGE */}

        <GalleryImage item={galleryItems[2]} index={2} />

        {/* CELL 05 — IMAGE */}

        <GalleryImage item={galleryItems[3]} index={3} />

        {/* CELL 06 — IMAGE */}

        <GalleryImage item={galleryItems[4]} index={4} />
      </div>
    </article>
  );
}

/* =========================================================
   GALLERY IMAGE COMPONENT
========================================================= */

function GalleryImage({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
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
        delay: index * 0.08,
        ease: 'easeOut',
      }}
      className='
        group
        relative
        aspect-[4/3]
        overflow-hidden
        bg-black/5
      '
    >
      {/* IMAGE */}

      <img
        src={item.image}
        alt={item.description}
        className='
          absolute
          inset-0
          size-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        '
      />

      {/* DARK OVERLAY */}

      <div
        className='
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
          opacity-80
          transition-opacity
          duration-500
          group-hover:opacity-100
        '
      />

      {/* NUMBER */}

      <span
        className='
          absolute
          right-4
          top-4
          text-[9px]
          font-medium
          tracking-[0.2em]
          text-white/70
        '
      >
        0{index + 1}
      </span>

      {/* IMAGE CONTENT */}

      <div className='absolute inset-x-0 bottom-0 p-4 md:p-5'>
        <div className='flex items-start gap-3'>
          {/* ICON */}

          <div
            className='
              flex
              size-8
              shrink-0
              items-center
              justify-center
              border
              border-white/30
              bg-white/10
              backdrop-blur-sm
            '
          >
            <Icon size={15} strokeWidth={1.5} className='text-white' />
          </div>

          {/* DESCRIPTION */}

          <p
            className='
              max-w-xs
              pt-1
              text-xs
              leading-relaxed
              text-white/90
              md:text-sm
            '
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
