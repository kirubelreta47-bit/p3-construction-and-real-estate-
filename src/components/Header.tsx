import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Building2, 
  ShieldCheck,
  Phone,
  Sparkles,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#0a0b0e] text-white border-b border-white/10 shadow-2xl">
      {/* Golden Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] transition-all duration-100 ease-out origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#0a0b0e]/95 backdrop-blur-md shadow-2xl py-3' : 'bg-[#0a0b0e] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo (P3 Construction Group & Real Estate in Luxury Gold & Dark) */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e6ca65] via-[#d4af37] to-[#b8932b] text-[#0a0b0e] flex items-center justify-center shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform font-black text-xl font-sans tracking-tight">
              P3
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black font-sans tracking-tight text-white uppercase">
                  P3 Construction
                </span>
                <span className="text-[#d4af37] font-serif italic text-sm">&</span>
                <span className="text-[#e6ca65] text-sm font-bold tracking-tight uppercase">
                  Real Estate
                </span>
              </div>
              <span className="block text-[9px] uppercase font-mono tracking-widest text-white/60 -mt-0.5">
                22 Mazoria • Haile Garment • Class-1 GC
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-white/80">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#d4af37] transition-colors text-white cursor-pointer font-black"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('real-estate-section')}
              className="hover:text-[#d4af37] transition-colors text-[#e6ca65] cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Real Estate</span>
            </button>
            <button 
              onClick={() => scrollToSection('services-section')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Engineering
            </button>
            <button 
              onClick={() => scrollToSection('projects-section')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('location-section')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Locations</span>
            </button>
            <button 
              onClick={() => scrollToSection('news-section')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              News
            </button>
          </nav>

          {/* Right Action Button ("Inquire / Get Quote") */}
          <div className="flex items-center gap-3">
            <button
              id="header-get-quote-btn"
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              Inquire / Quote
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-[#d4af37] hover:bg-white/5 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12151b] border-t border-white/10 px-6 py-5 shadow-2xl space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-white/90">
            <button 
              onClick={() => scrollToSection('top')}
              className="text-left py-2 border-b border-white/5 hover:text-[#d4af37] font-bold"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('real-estate-section')}
              className="text-left py-2 border-b border-white/5 text-[#e6ca65] font-bold flex items-center justify-between"
            >
              <span>Prime Real Estate Developments</span>
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
            </button>
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-left py-2 border-b border-white/5 hover:text-[#d4af37]"
            >
              Construction & Engineering
            </button>
            <button 
              onClick={() => scrollToSection('projects-section')}
              className="text-left py-2 border-b border-white/5 hover:text-[#d4af37]"
            >
              Completed & Active Projects
            </button>
            <button 
              onClick={() => scrollToSection('location-section')}
              className="text-left py-2 border-b border-white/5 hover:text-[#d4af37] flex items-center justify-between"
            >
              <span>Our Locations</span>
              <MapPin className="w-4 h-4 text-[#d4af37]" />
            </button>
            <button 
              onClick={() => scrollToSection('news-section')}
              className="text-left py-2 border-b border-white/5 hover:text-[#d4af37]"
            >
              News & Market Insights
            </button>
          </nav>

          <button
            onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
            className="w-full py-3 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl text-center shadow-lg shadow-[#d4af37]/20"
          >
            Inquire / Request Consultation
          </button>
        </div>
      )}
    </header>
  );
};
