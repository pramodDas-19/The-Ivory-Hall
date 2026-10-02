"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#DDD9D0] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#DDD9D0]">
          {/* Brand Info & Logo (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="inline-block">
              <div className="relative h-14 w-52 sm:w-60">
                <Image
                  src="/logo.png"
                  alt="The Ivory Hall Logo"
                  fill
                  sizes="240px"
                  className="object-contain object-left"
                />
              </div>
            </a>
            <p className="font-serif italic text-lg sm:text-xl text-[#4A4944] max-w-sm">
              “A Space for Moments That Matter.”
            </p>
            <p className="text-xs text-[#63625D] font-light leading-relaxed max-w-sm">
              A private luxury event destination in Goa, India, meticulously
              composed for weddings, galas, and bespoke celebrations.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-ultra text-[#1C1C1A] font-semibold">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About The Venue", href: "#about" },
                { name: "Event Spaces", href: "#spaces" },
                { name: "Curated Events", href: "#events" },
                { name: "Visual Gallery", href: "#gallery" },
                { name: "Location & Access", href: "#location" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs uppercase tracking-wider text-[#63625D] hover:text-[#B89B62] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Demo Details (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] uppercase tracking-ultra text-[#1C1C1A] font-semibold">
              DESTINATION CONCIERGE
            </h4>
            <div className="space-y-2 text-xs text-[#63625D] font-light">
              <p className="text-[#1C1C1A] font-medium">The Ivory Hall</p>
              <p>Goa, India</p>
              <div className="pt-2 space-y-1">
                <p>
                  <span className="text-[#1C1C1A] font-medium">Phone:</span>{" "}
                  <a
                    href="tel:+910000000000"
                    className="hover:text-[#B89B62] transition-colors"
                  >
                    +91 00000 00000
                  </a>
                </p>
                <p>
                  <span className="text-[#1C1C1A] font-medium">Email:</span>{" "}
                  <a
                    href="mailto:hello@theivoryhall.com"
                    className="hover:text-[#B89B62] transition-colors"
                  >
                    hello@theivoryhall.com
                  </a>
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#FFFFFF] border border-[#DDD9D0] text-[11px] text-[#63625D] leading-relaxed">
              <strong className="text-[#1C1C1A] font-semibold">Demo Notice:</strong>{" "}
              This is a demonstration preview website crafted for luxury venue presentation.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#63625D]">
          <p>© 2026 The Ivory Hall. Demo Website. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#1C1C1A] hover:text-[#B89B62] transition-colors uppercase tracking-widest text-[10px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
