import React from 'react';
import { Sparkles, Palette, Fingerprint, Compass } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { SALON_CONFIG } from '../config/salonConfig';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Fingerprint,
      title: 'Personal Style',
      description: 'Your hair should mirror who you are. We listen, consult, and craft a bespoke silhouette tailored to your individuality.',
    },
    {
      icon: Palette,
      title: 'Hair Creativity',
      description: 'From dimensional colour transitions to directional cutting geometry, every session is an exercise in thoughtful hair artistry.',
    },
    {
      icon: Compass,
      title: 'Individual Expression',
      description: 'Beyond passing trends, we focus on authentic expression and confidence that you carry effortlessly every day.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-28 bg-[#F3F0E9] text-[#171717] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold block mb-3">
            ABOUT STYLE NEXUS · GUWAHATI
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] uppercase leading-[1.08] mb-6">
            NOT JUST A HAIRCUT.{' '}
            <span className="block text-[#A97958]">A PERSONAL STATEMENT.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#30302E]/90 leading-relaxed font-body">
            Style is personal. It's an expression of who you are. At Style Nexus, discover hair styling experiences that help you explore your individuality and find a look that feels right for you.
          </p>
        </div>

        {/* Editorial Photo Composition (1 Large Portrait + 1 Smaller Supporting Photograph) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          
          {/* Large Portrait Photo (col-span-7) */}
          <div className="lg:col-span-7 relative">
            <div className="relative shadow-xl shadow-stone-900/10 border border-[#D8D0C5] overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
                alt="Personalized hair styling portrait at Style Nexus"
                fallbackTitle="INDIVIDUAL EXPRESSION"
                fallbackSubtitle="Style Nexus Hair Studio"
                containerClassName="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 p-3 bg-white/95 backdrop-blur-sm border border-[#D8D0C5] text-xs">
                <span className="font-heading font-semibold text-[#171717] uppercase tracking-wider block">
                  BESPOKE HAIRCRAFT
                </span>
                <span className="text-[11px] text-[#A97958] tracking-widest font-heading">
                  GUWAHATI STUDIO
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Smaller Supporting Photograph + Studio Philosophy (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="relative shadow-md border border-[#D8D0C5] overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
                alt="Precision tools and workstation at Style Nexus salon"
                fallbackTitle="STUDIO DETAIL"
                fallbackSubtitle="Bamunimaidan Studio"
                containerClassName="aspect-[4/3] w-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 bg-white border-t border-[#D8D0C5]">
                <p className="text-xs uppercase tracking-widest text-[#A97958] font-heading font-semibold mb-1">
                  SPACE & ATMOSPHERE
                </p>
                <p className="text-xs text-[#30302E]">
                  Located at Maniram Dewan Road, Near Anuradha Cinema Complex, in Renu's Weaves.
                </p>
              </div>
            </div>

            {/* Editorial Quote Box */}
            <div className="p-6 bg-white border border-[#D8D0C5]/80 shadow-sm">
              <span className="font-editorial italic text-2xl text-[#171717] block mb-2">
                "Your Hair. Your Identity."
              </span>
              <p className="text-xs text-[#30302E]/80 leading-relaxed">
                We believe true hair styling is about enhancing your natural texture, lifestyle rhythm, and personal presence rather than imposing standard cookie-cutter formulas.
              </p>
            </div>
          </div>

        </div>

        {/* Three Visual Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#D8D0C5]">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-start p-6 bg-white border border-[#D8D0C5]/80">
                <div className="w-12 h-12 mb-5 rounded-none bg-[#F3F0E9] border border-[#A97958]/30 flex items-center justify-center text-[#A97958]">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-heading tracking-[0.25em] uppercase text-[#A97958] font-semibold mb-1">
                  HIGHLIGHT 0{idx + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#171717] tracking-tight uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#30302E]/80 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
