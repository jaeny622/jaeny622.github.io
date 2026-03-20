import Cursor      from '@/components/layout/Cursor';
import Navbar      from '@/components/layout/Navbar';

import Intro       from '@/components/sections/Intro';
import Marquee     from '@/components/sections/Marquee';
import About       from '@/components/sections/About';
import Skills      from '@/components/sections/Skills';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Intro />
        <Marquee />
        <About />
        <Skills />
      </main>
    </>
  );
}
