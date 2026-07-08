'use client';

import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { Projects } from '@/components/Projects';
import { useScrollProgress } from '@/hooks/useScrollProgress';

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

      {/* Projects Grid Section */}
      <Projects />

      {/* Footer */}
      <footer className="relative z-0 bg-black border-t border-white/5 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-sm font-mono text-cyan-400 mb-2">
                AYUSH KUMAR
              </h3>
              <p className="text-xs text-gray-400">
                Creative Developer & Digital Architect
              </p>
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-xs text-gray-500 text-center">
              © 2025 Ayush Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}