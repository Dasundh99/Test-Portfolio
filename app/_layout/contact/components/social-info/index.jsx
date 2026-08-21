'use client';

import Link from 'next/link';
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';

import { ListTitle } from './index.styled';

const socialIcons = {
  GitHub: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  Facebook: FaFacebookF,
  YouTube: FaYoutube,
  Behance: FaBehance,
  Dribbble: FaDribbble,
  Twitter: FaXTwitter,
  X: FaXTwitter,
};

export function SocialInfo() {
  return (
    <div className='relative z-10 w-full px-8 pb-8 pt-0 md:px-12'>
      <div className='flex w-full items-start justify-between gap-10'>
        {/* Version */}
        <div className='shrink-0'>
          <ListTitle>Version</ListTitle>

          <p className='mt-3 text-sm'>{new Date().getFullYear()} © Edition</p>
        </div>

        {/* Socials */}
        <div className='min-w-0 flex-1'>
          <ListTitle>Socials</ListTitle>

          <ul className='mt-3 flex flex-wrap gap-x-6 gap-y-2'>
            {socialMedias.map(({ href, title }) => {
              const Icon = socialIcons[title];

              return (
                <li key={href} className='group'>
                  <Link
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={title}
                    className='inline-flex items-center'
                  >
                    <MagneticButton>
                      <span className='flex items-center gap-2 whitespace-nowrap'>
                        {Icon && (
                          <Icon
                            size={17}
                            strokeWidth={2}
                            className='shrink-0 transition-transform duration-300 group-hover:scale-110'
                          />
                        )}

                        <span>{title}</span>
                      </span>
                    </MagneticButton>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
