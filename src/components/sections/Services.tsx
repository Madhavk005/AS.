"use client";

import { motion } from "framer-motion";

import { servicesList } from "../../data/constants";

export function Services() {
  return (
    <section id="services" className="py-32 lg:py-48 bg-background relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-heading tracking-tighter mb-8 md:sticky md:top-32"
            >
              My <br />
              <span className="italic font-light text-accent">Expertise</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col border-t border-white/10">
              {servicesList.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex items-center justify-between py-8 md:py-12 border-b border-white/10 cursor-default"
                >
                  <h3 className="text-3xl md:text-5xl font-heading tracking-tighter text-secondary group-hover:text-white transition-colors duration-500">
                    {service}
                  </h3>
                  <span className="text-sm font-sans tracking-widest text-white/20 group-hover:text-accent transition-colors duration-500">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
