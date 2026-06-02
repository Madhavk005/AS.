"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    description: "Understanding your brand, audience, and goals.",
  },
  {
    title: "Strategy",
    description: "Developing a creative direction and market positioning.",
  },
  {
    title: "Design",
    description: "Translating strategy into compelling visual concepts.",
  },
  {
    title: "Refine",
    description: "Polishing the chosen direction with pixel-perfect execution.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-40 bg-background relative z-10 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] md:text-8xl font-heading tracking-tighter leading-none"
          >
            The <br /> <span className="italic font-light text-accent ml-[5vw]">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-[8rem] leading-none font-heading text-white/5 absolute -top-16 -left-4 pointer-events-none group-hover:text-accent/10 transition-colors duration-500">
                {index + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-heading mb-4 text-white group-hover:italic transition-all duration-300">{step.title}</h3>
                <p className="text-secondary font-sans text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
