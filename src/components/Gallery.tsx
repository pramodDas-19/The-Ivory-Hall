"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "The Grand Ballroom Setting",
    category: "Ballroom & Banquet",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    aspect: "large-span", // 2 col span, high
  },
  {
    id: 2,
    title: "Crystal Tableware & Floral Styling",
    category: "Table Styling",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    aspect: "stacked",
  },
  {
    id: 3,
    title: "Architectural Vaults & Columns",
    category: "Architectural Detail",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    aspect: "stacked",
  },
  {
    id: 4,
    title: "Ceremony Aisle & Floral Canopy",
    category: "Wedding Ceremony",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    aspect: "vertical", // tall portrait
  },
  {
    id: 5,
    title: "Bespoke Dining & Fine Silverware",
    category: "Dining Setup",
    src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
    aspect: "standard",
  },
  {
    id: 6,
    title: "Twilight Courtyard & Festoon Glow",
    category: "Evening Venue",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85",
    aspect: "wide", // wide panoramic span
  },
  {
    id: 7,
    title: "Sunset Terrace & Cocktail Veranda",
    category: "Outdoor Area",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    aspect: "standard",
  },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx(
        (selectedIdx - 1 + galleryItems.length) % galleryItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#DDD9D0]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
                CURATED GALLERY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1A] font-light">
              Visual Perspectives
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#63625D] max-w-sm font-light">
            An intimate glimpse into the architectural light, spatial grandeur, and
            curated celebrations at The Ivory Hall.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Row 1: Left Large (7 cols) + Right Stacked (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => openLightbox(0)}
            className="group cursor-pointer md:col-span-7 relative h-[360px] sm:h-[480px] lg:h-[540px] bg-[#E8E4DC] border border-[#DDD9D0] overflow-hidden"
          >
            <Image
              src={galleryItems[0].src}
              alt={galleryItems[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <span className="text-[10px] uppercase tracking-ultra text-[#CEB57F] block mb-1">
                  {galleryItems[0].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light">
                  {galleryItems[0].title}
                </h3>
              </div>
              <div className="w-8 h-8 rounded-none border border-white/30 flex items-center justify-center text-white bg-black/20 group-hover:bg-[#B89B62] group-hover:border-[#B89B62] transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onClick={() => openLightbox(1)}
              className="group cursor-pointer relative h-[220px] sm:h-[254px] bg-[#E8E4DC] border border-[#DDD9D0] overflow-hidden"
            >
              <Image
                src={galleryItems[1].src}
                alt={galleryItems[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[9px] uppercase tracking-ultra text-[#CEB57F] block mb-0.5">
                    {galleryItems[1].category}
                  </span>
                  <h4 className="font-serif text-lg font-light">
                    {galleryItems[1].title}
                  </h4>
                </div>
                <Maximize2 className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={() => openLightbox(2)}
              className="group cursor-pointer relative h-[220px] sm:h-[254px] bg-[#E8E4DC] border border-[#DDD9D0] overflow-hidden"
            >
              <Image
                src={galleryItems[2].src}
                alt={galleryItems[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[9px] uppercase tracking-ultra text-[#CEB57F] block mb-0.5">
                    {galleryItems[2].category}
                  </span>
                  <h4 className="font-serif text-lg font-light">
                    {galleryItems[2].title}
                  </h4>
                </div>
                <Maximize2 className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </div>
            </motion.div>
          </div>

          {/* Row 2: Tall Vertical (4 cols) + Two Balanced (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => openLightbox(3)}
            className="group cursor-pointer md:col-span-4 relative h-[380px] sm:h-[460px] bg-[#E8E4DC] border border-[#DDD9D0] overflow-hidden"
          >
            <Image
              src={galleryItems[3].src}
              alt={galleryItems[3].title}
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <span className="text-[10px] uppercase tracking-ultra text-[#CEB57F] block mb-1">
                  {galleryItems[3].category}
                </span>
                <h4 className="font-serif text-xl font-light">
                  {galleryItems[3].title}
                </h4>
              </div>
              <Maximize2 className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </div>
          </motion.div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onClick={() => openLightbox(4)}
              className="group cursor-pointer relative h-[240px] sm:h-[280px] bg-[#E8E4DC] border border-[#DDD9D0] overflow-hidden sm:col-span-1"
            >
              <Image
                src={galleryItems[4].src}
                alt={galleryItems[4].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[9px] uppercase tracking-ultra text-[#CEB57F] block mb-0.5">
                    {galleryItems[4].category}
                  </span>
                  <h4 className="font-serif text-lg font-light">
                    {galleryItems[4].title}
                  </h4>
                </div>
                <Maximize2 className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              onClick={() => openLightbox(6)}
              className="group cursor-pointer relative h-[240px] sm:h-[280px] bg-[#E8E4DC] border border-[#DDD9D0] overflow-hidden sm:col-span-1"
            >
              <Image
                src={galleryItems[6].src}
                alt={galleryItems[6].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[9px] uppercase tracking-ultra text-[#CEB57F] block mb-0.5">
                    {galleryItems[6].category}
                  </span>
                  <h4 className="font-serif text-lg font-light">
                    {galleryItems[6].title}
                  </h4>
                </div>
                <Maximize2 className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </div>
            </motion.div>

            {/* Wide Panorama */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={() => openLightbox(5)}
              className="group cursor-pointer relative h-[200px] sm:h-[230px] bg-[#E8E4DC] border border-[#DDD9D0] overflow-hidden sm:col-span-2"
            >
              <Image
                src={galleryItems[5].src}
                alt={galleryItems[5].title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[9px] uppercase tracking-ultra text-[#CEB57F] block mb-0.5">
                    {galleryItems[5].category}
                  </span>
                  <h4 className="font-serif text-xl font-light">
                    {galleryItems[5].title}
                  </h4>
                </div>
                <Maximize2 className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightweight Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-[#1C1C1A]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[88vh] z-10 flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close image lightbox"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 rounded-full bg-black/40 hover:bg-black/70 sm:bg-transparent transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8 stroke-[1.5]" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2.5 rounded-full bg-black/40 hover:bg-black/70 sm:bg-transparent transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8 stroke-[1.5]" />
              </button>

              {/* Main Image in Lightbox */}
              <div className="relative w-full h-[60vh] sm:h-[75vh] border border-white/20 bg-black/40 shadow-2xl">
                <Image
                  src={galleryItems[selectedIdx].src}
                  alt={galleryItems[selectedIdx].title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 flex items-center justify-between w-full text-white/90 px-2 text-xs sm:text-sm">
                <div>
                  <span className="text-[#CEB57F] uppercase tracking-ultra mr-3 text-xs">
                    {galleryItems[selectedIdx].category}
                  </span>
                  <span className="font-serif text-base sm:text-lg">
                    {galleryItems[selectedIdx].title}
                  </span>
                </div>
                <span className="text-white/60 tracking-wider">
                  {selectedIdx + 1} / {galleryItems.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
