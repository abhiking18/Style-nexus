/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GoogleReputation } from './components/GoogleReputation';
import { About } from './components/About';
import { Services } from './components/Services';
import { SignatureBanner } from './components/SignatureBanner';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { AppointmentBooking } from './components/AppointmentBooking';
import { ContactLocation } from './components/ContactLocation';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { OwnerDemoModal } from './components/OwnerDemoModal';
import { Sliders } from 'lucide-react';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>();
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    scrollToBooking();
  };

  const handleEnquireAboutLook = (lookTitle: string) => {
    setSelectedServiceForBooking(`Look Inquiry: ${lookTitle}`);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#171717] text-[#F3F0E9] selection:bg-[#A97958] selection:text-white relative">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onBookClick={scrollToBooking} />

      <main>
        {/* 2. Full-Screen Editorial Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onExploreServices={scrollToServices}
        />

        {/* 3. Google Rating Interactive Reputational Section with Animated Numbers & Stars */}
        <GoogleReputation />

        {/* 4. About Style Nexus (Warm Cream Editorial Section) */}
        <About />

        {/* 5. Services Showcase (Proposed Categories with Editorial Cards) */}
        <Services onSelectServiceForEnquiry={handleSelectService} />

        {/* 6. Signature Visual Section */}
        <SignatureBanner onStartClick={scrollToBooking} />

        {/* 7. Gallery Portfolio & Full-Screen Lightbox */}
        <Gallery onEnquireAboutLook={handleEnquireAboutLook} />

        {/* 8. Verified Google Reviews Overview (Zero fake reviews) */}
        <Reviews />

        {/* 9. Minimalist Appointment Enquiry with WhatsApp Dispatch */}
        <AppointmentBooking
          preselectedService={selectedServiceForBooking}
          onClearPreselectedService={() => setSelectedServiceForBooking(undefined)}
        />

        {/* 10. Contact & Interactive Location Section */}
        <ContactLocation />
      </main>

      {/* 11. Minimal Dark Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 13. Owner Demo Quick Inspector Toggle */}
      <button
        onClick={() => setIsOwnerModalOpen(true)}
        className="fixed bottom-5 left-5 z-40 px-3 py-2 bg-[#171717]/90 hover:bg-[#A97958] text-[#D8D0C5] hover:text-white text-[11px] font-heading font-medium tracking-wider uppercase border border-[#A97958]/30 shadow-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-1.5 focus:outline-none"
        title="View Salon Owner Config & Demo Guide"
      >
        <Sliders className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Owner Demo Settings</span>
      </button>

      {/* Owner Demo Configuration Inspector Modal */}
      <OwnerDemoModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
      />
    </div>
  );
}
