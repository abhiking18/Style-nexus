import React, { useState } from 'react';
import { ArrowUpRight, Clock, Sparkles, MessageCircle, Check } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { SALON_CONFIG, ServiceItem } from '../config/salonConfig';

interface ServicesProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForEnquiry }) => {
  const [activeTab, setActiveTab] = useState<string>(SALON_CONFIG.services[0].id);
  const selectedService = SALON_CONFIG.services.find((s) => s.id === activeTab) || SALON_CONFIG.services[0];

  return (
    <section id="services" className="py-24 sm:py-28 bg-[#171717] text-[#F3F0E9] border-t border-[#30302E]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#30302E]">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold block mb-3">
              CURATED MENU · GUWAHATI
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E9] uppercase leading-[1.05]">
              FIND YOUR <span className="text-[#A97958]">NEXT LOOK.</span>
            </h2>
          </div>
          <div className="max-w-md text-xs sm:text-sm text-[#D8D0C5] leading-relaxed">
            <p>
              Proposed studio offerings tailored to your texture, lifestyle, and facial harmony. Consult with our stylists for customized formulations and appointments.
            </p>
            <p className="mt-2 text-[11px] text-[#A97958] tracking-wider uppercase font-heading">
              Transparent Pricing · Contact Studio for Consultation
            </p>
          </div>
        </div>

        {/* Dynamic Editorial Showcase: Interactive Selector + Marquee Service Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-stretch">
          
          {/* Left Column: Numbered Service Navigation (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            <div className="space-y-2">
              {SALON_CONFIG.services.map((service) => {
                const isCurrent = service.id === selectedService.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full text-left p-4 sm:p-5 transition-all duration-300 border flex items-center justify-between group ${
                      isCurrent
                        ? 'bg-[#242422] border-[#A97958] text-[#F3F0E9]'
                        : 'bg-transparent border-[#30302E] text-[#D8D0C5]/70 hover:border-[#A97958]/50 hover:text-[#F3F0E9]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm sm:text-base font-semibold transition-colors ${
                          isCurrent ? 'text-[#A97958]' : 'text-[#D8D0C5]/50 group-hover:text-[#A97958]'
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-heading text-sm sm:text-base font-bold tracking-wide uppercase">
                          {service.title}
                        </h3>
                        <p className="text-[11px] text-[#D8D0C5]/60 line-clamp-1 mt-0.5">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-7 h-7 flex items-center justify-center transition-transform ${
                        isCurrent ? 'text-[#A97958] translate-x-1' : 'text-[#D8D0C5]/30 group-hover:text-[#A97958]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Note for Owner */}
            <div className="p-4 bg-[#1F1F1D] border border-[#30302E] text-xs text-[#D8D0C5]/70">
              <span className="text-[#A97958] font-heading uppercase tracking-wider block font-semibold mb-1">
                Studio Note
              </span>
              <span>All services are customizable during in-chair consultation at our Bamunimaidan salon.</span>
            </div>
          </div>

          {/* Right Column: High-Impact Editorial Spotlight Card (col-span-7) */}
          <div className="lg:col-span-7 bg-[#1F1F1D] border border-[#A97958]/30 flex flex-col justify-between overflow-hidden shadow-2xl relative">
            
            {/* Top Photo with Overlay */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <ImageWithFallback
                src={selectedService.image}
                alt={selectedService.title}
                fallbackTitle={selectedService.title}
                fallbackSubtitle="Style Nexus Hair Studio"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                showOverlay={true}
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#171717]/90 backdrop-blur-sm border border-[#A97958]/40">
                <span className="font-mono text-xs font-semibold text-[#A97958] tracking-widest">
                  CATEGORY {selectedService.number}
                </span>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#171717]/90 backdrop-blur-sm border border-[#30302E] text-xs text-[#F3F0E9] flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#A97958]" />
                <span>{selectedService.durationEstimate}</span>
              </div>
            </div>

            {/* Content area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#A97958] font-heading font-semibold block mb-1">
                  {selectedService.tagline}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F0E9] uppercase mb-3">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D8D0C5] leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Key feature bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-[#30302E]">
                  {selectedService.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-[#D8D0C5]">
                      <span className="w-1.5 h-1.5 bg-[#A97958]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Pricing strip */}
              <div className="pt-6 border-t border-[#30302E] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] tracking-widest uppercase text-[#D8D0C5]/60 block">PRICING</span>
                  <span className="font-heading font-semibold text-sm sm:text-base text-[#F3F0E9]">
                    {selectedService.pricingNote}
                  </span>
                </div>

                <button
                  onClick={() => onSelectServiceForEnquiry(selectedService.title)}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] bg-[#A97958] text-white hover:bg-[#C49777] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ENQUIRE ABOUT THIS SERVICE</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
