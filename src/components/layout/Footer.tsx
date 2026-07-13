"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background relative pt-20 lg:pt-32 border-t border-white/5 overflow-hidden">
      <div className="container-custom relative z-10">
        
        <div className="flex flex-col items-center text-center mb-32">
          <p className="text-sm font-sans tracking-widest uppercase text-secondary mb-8">Got a project in mind?</p>
          <a 
            href="mailto:akshitasharma3312@gmail.com"
            className="group flex flex-col items-center"
          >
            <h2 className="text-[12vw] md:text-[8vw] font-heading leading-none tracking-tighter text-white group-hover:italic transition-all duration-500">
              Let&apos;s Talk
            </h2>
            <div className="mt-8 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 border-b border-white/10 w-full">
          <div className="flex flex-col gap-2 text-secondary font-sans text-sm">
            <span className="text-white">Akshita Sharma</span>
            <span>Jaipur, Rajasthan</span>
            <a href="mailto:akshitasharma3312@gmail.com" className="hover:text-white transition-colors">akshitasharma3312@gmail.com</a>
          </div>

          <div className="flex gap-8 text-sm font-sans tracking-widest uppercase text-white/50 w-full md:w-auto">
            <ul className="flex flex-col gap-4 text-left md:text-right w-full">
              <li><Link href="/work" className="text-secondary hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/about" className="text-secondary hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/services" className="text-secondary hover:text-white transition-colors">Services & Process</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-xs font-sans uppercase tracking-widest text-white/30">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/akshita-sharma-211267287/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
      
      {/* Background grain for footer */}
      <div className="absolute inset-0 bg-grain pointer-events-none mix-blend-overlay opacity-50 z-0" />
    </footer>
  );
}
