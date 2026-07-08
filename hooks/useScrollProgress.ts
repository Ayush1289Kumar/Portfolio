'use client';

import { useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

const TOTAL_FRAMES = 30;

export function useScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
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