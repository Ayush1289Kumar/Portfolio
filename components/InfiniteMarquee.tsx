'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function InfiniteMarquee({ items }: { items: string[] }) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // We animate the wrapper container to move left by half its total width
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: 'linear'
    });
  }, []);

  // Double the items so it fills the screen and loops seamlessly
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden flex bg-[#1a1208] py-8 border-y border-[#d97030]/20">
      <div ref={marqueeRef} className="flex whitespace-nowrap w-fit">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#d97030] to-white opacity-80 mx-8">
              {item}
            </span>
            <span className="text-[#d97030] text-3xl mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
