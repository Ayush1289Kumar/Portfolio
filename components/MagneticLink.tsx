'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticLink({ href, text }: { href: string; text: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Magnetic pull strength (0.2 means it moves 20% of the distance towards the mouse)
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="font-mono text-sm tracking-[0.05em] inline-block p-4 -m-4 transition-colors duration-300"
      style={{ color: '#8a7a6a' }}
      whileHover={{ color: '#d97030', textShadow: '0 0 10px rgba(217,112,48,0.5)' }}
    >
      {text}
    </motion.a>
  );
}
