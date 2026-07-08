'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, MotionValue } from 'framer-motion';

export function ScrollyCanvas({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const TOTAL_FRAMES = 240;

  // Preload images in the background
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    // Preload all 240 compressed JPEG frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // Pad the number (e.g. 1 -> 001)
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/frames/frame_${paddedIndex}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(imgArray);
          setLoaded(true);
        }
      };
      
      imgArray.push(img);
    }
  }, []);

  // Draw the first frame immediately if available, or update on scroll
  const renderFrame = (progress: number) => {
    if (!loaded || images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate exact frame index based on scroll
    let frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
    frameIndex = Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1));

    const img = images[frameIndex];
    
    // Draw scaled to fill
    const { width, height } = canvas;
    const scale = Math.max(width / img.width, height / img.height);
    const x = (width / 2) - (img.width / 2) * scale;
    const y = (height / 2) - (img.height / 2) * scale;
    
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Sync scroll to canvas frame
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  // Handle resize and initial render
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderFrame(scrollYProgress.get());
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup
    
    return () => window.removeEventListener('resize', handleResize);
  }, [loaded, scrollYProgress]);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative h-screen w-full sticky top-0 z-10 overflow-hidden bg-[#0a0a1a]">
        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
          Loading cinematic experience...
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[100dvh] w-full sticky top-0 z-10 overflow-hidden bg-[#0a0a1a]">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
          Loading cinematic experience...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
