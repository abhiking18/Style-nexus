import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { SALON_CONFIG, GalleryItem } from '../config/salonConfig';

interface GalleryProps {
  onEnquireAboutLook: (lookTitle: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onEnquireAboutLook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Cuts & Styling', 'Colour', 'Treatments', 'Studio Vibe'];

  const filteredItems = selectedCategory === 'All'
    ? SALON_CONFIG.gallery
    : SALON_CONFIG.gallery.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-28 bg-[#1F1F1D] text-[#F3F0E9] border-t border-[#30302E]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#30302E]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold block mb-2">
              VISUAL PORTFOLIO & INSPIRATION
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F3F0E9] uppercase leading-tight">
              LOOKS & <span className="text-[#A97958]">AESTHETICS.</span>
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#171717] border border-[#30302E]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-heading font-medium tracking-wider uppercase transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#A97958] text-white'
                    : 'text-[#D8D0C5]/70 hover:text-[#F3F0E9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => {
            // Dynamic column spans for editorial asymmetric composition
            let colSpan = 'md:col-span-6';
            let aspectClass = 'aspect-[4/3]';

            if (index % 5 === 0) {
              colSpan = 'md:col-span-7';
              aspectClass = 'aspect-[16/11]';
            } else if (index % 5 === 1) {
              colSpan = 'md:col-span-5';
              aspectClass = 'aspect-[4/5]';
            } else if (index % 5 === 2) {
              colSpan = 'md:col-span-4';
              aspectClass = 'aspect-square';
            } else if (index % 5 === 3) {
              colSpan = 'md:col-span-4';
              aspectClass = 'aspect-square';
            } else if (index % 5 === 4) {
              colSpan = 'md:col-span-4';
              aspectClass = 'aspect-square';
            }

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`${colSpan} group relative bg-[#171717] border border-[#30302E] cursor-pointer overflow-hidden`}
              >
                <div className={`relative w-full ${aspectClass}`}>
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    fallbackSubtitle={item.category}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:contrast-[103%] transition-transform duration-700 ease-out"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-1 text-[10px] tracking-widest uppercase font-mono bg-[#A97958] text-white">
                        {item.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#A97958] font-heading font-semibold block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-wide leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#D8D0C5] line-clamp-1 mt-1 font-body">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Disclaimer for Salon Owner */}
        <div className="mt-12 p-4 bg-[#171717] border border-[#30302E] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#D8D0C5]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#A97958] font-heading font-semibold uppercase tracking-wider">
              Studio Demonstration Note:
            </span>
            <span>
              Curated styling inspiration visuals. Style Nexus client and studio photography can be seamlessly configured.
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#A97958] shrink-0">
            src/config/salonConfig.ts
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar of Lightbox */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-[#D8D0C5]">
            <div className="flex items-center gap-3">
              <span className="font-heading uppercase tracking-widest text-[#A97958] font-semibold">
                STYLE NEXUS LOOKBOOK
              </span>
              <span>·</span>
              <span className="font-mono">
                {lightboxIndex! + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Visual Centerpiece */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
              }}
              className="absolute left-2 sm:left-6 z-10 p-3 bg-black/60 hover:bg-[#A97958] text-white transition-colors border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className="max-h-[70vh] max-w-4xl w-full flex items-center justify-center p-2">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] max-w-full object-contain shadow-2xl border border-[#A97958]/20"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
              }}
              className="absolute right-2 sm:right-6 z-10 p-3 bg-black/60 hover:bg-[#A97958] text-white transition-colors border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Details and CTA */}
          <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] tracking-widest uppercase text-[#A97958] font-heading font-semibold block">
                {activeLightboxItem.category} · {activeLightboxItem.tag}
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white uppercase">
                {activeLightboxItem.title}
              </h3>
              <p className="text-xs text-[#D8D0C5] max-w-lg mt-0.5">
                {activeLightboxItem.caption}
              </p>
            </div>

            <button
              onClick={() => {
                const title = activeLightboxItem.title;
                setLightboxIndex(null);
                onEnquireAboutLook(title);
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] bg-[#A97958] text-white hover:bg-[#C49777] transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ENQUIRE ABOUT THIS LOOK</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
