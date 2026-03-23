import { useEffect, useRef } from 'react';

export function useReveal(selector = '.js-reveal') {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    
    if (!root) return;

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          obs.unobserve(e.target); 
        } 
      }), { threshold: 0.08 }
    );

    root.querySelectorAll(selector).forEach(el => obs.observe(el));

    return () => obs.disconnect();
  }, [selector]);
  
  return ref;
}
