"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Maximize2,
  Sparkles,
  Sliders,
  Volume2,
  Car,
  UtensilsCrossed,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    num: "01",
    icon: Maximize2,
    title: "Flexible Capacity",
    description:
      "Scalable floor plans tailored for intimate celebrations of 50 to grand galas up to 500 guests.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Premium Interiors",
    description:
      "Hand-finished limestone, Italian crystal chandeliers, and warm neutral architectural acoustics.",
  },
  {
    num: "03",
    icon: Sliders,
    title: "Professional Lighting",
    description:
      "Architectural ambient dimmer systems and intelligent spotlight arrays calibrated for evening ambiance.",
  },
  {
    num: "04",
    icon: Volume2,
    title: "Audio Visual Support",
    description:
      "Concealed acoustic wall panels, high-definition laser projection, and crystal-clear sound reinforcement.",
  },
  {
    num: "05",
    icon: Car,
    title: "Guest Parking",
    description:
      "On-site secured parking bays for 150+ vehicles alongside dedicated white-glove valet staging.",
  },
  {
    num: "06",
    icon: UtensilsCrossed,
    title: "Catering Facilities",
    description:
      "Expansive commercial preparation pantries designed specifically for master chefs and luxury caterers.",
  },
  {
    num: "07",
    icon: KeyRound,
    title: "Bridal / Private Rooms",
    description:
      "Two private dressing suites with full-length vanities, en-suite bathrooms, and serene lounge seating.",
  },
  {
    num: "08",
    icon: ShieldCheck,
    title: "Dedicated Event Assistance",
    description:
      "On-site technical director, venue supervisor, and hospitality liaison throughout your booking.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
              VENUE SPECIFICATIONS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] font-light tracking-tight mb-4">
            Everything Considered.
          </h2>
          <p className="text-sm sm:text-base text-[#63625D] font-light">
            Every architectural nuance and amenity is meticulously considered so
            your celebration unfolds with effortless elegance.
          </p>
        </div>

        {/* 8 Features Grid (4 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-[#FFFFFF] border border-[#DDD9D0] p-6 sm:p-7 flex flex-col justify-between hover:border-[#B89B62] transition-colors duration-300 shadow-subtle group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-sm text-[#B89B62] font-semibold tracking-wider">
                      {item.num}
                    </span>
                    <div className="w-9 h-9 rounded-none bg-[#FAF9F6] border border-[#DDD9D0]/80 flex items-center justify-center text-[#1C1C1A] group-hover:border-[#B89B62] group-hover:text-[#B89B62] transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-[#1C1C1A] font-medium mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63625D] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
