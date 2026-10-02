"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  {
    num: "01",
    title: "Thoughtful Architecture",
    description:
      "Crafted with dramatic natural light, acoustically treated proportions, and intuitive flow between indoor sanctuaries and open-air verandas.",
  },
  {
    num: "02",
    title: "Flexible Spaces",
    description:
      "Versatile floor plan configurations engineered to host high-profile keynotes, multi-course banquets, or intimate vow ceremonies with complete privacy.",
  },
  {
    num: "03",
    title: "Refined Atmosphere",
    description:
      "A soothing palette of ivory, natural stone, and subtle champagne gold detailing that lets your personal aesthetic and styling take center stage.",
  },
  {
    num: "04",
    title: "Dedicated Support",
    description:
      "An attentive venue team with deep luxury hospitality background, providing calm guidance, vendor coordination, and discreet day-of execution.",
  },
];

export default function WhyIvoryHall() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Architectural Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative aspect-[4/5] sm:aspect-[3/4] w-full bg-[#E8E4DC] border border-[#DDD9D0] overflow-hidden shadow-card"
          >
            <Image
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80"
              alt="The Ivory Hall Architectural Character"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Subtle inner border */}
            <div className="absolute inset-4 border border-white/40 pointer-events-none" />

            {/* Small corner badge */}
            <div className="absolute bottom-6 left-6 bg-[#FAF9F6]/95 backdrop-blur-sm px-4 py-2 border border-[#DDD9D0]">
              <span className="text-[10px] uppercase tracking-ultra text-[#1C1C1A] font-medium">
                Architectural Clarity
              </span>
            </div>
          </motion.div>

          {/* Right Column: Narrative & 4 Points */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
                  WHY IVORY HALL
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] font-light leading-[1.15] mb-6">
                A Setting That <br />
                <span className="italic text-[#4A4944] font-normal">
                  Feels Effortless.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#4A4944] font-light leading-relaxed">
                From the first walkthrough to the final guest departure, every
                detail is designed to make your occasion feel seamless, elegant
                and memorable.
              </p>
            </div>

            {/* 4 Points with thin dividers */}
            <div className="border-t border-[#DDD9D0] divide-y divide-[#DDD9D0]">
              {points.map((point) => (
                <div key={point.num} className="py-5 sm:py-6 flex items-start gap-5">
                  <span className="font-serif text-base text-[#B89B62] font-medium tracking-wider pt-0.5">
                    {point.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#1C1C1A] font-normal mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#63625D] font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
