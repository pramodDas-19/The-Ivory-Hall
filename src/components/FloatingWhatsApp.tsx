"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hello The Ivory Hall Concierge, I would like to inquire about event availability and private tours."
    );
    window.open(`https://wa.me/910000000000?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md text-[#1C1C1A] px-4 py-2.5 rounded-full border border-[#DDD9D0] shadow-xl text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="font-medium tracking-wide">
              Chat with Venue Concierge
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-[#63625D] hover:text-[#1C1C1A] p-0.5 rounded-full ml-1"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elevated border-2 border-white hover:bg-[#20ba5a] transition-colors focus:outline-none"
        aria-label="Chat with The Ivory Hall on WhatsApp"
      >
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-none group-hover:scale-105 transition-transform" />

        {/* Online status indicator dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-[#B89B62] rounded-full" />
        </span>
      </motion.button>
    </div>
  );
}
