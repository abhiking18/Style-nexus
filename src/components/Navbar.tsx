import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Scissors, Phone } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/90 backdrop-blur-md border-b border-[#A97958]/15 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Display Face) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col items-start whitespace-nowrap shrink-0 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A97958]"
            aria-label="Style Nexus Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#F3F0E9] uppercase transition-colors group-hover:text-[#A97958]">
                STYLE NEXUS
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#D8D0C5]/70 font-medium font-heading">
              HAIR STUDIO · GUWAHATI
            </span>
          </a>

          {/* Zone 2: Navigation Links (Single-Line, Natural Spacing) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-[0.18em] font-medium text-[#D8D0C5]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`whitespace-nowrap shrink-0 transition-colors duration-200 relative py-1 hover:text-[#F3F0E9] ${
                    isActive ? 'text-[#A97958] font-semibold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A97958] rounded-full animate-in fade-in duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${SALON_CONFIG.phoneRaw}`}
              className="text-xs uppercase tracking-wider text-[#D8D0C5] hover:text-[#A97958] transition-colors p-2"
              title="Call Style Nexus"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onBookClick}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#171717] bg-[#F3F0E9] hover:bg-[#A97958] hover:text-white transition-all duration-300 rounded-none shadow-sm whitespace-nowrap active:scale-[0.98]"
            >
              <span>BOOK YOUR VISIT</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#171717] bg-[#F3F0E9] rounded-none hover:bg-[#A97958] hover:text-white transition-colors"
            >
              BOOK
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F3F0E9] hover:text-[#A97958] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#171717]/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col justify-between p-6 pt-24 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="pb-4 border-b border-[#30302E]">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#A97958] font-heading font-semibold">
              NAVIGATION
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-heading font-medium tracking-wide text-[#F3F0E9] hover:text-[#A97958] transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-5 h-5 text-[#A97958]/60" />
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-[#30302E] space-y-4">
          <div className="flex items-center justify-between text-xs text-[#D8D0C5]">
            <span>Hours</span>
            <span className="text-[#A97958] font-medium">10:00 AM – 8:30 PM</span>
          </div>
          <div className="text-xs text-[#D8D0C5] leading-relaxed">
            Near Anuradha Cinema Complex, Bamunimaidan, Guwahati
          </div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] bg-[#A97958] text-white hover:bg-[#C49777] transition-colors"
          >
            BOOK YOUR VISIT NOW
          </button>
        </div>
      </div>
    </>
  );
};
