"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The space felt beautiful from the moment we walked in. Every detail came together perfectly for our celebration.",
    author: "Aditi & Rohan",
    event: "Wedding Celebration • Grand Ballroom",
  },
  {
    quote:
      "Elegant, spacious and incredibly easy to work with. The venue gave our event exactly the atmosphere we wanted.",
    author: "Meera S.",
    event: "Private Milestone Anniversary • Courtyard",
  },
  {
    quote:
      "A wonderful setting for our corporate gathering. Professional, polished and thoughtfully designed.",
    author: "Arjun K.",
    event: "Executive Leadership Gala • Rooftop Terrace",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
              SAMPLE EXPERIENCES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] font-light tracking-tight mb-3">
            Words From Our Guests
          </h2>
          <p className="text-xs text-[#63625D] uppercase tracking-wider">
            Demonstration impressions & client feedback
          </p>
        </div>

        {/* 3 Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-[#FFFFFF] border border-[#DDD9D0] p-8 sm:p-10 flex flex-col justify-between hover:border-[#B89B62] transition-colors duration-300 shadow-subtle relative group"
            >
              {/* Subtle large quotation mark */}
              <div className="font-serif text-6xl leading-none text-[#DDD9D0] select-none group-hover:text-[#CEB57F] transition-colors mb-4">
                “
              </div>

              {/* Quote text */}
              <p className="font-serif italic text-lg sm:text-xl text-[#1C1C1A] leading-relaxed mb-8 flex-1">
                {item.quote}
              </p>

              {/* Author & Event Detail */}
              <div className="pt-4 border-t border-[#DDD9D0]">
                <div className="font-serif text-base text-[#1C1C1A] font-medium">
                  {item.author}
                </div>
                <div className="text-xs text-[#63625D] font-light mt-0.5">
                  {item.event}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
