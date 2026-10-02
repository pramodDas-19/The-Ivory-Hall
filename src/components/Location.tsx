"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Plane, Car, Compass, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Location Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
                  DESTINATION & ARRIVAL
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] font-light leading-[1.15] mb-6">
                Conveniently Located. <br />
                <span className="italic text-[#4A4944] font-normal">
                  Beautifully Set.
                </span>
              </h2>
              <div className="space-y-3">
                <p className="font-serif text-2xl text-[#1C1C1A]">
                  THE IVORY HALL
                </p>
                <p className="text-base text-[#63625D] font-light">
                  Goa, India
                </p>
                <p className="text-sm sm:text-base text-[#4A4944] font-light leading-relaxed pt-2">
                  Situated in a tranquil coastal enclave with seamless proximity
                  to major transit corridors and international transit terminals,
                  ensuring effortless journeys for both local and out-of-town guests.
                </p>
              </div>
            </div>

            {/* Access points */}
            <div className="space-y-4 pt-4 border-t border-[#DDD9D0]">
              <div className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-[#DDD9D0]">
                <div className="p-2 bg-white border border-[#DDD9D0] text-[#B89B62]">
                  <Car className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1C1C1A] mb-1">
                    Easy Guest Access & Parking
                  </h4>
                  <p className="text-xs text-[#63625D] font-light leading-relaxed">
                    Expansive private gates with covered porte-cochère drop-off and dedicated secure bays for 150+ vehicles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-[#DDD9D0]">
                <div className="p-2 bg-white border border-[#DDD9D0] text-[#B89B62]">
                  <Plane className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1C1C1A] mb-1">
                    Airport Connectivity
                  </h4>
                  <p className="text-xs text-[#63625D] font-light leading-relaxed">
                    Within convenient highway reach from Goa's international and regional flight gateways.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-[#DDD9D0]">
                <div className="p-2 bg-white border border-[#DDD9D0] text-[#B89B62]">
                  <Compass className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1C1C1A] mb-1">
                    Secluded & Serene Setting
                  </h4>
                  <p className="text-xs text-[#63625D] font-light leading-relaxed">
                    Surrounded by lush coastal palms and architectural landscape barriers offering complete celebration seclusion.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-[#FAF9F6] border border-[#DDD9D0] overflow-hidden p-6 sm:p-10 flex flex-col justify-between shadow-card">
              {/* Minimal architectural grid pattern background */}
              <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #DDD9D0 1px, transparent 1px),
                    linear-gradient(to bottom, #DDD9D0 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Decorative compass lines */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#DDD9D0]/70" />
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#DDD9D0]/70" />
              
              {/* Radial subtle glow around center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#E8E4DC]/60 blur-2xl" />

              {/* Top Map Card Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-ultra font-mono text-[#63625D] bg-[#FFFFFF]/90 px-3 py-1 border border-[#DDD9D0]">
                  LAT: 15.4989° N • LON: 73.8278° E
                </span>
                <span className="text-[10px] uppercase tracking-ultra font-semibold text-[#B89B62] bg-[#FFFFFF]/90 px-3 py-1 border border-[#DDD9D0]">
                  GOA, INDIA
                </span>
              </div>

              {/* Center Location Pin Badge */}
              <div className="relative z-10 flex flex-col items-center justify-center my-8 text-center">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-[#1C1C1A] text-[#FAF9F6] flex items-center justify-center shadow-lg border-2 border-[#B89B62] mb-3"
                >
                  <MapPin className="w-5 h-5 text-[#B89B62]" />
                </motion.div>

                <div className="bg-[#FFFFFF]/95 backdrop-blur-md border border-[#DDD9D0] px-5 py-3 shadow-md max-w-xs">
                  <p className="font-serif text-lg text-[#1C1C1A] font-medium leading-none mb-1">
                    The Ivory Hall
                  </p>
                  <p className="text-[11px] text-[#63625D] uppercase tracking-widest">
                    Private Event Grounds • Goa
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 pt-4 border-t border-[#DDD9D0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#63625D]">
                <span>Tours by advance appointment</span>
                <div className="inline-flex items-center gap-1.5 text-[#1C1C1A] font-medium tracking-wide">
                  <Navigation className="w-3.5 h-3.5 text-[#B89B62]" />
                  <span>Private Access Route</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
