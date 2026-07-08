'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

// ── Font families (direct strings — bypasses CSS variable chain) ──────────────
const FONT_SERIF = "'DM Serif Display', 'DM Serif Display', Georgia, serif";
const FONT_DISPLAY = "'var(--font-roboto-mono)', 'Roboto Mono', monospace";
const FONT_MONO = "'var(--font-jetbrains-mono)', 'JetBrains Mono', monospace";
const FONT_SANS = "'var(--font-satoshi)', 'Satoshi', system-ui, sans-serif";

// ── Shadow presets — boosted glows so they punch through on bright frames ─────
//    Pattern: tight dark base → soft dark halo → wide colour bloom
const SHADOW_TITLE =
  '0 2px 6px rgba(0,0,0,0.98), ' +
  '0 6px 28px rgba(0,0,0,0.85), ' +
  '0 14px 56px rgba(0,0,0,0.60), ' +
  '0 0  60px rgba(217,112,48,0.25)';   // amber bloom on the name itself

const SHADOW_LEARNING =
  '0 1px 4px rgba(0,0,0,0.98), ' +
  '0 4px 18px rgba(0,0,0,0.80), ' +
  '0 0  40px rgba(245,239,232,0.35)';  // warm white glow

const SHADOW_BUILDING =
  '0 1px 4px rgba(0,0,0,0.98), ' +
  '0 4px 18px rgba(0,0,0,0.80), ' +
  '0 0  50px rgba(240,136,72,0.80), ' + // amber bloom — strong
  '0 0  90px rgba(240,136,72,0.40)';    // wide amber halo

const SHADOW_DOCUMENTING =
  '0 1px 4px rgba(0,0,0,0.98), ' +
  '0 4px 18px rgba(0,0,0,0.80), ' +
  '0 0  50px rgba(96,144,224,0.80), ' + // steel bloom — strong
  '0 0  90px rgba(96,144,224,0.40)';    // wide steel halo

const SHADOW_SUBTITLE =
  '0 1px 4px rgba(0,0,0,0.98), ' +
  '0 3px 16px rgba(0,0,0,0.80)';

const SHADOW_SECTION_LABEL =
  '0 1px 4px rgba(0,0,0,0.98), ' +
  '0 0  30px rgba(240,136,72,1.00), ' +  // amber — max opacity
  '0 0  60px rgba(240,136,72,0.70)';     // amber — wide halo

const SHADOW_SECTION_LABEL_STEEL =
  '0 1px 4px rgba(0,0,0,0.98), ' +
  '0 0  30px rgba(140,180,255,1.00), ' + // light steel — max opacity
  '0 0  60px rgba(140,180,255,0.70)';    // light steel — wide halo

// Bright luminous gold — reduced intensity
const SHADOW_PHILOSOPHY_HEADING =
  '0 2px 6px rgba(0,0,0,0.99), ' +
  '0 0  15px rgba(255,220,150,0.60), ' +
  '0 0  30px rgba(255,200,100,0.40), ' +
  '0 0  60px rgba(240,160,60,0.20)';

// Bright luminous cool blue — reduced intensity
const SHADOW_STRATEGY_HEADING =
  '0 2px 6px rgba(0,0,0,0.99), ' +
  '0 0  15px rgba(180,210,255,0.60), ' +
  '0 0  30px rgba(140,180,255,0.40), ' +
  '0 0  60px rgba(96,144,224,0.20)';

// ─────────────────────────────────────────────────────────────────────────────

