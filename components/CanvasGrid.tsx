'use client';

import { useEffect, useRef } from 'react';

export function CanvasGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Interpolate mouse movement for smoothness
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      const spacing = 40;
      const dotRadius = 1;
      const influenceRadius = 200;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let offsetX = 0;
          let offsetY = 0;
          let alpha = 0.15;
          let size = dotRadius;

          // If close to mouse, apply repulsion and brightness
          if (distance < influenceRadius) {
            const force = (influenceRadius - distance) / influenceRadius;
            offsetX = (dx / distance) * force * 15;
            offsetY = (dy / distance) * force * 15;
            alpha = 0.15 + (force * 0.4);
            size = dotRadius + (force * 1.5);
          }

          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none bg-[#0a0a0a]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
