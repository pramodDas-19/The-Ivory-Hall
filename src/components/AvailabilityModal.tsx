"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpace?: string;
}

export default function AvailabilityModal({
  isOpen,
  onClose,
  initialSpace,
}: AvailabilityModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    space: initialSpace || "Grand Ballroom",
    date: "",
    guests: "150-250",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1C1C1A]/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#DDD9D0] shadow-2xl rounded-none p-6 sm:p-10 z-10 my-8 overflow-hidden"
          >
            {/* Subtle top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B89B62] to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close availability modal"
              className="absolute top-5 right-5 p-2 text-[#63625D] hover:text-[#1C1C1A] transition-colors rounded-full hover:bg-[#E8E4DC]/50"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>

            {!submitted ? (
              <div>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 text-xs tracking-ultra text-[#B89B62] uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Enquire For Dates</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-normal leading-tight">
                    Check Date Availability
                  </h3>
                  <p className="text-sm text-[#63625D] font-light mt-2 max-w-md mx-auto">
                    Share your intended occasion and timeline. Our events concierge will review calendar openings and return with personalized availability.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1C1C1A] mb-1.5 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aditi Roy"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:border-[#B89B62] focus:ring-0 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1C1C1A] mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="aditi@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:border-[#B89B62] focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1C1C1A] mb-1.5 font-medium">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:border-[#B89B62] focus:ring-0 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1C1C1A] mb-1.5 font-medium">
                        Occasion Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:border-[#B89B62] focus:ring-0 transition-colors"
                      >
                        <option value="Wedding">Wedding Ceremony & Reception</option>
                        <option value="Corporate Event">Corporate Gala & Executive Event</option>
                        <option value="Private Celebration">Private Celebration & Milestone</option>
                        <option value="Reception">Cocktail & Social Reception</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1C1C1A] mb-1.5 font-medium">
                        Preferred Space
                      </label>
                      <select
                        value={formData.space}
                        onChange={(e) =>
                          setFormData({ ...formData, space: e.target.value })
                        }
                        className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:border-[#B89B62] focus:ring-0 transition-colors"
                      >
                        <option value="Grand Ballroom">Grand Ballroom (Up to 500)</option>
                        <option value="Garden Courtyard">Garden Courtyard (Up to 250)</option>
                        <option value="Rooftop Terrace">Rooftop Terrace (Up to 180)</option>
                        <option value="Private Dining">Private Dining (Up to 60)</option>
                        <option value="Entire Estate">Multiple / Entire Venue</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1C1C1A] mb-1.5 font-medium flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#B89B62]" />
                        Target Date / Season
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:border-[#B89B62] focus:ring-0 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#1C1C1A] mb-1.5 font-medium flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#B89B62]" />
                        Estimated Guest Count
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                        className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:border-[#B89B62] focus:ring-0 transition-colors"
                      >
                        <option value="Under 50">Under 50 guests</option>
                        <option value="50-150">50 - 150 guests</option>
                        <option value="150-300">150 - 300 guests</option>
                        <option value="300-500">300 - 500 guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#1C1C1A] mb-1.5 font-medium">
                      Event Notes & Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details on your vision, catering preferences, or questions..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white border border-[#DDD9D0] px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:border-[#B89B62] focus:ring-0 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#63625D]">
                      Demo consultation request • No obligations
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1C1C1A] text-[#FAF9F6] text-xs uppercase tracking-widest font-medium hover:bg-[#B89B62] transition-colors duration-300 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Checking Calendar...</span>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#E8E4DC] flex items-center justify-center text-[#B89B62]">
                  <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-3xl text-[#1C1C1A] font-normal">
                  Enquiry Received
                </h3>
                <p className="text-sm text-[#63625D] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="font-semibold text-[#1C1C1A]">{formData.name}</strong>. We have noted your request for the{" "}
                  <strong className="font-semibold text-[#1C1C1A]">{formData.space}</strong> ({formData.eventType}) for approximately {formData.guests} guests.
                </p>
                <div className="p-4 bg-[#FFFFFF] border border-[#DDD9D0] max-w-sm mx-auto text-xs text-[#63625D] text-left space-y-1">
                  <div><span className="text-[#1C1C1A] font-medium">Contact:</span> {formData.email} / {formData.phone}</div>
                  <div><span className="text-[#1C1C1A] font-medium">Status:</span> Preliminary Hold & Review</div>
                  <div><span className="text-[#1C1C1A] font-medium">Note:</span> This is a demonstration preview.</div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#1C1C1A] text-[#FAF9F6] text-xs uppercase tracking-widest font-medium hover:bg-[#B89B62] transition-colors"
                  >
                    Close & Return
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
