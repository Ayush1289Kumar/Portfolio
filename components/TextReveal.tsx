'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function TextReveal({ children, className = '' }: { children: string, className?: string }) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const spans = textRef.current.querySelectorAll('span');

    gsap.fromTo(spans, 
      { opacity: 0, y: 15 },
      {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
        },
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
  }, []);

  const words = children.split(' ');

  return (
    <p ref={textRef} className={className}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block opacity-0 translate-y-[10px]" style={{ marginRight: '0.25em' }}>
          {word}
        </span>
      ))}
    </p>
  );
}
