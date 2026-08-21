import {
  BeyondClassRoom,
  Contact,
  Description,
  Header,
  Journey,
  Learned,
  Navbar,
  Project,
  Publications,
  Research,
  Teaching,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Your Portfolio',
  description:
    'This is a placeholder description for my portfolio. Replace this with your own professional summary.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Journey />
        <Learned />
        <Research />
        <Publications />
        <Teaching />
        <BeyondClassRoom />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
