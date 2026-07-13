"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "../shared/Magnetic";

import { navLinks } from "../../data/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
          scrolled ? "py-4 glass border-white/10" : "py-6 bg-transparent"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight text-white">
            Akshita Sharma
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Magnetic>
              <Link
                href="/contact"
                className="text-sm font-medium bg-white text-black px-6 py-3 rounded-full hover:bg-accent hover:text-black transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </Magnetic>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" className="text-xl font-semibold tracking-tight text-white" onClick={() => setIsOpen(false)}>
                Akshita Sharma
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 flex-grow justify-center px-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-semibold tracking-tight text-secondary hover:text-white transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-auto px-4 pb-8">
              <p className="text-sm text-secondary font-medium mb-3">Get in Touch</p>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg text-white font-medium hover:opacity-80 transition-opacity">
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
