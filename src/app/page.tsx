"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Spaces from "@/components/Spaces";
import Features from "@/components/Features";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import WhyIvoryHall from "@/components/WhyIvoryHall";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AvailabilityModal from "@/components/AvailabilityModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState("Grand Ballroom");

  const handleOpenAvailability = (spaceName?: string) => {
    if (spaceName) {
      setSelectedSpace(spaceName);
    }
    setIsAvailabilityOpen(true);
  };

  const handleCloseAvailability = () => {
    setIsAvailabilityOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#1C1C1A] selection:bg-[#E8E4DC] selection:text-[#1C1C1A]">
      {/* Sticky Header / Navbar */}
      <Navbar onOpenAvailability={() => handleOpenAvailability()} />

      {/* Main Content Sections - Strictly Single One-Page Website */}
      <main>
        <Hero onOpenAvailability={() => handleOpenAvailability()} />
        <Intro />
        <Spaces onSelectSpace={(space) => handleOpenAvailability(space)} />
        <Features />
        <Events onOpenAvailability={() => handleOpenAvailability()} />
        <Gallery />
        <WhyIvoryHall />
        <Testimonials />
        <Location />
        <CTA onOpenAvailability={() => handleOpenAvailability()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Availability / Date Enquiry Modal */}
      <AvailabilityModal
        isOpen={isAvailabilityOpen}
        onClose={handleCloseAvailability}
        initialSpace={selectedSpace}
      />
    </div>
  );
}