export function Overlay({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.85, 0.99, 1],
    [1, 1, 1, 0]
  );

  // ── Hero: visible 0% → gone by 15% ──
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12, 0.15], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.12, 0.15], [0, 0, -30]);
  const heroVisibility = useTransform(
    scrollYProgress,
    [0, 0.15, 0.16],
    ['visible', 'visible', 'hidden']
  );

  // ── Philosophy: 18% → 52% ──
  const philosophyOpacity = useTransform(scrollYProgress, [0.18, 0.22, 0.5, 0.52], [0, 1, 1, 0]);
  const philosophyX = useTransform(scrollYProgress, [0.18, 0.22, 0.5, 0.52], [-40, 0, 0, -40]);

  // ── Strategy: 55% → 95% ──
  const strategyOpacity = useTransform(scrollYProgress, [0.55, 0.58, 0.9, 0.95], [0, 1, 1, 0]);
  const strategyX = useTransform(scrollYProgress, [0.55, 0.58, 0.9, 0.95], [40, 0, 0, 40]);

  return (
    <motion.div
      style={{ opacity: containerOpacity }}
      className="fixed inset-0 z-30 pointer-events-none"
    >
      {/* ── Hero ── */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 md:w-12 h-[1px] bg-[#ddd0c4]/40" />
          <p
            className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium"
            style={{
              fontFamily: FONT_SANS,
              color: '#ddd0c4',
            }}
          >
            Software Engineering Student
          </p>
          <div className="w-8 md:w-12 h-[1px] bg-[#ddd0c4]/40" />
        </div>

        {/* "Ayush Kumar" — white fill + amber hairline stroke + 4-layer shadow */}
        <h1
          className="text-7xl font-bold tracking-[-0.03em] text-center mb-4"
          style={{
            fontFamily: FONT_DISPLAY,
            color: '#ffffff',
            WebkitTextStroke: '1px rgba(217,112,48,0.5)',
            textShadow: SHADOW_TITLE,
          }}
        >
          Ayush Kumar
        </h1>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-3">

          {/* "Learning" — DM Serif Display, warm glow */}
          <span
            className="text-xl md:text-3xl tracking-wide"
            style={{
              fontFamily: FONT_SERIF,           // ← direct name, no CSS var needed
              color: '#f5efe8',
              textShadow: SHADOW_LEARNING,
            }}
          >
            Learning
          </span>

          <span
            className="text-xl md:text-3xl font-light"
            style={{
              fontFamily: FONT_SANS,
              color: '#7a6a58',
              textShadow: SHADOW_SUBTITLE,
            }}
          >
            ·
          </span>

          {/* "Building" — Clash Display, amber bloom */}
          <span
            className="text-xl md:text-3xl font-medium tracking-wide"
            style={{
              fontFamily: FONT_DISPLAY,
              color: '#f08848',
              textShadow: SHADOW_BUILDING,
            }}
          >
            Building
          </span>

          <span
            className="text-xl md:text-3xl font-light"
            style={{
              fontFamily: FONT_SANS,
              color: '#7a6a58',
              textShadow: SHADOW_SUBTITLE,
            }}
          >
            ·
          </span>

          {/* "Documenting" — JetBrains Mono, steel bloom */}
          <span
            className="text-xl md:text-3xl tracking-wide"
            style={{
              fontFamily: FONT_MONO,
              color: '#6090e0',
              textShadow: SHADOW_DOCUMENTING,
            }}
          >
            Documenting
          </span>
        </div>
      </motion.div>

      {/* ── Philosophy ── */}
      <motion.div
        style={{ opacity: philosophyOpacity, x: philosophyX }}
        className="absolute inset-0 flex items-center pointer-events-none"
      >
        <div className="max-w-3xl ml-[5%]">
          <p
            className="text-sm mb-4 tracking-[0.15em]"
            style={{
              fontFamily: FONT_MONO,
              color: '#f08848',
              textShadow: SHADOW_SECTION_LABEL,
            }}
          >
            01 PHILOSOPHY
          </p>
          <h2
            className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-50 to-[#f08848] leading-tight text-balance pb-2"
            style={{
              fontFamily: FONT_DISPLAY,
              /* We add a filter drop-shadow to apply glow to gradient text without breaking the bg-clip */
              filter: 'drop-shadow(0px 0px 20px rgba(240,136,72,0.4))',
            }}
          >
            I believe discipline compounds faster than talent.
          </h2>
        </div>
      </motion.div>

      {/* ── Strategy ── */}
      <motion.div
        style={{ opacity: strategyOpacity, x: strategyX }}
        className="absolute inset-0 flex items-center justify-end pointer-events-none"
      >
        <div className="max-w-2xl mr-[5%] text-right">
          <p
            className="text-sm mb-4 tracking-[0.15em]"
            style={{
              fontFamily: FONT_MONO,
              color: '#8cb4ff',
              textShadow: SHADOW_SECTION_LABEL_STEEL,
            }}
          >
            02 STRATEGY
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-50 to-[#8cb4ff] leading-tight text-balance pb-2"
            style={{
              fontFamily: FONT_DISPLAY,
              filter: 'drop-shadow(0px 0px 20px rgba(140,180,255,0.4))',
            }}
          >
            Combining engineering, storytelling, and continuous learning to build a meaningful life.
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}