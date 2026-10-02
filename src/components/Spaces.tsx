"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

interface SpacesProps {
  onSelectSpace: (spaceName: string) => void;
}

const spacesData = [
  {
    id: "grand-ballroom",
    title: "GRAND BALLROOM",
    description:
      "An expansive celebration space designed for weddings, receptions and large gatherings.",
    capacity: "Up to 500 guests",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    features: "Crystal Chandeliers • 24ft Ceilings • Acoustic Staging",
  },
  {
    id: "garden-courtyard",
    title: "GARDEN COURTYARD",
    description:
      "A refined outdoor setting for intimate ceremonies and evening celebrations.",
    capacity: "Up to 250 guests",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    features: "Manicured Flora • Pergola Canopy • Ambient Lighting",
  },
  {
    id: "rooftop-terrace",
    title: "ROOFTOP TERRACE",
    description:
      "An elevated setting for cocktails, private celebrations and sophisticated gatherings.",
    capacity: "Up to 180 guests",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    features: "Panoramic Horizon • Sunset Bar • Open Sky Canopy",
  },
  {
    id: "private-dining",
    title: "PRIVATE DINING",
    description:
      "An intimate environment for private dinners, family celebrations and executive gatherings.",
    capacity: "Up to 60 guests",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    features: "Bespoke Chef Table • Wine Cellar View • Private Lounge",
  },
];

export default function Spaces({ onSelectSpace }: SpacesProps) {
  return (
    <section id="spaces" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-8 border-b border-[#DDD9D0]">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
                EVENT ENVIRONMENTS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] font-light">
              Spaces Made for the Occasion
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#63625D] max-w-sm font-light">
            Each environment is architecturally tailored to provide distinct
            ambiances, exceptional acoustics, and effortless guest flow.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {spacesData.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-[#FAF9F6] border border-[#DDD9D0] overflow-hidden flex flex-col justify-between hover:border-[#B89B62] transition-all duration-500 shadow-subtle hover:shadow-card"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E4DC]">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Capacity badge */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF]/90 backdrop-blur-md text-[#1C1C1A] text-xs tracking-wider uppercase font-medium border border-[#DDD9D0]">
                  <Users className="w-3.5 h-3.5 text-[#B89B62]" />
                  <span>{space.capacity}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-ultra text-[#63625D] font-medium mb-1.5">
                    {space.features}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-normal tracking-wide mb-3">
                    {space.title}
                  </h3>
                  <p className="text-sm text-[#4A4944] font-light leading-relaxed mb-6">
                    {space.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#DDD9D0] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#63625D] font-medium">
                    {space.capacity}
                  </span>
                  <button
                    onClick={() => onSelectSpace(space.title)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#1C1C1A] group-hover:text-[#B89B62] transition-colors"
                  >
                    <span>Check Dates</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
