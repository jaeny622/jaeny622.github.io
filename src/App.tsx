import { lazy, Suspense, useState } from 'react';

import Cursor      from '@/components/layout/Cursor';
import Navbar      from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Intro       from '@/components/sections/Intro';
import Marquee     from '@/components/sections/Marquee';
import About       from '@/components/sections/About';
import Skills      from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Story from '@/components/sections/Story';

const Modal = lazy(() => import('@/components/ui/Modal'));

import { Project } from '@/types';
import LazySection from '@/components/ui/LazySection';

export default function App() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Intro />
        <Marquee />
        <About />
        <Skills />
        <LazySection>
          <Experience />
        </LazySection>
        <LazySection>
          <Projects onOpen={setActive} />
        </LazySection>
        <LazySection>
          <Education />
        </LazySection>
        <LazySection>
          <Story />
        </LazySection>
      </main>
      <Footer />
      <Suspense fallback={null}>
      {active && (
        <Modal
          project={active}
          onClose={() => setActive(null)}
        />
      )}
    </Suspense>
    </>
  );
}
