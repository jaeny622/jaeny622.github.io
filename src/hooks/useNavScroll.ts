import { useEffect, useState } from 'react';

export function useNavScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', fn, { passive: true });

    return () => window.removeEventListener('scroll', fn);
  }, [threshold]);

  return scrolled;
}
