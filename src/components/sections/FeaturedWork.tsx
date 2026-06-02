"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects, Project } from "../../data/projects";

export function FeaturedWork({ limit }: { limit?: number }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="work" className="py-32 lg:py-48 bg-background relative z-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] md:text-8xl font-heading tracking-tighter leading-none"
          >
            {limit ? "Selected" : "All"} <br /> <span className="italic font-light text-accent ml-[10vw]">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary max-w-xs text-lg font-sans pb-4"
          >
            A curated selection of my latest projects in branding, packaging, and digital experiences.
          </motion.p>
        </div>

        <ProjectList projects={displayedProjects} />

        {limit && (
          <div className="mt-20 flex justify-center">
            <motion.a
              href="/work"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-sans tracking-widest uppercase text-white hover:text-accent border-b border-white/20 hover:border-accent transition-colors pb-2"
            >
              View All Projects
            </motion.a>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring for the floating image
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to viewport or container
      // Here we just use clientX/clientY for fixed positioning of the image
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="flex flex-col w-full border-t border-white/10 relative" ref={containerRef}>
      {projects.map((project, index) => (
        <motion.a
          key={project.id}
          href={project.link || "#"}
          onMouseEnter={() => setActiveProject(index)}
          onMouseLeave={() => setActiveProject(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group flex flex-col md:flex-row md:items-center justify-between py-12 lg:py-16 border-b border-white/10 hover:border-white/40 transition-colors cursor-pointer"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 lg:gap-32 relative z-10">
            <span className="text-secondary font-sans text-sm tracking-widest uppercase hidden md:block">
              0{index + 1}
            </span>
            <h3 className="text-5xl md:text-7xl font-heading tracking-tighter text-white group-hover:italic group-hover:text-accent transition-all duration-500">
              {project.title}
            </h3>
          </div>
          
          <div className="flex items-center gap-8 mt-6 md:mt-0 relative z-10">
            <div className="flex flex-col text-left md:text-right">
              <span className="text-secondary font-sans text-sm uppercase tracking-widest">{project.category}</span>
              <span className="text-white/40 font-sans text-sm">{project.year}</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-500 hidden md:flex">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          
          {/* Mobile Image (Visible directly inline) */}
          <div className="md:hidden w-full aspect-[4/3] relative mt-8 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index < 2}
              className="object-cover"
            />
          </div>
        </motion.a>
      ))}

      {/* Floating Mouse Image Reveal (Desktop Only) */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-[400px] aspect-[4/3] pointer-events-none z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: activeProject !== null ? 1 : 0,
          scale: activeProject !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
      >
        <div className="w-full h-full relative relative">
          {projects.map((project, index) => (
            <Image
              key={project.id}
              src={project.image}
              alt={project.title}
              fill
              sizes="400px"
              priority={index < 2}
              className={`object-cover transition-opacity duration-500 absolute inset-0 ${
                activeProject === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>
      </motion.div>
    </div>
  );
}
