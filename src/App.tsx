import { useState } from 'react';

import Cursor      from '@/components/layout/Cursor';
import Navbar      from '@/components/layout/Navbar';

import Intro       from '@/components/sections/Intro';
import Marquee     from '@/components/sections/Marquee';
import About       from '@/components/sections/About';
import Skills      from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Story from '@/components/sections/Story';

import Modal from '@/components/ui/Modal';

import { Project } from '@/types';

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
        <Experience />
        <Projects onOpen={setActive}/>
        <Education />
        <Story />
      </main>
      <Modal project={active} onClose={() => setActive(null)} />
    </>
  );
}
