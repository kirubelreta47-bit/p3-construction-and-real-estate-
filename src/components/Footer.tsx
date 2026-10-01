import React from 'react';
import { 
  Building2, 
  HardHat, 
  ShieldCheck, 
  MessageCircle, 
  FileCheck2,
  Mail,
  Calculator,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { Link } from '../router';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenBrochure?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenBrochure }) => {
  return (
    <footer className="bg-[#07080a] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Glow in Footer Corner */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top 3-Column Luxury Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & MoWUD License (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e6ca65] via-[#d4af37] to-[#b8932b] text-[#0a0b0e] flex items-center justify-center font-black text-xl font-sans shadow-lg shadow-[#d4af37]/20">
                P3
              </div>
              <div>
                <span className="text-lg font-black font-sans tracking-tight uppercase text-white block">
                  P3 Construction
                </span>
                <span className="text-xs text-[#d4af37] font-mono tracking-wider uppercase block">
                  & Real Estate Development
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Delivering high-rise engineering excellence, turn-key general contracting, and prime residential developments with 100% legal title deed protection across Addis Ababa, Ethiopia.
            </p>

            <div className="space-y-2">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 inline-flex items-center gap-2 text-xs font-mono text-[#d4af37]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>MoWUD License: GC-01/ET/9824</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://wa.me/251911237890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>

                {onOpenBrochure && (
                  <button
                    onClick={onOpenBrochure}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileCheck2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>2026 Profile PDF</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Dual Office Locations (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] font-mono">
              Dual Operational Hubs in Addis Ababa
            </h3>

            <div className="space-y-4 text-xs">
              {/* Site 1 */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-xs flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>22 Mazoria Executive & Sales HQ</span>
                </span>
                <p className="text-white/60 text-[11px] leading-relaxed">
                  P3 Plaza, 4th Floor, 22 Mazoria (Beside Gollagul Tower), Addis Ababa
                </p>
                <div className="flex items-center justify-between text-[11px] pt-1">
                  <a href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, '')}`} className="text-[#d4af37] font-mono hover:underline">
                    {COMPANY_INFO.phone1}
                  </a>
                  <span className="text-white/40 font-mono">Mon–Sat: 8:00 AM – 6:30 PM</span>
                </div>
              </div>

              {/* Site 2 */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-xs flex items-center gap-1.5">
                  <HardHat className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Haile Garment Operations & Precast Yard</span>
                </span>
                <p className="text-white/60 text-[11px] leading-relaxed">
                  Haile Garment - CDC, WPQM+8H2, Addis Ababa
                </p>
                <div className="flex items-center justify-between text-[11px] pt-1">
                  <a href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, '')}`} className="text-[#d4af37] font-mono hover:underline">
                    {COMPANY_INFO.phone2}
                  </a>
                  <span className="text-white/40 font-mono">Field: 7:30 AM – 6:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/70">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation & Services (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] font-mono">
              Services & Portfolio Directory
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-white/80">
              <Link 
                href="/"
                className="hover:text-[#d4af37] transition-colors py-1 block"
              >
                • Home Overview
              </Link>
              <Link 
                href="/properties"
                className="hover:text-[#d4af37] text-[#e6ca65] font-bold transition-colors py-1 block"
              >
                • Real Estate
              </Link>
              <Link 
                href="/services"
                className="hover:text-[#d4af37] transition-colors py-1 block"
              >
                • All Services
              </Link>
              <Link 
                href="/services/cost-estimation"
                className="hover:text-[#d4af37] transition-colors py-1 block"
              >
                • Cost Estimation
              </Link>
              <Link 
                href="/services/structural-engineering"
                className="hover:text-[#d4af37] transition-colors py-1 block"
              >
                • Structural Eng.
              </Link>
              <Link 
                href="/services/turnkey-construction"
                className="hover:text-[#d4af37] transition-colors py-1 block"
              >
                • Turnkey GC
              </Link>
              <Link 
                href="/services/geotechnical-investigation"
                className="hover:text-[#d4af37] transition-colors py-1 block"
              >
                • Geotechnical
              </Link>
              <Link 
                href="/projects"
                className="hover:text-[#d4af37] transition-colors py-1 block"
              >
                • Projects Portfolio
              </Link>
              <Link 
                href="/contact"
                className="hover:text-[#d4af37] transition-colors py-1 block"
              >
                • Contact Offices
              </Link>
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
            © {new Date().getFullYear()} P3 Construction Group & Real Estate Development. All rights reserved. Addis Ababa, Ethiopia.
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <span>22 Mazoria HQ</span>
            <span>•</span>
            <span>Haile Garment Yard</span>
            <span>•</span>
            <span>MoWUD Class-1 GC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
