"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Avoid hydration mismatch by not rendering until client-side time is set
  if (!time) return <div className="h-6" />;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex items-center gap-3 text-xs md:text-sm font-sans tracking-widest uppercase text-white/70 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit backdrop-blur-md"
    >
      <div className="relative flex items-center justify-center w-2 h-2">
        <span className="absolute w-full h-full bg-green-500 rounded-full animate-ping opacity-75" />
        <span className="relative w-2 h-2 bg-green-500 rounded-full" />
      </div>
      <span>Available for Work</span>
      <span className="w-1 h-1 rounded-full bg-white/30 mx-1" />
      <span>Jaipur: {time}</span>
    </motion.div>
  );
}
