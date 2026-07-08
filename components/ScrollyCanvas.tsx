'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, MotionValue } from 'framer-motion';

interface CanvasState {
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  images: HTMLImageElement[];
  dpr: number;
}

const TOTAL_SAMPLED = 100;

export function ScrollyCanvas({
  scrollYProgress,
  getFrameIndex,
}: {
  scrollYProgress: MotionValue<number>;
  getFrameIndex: (progress: number) => number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<CanvasState>({
    canvas: null,
    ctx: null,
    images: [],
    dpr: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
  });
  const [loadProgress, setLoadProgress] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);
  const lastFrameRef = useRef(-1);
  const currentFrameRef = useRef(0);

  // Prioritize first frame to unblock UI instantly, then load the rest
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_SAMPLED);

    const loadRemainingFrames = () => {
      for (let i = 1; i < TOTAL_SAMPLED; i++) {
        const sourceFrame = Math.round((i / TOTAL_SAMPLED) * 199);
        const frameNum = String(sourceFrame).padStart(3, '0');
        const img = new Image();
        img.src = `/split_frames/frame_${frameNum}_delay-0.05s.webp`;
        img.crossOrigin = 'anonymous';

        img.onload = () => {
          if (isMounted) {
            loadedCount++;
            setLoadProgress((loadedCount / (TOTAL_SAMPLED - 1)) * 100);

            // If the user has scrolled to this frame while it was loading, draw it now
            if (currentFrameRef.current === i) {
              drawFrame(i);
            }
          }
        };

        img.onerror = () => {
          if (isMounted) {
            loadedCount++;
          }
        };

        images[i] = img;
      }
    };

    const firstImg = new Image();
    firstImg.src = `/split_frames/frame_000_delay-0.05s.webp`;
    firstImg.crossOrigin = 'anonymous';

    firstImg.onload = () => {
      if (isMounted) {
        setIsPreloading(false);
        drawFrame(0);
        loadRemainingFrames();
      }
    };

    firstImg.onerror = () => {
      if (isMounted) {
        setIsPreloading(false);
        loadRemainingFrames();
      }
    };

    images[0] = firstImg;
    stateRef.current.images = images;

    return () => {
      isMounted = false;
    };
  }, []);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const dpr = stateRef.current.dpr;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;

      const rect = canvas.parentElement.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Use setTransform to reset the matrix before scaling — avoids
      // accumulating dpr^n transforms across multiple resize events.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Re-render after resize
      drawFrame(currentFrameRef.current);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    stateRef.current.canvas = canvas;
    stateRef.current.ctx = ctx;

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const drawFrame = (frameIndex: number) => {
    const { canvas, ctx, images } = stateRef.current;
    if (!canvas || !ctx || images.length === 0) return;

    currentFrameRef.current = frameIndex;

    const img = images[frameIndex];
    const containerWidth = canvas.width / stateRef.current.dpr;
    const containerHeight = canvas.height / stateRef.current.dpr;

    if (!img || !img.complete || !img.width) {
      ctx.fillStyle = '#0a0a1a';
      ctx.fillRect(0, 0, containerWidth, containerHeight);
      ctx.font = 'light 48px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        `Frame ${String(frameIndex).padStart(2, '0')}`,
        containerWidth / 2,
        containerHeight / 2
      );
      return;
    }

    const imgAspect = img.width / img.height;
    const containerAspect = containerWidth / containerHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX = 0;
    let offsetY = 0;

    if (imgAspect > containerAspect) {
      drawHeight = containerHeight;
      drawWidth = drawHeight * imgAspect;
      offsetX = (containerWidth - drawWidth) / 2;
    } else {
      drawWidth = containerWidth;
      drawHeight = drawWidth / imgAspect;
      offsetY = (containerHeight - drawHeight) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Subscribe directly to scrollYProgress MotionValue — no React state lag
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = getFrameIndex(latest);
    if (frameIndex !== lastFrameRef.current) {
      lastFrameRef.current = frameIndex;
      drawFrame(frameIndex);
    }
  });

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full sticky top-0 z-10"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ imageRendering: 'crisp-edges' }}
      />
    </div>
  );
}