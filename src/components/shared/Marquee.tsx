"use client";

import { motion } from "framer-motion";

const marqueeText = "VISUAL DESIGN ✦ ART DIRECTION ✦ BRANDING ✦ PACKAGING ✦ DIGITAL EXPERIENCES ✦ ";

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-white text-black py-6 md:py-8 flex items-center border-y border-white/10 z-10">
      <div className="absolute inset-0 bg-grain pointer-events-none mix-blend-overlay opacity-50" />
      
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        <div className="flex">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tighter uppercase mr-4">
            {marqueeText}
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tighter uppercase mr-4">
            {marqueeText}
          </h2>
        </div>
        <div className="flex">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tighter uppercase mr-4">
            {marqueeText}
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tighter uppercase mr-4">
            {marqueeText}
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
