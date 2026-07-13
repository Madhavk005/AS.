"use client";

import { motion } from "framer-motion";

import { experiences } from "../../data/constants";

export function Experience() {
  return (
    <section className="py-24 lg:py-32 bg-background relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-sans tracking-widest uppercase text-secondary mb-12"
            >
              Background
            </motion.h2>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-12 md:gap-16">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
                >
                  <div className="flex flex-col">
                    <h3 className="text-3xl md:text-5xl font-heading tracking-tighter text-white group-hover:italic group-hover:text-accent transition-all duration-500">
                      {exp.role}
                    </h3>
                    <h4 className="text-secondary font-sans text-lg mt-2">{exp.company}</h4>
                  </div>
                  <div className="text-sm font-sans tracking-widest uppercase text-white/40">
                    {exp.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
