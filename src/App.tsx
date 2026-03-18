import Cursor    from '@/components/layout/Cursor'
import Navbar    from '@/components/layout/Navbar'

import Intro       from '@/components/sections/Intro'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Intro />
      </main>
    </>
  )
}
