"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    // Replace with your Web3Forms Access Key or form endpoint
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-32 lg:pt-48 pb-20 min-h-[80vh] flex flex-col items-center justify-center bg-background relative overflow-hidden">
      <div className="container-custom relative z-10 w-full max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans tracking-widest uppercase text-secondary mb-6">Start a Project</p>
          <h1 className="text-[12vw] md:text-8xl font-heading leading-none tracking-tighter text-white">
            Say <span className="italic font-light text-accent">Hello.</span>
          </h1>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 lg:gap-12 w-full mt-20"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative">
              <input 
                type="text" 
                name="name" 
                id="name" 
                required
                aria-label="Name"
                placeholder="What's your name?" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl font-sans text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-300"
              />
            </div>
            <div className="group relative">
              <input 
                type="email" 
                name="email"
                id="email" 
                required
                aria-label="Email Address"
                placeholder="What's your email?" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl font-sans text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-300"
              />
            </div>
          </div>
          
          <div className="group relative">
            <input 
              type="text" 
              name="service"
              id="service" 
              required
              aria-label="Service requested"
              placeholder="What services are you looking for?" 
              className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl font-sans text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>
          
          <div className="group relative">
            <textarea 
              name="message"
              id="message" 
              required
              aria-label="Message"
              placeholder="Your message..." 
              rows={4}
              className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl font-sans text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-8">
            <div className="flex flex-col">
              <p className="text-secondary font-sans text-sm md:text-base">* I will get back to you within 24 hours.</p>
              {error && <p className="text-red-500 font-sans text-sm mt-2">{error}</p>}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-white/20 overflow-hidden hover:border-accent transition-colors duration-500 shrink-0 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="relative z-10 flex items-center gap-2 text-white group-hover:text-black transition-colors duration-500">
                {isSuccess ? (
                  <>
                    <span className="text-xs uppercase tracking-widest font-sans font-medium">Sent</span>
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </>
                ) : isSubmitting ? (
                  <span className="text-xs uppercase tracking-widest font-sans font-medium">Sending...</span>
                ) : (
                  <>
                    <span className="text-xs uppercase tracking-widest font-sans font-medium">Send</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </>
                )}
              </div>
            </button>
          </div>
        </motion.form>
      </div>

      <div className="absolute inset-0 bg-grain pointer-events-none mix-blend-overlay opacity-30 z-0" />
    </div>
  );
}
