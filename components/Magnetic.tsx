'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

export function Magnetic({ children, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // We select the first child to animate, so the wrapper itself just handles events
    const target = element.firstElementChild as HTMLElement;
    if (!target) return;

    const xTo = gsap.quickTo(target, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(target, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className="inline-block relative">
      {children}
    </div>
  );
}
