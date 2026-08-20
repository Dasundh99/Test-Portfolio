'use client';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <img
        src={source}
        className='size-full object-cover'
        alt='project items'
      />
    ) : null;
  const video =
    type === 'video' ? (
      <div className='flex size-full items-center justify-center bg-muted-foreground text-center'>
        <span className='text-sm'>Video placeholder</span>
      </div>
    ) : null;

  return (
    <Center
      className='relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
