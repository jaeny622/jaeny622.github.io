import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0;
    let raf: number = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; 
      my = e.clientY 
    };
    
    document.addEventListener('mousemove', onMove);

    const tick = () => {
      dx += (mx - dx) * 0.25; 
      dy += (my - dy) * 0.25
      rx += (mx - rx) * 0.10; 
      ry += (my - ry) * 0.10;
      
      if(dotRef.current) {
        dotRef.current.style.left  = `${dx}px`; 
        dotRef.current.style.top  = `${dy}px`;
      }
      if(ringRef.current) {
        ringRef.current.style.left = `${rx}px`; 
        ringRef.current.style.top = `${ry}px`; 
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    const onEnter = () => { 
      dotRef.current?.classList.add('hov'); 
      ringRef.current?.classList.add('hov');
    }
    const onLeave = () => { 
      dotRef.current?.classList.remove('hov'); 
      ringRef.current?.classList.remove('hov'); 
    }

    const attach = () => {
      document.querySelectorAll('a,button,[data-cur]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      })
    }

    attach();
    
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      mo.disconnect();
    }
  }, []);

  return { dotRef, ringRef }
}