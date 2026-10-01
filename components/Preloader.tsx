'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function Preloader() {
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const loadingBarContainerRef = useRef<HTMLDivElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);
  const loadingTextRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoaded(true);
        document.body.style.overflow = 'auto';
      }
    });

    // Animate loading bar width and text
    let counterValue = { val: 0 };
    tl.to(counterValue, {
      val: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (loadingTextRef.current) {
          loadingTextRef.current.innerText = `${Math.floor(counterValue.val)}%`;
        }
        if (loadingBarRef.current) {
          loadingBarRef.current.style.width = `${counterValue.val}%`;
        }
      }
    })
    // Fade out text and the loading bar line immediately before the split
    .to([loadingTextRef.current, loadingBarContainerRef.current], { 
      opacity: 0, 
      duration: 0.3 
    })
    // Split the curtain
    .to([topHalfRef.current, bottomHalfRef.current], {
      yPercent: (i) => i === 0 ? -100 : 100,
      duration: 1.2,
      ease: 'power4.inOut'
    }, '-=0.1');

  }, []);

  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
      {/* Top Half */}
      <div 
        ref={topHalfRef} 
        className="flex-1 bg-black relative"
      >
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <span ref={loadingTextRef} className="font-mono text-[#d97030] text-sm tracking-widest">0%</span>
        </div>
      </div>
      
      {/* Center Loading Bar container */}
      <div 
        ref={loadingBarContainerRef}
        className="h-[2px] w-full bg-white/10 absolute top-1/2 -translate-y-1/2 left-0 z-10"
      >
        <div 
          ref={loadingBarRef} 
          className="h-full bg-[#d97030] w-0" 
        />
      </div>

      {/* Bottom Half */}
      <div 
        ref={bottomHalfRef} 
        className="flex-1 bg-black"
      />
    </div>
  );
}
