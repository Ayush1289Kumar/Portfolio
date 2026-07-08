'use client';

import { useScroll, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const TOTAL_FRAMES = 100;

export function useScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Apply a spring physics model to the scroll to smooth out mouse wheels and trackpads
  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 200,   // High stiffness so it doesn't lag too far behind
    damping: 40,      // High damping so it settles quickly without bouncing
    restDelta: 0.001
  });

  const getFrameIndex = (progress: number) =>
    Math.min(Math.floor(progress * TOTAL_FRAMES), TOTAL_FRAMES - 1);

  return {
    containerRef,
    scrollYProgress,
    getFrameIndex,
    TOTAL_FRAMES,
  };
}