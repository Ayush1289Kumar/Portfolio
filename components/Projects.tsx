'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'NANO BANANA PRO',
    description: 'Ultra-optimized multi-modal inference engine with real-time streaming.',
    tags: ['AI', 'Performance', 'Infrastructure'],
  },
  {
    title: 'KAIJU ENGINE v7',
    description: 'Next-generation physics simulation framework for interactive 3D environments.',
    tags: ['3D', 'Physics', 'WebGL'],
  },
  {
    title: 'SYNAPSE PROTOCOL',
    description: 'Distributed neural network protocol for edge-based machine learning.',
    tags: ['ML', 'Distributed', 'Edge'],
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative z-0 overflow-hidden px-8 py-24">
      {/* Deep atmospheric gradient background — no solid black cutoff */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1c1e] via-[#130f1a] to-[#0e0b16]" />
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(6,182,212,0.08)_0%,rgba(168,85,247,0.04)_40%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-light text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-16 h-px bg-gradient-to-r from-cyan-500 to-transparent"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <motion.div
                className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/[0.06] bg-gradient-to-br from-cyan-950/15 via-transparent to-purple-950/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] overflow-hidden"
                whileHover={{ scale: 1.02, translateY: -8 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Ambient gradient wash — visible at rest, intensifies on hover */}
                <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-light text-white mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tagIdx}
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 1 }}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/[0.06]"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Light Effect */}
                <motion.div
                  className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"
                  animate={{
                    opacity: hoveredIndex === idx ? 0.2 : 0,
                  }}
                />
              </motion.div>

              {/* Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}