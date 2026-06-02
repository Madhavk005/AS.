"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "../shared/RevealText";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="py-24 lg:py-40 bg-background relative z-10 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden"
            >
              <motion.div style={{ y }} className="absolute inset-[-15%] w-[130%] h-[130%]">
                <Image
                  src="/img/photo/1.jpg"
                  alt="Akshita Sharma"
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5 md:pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-sm font-sans tracking-widest uppercase text-secondary mb-6">About</h2>
              <RevealText 
                text="Hi, I'm Akshita Sharma—a visual storyteller translating bold ideas into impactful digital experiences." 
                className="text-3xl md:text-5xl font-heading leading-tight tracking-tighter text-white text-left justify-start"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-base font-sans text-secondary max-w-xl"
            >
              <p>
                With a strong foundation in branding, logo design, and social media strategy, I focus on crafting visuals that don&apos;t just look good—they communicate. My goal is always to create a memorable impact, regardless of the medium.
              </p>
              
              <p>
                Currently serving as Design Head at JECRC University, I mentor young creatives while independently collaborating with global brands to deliver high-end design solutions.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 flex flex-wrap gap-x-8 gap-y-4"
            >
              {['Branding', 'Art Direction', 'Typography', 'UI/UX'].map((skill) => (
                <span key={skill} className="text-sm font-sans uppercase tracking-widest text-white/50 border-b border-white/10 pb-1">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
