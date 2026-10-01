'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: '01 — VELOOP Rewards',
    description: 'A luxury, fintech-grade design system and interactive feature suite. Engineered for a digital rewards platform to resolve reward conversion questions under 3 seconds.',
    features: ['5 Interactive Banners', 'Native WebGL 3D Orb', 'Physics-based Smooth Scrolling'],
    tags: ['React 19', 'Three.js', 'Lenis', 'Vite 7', 'Tailwind v4'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    buttons: [
      { label: 'Live Demo', href: 'https://veloop-rewards-ayush.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/zenithblaze032-cmyk/veloop-rewards-ayush' }
    ]
  },
  {
    title: '02 — SatQuery (PrithviQ AI)',
    description: 'A multimodal AI tool that allows users to upload satellite images, ask questions in plain English, and receive answers with map-based verification.',
    features: ['Multimodal AI', 'Map-based Verification', 'Disaster Response Use Cases'],
    tags: ['Python', 'TypeScript', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    buttons: [
      { label: 'Live Demo', href: 'https://satquery-iota.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Ayush1289Kumar/SatQuery' }
    ]
  },
  {
    title: '03 — Shadow Level',
    description: 'Gamified daily habit tracker inspired by Solo Leveling. Completing habits grants EXP, levels you up from E-Rank to S-Rank, and summons shadow units.',
    features: ['RPG Progression System', 'Analytics Dashboard', 'Streak Tracking'],
    tags: ['React', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2068&auto=format&fit=crop',
    buttons: [
      { label: 'Live Demo', href: 'https://shadow-level-iota.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/zenithblaze032-cmyk/Shadow-Level' }
    ]
  },
  {
    title: '04 — Zia Personal Assistant',
    description: 'A blazingly fast, hybrid AI-powered voice and system assistant built exclusively for Windows. Integrates natural language with OS automation.',
    features: ['Local + Cloud LLM Routing', 'OS Automation', 'Natural Language Commands'],
    tags: ['Python', 'AI / LLMs'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    buttons: [
      { label: 'GitHub', href: 'https://github.com/zenithblaze032-cmyk/Zia-Personal-Assistant' }
    ]
  },
  {
    title: '05 — Interactive 3D Portfolio',
    description: 'A modern, interactive, 3D personal developer portfolio featuring project showcases, skills matrix, dynamic scroll animations, and a cinematic dark UI.',
    features: ['Cinematic Dark UI', '3D Interactive Canvas', 'Scroll Animations'],
    tags: ['Next.js 15+', 'Three.js', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    buttons: [
      { label: 'Live Demo', href: 'https://portfolio-ayushkumar.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Ayush1289Kumar/Portfolio' }
    ]
  },
  {
    title: '06 — CBSE Result Analyzer',
    description: 'A client-side web application for parsing and analyzing CBSE Class XII result gazettes. Computes percentages, Performance Index, and subject stats.',
    features: ['Client-Side Processing', 'Data Visualization', 'No Backend Required'],
    tags: ['JavaScript', 'HTML', 'CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    buttons: [
      { label: 'GitHub', href: 'https://github.com/zenithblaze032-cmyk/CBSE_RESULT_ANALYZER' }
    ]
  }
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative z-0 overflow-hidden px-6 md:px-8 py-16 md:py-24">
      {/* Background — amber-warm toned */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0e0b16 0%, #1a1208 40%, #2a1a0e 70%, #1a1520 100%)',
        }}
      />
      {/* Ambient radial glow — warm amber centre */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(217,112,48,0.07) 0%, rgba(58,106,191,0.04) 45%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-50 to-[#f08848] mb-4 pb-2"
          >
            Featured Projects
          </motion.h2>
          {/* Amber accent underline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-16 h-px origin-left"
            style={{ background: 'linear-gradient(to right, #d97030, transparent)' }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl overflow-hidden h-[550px] cursor-pointer"
                style={{
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out"
                    style={{
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  {/* Subtle top gradient for title legibility before hover */}
                  <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
                </div>

                {/* Dark Overlay that fades in */}
                <motion.div
                  className="absolute inset-0 bg-black/85 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Project Title */}
                <motion.div
                  className="absolute top-0 left-0 w-full p-8 z-10"
                  animate={{ 
                    y: isHovered ? -5 : 0,
                    opacity: isHovered ? 1 : 0.9 
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <h3 className="font-display text-3xl font-semibold text-white tracking-wide drop-shadow-xl">
                    {project.title}
                  </h3>
                </motion.div>

                {/* Content Container (Revealed on hover) */}
                <div className="absolute inset-0 p-8 pt-28 flex flex-col justify-start z-10 pointer-events-none">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 15 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <p className="font-sans text-[16px] md:text-lg mb-6 leading-relaxed text-gray-200">
                      {project.description}
                    </p>
                    {project.features && (
                      <div className="mb-6">
                        <span className="text-sm uppercase tracking-wider font-semibold text-orange-400 mb-3 block">Key Features</span>
                        <ul className="flex flex-col gap-2">
                          {project.features.map((item, i) => (
                            <li key={i} className="text-[15px] text-gray-300 flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400/60 mr-3" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>

                  {/* Spacing to push buttons and tech to bottom */}
                  <div className="mt-auto" />

                  {/* Buttons */}
                  <motion.div
                    className="flex gap-4 mb-6 pointer-events-auto"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 15 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {project.buttons.map((btn, btnIdx) => (
                      <a
                        key={btnIdx}
                        href={btn.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center bg-white/5 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 backdrop-blur-md"
                      >
                        {btn.label}
                      </a>
                    ))}
                  </motion.div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tagIdx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        transition={{ duration: 0.3, delay: 0.3 + tagIdx * 0.05 }}
                        className="font-mono text-xs px-3 py-1.5 rounded-full text-gray-200 bg-white/10 border border-white/10 shadow-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}