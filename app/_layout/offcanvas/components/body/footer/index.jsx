'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title, icon: Icon }) => {
    const id = randomId();

    return (
      <li key={id}>
        <Link href={href} target='_blank' rel='noopener noreferrer'>
          <MagneticButton>
            <span className='flex items-center gap-2'>
              {Icon && <Icon className='size-8' />}
            </span>
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <ul className='flex w-full items-center justify-between gap-6'>{medias}</ul>
  );
}
