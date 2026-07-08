'use client';

import { useState, useEffect, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#_';

export function ScrambleLink({ href, text }: { href: string; text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      let iteration = 0;
      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(intervalRef.current!);
        }

        iteration += 1 / 3;
      }, 30);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayText(text);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, text]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-sm tracking-[0.05em] transition-colors duration-300 relative inline-block group"
      style={{ 
        color: isHovered ? '#d97030' : '#8a7a6a',
        textShadow: isHovered ? '0 0 10px rgba(217,112,48,0.5)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </a>
  );
}
