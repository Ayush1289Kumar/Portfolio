'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'PORTFOLIO V0',
    description: 'Interactive scroll-driven portfolio with WebP frame sequences, Framer Motion animations, and a cinematic dark theme.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    title: 'DSA PRACTICE HUB',
    description: 'Curated collection of Data Structures & Algorithms solutions with detailed explanations and complexity analysis.',
    tags: ['Python', 'Java', 'Algorithms'],
  },
  {
    title: 'VIBE CODING LAB',
    description: 'Experimental projects exploring the intersection of AI-assisted development and creative software engineering.',
    tags: ['AI', 'Web Dev', 'Experimental'],
  },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <motion.div
                className="relative p-8 rounded-2xl backdrop-blur-xl overflow-hidden"
                style={{
                  border: '1px solid rgba(217,112,48,0.08)',
                  background:
                    'linear-gradient(135deg, rgba(217,112,48,0.04) 0%, transparent 50%, rgba(58,106,191,0.04) 100%)',
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
                }}
                whileHover={{ scale: 1.02, translateY: -8 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Ambient gradient wash — intensifies on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(217,112,48,0.07) 0%, transparent 50%, rgba(58,106,191,0.07) 100%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-light text-white mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm mb-6 leading-relaxed" style={{ color: '#8a7a6a' }}>
                    {project.description}
                  </p>

                  {/* Tags — amber when hovered, muted steel otherwise */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tagIdx}
                        className="font-mono text-xs px-3 py-1 rounded-full transition-colors duration-300"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(217,112,48,0.12)',
                          color: hoveredIndex === idx ? '#d97030' : '#8a7a6a',
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover glow — amber bloom */}
                <motion.div
                  className="absolute -inset-px rounded-2xl blur-xl -z-10"
                  style={{
                    background: 'linear-gradient(135deg, #d97030, #3a6abf)',
                  }}
                  animate={{
                    opacity: hoveredIndex === idx ? 0.15 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Amber accent line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px origin-left"
                style={{ background: 'linear-gradient(to right, #d97030, transparent)' }}
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