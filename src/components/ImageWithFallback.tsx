import React, { useState } from 'react';
import { Sparkles, Scissors, Eye } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | 'auto';
  showOverlay?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Style Nexus Hair Studio',
  fallbackTitle = 'STYLE NEXUS',
  fallbackSubtitle = 'Hair Studio · Guwahati',
  className = '',
  containerClassName = '',
  aspectRatio = 'auto',
  showOverlay = false,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-[#242422] ${containerClassName}`}>
      {/* Fallback container shown if image errors or src missing */}
      {hasError || !src ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#242422] via-[#1F1F1D] to-[#171717] border border-[#A97958]/20">
          {/* Subtle architectural geometric hair studio illustration */}
          <div className="w-16 h-16 mb-4 rounded-full border border-[#A97958]/30 flex items-center justify-center bg-[#A97958]/10 text-[#A97958]">
            <Scissors className="w-7 h-7 stroke-[1.5]" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#A97958] font-medium font-heading mb-1">
            {fallbackSubtitle}
          </span>
          <p className="text-sm font-heading font-semibold text-[#F3F0E9] max-w-[200px] leading-snug">
            {fallbackTitle}
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#D8D0C5]/60 tracking-wider">
            <span>EDITORIAL VISUAL</span>
            <span aria-hidden="true">·</span>
            <span>STUDIO ARCHIVE</span>
          </div>
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 bg-[#242422] animate-pulse flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#A97958] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            className={`${className} transition-opacity duration-700 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            {...rest}
          />
          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
          )}
        </>
      )}
    </div>
  );
};
