import React from 'react';
import { ArrowRight, Scissors } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface SignatureBannerProps {
  onStartClick: () => void;
}

export const SignatureBanner: React.FC<SignatureBannerProps> = ({ onStartClick }) => {
  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#171717] overflow-hidden">
      {/* Full-width photograph background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=85"
          alt="Close-up hair texture statement"
          fallbackTitle="THE RIGHT STYLE"
          fallbackSubtitle="Style Nexus Guwahati"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Elegant dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/85 to-[#171717]/70" />
        <div className="absolute inset-0 bg-[#171717]/40 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center flex flex-col items-center">
        
        <div className="w-12 h-12 rounded-full border border-[#A97958]/40 flex items-center justify-center bg-[#171717]/60 text-[#A97958] mb-8">
          <Scissors className="w-5 h-5 stroke-[1.5]" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-[#A97958] font-heading font-semibold mb-4">
          STYLE NEXUS · SIGNATURE PHILOSOPHY
        </span>

        <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F3F0E9] uppercase leading-[1.05] max-w-4xl mb-6">
          THE RIGHT STYLE{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3F0E9] via-[#D8D0C5] to-[#A97958]">
            CHANGES EVERYTHING.
          </span>
        </h2>

        <p className="font-editorial italic text-2xl sm:text-3xl text-[#D8D0C5] max-w-xl mb-10 font-normal">
          "Find the look that feels like you."
        </p>

        <button
          onClick={onStartClick}
          className="group px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#171717] bg-[#F3F0E9] hover:bg-[#A97958] hover:text-white transition-all duration-300 shadow-2xl flex items-center gap-3 active:scale-[0.98]"
        >
          <span>LET'S GET STARTED</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-12 flex items-center gap-2 text-xs text-[#D8D0C5]/60 tracking-widest font-heading uppercase">
          <span>HAIR STUDIO</span>
          <span aria-hidden="true">·</span>
          <span>BAMUNIMAIDAN</span>
          <span aria-hidden="true">·</span>
          <span>GUWAHATI</span>
        </div>
      </div>
    </section>
  );
};
