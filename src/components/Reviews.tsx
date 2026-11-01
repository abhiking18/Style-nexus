import React from 'react';
import { Star, ExternalLink, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-28 bg-[#F3F0E9] text-[#171717] border-t border-[#D8D0C5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold mb-3">
            <HeartHandshake className="w-4 h-4 text-[#A97958]" />
            <span>AUTHENTIC CLIENT EXPERIENCES</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#171717] uppercase leading-[1.05]">
            THE LOVE FOR <span className="text-[#A97958]">GREAT STYLE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#30302E]/90 leading-relaxed font-body">
            STYLE NEXUS maintains a verified 5.0-star rating on Google. We take immense pride in every tailored cut, colour, and transformation delivered at our Bamunimaidan salon.
          </p>
        </div>

        {/* Reputation Overview Card */}
        <div className="bg-white border border-[#D8D0C5] p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Big Rating Left Area (col-span-6) */}
            <div className="lg:col-span-6 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-[#D8D0C5] pb-8 lg:pb-0 lg:pr-10">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#A97958]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold">
                  VERIFIED GOOGLE BUSINESS PROFILE
                </span>
              </div>

              <div className="flex items-baseline gap-3 my-2 font-heading font-bold text-6xl sm:text-7xl lg:text-8xl text-[#171717]">
                <span>5.0</span>
                <span className="text-2xl sm:text-3xl font-medium text-[#A97958]">/ 5.0</span>
              </div>

              {/* 5 Copper Stars */}
              <div className="flex items-center gap-1.5 my-4" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 fill-[#A97958] text-[#A97958]" />
                ))}
              </div>

              <div className="text-sm font-heading font-semibold uppercase tracking-[0.2em] text-[#30302E]">
                BASED ON {SALON_CONFIG.googleReviewCount} GOOGLE REVIEWS
              </div>

              <p className="text-xs text-[#30302E]/70 mt-3 leading-relaxed">
                As per Google Maps business listing data for STYLE NEXUS at Maniram Dewan Road, Bamunimaidan, Guwahati.
              </p>
            </div>

            {/* Right Information & Link Area (col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A97958] mt-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#171717] uppercase tracking-wide">
                      100% Five-Star Feedback
                    </h3>
                    <p className="text-xs text-[#30302E]/80 mt-0.5">
                      Every recorded reviewer has awarded Style Nexus the maximum rating for styling, cleanliness, and service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A97958] mt-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#171717] uppercase tracking-wide">
                      Unfiltered Community Transparency
                    </h3>
                    <p className="text-xs text-[#30302E]/80 mt-0.5">
                      To preserve brand integrity, we never display fabricated testimonial quotes. View genuine community reviews directly on Google Maps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={SALON_CONFIG.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white bg-[#171717] hover:bg-[#A97958] transition-colors flex items-center justify-center gap-2"
                >
                  <span>VIEW GOOGLE REVIEWS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://search.google.com/local/writereview?placeid=ChIJStyleNexusGuwahati`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // Fallback to standard maps listing
                    window.open(SALON_CONFIG.googleListingUrl, '_blank');
                    e.preventDefault();
                  }}
                  className="px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-[#171717] border border-[#D8D0C5] hover:border-[#A97958] transition-colors flex items-center justify-center gap-2"
                >
                  <span>WRITE A REVIEW</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
