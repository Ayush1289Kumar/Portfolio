'use client';

import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { Projects } from '@/components/Projects';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { motion } from 'framer-motion';

export default function Page() {
  const { containerRef, scrollYProgress, getFrameIndex } =
    useScrollProgress();

  return (
    <>
      {/* Scrollytelling Section */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: '650vh' }}
      >
        {/* Sticky Canvas */}
        <ScrollyCanvas
          scrollYProgress={scrollYProgress}
          getFrameIndex={getFrameIndex}
        />

        {/* Scroll-driven Text Overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>

      {/* About Section */}
      <section className="relative z-0 overflow-hidden px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0b16] via-[#130f1a] to-[#0a1c1e]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm text-cyan-400 mb-4 tracking-[0.15em]"
            >
              03 ABOUT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-semibold text-white mb-8"
            >
              Who I Am
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-gray-300 leading-relaxed"
            >
              I'm a Software Engineering student driven by curiosity and disciplined learning. Beyond writing code, I'm fascinated by the intersection of technology, philosophy, fitness, and personal growth. I enjoy building projects, exploring new technologies, and documenting my journey—not because I've reached the destination, but because I believe the process itself is worth sharing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-0 overflow-hidden px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1c1e] via-[#0e0b16] to-[#130f1a]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-cyan-400 mb-8 tracking-[0.15em]"
          >
              04 SKILLS
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-display text-xl font-semibold text-white mb-4">Languages</h3>
              <ul className="space-y-2">
                {['Python', 'Java', 'C'].map((item) => (
                  <li key={item} className="font-sans text-gray-300 flex items-center gap-2">
                    <span className="text-cyan-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-xl font-semibold text-white mb-4">Tools</h3>
              <ul className="space-y-2">
                {['Git', 'GitHub', 'VS Code', 'AI Tools'].map((item) => (
                  <li key={item} className="font-sans text-gray-300 flex items-center gap-2">
                    <span className="text-purple-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Currently Exploring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-display text-xl font-semibold text-white mb-4">Currently Exploring</h3>
              <ul className="space-y-2">
                {['Data Structures & Algorithms', 'Web Development', 'Vibe Coding'].map((item) => (
                  <li key={item} className="font-sans text-gray-300 flex items-center gap-2">
                    <span className="text-cyan-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="relative z-0 overflow-hidden px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#130f1a] via-[#0a1c1e] to-[#0e0b16]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-cyan-400 mb-4 tracking-[0.15em]"
          >
              05 CURRENT FOCUS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-semibold text-white mb-12"
          >
            What I'm Working On
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              'Mastering Data Structures & Algorithms',
              'Exploring Full-Stack Web Development',
              'Building meaningful software projects',
              'Creating educational content around programming and self-improvement',
            ].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                className="flex items-start gap-3 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
              >
                <span className="font-mono text-cyan-400 text-sm mt-0.5">→</span>
                <p className="font-sans text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <Projects />

      {/* Contact Section */}
      <section className="relative z-0 overflow-hidden px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0b16] via-[#130f1a] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-semibold text-white mb-6"
          >
            Let's Build Something Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Whether it's collaboration, opportunities, or simply discussing ideas, my inbox is always open.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { name: 'GitHub', href: 'https://github.com/Ayush1289Kumar' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-kumar-806371377/' },
              { name: 'Instagram', href: 'https://www.instagram.com/takusan_ayaso/' },
              { name: 'Email', href: 'mailto:takusanayaso1289@gmail.com' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-gray-400 hover:text-cyan-400 transition-colors tracking-[0.05em]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-0 bg-black border-t border-white/5 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-mono text-sm text-cyan-400 mb-2">
                AYUSH KUMAR
              </h3>
              <p className="font-sans text-xs text-gray-400">
                Software Engineering Student
              </p>
            </div>
            <div className="flex gap-8">
              <a
                href="https://github.com/Ayush1289Kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-kumar-806371377/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/takusan_ayaso/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:takusanayaso1289@gmail.com"
                className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="font-sans text-xs text-gray-500 text-center">
              © 2026 Ayush Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}