import React, { useState, useEffect, useRef } from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const GoogleReputation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [ratingVal, setRatingVal] = useState<number>(0.0);
  const [reviewCountVal, setReviewCountVal] = useState<number>(0);
  const [visibleStars, setVisibleStars] = useState<number>(0);
  const [showGlow, setShowGlow] = useState(false);
  const animationRan = useRef(false);

  useEffect(() => {
    // Check user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setRatingVal(5.0);
      setReviewCountVal(8);
      setVisibleStars(5);
      setShowGlow(true);
      return;
    }

    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationRan.current) {
          animationRan.current = true;
          setHasStarted(true);

          const duration = 1800; // 1.8 seconds as required
          const startTime = performance.now();

          // Ease-out cubic calculation: 1 - Math.pow(1 - t, 3)
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOut(progress);

            // Interpolate values
            const currentRating = +(easedProgress * 5.0).toFixed(1);
            const currentReviews = Math.round(easedProgress * 8);
            
            // Staggered star reveal (each at ~20% step of progress)
            const calculatedStars = Math.min(Math.floor(progress * 5) + 1, 5);

            setRatingVal(currentRating);
            setReviewCountVal(currentReviews);
            setVisibleStars(calculatedStars);

            if (progress > 0.4) {
              setShowGlow(true);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setRatingVal(5.0);
              setReviewCountVal(8);
              setVisibleStars(5);
              setShowGlow(true);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(currentSection);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="reputation"
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-[#1F1F1D] text-[#F3F0E9] border-y border-[#30302E] overflow-hidden"
    >
      {/* Background Copper Atmosphere */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(169,121,88,0.18)_0%,transparent_70%)] transition-opacity duration-1000 pointer-events-none ${
          showGlow ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="bg-[#171717] border border-[#A97958]/25 p-8 sm:p-12 lg:p-16 relative">
          
          {/* Subtle copper accent corner brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#A97958]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#A97958]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#A97958]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#A97958]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Reputational statement & context (col-span-6) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIAL GOOGLE LISTING REPUTATION</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F0E9] uppercase leading-tight">
                FLAWLESS FIVE-STAR REPUTATION IN GUWAHATI.
              </h2>

              <p className="text-sm sm:text-base text-[#D8D0C5] leading-relaxed max-w-xl">
                Every client experience at STYLE NEXUS is crafted with care, personalized artistry, and dedicated attention to individual style.
              </p>

              <div className="flex items-center gap-3 pt-2 text-xs text-[#D8D0C5]/80">
                <CheckCircle2 className="w-4 h-4 text-[#A97958]" />
                <span>Verified Business Listing · Bamunimaidan, Guwahati</span>
              </div>
            </div>

            {/* Right: The Interactive Rating Centerpiece (col-span-6) */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-8 sm:gap-12 text-center sm:text-left">
              
              {/* Animated Big Number Block */}
              <div className="relative">
                {/* Copper Highlight Orb behind score */}
                <div
                  className={`absolute -inset-4 bg-[#A97958]/20 blur-2xl rounded-full transition-opacity duration-1000 ${
                    showGlow ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative flex flex-col items-center sm:items-start">
                  <div className="flex items-baseline gap-2 font-heading font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#F3F0E9] tabular-nums">
                    <span>{ratingVal.toFixed(1)}</span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-[#A97958] font-medium font-sans">
                      / 5.0
                    </span>
                  </div>

                  {/* 5 Copper Stars with Staggered Entrance */}
                  <div className="flex items-center gap-1.5 my-3" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((starIndex) => {
                      const isRevealed = starIndex <= visibleStars;
                      return (
                        <div
                          key={starIndex}
                          className={`transition-all duration-300 transform ${
                            isRevealed
                              ? 'opacity-100 scale-100 translate-y-0'
                              : 'opacity-10 scale-75 translate-y-2'
                          }`}
                        >
                          <Star className="w-6 h-6 fill-[#A97958] text-[#A97958]" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Review Count Animated */}
                  <div className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-[0.2em] text-[#D8D0C5] tabular-nums">
                    <span>{reviewCountVal}</span> GOOGLE REVIEWS
                  </div>
                </div>
              </div>

              {/* Action Button: VIEW GOOGLE REVIEWS */}
              <div className="shrink-0 flex flex-col items-center sm:items-start gap-2">
                <a
                  href={SALON_CONFIG.googleListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#171717] bg-[#F3F0E9] hover:bg-[#A97958] hover:text-white transition-all duration-300 shadow-md whitespace-nowrap active:scale-[0.98]"
                >
                  <span>VIEW GOOGLE REVIEWS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-[#D8D0C5]/60 text-center sm:text-left">
                  Opens official Google listing
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
