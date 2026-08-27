import {
  BeyondClassRoom,
  Contact,
  Description,
  DesignProjects,
  DesignProjectsTwo,
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
  title: 'Home | Dulashi Kongahawaththa',
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
        <DesignProjects />
        <DesignProjectsTwo />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
