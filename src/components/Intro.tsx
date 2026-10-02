"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Elegant Architecture",
    description:
      "High arched porticos, soaring vaulted ceilings, and curated neutral limestone finishes bathed in natural coastal daylight.",
  },
  {
    num: "02",
    title: "Flexible Event Spaces",
    description:
      "Four distinct, seamlessly integrated environments designed to transition effortlessly from intimate ceremonies to grand galas.",
  },
  {
    num: "03",
    title: "Dedicated Event Support",
    description:
      "A discreet hospitality concierge and technical production team ensuring flawless execution from arrival to departure.",
  },
];

export default function Intro() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
            THE VENUE
          </span>
          <span className="w-10 h-[1px] bg-[#DDD9D0]" />
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Headline + Architectural Showcase Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1A] font-light leading-[1.15]">
              Designed for Celebrations. <br />
              <span className="italic text-[#4A4944] font-normal">
                Created for Memories.
              </span>
            </h2>

            {/* Architectural Venue Photograph below heading */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E4DC] border border-[#DDD9D0] shadow-card group">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="The Ivory Hall Architectural Interior and Natural Lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Subtle warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Floating Modern Pill Badge */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-[#1C1C1A] text-xs tracking-wider uppercase font-medium border border-[#DDD9D0] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#B89B62]" />
                <span>Architectural Sanctuary • Goa, India</span>
              </div>
            </div>

            {/* Subtle caption */}
            <p className="text-xs text-[#63625D] font-light italic leading-relaxed">
              “Every arch, pillar, and corridor at The Ivory Hall is crafted to welcome guests into an atmosphere of quiet grandeur and effortless warmth.”
            </p>
          </motion.div>

          {/* Right Column: Paragraph + Detail Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-10"
          >
            <p className="text-base sm:text-lg text-[#4A4944] font-light leading-relaxed">
              The Ivory Hall brings together thoughtful architecture, refined
              interiors and flexible event spaces to create a setting that feels
              effortless from the moment your guests arrive.
            </p>

            <div className="space-y-6 pt-2 border-t border-[#DDD9D0]">
              {pillars.map((item) => (
                <div
                  key={item.num}
                  className="group flex items-start gap-4 pb-6 border-b border-[#DDD9D0]/60 last:border-b-0 last:pb-0 transition-colors"
                >
                  <span className="font-serif text-lg text-[#B89B62] font-medium tracking-wider pt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1C1C1A] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#63625D] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modern Cozy Hospitality Callout */}
            <div className="p-4 sm:p-5 bg-white border border-[#DDD9D0] rounded-none shadow-subtle flex items-center gap-4">
              <div className="w-2 h-10 bg-[#B89B62]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#1C1C1A] font-semibold">
                  Intimate Warmth & Contemporary Scale
                </p>
                <p className="text-xs text-[#63625D] font-light mt-0.5">
                  Curated architectural lighting transitions smoothly from golden daylight to cozy candlelight.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
