'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use quickTo for high-performance mouse tracking
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power3' });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);

    // Expand cursor on hovering interactive elements
    const handleHoverElements = () => {
      const iterables = document.querySelectorAll('a, button, input, [data-cursor="hover"]');
      
      iterables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cursor, { 
            scale: 2.5, 
            backgroundColor: 'rgba(217, 112, 48, 0.1)',
            borderColor: 'rgba(217, 112, 48, 0.8)',
            backdropFilter: 'blur(2px)',
            duration: 0.3 
          });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, { 
            scale: 1, 
            backgroundColor: 'white',
            borderColor: 'transparent',
            backdropFilter: 'none',
            duration: 0.3 
          });
        });
      });
    };

    handleHoverElements();

    // Re-run when DOM changes
    const observer = new MutationObserver(() => {
      handleHoverElements();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference border border-transparent transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    />
  );
}
