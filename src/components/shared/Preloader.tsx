"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const countInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          const increment = Math.floor(Math.random() * 10) + 1;
          return prev + increment > 100 ? 100 : prev + increment;
        }
        clearInterval(countInterval);
        return 100;
      });
    }, 40);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2000);

    return () => {
      clearInterval(countInterval);
      clearTimeout(timeout);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-white"
        >
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20">
            <h1 className="text-[15vw] md:text-[8vw] font-heading leading-none tracking-tighter mix-blend-difference opacity-20">
              {counter}%
            </h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl md:text-6xl font-sans tracking-widest uppercase font-semibold"
            >
              Akshita
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl md:text-6xl font-heading italic text-accent tracking-tighter"
            >
              Sharma
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
