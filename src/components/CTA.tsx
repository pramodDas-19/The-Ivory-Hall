"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

interface CTAProps {
  onOpenAvailability: () => void;
}

export default function CTA({ onOpenAvailability }: CTAProps) {
  const [quickDate, setQuickDate] = useState("");
  const [quickGuests, setQuickGuests] = useState("100-250");
  const [quickName, setQuickName] = useState("");
  const [quickPhone, setQuickPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello The Ivory Hall Concierge, I would like to inquire about event availability and private walkthrough appointments."
    );
    window.open(`https://wa.me/910000000000?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#E8E4DC]/60 border-t border-b border-[#DDD9D0] relative overflow-hidden">
      {/* Subtle architectural background line */}
      <div className="absolute inset-0 bg-[radial-gradient(#DDD9D0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-8 h-[1px] bg-[#B89B62]" />
          <span className="text-[11px] uppercase tracking-ultra text-[#B89B62] font-semibold">
            BEGIN PLANNING
          </span>
          <span className="w-8 h-[1px] bg-[#B89B62]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1C1A] font-light leading-[1.15] mb-6"
        >
          Your Occasion Deserves <br />
          <span className="italic font-normal">the Right Setting.</span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-[#4A4944] font-light leading-relaxed max-w-xl mx-auto mb-10"
        >
          “Tell us what you’re planning and let’s find the space that fits.”
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onOpenAvailability}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1C1C1A] border border-[#1C1C1A] text-[#FAF9F6] text-xs uppercase tracking-widest font-medium hover:bg-[#B89B62] hover:border-[#B89B62] transition-colors duration-300 shadow-subtle"
          >
            <Calendar className="w-4 h-4 text-[#CEB57F]" />
            <span>Check Availability</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-[#DDD9D0] text-[#1C1C1A] text-xs uppercase tracking-widest font-medium hover:border-[#1C1C1A] hover:bg-[#FAF9F6] transition-all duration-300 shadow-subtle group"
          >
            <MessageSquare className="w-4 h-4 text-[#B89B62] group-hover:scale-110 transition-transform" />
            <span>WhatsApp Us</span>
          </button>
        </motion.div>

        {/* Refined Quick Inquiry Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#FAF9F6] border border-[#DDD9D0] p-6 sm:p-10 text-left shadow-card"
        >
          {!submitted ? (
            <form onSubmit={handleQuickSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#DDD9D0] gap-2">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1C1A] font-normal">
                    Quick Booking Inquiry
                  </h3>
                  <p className="text-xs text-[#63625D]">
                    Receive an immediate callback from our venue director
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-ultra text-[#B89B62] font-semibold">
                  Demo Request
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1C1C1A] mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Aditi Roy"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:border-[#B89B62] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1C1C1A] mb-1.5 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:border-[#B89B62] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1C1C1A] mb-1.5 font-medium">
                    Target Date
                  </label>
                  <input
                    type="date"
                    required
                    value={quickDate}
                    onChange={(e) => setQuickDate(e.target.value)}
                    className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:border-[#B89B62] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#1C1C1A] mb-1.5 font-medium">
                    Guest Count
                  </label>
                  <select
                    value={quickGuests}
                    onChange={(e) => setQuickGuests(e.target.value)}
                    className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-xs text-[#1C1C1A] focus:border-[#B89B62] transition-colors"
                  >
                    <option value="Under 50">Under 50</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-250">100 - 250</option>
                    <option value="250-500">250 - 500</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#63625D]">
                  Our calendar concierge typically responds within 2 business hours.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1C1C1A] text-[#FAF9F6] text-xs uppercase tracking-widest font-medium hover:bg-[#B89B62] transition-colors"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#B89B62] mx-auto" />
              <h4 className="font-serif text-2xl text-[#1C1C1A]">
                Inquiry Logged
              </h4>
              <p className="text-xs text-[#63625D] max-w-md mx-auto">
                Thank you, {quickName || "Guest"}. Your demo enquiry for{" "}
                {quickDate || "upcoming dates"} ({quickGuests} guests) has been received.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs uppercase tracking-widest text-[#B89B62] underline hover:text-[#1C1C1A]"
              >
                Send Another Inquiry
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
