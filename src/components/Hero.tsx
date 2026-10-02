"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Calendar, Sparkles, Compass } from "lucide-react";

interface HeroProps {
  onOpenAvailability: () => void;
}

export default function Hero({ onOpenAvailability }: HeroProps) {
  const handleScrollToVenue = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Architectural Venue Image - No white overlay, authentic rich warm photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=85"
          alt="The Ivory Hall Luxury Event Setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.03]"
        />

        {/* Cinematic subtle warm vignette - preserves deep warm chandelier glow & crystal clarity without any milky white wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        
        {/* Soft golden ambient warmth accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,155,98,0.15)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-24 sm:pt-36 sm:pb-28">
        {/* Modern Cozy Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF9F6] text-[11px] sm:text-xs font-medium tracking-ultra uppercase mb-6 sm:mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#CEB57F]" />
          <span>The Ivory Hall • Goa, India</span>
        </motion.div>

        {/* Main Heading - Cormorant Garamond Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[1.08] mb-6 sm:mb-8 drop-shadow-md"
        >
          A Space for <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E8E4DC] underline decoration-[#B89B62]/40 decoration-1 underline-offset-8">
            Moments That Matter.
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#E8E4DC] font-light leading-relaxed mb-10 sm:mb-12 px-4 drop-shadow"
        >
          An elegant, warm setting for weddings, intimate celebrations, corporate
          gatherings and unforgettable occasions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <button
            onClick={onOpenAvailability}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#B89B62] text-[#1C1C1A] text-xs uppercase tracking-widest font-semibold hover:bg-[#CEB57F] transition-all duration-300 shadow-elevated rounded-none"
          >
            <Calendar className="w-4 h-4 text-[#1C1C1A]" />
            <span>Check Availability</span>
          </button>

          <a
            href="#about"
            onClick={handleScrollToVenue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-widest font-medium hover:bg-white/20 hover:border-white transition-all duration-300 shadow-subtle"
          >
            <Compass className="w-4 h-4 text-[#CEB57F]" />
            <span>Explore The Venue</span>
          </a>
        </motion.div>

        {/* Modern Cozy Highlights Pill Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 hidden sm:flex items-center justify-center gap-6 text-xs text-[#FAF9F6]/80 font-light"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B62]" />
            Grand Ballroom & Open Courtyards
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B62]" />
            Warm Candlelit Evening Ambiance
          </span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B62]" />
            Up to 500 Guests Capacity
          </span>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-ultra text-[#FAF9F6]/70">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#B89B62] stroke-[1.5]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
