"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface EventsProps {
  onOpenAvailability: () => void;
}

const eventTypes = [
  {
    title: "WEDDINGS",
    tagline: "From intimate ceremonies to grand receptions.",
    description:
      "A romantic sanctuary where architectural grandeur meets delicate floral design, creating timeless memories for couples and families.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    features: "Ceremony Archway • Bridal Lounge • Banquet Staging",
  },
  {
    title: "CORPORATE EVENTS",
    tagline: "Professional gatherings designed to leave an impression.",
    description:
      "Executive conferences, product unveilings, and celebratory corporate galas backed by discreet acoustic engineering and state-of-the-art presentations.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    features: "High-Speed Connectivity • Keynote Audio • VIP Suites",
  },
  {
    title: "PRIVATE CELEBRATIONS",
    tagline: "Birthdays, anniversaries and milestone moments.",
    description:
      "Intimate dining experiences and festive anniversaries brought to life with bespoke culinary tables and curated musical atmospheres.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    features: "Custom Dining Menus • Cocktail Lounges • Ambient Decor",
  },
  {
    title: "RECEPTIONS & SOCIAL EVENTS",
    tagline: "Beautifully designed occasions worth remembering.",
    description:
      "Effortless cocktail soirees and sunset gatherings under the open sky with seamless indoor-outdoor transitions for your guests.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    features: "Open-Air Terraces • Mixology Staging • Twilight Ambiance",
  },
];

export default function Events({ onOpenAvailability }: EventsProps) {
  return (
    <section id="events" className="py-24 sm:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#DDD9D0]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
                CURATED GATHERINGS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] font-light">
              Made for Every Kind of Occasion
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#63625D] max-w-sm font-light">
            Whether welcoming an intimate family circle or five hundred distinguished
            guests, our spaces adapt to your distinct narrative.
          </p>
        </div>

        {/* 4 Editorial Blocks (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onClick={onOpenAvailability}
              className="group cursor-pointer bg-[#FAF9F6] border border-[#DDD9D0] overflow-hidden flex flex-col justify-between hover:border-[#1C1C1A] transition-all duration-500 shadow-subtle hover:shadow-card"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E8E4DC]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1C1C1A]/20 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Float tag */}
                <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-sm p-2 text-[#1C1C1A] border border-[#DDD9D0] group-hover:bg-[#B89B62] group-hover:text-[#FAF9F6] group-hover:border-[#B89B62] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-ultra text-[#B89B62] font-semibold mb-2">
                    {event.features}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-normal mb-2 tracking-wide">
                    {event.title}
                  </h3>
                  <p className="font-serif italic text-base sm:text-lg text-[#4A4944] mb-3">
                    “{event.tagline}”
                  </p>
                  <p className="text-xs sm:text-sm text-[#63625D] font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD9D0] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#1C1C1A] font-medium group-hover:text-[#B89B62] transition-colors">
                    Plan this event
                  </span>
                  <span className="text-[11px] text-[#63625D] uppercase tracking-wider">
                    Custom Setup
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
