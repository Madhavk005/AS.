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
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" className="py-24 lg:py-40 bg-background relative z-10 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full md:w-1/2 lg:w-2/5 mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
            >
              <motion.div style={{ y }} className="absolute inset-[-5%] w-[110%] h-[110%]">
                <Image
                  src="/img/photo/IMG_1613.JPG"
                  alt="Akshita Sharma"
                  fill
                  priority
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </motion.div>
              
              {/* Glassmorphism Tag */}
              <div className="absolute bottom-6 left-6 z-10 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span className="text-white text-xs font-sans tracking-[0.2em] uppercase font-medium">Designer</span>
              </div>
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
                text="I believe great design is more than aesthetics—it's communication with purpose." 
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
                As a Branding &amp; Visual Designer, I craft visual identities, digital experiences, and content systems that bridge strategy and creativity. My goal is to help brands communicate with clarity, build trust, and create lasting impressions through thoughtful, purposeful design.
              </p>
              
              <p>
                By combining visual storytelling with strategic execution, I create work that doesn&apos;t just capture attention—it creates connection.
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
