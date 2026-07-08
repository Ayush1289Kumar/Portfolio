'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

export function Overlay({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  // Hide entire overlay once past the scrolly section
  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.85, 0.99, 1],
    [1, 1, 1, 0]
  );

  // ── Hero section: visible 0% → fade out → gone by 15% ──
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.15],
    [1, 1, 0]
  );
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.15],
    [0, 0, -30]
  );
  // Hard visibility cutoff so it's literally gone after 15%
  const heroVisibility = useTransform(
    scrollYProgress,
    [0, 0.15, 0.16],
    ['visible', 'visible', 'hidden']
  );

  // ── Philosophy section: starts at 18% (3% gap), gone by 52% ──
  const philosophyOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.22, 0.5, 0.52],
    [0, 1, 1, 0]
  );
  const philosophyX = useTransform(
    scrollYProgress,
    [0.18, 0.22, 0.5, 0.52],
    [-40, 0, 0, -40]
  );

  // ── Strategy section: starts at 55% (3% gap), gone by 95% ──
  const strategyOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.58, 0.9, 0.95],
    [0, 1, 1, 0]
  );
  const strategyX = useTransform(
    scrollYProgress,
    [0.55, 0.58, 0.9, 0.95],
    [40, 0, 0, 40]
  );

  return (
    <motion.div
      style={{ opacity: containerOpacity }}
      className="fixed inset-0 z-30 pointer-events-none"
    >
      {/* Hero Section — fully isolated; gone by 15% */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY, visibility: heroVisibility }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <h1 className="font-display text-7xl font-extrabold tracking-[-0.02em] text-white mb-4 text-center">
          Ayush Kumar
        </h1>
        <p className="font-sans text-xl font-light text-gray-300 tracking-wide">
          Creative Developer & Digital Architect
        </p>
      </motion.div>

      {/* Philosophy Section — starts at 18%, gone by 52% */}
      <motion.div
        style={{
          opacity: philosophyOpacity,
          x: philosophyX,
        }}
        className="absolute inset-0 flex items-center pointer-events-none"
      >
        <div className="max-w-md ml-[5%]">
          <p className="font-mono text-sm text-cyan-400 mb-4 tracking-[0.15em]">
            01 // PHILOSOPHY
          </p>
          <h2 className="font-display text-4xl font-bold text-white leading-tight">
            I build hyper-performance digital experiences.
          </h2>
        </div>
      </motion.div>

      {/* Strategy Section — starts at 55%, gone by 95% */}
      <motion.div
        style={{
          opacity: strategyOpacity,
          x: strategyX,
        }}
        className="absolute inset-0 flex items-center justify-end pointer-events-none"
      >
        <div className="max-w-md mr-[5%] text-right">
          <p className="font-mono text-sm text-purple-400 mb-4 tracking-[0.15em]">
            02 // STRATEGY
          </p>
          <h2 className="font-display text-4xl font-bold text-white leading-tight">
            Bridging radical design systems and engineering logic.
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}