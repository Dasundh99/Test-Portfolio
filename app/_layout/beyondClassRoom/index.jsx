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
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: GraduationCap,
    description: 'Learning through experiences beyond traditional classrooms.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Users,
    description: 'Connecting with people, ideas, and different perspectives.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: MessageCircle,
    description: 'Learning through conversations, collaboration, and exchange.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Lightbulb,
    description: 'Discovering new ideas through curiosity and exploration.',
  },
  {
    image:
      'https://res.cloudinary.com/d2kn5xts/image/upload/v1787580877/tri-vo-ItwNHDcO590-unsplash.jpg',
    icon: Palette,
    description: 'Developing creativity through experimentation and making.',
  },
];

export function BeyondClassRoom() {
  return (
    <article className='container relative py-12 md:py-16 lg:py-20'>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3'>
        {/* CELL 01 — IMAGE */}
        <GalleryImage item={galleryItems[0]} index={0} />

        {/* CELL 02 — TITLE + DESCRIPTION */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
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
          {/* MAIN TITLE */}
          <ParallaxFade>
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
              <ParallaxReveal paragraph='Learning Beyond the Classroom' />
            </h2>
          </ParallaxFade>

          {/* DESCRIPTION */}
          <ParallaxFade>
            <p
              className='
                mt-5
                max-w-md
                text-[11px]
                leading-[1.65]
                text-black/55
                md:mt-6
                md:text-[13px]
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
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className='
        group
        relative
        aspect-[4/3]
        overflow-hidden
        rounded-xl
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
          tracking-[0.2em]
          text-white/70
        '
      >
        0{index + 1}
      </span>

      {/* IMAGE CONTENT */}

      <div
        className='
          absolute
          inset-x-0
          bottom-0
          flex
          justify-center
          p-3
          md:p-4
        '
      >
        {/* ICON + TEXT */}

        <div
          className='
            flex
            w-fit
            max-w-full
            items-center
            justify-center
            gap-2.5
          '
        >
          {/* ICON */}

          <div
            className='
              flex
              size-7
              shrink-0
              items-center
              justify-center
            '
          >
            <Icon size={13} strokeWidth={1.5} className='text-white' />
          </div>

          {/* DESCRIPTION */}

          <p
            className='
              text-center
              text-[10px]
              leading-normal
              text-white/85
              md:text-[11px]
            '
          >
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
