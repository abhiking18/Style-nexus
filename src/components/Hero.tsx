import React from 'react';
import { ArrowDown, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { SALON_CONFIG } from '../config/salonConfig';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-12 sm:pb-16 bg-[#171717] overflow-hidden"
    >
      {/* Background architectural grain / subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_20%,rgba(169,121,88,0.12),transparent)] pointer-events-none" />

      {/* Main asymmetric editorial container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Intent (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Location & Micro-kicker */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-[0.25em] uppercase text-[#A97958] font-medium font-heading mb-6 animate-in fade-in duration-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A97958]" />
                BAMUNIMAIDAN · GUWAHATI
              </span>
              <span className="text-[#30302E]">/</span>
              <span className="text-[#D8D0C5]/80">RENU'S WEAVES</span>
            </div>

            {/* Small Heading */}
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D8D0C5] font-semibold font-heading mb-3">
              THE ART OF PERSONAL STYLE.
            </p>

            {/* Oversized Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-[4.75rem] font-bold text-[#F3F0E9] tracking-[-0.03em] leading-[1.05] uppercase max-w-2xl mb-6">
              MAKE YOUR HAIR{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F3F0E9] via-[#D8D0C5] to-[#A97958]">
                MAKE A STATEMENT.
              </span>
            </h1>

            {/* Editorial Accent line */}
            <p className="font-editorial italic text-xl sm:text-2xl text-[#D8D0C5] mb-5 tracking-wide font-normal">
              "Your Hair. Your Identity."
            </p>

            {/* Supporting Prose */}
            <p className="text-sm sm:text-base text-[#D8D0C5]/90 max-w-xl leading-relaxed mb-9">
              Discover your look. Express your individuality. Experience hair styling that feels completely yours.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] bg-[#F3F0E9] hover:bg-[#A97958] hover:text-white transition-all duration-300 shadow-xl shadow-black/30 text-center"
              >
                BOOK YOUR VISIT
              </button>

              <button
                onClick={onExploreServices}
                className="group px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#F3F0E9] border border-[#A97958]/40 hover:border-[#A97958] hover:bg-[#A97958]/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>EXPLORE SERVICES</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#A97958] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Studio Hours live badge */}
            <div className="mt-10 pt-6 border-t border-[#30302E] flex flex-wrap items-center gap-4 text-xs text-[#D8D0C5]/80">
              <span className="text-[#A97958] font-heading uppercase tracking-wider font-semibold">
                TODAY'S HOURS
              </span>
              <span>10:00 AM – 8:30 PM</span>
              <span className="text-[#30302E]">·</span>
              <span className="text-[#D8D0C5]/60">Near Anuradha Cinema Complex</span>
            </div>
          </div>

          {/* Right Column: Large Photographic Area (col-span-5) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Architectural decorative copper framing line */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#A97958]/30 hidden sm:block pointer-events-none" />

            <div className="relative shadow-2xl shadow-black/80 group overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                alt="Hairstylist precision styling at Style Nexus Hair Studio"
                fallbackTitle="PRECISION STYLING"
                fallbackSubtitle="Style Nexus · Guwahati"
                containerClassName="aspect-[4/5] sm:aspect-[3/4] w-full"
                className="w-full h-full object-cover grayscale-[15%] contrast-[105%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                showOverlay={true}
              />

              {/* Bottom Tag within Photo */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#171717]/85 backdrop-blur-md border border-[#A97958]/20 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] tracking-[0.25em] uppercase text-[#A97958] font-heading font-semibold">
                    HAIR STUDIO
                  </span>
                  <span className="text-xs font-heading text-[#F3F0E9] font-medium tracking-wide">
                    CONTEMPORARY CUTS & COLOUR
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#D8D0C5]/60 block">RATING</span>
                  <span className="text-xs font-semibold text-[#F3F0E9] font-mono">5.0 ★</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Small Vertical Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex items-center justify-between pt-6 border-t border-[#30302E]/60 text-xs text-[#D8D0C5]/60">
        <div className="flex items-center gap-2">
          <span className="font-heading tracking-[0.2em] text-[10px] uppercase text-[#A97958]">
            GUWAHATI
          </span>
          <span aria-hidden="true">·</span>
          <span>EST. BAMUNIMAIDAN</span>
        </div>

        <a
          href="#reputation"
          className="flex items-center gap-2 text-[11px] tracking-widest uppercase hover:text-[#A97958] transition-colors group"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#A97958] group-hover:translate-y-1 transition-transform animate-bounce" />
        </a>
      </div>
    </section>
  );
};
