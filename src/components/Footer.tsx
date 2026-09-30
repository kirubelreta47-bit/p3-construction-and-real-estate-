import React from 'react';
import { 
  HardHat, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Building2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050608] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e6ca65] via-[#d4af37] to-[#b8932b] text-[#0a0b0e] flex items-center justify-center font-black text-xl shadow-lg shadow-[#d4af37]/20">
                P3
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black font-sans uppercase tracking-tight text-white">
                    P3 Construction
                  </span>
                  <span className="text-[#d4af37] font-serif italic text-sm">&</span>
                  <span className="text-[#e6ca65] text-sm font-bold uppercase">
                    Real Estate
                  </span>
                </div>
                <span className="block text-[9px] uppercase font-mono tracking-widest text-white/60 -mt-0.5">
                  Class-1 GC & Luxury Real Estate
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Delivering high-rise engineering excellence, turn-key general contracting, and prime residential developments with 100% legal title deed protection across Addis Ababa.
            </p>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5 inline-flex items-center gap-2 text-xs font-mono text-[#d4af37]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>MoWUD License: GC-01/ET/9824</span>
            </div>
          </div>

          {/* Column 2: Dual Office Locations (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] font-mono">
              Our Active Sites in Addis Ababa
            </h4>

            <div className="space-y-4 text-xs">
              {/* Site 1 */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-xs block flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>22 Mazoria Executive & Sales HQ</span>
                </span>
                <p className="text-white/60 text-[11px] leading-relaxed">
                  P3 Plaza, 4th Floor, 22 Mazoria (Beside Gollagul Tower), Addis Ababa
                </p>
                <p className="text-[#d4af37] font-mono text-[11px]">
                  Direct: +251 11 661 4455
                </p>
              </div>

              {/* Site 2 */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-xs block flex items-center gap-1.5">
                  <HardHat className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Haile Garment Operations & Precast Yard</span>
                </span>
                <p className="text-white/60 text-[11px] leading-relaxed">
                  Haile Garment - CDC, WPQM+8H2, Addis Ababa
                </p>
                <p className="text-[#d4af37] font-mono text-[11px]">
                  Site Desk: +251 91 123 7890
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation & Inquiries (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] font-mono">
              Quick Links & Inquiries
            </h4>

            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-white/80">
              <button 
                onClick={() => scrollToSection('top')}
                className="hover:text-[#d4af37] transition-colors text-left py-1"
              >
                • Home
              </button>
              <button 
                onClick={() => scrollToSection('real-estate-section')}
                className="hover:text-[#d4af37] transition-colors text-left py-1 text-[#e6ca65] font-bold"
              >
                • Real Estate
              </button>
              <button 
                onClick={() => scrollToSection('services-section')}
                className="hover:text-[#d4af37] transition-colors text-left py-1"
              >
                • Construction Services
              </button>
              <button 
                onClick={() => scrollToSection('projects-section')}
                className="hover:text-[#d4af37] transition-colors text-left py-1"
              >
                • Project Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('location-section')}
                className="hover:text-[#d4af37] transition-colors text-left py-1"
              >
                • Dual Locations
              </button>
              <button 
                onClick={() => scrollToSection('news-section')}
                className="hover:text-[#d4af37] transition-colors text-left py-1"
              >
                • News & Insights
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full py-3 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 cursor-pointer text-center"
              >
                Request Property Viewing / Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
          <div>
            © {new Date().getFullYear()} P3 Construction Group & Real Estate Development. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <span>22 Mazoria HQ</span>
            <span>•</span>
            <span>Haile Garment Site</span>
            <span>•</span>
            <span>MoWUD Class-1 GC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
