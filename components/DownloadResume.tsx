'use client';

import { Magnetic } from './Magnetic';
import { Download } from 'lucide-react';

export function DownloadResume() {
  return (
    <Magnetic strength={0.4}>
      <a 
        href="/Resume.pdf" 
        download="Ayush_Kumar_Resume.pdf"
        className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#d97030] bg-transparent text-[#d97030] font-sans text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(217,112,48,0.4)]"
      >
        <div className="absolute inset-0 bg-[#d97030] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Download Resume</span>
        <Download className="relative z-10 w-5 h-5 transition-all duration-300 group-hover:text-black group-hover:-translate-y-1" />
      </a>
    </Magnetic>
  );
}
