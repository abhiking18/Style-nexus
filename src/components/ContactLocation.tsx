import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Building2, ExternalLink } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-28 bg-[#1F1F1D] text-[#F3F0E9] border-t border-[#30302E]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold block mb-3">
            VISIT OUR STUDIO
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E9] uppercase leading-[1.05]">
            FIND YOUR WAY <span className="text-[#A97958]">TO STYLE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D0C5] leading-relaxed">
            Conveniently situated along Maniram Dewan Road in Bamunimaidan, near Anuradha Cinema Complex. Drop by or connect directly with our stylists.
          </p>
        </div>

        {/* Studio Info + Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Business Details & Actions (col-span-6) */}
          <div className="lg:col-span-6 bg-[#171717] border border-[#A97958]/30 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xl">
            
            <div className="space-y-6">
              
              {/* Brand Title */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A97958] font-heading font-semibold block mb-1">
                  HAIR STUDIO · GUWAHATI
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#F3F0E9] tracking-wider">
                  {SALON_CONFIG.name}
                </h3>
                <p className="font-editorial italic text-base text-[#D8D0C5] mt-0.5">
                  "{SALON_CONFIG.tagline}"
                </p>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#30302E]">
                <div className="w-10 h-10 rounded-none bg-[#242422] border border-[#A97958]/30 flex items-center justify-center text-[#A97958] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs uppercase tracking-widest text-[#A97958] font-semibold mb-1">
                    STUDIO ADDRESS
                  </h4>
                  <p className="text-sm text-[#F3F0E9] font-medium leading-snug">
                    {SALON_CONFIG.address.fullFormatted}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-[#D8D0C5]/80">
                    <Building2 className="w-3.5 h-3.5 text-[#A97958]" />
                    <span>{SALON_CONFIG.address.landmark}</span>
                  </div>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#30302E]">
                <div className="w-10 h-10 rounded-none bg-[#242422] border border-[#A97958]/30 flex items-center justify-center text-[#A97958] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs uppercase tracking-widest text-[#A97958] font-semibold mb-1">
                    DIRECT PHONE / CALL
                  </h4>
                  <a
                    href={`tel:${SALON_CONFIG.phoneRaw}`}
                    className="text-base sm:text-lg font-heading font-bold text-[#F3F0E9] hover:text-[#A97958] transition-colors"
                  >
                    {SALON_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#D8D0C5]/60 mt-0.5">
                    Tap to dial directly from mobile
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#30302E]">
                <div className="w-10 h-10 rounded-none bg-[#242422] border border-[#A97958]/30 flex items-center justify-center text-[#A97958] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs uppercase tracking-widest text-[#A97958] font-semibold mb-1">
                    OPENING HOURS
                  </h4>
                  <p className="text-sm font-semibold text-[#F3F0E9]">
                    {SALON_CONFIG.openingHours.days}: {SALON_CONFIG.openingHours.hours}
                  </p>
                  <p className="text-xs text-[#D8D0C5]/80 mt-1 italic font-body">
                    {SALON_CONFIG.openingHours.note}
                  </p>
                </div>
              </div>

            </div>

            {/* Three Essential Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#30302E]">
              {/* CALL NOW */}
              <a
                href={`tel:${SALON_CONFIG.phoneRaw}`}
                className="py-3.5 px-3 text-center text-xs font-semibold uppercase tracking-[0.16em] bg-[#F3F0E9] text-[#171717] hover:bg-[#A97958] hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL NOW</span>
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${SALON_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-3 text-center text-xs font-semibold uppercase tracking-[0.16em] bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WHATSAPP</span>
              </a>

              {/* GET DIRECTIONS */}
              <a
                href={SALON_CONFIG.googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-3 text-center text-xs font-semibold uppercase tracking-[0.16em] bg-[#30302E] text-[#F3F0E9] hover:bg-[#A97958] hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 border border-[#A97958]/30 active:scale-[0.98]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>DIRECTIONS</span>
              </a>
            </div>

          </div>

          {/* Right Column: Responsive Interactive Map View (col-span-6) */}
          <div className="lg:col-span-6 bg-[#171717] border border-[#30302E] overflow-hidden flex flex-col justify-between shadow-xl min-h-[420px]">
            {/* Map Frame */}
            <div className="relative w-full h-full min-h-[360px] bg-[#242422]">
              <iframe
                title="Style Nexus Location on Google Maps"
                src="https://maps.google.com/maps?q=STYLE%20NEXUS%2C%20Maniram%20Dewan%20Road%2C%20Bamunimaidan%2C%20Guwahati%2C%20Assam&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0 grayscale-[40%] contrast-[110%] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Badge at Bottom Left of Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-3.5 bg-[#171717]/95 backdrop-blur-md border border-[#A97958]/40 shadow-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A97958] shrink-0 animate-bounce" />
                  <div>
                    <span className="font-heading text-xs font-bold uppercase text-[#F3F0E9] block leading-tight">
                      STYLE NEXUS
                    </span>
                    <span className="text-[10px] text-[#D8D0C5]/80 block">
                      Bamunimaidan · Guwahati
                    </span>
                  </div>
                </div>

                <a
                  href={SALON_CONFIG.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-[#A97958] text-white hover:bg-[#C49777] transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>MAPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="p-4 bg-[#171717] border-t border-[#30302E] flex flex-wrap items-center justify-between gap-3 text-xs text-[#D8D0C5]">
              <span>Landmark: Near Anuradha Cinema Complex</span>
              <span className="text-[#A97958]">Postal Code: 781021</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
