'use client';

import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { Projects } from '@/components/Projects';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { TextReveal } from '@/components/TextReveal';
import { DownloadResume } from '@/components/DownloadResume';
import { ScrambleLink } from '@/components/ScrambleLink';
import { Code2, Terminal, Briefcase, Compass, Sparkles, BrainCircuit, Database, PenTool, Server, Layers, Bot, Monitor, GitBranch, LayoutTemplate, Paintbrush, Box, Cuboid, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Page() {
  const { containerRef, scrollYProgress } = useScrollProgress();

  return (
    <>
      {/* Scrollytelling Section */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: '350vh' }}
      >
        {/* Sticky Canvas Sequence */}
        <ScrollyCanvas scrollYProgress={scrollYProgress} />

        {/* Scroll-driven Text Overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>

      {/* About Me Section */}
      <section className="relative z-0 overflow-hidden px-6 md:px-8 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0b16] via-[#130f1a] to-[#1a1208]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm mb-4 tracking-[0.15em]"
              style={{ color: '#d97030' }}
            >
              03 ABOUT ME
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-50 to-[#f08848] mb-8 pb-2"
            >
              Who I Am
            </motion.h2>
            <TextReveal className="font-sans text-lg md:text-xl leading-relaxed text-[#c8bdb0]">
              I'm a Software Engineering student driven by curiosity and disciplined learning. Beyond writing code, I'm fascinated by the intersection of technology, philosophy, fitness, and personal growth. I enjoy building projects, exploring new technologies, and documenting my journey, not because I've reached the destination, but because I believe the process itself is worth sharing.
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-0 overflow-hidden px-6 md:px-8 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1208] via-[#2a1a0e] to-[#1a1520]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm mb-8 tracking-[0.15em]"
            style={{ color: '#d97030' }}
          >
            04 SKILLS
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
            {/* Bento Box: Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="font-display text-2xl font-medium text-white mb-6">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Python', icon: Terminal },
                  { name: 'Java', icon: Code2 },
                  { name: 'C', icon: Code2 },
                  { name: 'JavaScript', icon: Code2 },
                  { name: 'HTML', icon: LayoutTemplate },
                  { name: 'CSS', icon: Paintbrush }
                ].map((skill, idx) => (
                  <span key={idx} className="flex items-center gap-2 font-mono text-sm px-3 py-1.5 rounded-full bg-white/10 text-gray-200 hover:bg-orange-500/20 hover:text-orange-300 transition-colors cursor-default border border-white/5">
                    <skill.icon size={14} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bento Box: Frameworks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="font-display text-2xl font-medium text-white mb-6">Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Next.js', icon: Globe },
                  { name: 'React', icon: Box },
                  { name: 'Tailwind CSS', icon: Paintbrush },
                  { name: 'Framer Motion', icon: Sparkles },
                  { name: 'Three.js', icon: Cuboid }
                ].map((skill, idx) => (
                  <span key={idx} className="flex items-center gap-2 font-mono text-sm px-3 py-1.5 rounded-full bg-white/10 text-gray-200 hover:bg-blue-500/20 hover:text-blue-300 transition-colors cursor-default border border-white/5">
                    <skill.icon size={14} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bento Box: Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="font-display text-2xl font-medium text-white mb-6">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Git & GitHub', icon: GitBranch },
                  { name: 'VS Code', icon: Monitor },
                  { name: 'Vercel', icon: Server },
                  { name: 'Netlify', icon: Server },
                  { name: 'AI Tools & LLMs', icon: Bot },
                  { name: 'Rainmeter', icon: Layers }
                ].map((skill, idx) => (
                  <span key={idx} className="flex items-center gap-2 font-mono text-sm px-3 py-1.5 rounded-full bg-white/10 text-gray-200 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors cursor-default border border-white/5">
                    <skill.icon size={14} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bento Box: Exploring */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="font-display text-2xl font-medium text-white mb-6">Exploring</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'DSA', icon: Code2 },
                  { name: 'Full-Stack Web', icon: Database },
                  { name: 'AI Development', icon: BrainCircuit },
                  { name: 'Content Creation', icon: PenTool }
                ].map((skill, idx) => (
                  <span key={idx} className="flex items-center gap-2 font-mono text-sm px-3 py-1.5 rounded-full bg-white/10 text-gray-200 hover:bg-purple-500/20 hover:text-purple-300 transition-colors cursor-default border border-white/5">
                    <skill.icon size={14} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="relative z-0 overflow-hidden px-6 md:px-8 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1520] via-[#0d1526] to-[#0e0b16]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm mb-4 tracking-[0.15em]"
            style={{ color: '#d97030' }}
          >
            05 CURRENT FOCUS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-50 to-[#f08848] mb-12 pb-2"
          >
            What I'm Working On
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
            {[
              { text: 'Mastering Data Structures & Algorithms (LeetCode daily grind)', icon: Code2 },
              { text: 'Building full-stack web applications', icon: Terminal },
              { text: 'Developing AI-integrated tools and assistants (Zia Assistant)', icon: Briefcase },
              { text: 'Creating educational content around programming and self-improvement', icon: Compass },
            ].map((item, idx) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, translateY: -4 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                className="group relative flex items-start gap-4 p-6 rounded-xl border backdrop-blur-sm overflow-hidden"
                style={{
                  borderColor: 'rgba(217, 112, 48, 0.15)',
                  background: 'rgba(217, 112, 48, 0.02)',
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d97030]/0 to-[#d97030]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="mt-0.5 p-2 rounded-lg bg-[#d97030]/10 text-[#d97030] group-hover:scale-110 group-hover:bg-[#d97030]/20 transition-all duration-300 relative z-10">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <p className="font-sans text-lg relative z-10 transition-colors duration-300 group-hover:text-white" style={{ color: '#c8bdb0' }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <Projects />

      {/* Contact Section */}
      <section className="relative z-0 overflow-hidden px-6 md:px-8 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0b16] via-[#1a1520] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-50 to-[#8cb4ff] mb-6 pb-2"
          >
            Let's Build Something Together
          </motion.h2>
          <div className="flex flex-col items-center gap-12">
            <TextReveal className="font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center" style={{ color: '#c8bdb0' }}>
              Whether it's collaboration, opportunities, or simply discussing ideas, my inbox is always open.
            </TextReveal>
            <DownloadResume />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 group mt-16"
          >
            {[
              { name: 'GitHub (Personal)', href: 'https://github.com/Ayush1289Kumar' },
              { name: 'GitHub (Projects)', href: 'https://github.com/zenithblaze032-cmyk' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-kumar-806371377/' },
              { name: 'Instagram', href: 'https://www.instagram.com/nova_.ayush/' },
              { name: 'Email', href: 'mailto:ayushkumarpro1289@gmail.com' },
            ].map((link) => (
              <ScrambleLink key={link.name} href={link.href} text={link.name} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-0 bg-black border-t px-6 md:px-8 py-12" style={{ borderColor: 'rgba(217,112,48,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-mono text-sm mb-2" style={{ color: '#d97030' }}>
                AYUSH KUMAR
              </h3>
              <p className="font-sans text-xs" style={{ color: '#6a5a4a' }}>
                Software Engineering Student
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 group">
              {[
                { label: 'GitHub (Personal)', href: 'https://github.com/Ayush1289Kumar' },
                { label: 'GitHub (Projects)', href: 'https://github.com/zenithblaze032-cmyk' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-kumar-806371377/' },
                { label: 'Instagram', href: 'https://www.instagram.com/nova_.ayush/' },
                { label: 'Email', href: 'mailto:ayushkumarpro1289@gmail.com' },
              ].map((link) => (
                <ScrambleLink key={link.label} href={link.href} text={link.label} />
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(217,112,48,0.06)' }}>
            <p className="font-sans text-xs text-center" style={{ color: '#4a3a2a' }}>
              © 2026 Ayush Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}