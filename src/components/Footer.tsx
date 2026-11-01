import React from 'react';
import { ArrowUp, MapPin, Phone, MessageCircle } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-[#F3F0E9] border-t border-[#30302E] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#30302E]">
          
          {/* Brand Column (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-heading text-2xl font-bold tracking-[0.18em] uppercase text-[#F3F0E9]">
                STYLE NEXUS
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#A97958] font-heading font-medium mt-0.5">
                HAIR STUDIO · GUWAHATI
              </p>
            </div>

            <p className="font-editorial italic text-xl text-[#D8D0C5] leading-snug">
              "Your Hair. Your Identity."
            </p>

            <p className="text-xs text-[#D8D0C5]/70 max-w-sm leading-relaxed">
              A contemporary hair studio focused on style, individuality, and personal expression in Bamunimaidan, Guwahati, Assam.
            </p>

            <div className="pt-2 text-xs text-[#A97958] font-mono">
              Google Rating: 5.0 / 5.0 (8 Reviews)
            </div>
          </div>

          {/* Quick Navigation (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#A97958]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D0C5]">
              <li>
                <a href="#home" className="hover:text-[#A97958] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#A97958] transition-colors">About Studio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#A97958] transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#A97958] transition-colors">Visual Portfolio</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#A97958] transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#A97958] transition-colors">Book Visit</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A97958] transition-colors">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Service Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#A97958]">
              STUDIO SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D0C5]">
              {SALON_CONFIG.services.map((svc) => (
                <li key={svc.id}>
                  <a href="#services" className="hover:text-[#A97958] transition-colors">
                    {svc.number} — {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#A97958]">
              CONNECT & VISIT
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#D8D0C5]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A97958] shrink-0 mt-0.5" />
                <span>
                  {SALON_CONFIG.address.fullFormatted} (Located in {SALON_CONFIG.address.landmark})
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A97958] shrink-0" />
                <a href={`tel:${SALON_CONFIG.phoneRaw}`} className="hover:text-[#A97958] transition-colors font-mono">
                  {SALON_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#A97958] shrink-0" />
                <a
                  href={`https://wa.me/${SALON_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A97958] transition-colors"
                >
                  WhatsApp: +91 60012 35320
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#D8D0C5]/70">
                Hours: Mon–Sun: 10:00 AM – 8:30 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D0C5]/60">
          <p className="tracking-wider uppercase font-mono">
            © 2026 STYLE NEXUS. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#A97958] transition-colors group tracking-widest uppercase font-heading text-[11px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
