import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hi Style Nexus, I would like to enquire about hair styling and appointment availability.'
  );
  const whatsappUrl = `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-3">
      {/* Subtle tooltip label on desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-[#171717] border border-[#A97958]/40 px-3.5 py-2 shadow-2xl text-xs transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span className="text-[#F3F0E9] font-medium font-heading tracking-wide">
          Chat with Style Nexus
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] text-white shadow-2xl rounded-full hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#A97958]"
        aria-label="Chat directly with Style Nexus on WhatsApp"
        title="Chat on WhatsApp (+91 60012 35320)"
      >
        {/* Subtle glow aura */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 blur-md transition-opacity" />
        
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 fill-current" />
      </a>
    </div>
  );
};
