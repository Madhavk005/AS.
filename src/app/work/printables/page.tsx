"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function PrintablesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative z-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        <Link href="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 font-sans text-sm tracking-widest uppercase">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading tracking-tighter text-white mb-4">Select Category</h1>
          <p className="text-secondary font-sans max-w-lg mx-auto">Choose whether you want to view the Printables or the Banners project.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Printables Card */}
          <motion.a 
            href="/img/works/Printables.pdf"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src="/img/works/Printables.png" 
                alt="Printables" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
            <div className="relative z-10 flex justify-between items-end">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading tracking-tighter text-white mb-2">Printables</h2>
                <p className="text-secondary font-sans text-sm uppercase tracking-widest">View PDF</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-500">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>

          {/* Banners Card */}
          <motion.a 
            href="/img/works/Banners.pdf"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src="/img/works/Banners.png" 
                alt="Banners" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
            <div className="relative z-10 flex justify-between items-end">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading tracking-tighter text-white mb-2">Banners</h2>
                <p className="text-secondary font-sans text-sm uppercase tracking-widest">View PDF</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-500">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
