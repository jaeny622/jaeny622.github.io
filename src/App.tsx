import Cursor    from '@/components/layout/Cursor';
import Navbar    from '@/components/layout/Navbar';
import About from '@/components/sections/About';

import Intro       from '@/components/sections/Intro';
import Marquee       from '@/components/sections/Marquee';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Intro />
        <Marquee />
        <About />
      </main>
    </>
  );
}
