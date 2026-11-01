import React, { useState } from 'react';
import { SlidersHorizontal, X, Check, Copy, Code2, Scissors, Building, Clock, Phone } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface OwnerDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerDemoModal: React.FC<OwnerDemoModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyConfigSnippet = () => {
    const snippet = `// Location: src/config/salonConfig.ts
export const SALON_CONFIG = {
  name: "${SALON_CONFIG.name}",
  phoneDisplay: "${SALON_CONFIG.phoneDisplay}",
  whatsappNumber: "${SALON_CONFIG.whatsappNumber}",
  openingHours: {
    days: "Monday – Sunday",
    hours: "10:00 AM – 8:30 PM",
    closesAt: "8:30 PM"
  },
  services: [ ... ] // Easily add or edit any service
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="bg-[#1F1F1D] border border-[#A97958]/40 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#30302E]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A97958] font-heading font-semibold block">
              SALON OWNER PRESENTATION SUITE
            </span>
            <h3 className="font-heading text-xl font-bold uppercase text-[#F3F0E9]">
              STYLE NEXUS · Configurable Architecture
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#D8D0C5] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview for Salon Owner */}
        <div className="my-5 space-y-4 text-xs text-[#D8D0C5] leading-relaxed">
          <p className="text-sm text-[#F3F0E9] font-medium">
            Dear Style Nexus Team, this bespoke website has been engineered specifically for your Guwahati salon.
          </p>
          <p>
            Unlike generic website builders, your website is powered by a central configuration file (<code className="text-[#A97958] font-mono">src/config/salonConfig.ts</code>). Every detail is 100% editable without touching complex code:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-[#171717] border border-[#30302E]">
              <div className="flex items-center gap-2 text-[#A97958] font-heading font-semibold uppercase text-[11px] mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Configurable Business Hours</span>
              </div>
              <p className="text-[11px] text-[#D8D0C5]/80">
                Currently configured for <strong>10:00 AM – 8:30 PM</strong>. Easily adjust seasonal or holiday schedules.
              </p>
            </div>

            <div className="p-3 bg-[#171717] border border-[#30302E]">
              <div className="flex items-center gap-2 text-[#A97958] font-heading font-semibold uppercase text-[11px] mb-1">
                <Scissors className="w-3.5 h-3.5" />
                <span>Editable Proposed Services</span>
              </div>
              <p className="text-[11px] text-[#D8D0C5]/80">
                The 6 service categories are initial suggestions ready for your confirmed menu and customized pricing.
              </p>
            </div>

            <div className="p-3 bg-[#171717] border border-[#30302E]">
              <div className="flex items-center gap-2 text-[#A97958] font-heading font-semibold uppercase text-[11px] mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Live WhatsApp Dispatch</span>
              </div>
              <p className="text-[11px] text-[#D8D0C5]/80">
                Connected to your real salon WhatsApp number: <strong>+91 60012 35320</strong>.
              </p>
            </div>

            <div className="p-3 bg-[#171717] border border-[#30302E]">
              <div className="flex items-center gap-2 text-[#A97958] font-heading font-semibold uppercase text-[11px] mb-1">
                <Building className="w-3.5 h-3.5" />
                <span>Guwahati Location Pin</span>
              </div>
              <p className="text-[11px] text-[#D8D0C5]/80">
                Accurate address in Renu's Weaves, Near Anuradha Cinema Complex, Bamunimaidan.
              </p>
            </div>
          </div>
        </div>

        {/* Config Snippet Box */}
        <div className="bg-[#171717] border border-[#30302E] p-4 text-xs font-mono text-[#D8D0C5]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#30302E] text-[11px]">
            <span className="text-[#A97958] flex items-center gap-1.5 font-sans font-medium">
              <Code2 className="w-3.5 h-3.5" />
              Central Config Blueprint
            </span>
            <button
              onClick={handleCopyConfigSnippet}
              className="text-[#D8D0C5] hover:text-white transition-colors flex items-center gap-1 font-sans"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>
          <pre className="overflow-x-auto text-[11px] leading-relaxed text-[#D8D0C5]/90">
{`// Central Salon Settings (src/config/salonConfig.ts)
export const SALON_CONFIG = {
  name: "STYLE NEXUS",
  phoneDisplay: "+91 60012 35320",
  whatsappNumber: "916001235320",
  googleRating: 5.0,
  googleReviewCount: 8,
  address: "5QMM+75M, Maniram Dewan Road, Near Anuradha Cinema Complex, Bamunimaidan",
  openingHours: "Monday – Sunday: 10:00 AM – 8:30 PM"
};`}
          </pre>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#30302E] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#A97958] text-white hover:bg-[#C49777] transition-colors"
          >
            RETURN TO PREVIEW
          </button>
        </div>

      </div>
    </div>
  );
};
