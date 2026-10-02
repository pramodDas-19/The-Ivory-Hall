"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenAvailability: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Spaces", href: "#spaces" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
];

export default function Navbar({ onOpenAvailability }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#DDD9D0] py-3 shadow-sm"
            : "bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#DDD9D0]/60 py-3.5 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo on Left - Large, Prominent, and Proportional (No Awkward White Bubble) */}
          <a
            href="#"
            className="flex items-center group transition-transform duration-300 hover:scale-[1.02]"
            aria-label="The Ivory Hall Home"
          >
            <div className="relative h-14 sm:h-16 md:h-18 w-32 sm:w-36 md:w-44 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="The Ivory Hall Emblem"
                fill
                priority
                sizes="(max-width: 640px) 140px, 180px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs uppercase tracking-ultra font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#1C1C1A] font-semibold"
                      : "text-[#1C1C1A]/75 hover:text-[#1C1C1A]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B89B62]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Check Availability CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenAvailability}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest bg-[#1C1C1A] text-[#FAF9F6] border border-[#1C1C1A] hover:bg-[#B89B62] hover:border-[#B89B62] transition-all duration-300 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#CEB57F]" />
              <span>Check Availability</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Right: Availability small button + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenAvailability}
              className="text-[10px] uppercase tracking-widest font-semibold px-3.5 py-1.5 bg-[#1C1C1A] text-[#FAF9F6] border border-[#1C1C1A]"
            >
              Enquire
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-[#1C1C1A] hover:text-[#B89B62] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] sm:top-[80px] bg-[#FAF9F6] border-b border-[#DDD9D0] z-30 shadow-2xl overflow-hidden lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base tracking-widest uppercase font-serif text-[#1C1C1A] py-1 border-b border-[#DDD9D0]/50 hover:text-[#B89B62] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B89B62]" />
                  </a>
                ))}
              </nav>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAvailability();
                  }}
                  className="w-full py-3.5 bg-[#1C1C1A] text-[#FAF9F6] text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#B89B62] transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#CEB57F]" />
                  <span>Check Availability</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-[#63625D] uppercase tracking-wider">
                  Goa, India • Private Tours By Appointment
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
