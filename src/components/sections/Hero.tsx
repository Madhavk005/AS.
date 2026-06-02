"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Magnetic } from "../shared/Magnetic";
import { RevealText } from "../shared/RevealText";
import { LocalTime } from "../shared/LocalTime";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden bg-background bg-grain">
      <div className="container-custom relative z-10 w-full flex flex-col justify-between h-full min-h-[80vh]">
        
        <div className="flex justify-between items-start w-full gap-4 flex-col md:flex-row">
          <LocalTime />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-secondary text-sm font-sans tracking-widest uppercase text-right"
          >
            Portfolio &copy; {new Date().getFullYear()}
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center mt-20 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter font-heading text-white mix-blend-difference">
              AKSHITA <br />
              <span className="italic font-light text-accent/80 pl-[10vw]">SHARMA</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[30vw] aspect-[3/4] md:aspect-square bg-white/5 rounded-full blur-3xl -z-10"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end w-full gap-8">
          <div className="max-w-md">
            <RevealText 
              text="Crafting cohesive brand identities, editorial visuals, and seamless digital experiences that leave a memorable impact." 
              className="text-lg md:text-xl text-secondary font-sans leading-relaxed text-left justify-start"
              delay={0.4}
            />
          </div>
          
          <Magnetic>
            <motion.a
              href="/work"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-white/20 overflow-hidden hover:border-accent transition-colors duration-500 shrink-0"
            >
              <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="relative z-10 flex flex-col items-center gap-2 group-hover:text-black transition-colors duration-500">
                <span className="text-xs uppercase tracking-widest font-sans font-medium">Scroll</span>
                <ArrowDownRight className="w-5 h-5 animate-bounce" />
              </div>
            </motion.a>
          </Magnetic>
        </div>
        
      </div>
    </section>
  );
}
