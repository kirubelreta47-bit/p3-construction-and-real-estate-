import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileCheck2, 
  Award, 
  Lock, 
  PhoneCall, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface TrustCredentialsBarProps {
  onOpenQuote: () => void;
  onOpenBrochure?: () => void;
}

export const TrustCredentialsBar: React.FC<TrustCredentialsBarProps> = ({ 
  onOpenQuote,
  onOpenBrochure 
}) => {
  return (
    <section className="bg-[#0e1117] border-y border-[#d4af37]/20 relative z-20 shadow-xl">
      {/* Golden subtle top gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Left: Official Ethiopian Ministry License & Amharic Title */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-[#e6ca65]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>MoWUD Class-1 GC #GC-01/ET/9824</span>
            </div>

            <div className="text-xs text-white/80">
              <span className="font-bold text-white">100% Legal Title Deed (የካርታ ቤት)</span>
              <span className="hidden sm:inline text-white/40 mx-2">•</span>
              <span className="text-white/60 hidden sm:inline">Bank Escrow Protected</span>
            </div>

            <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-[#d4af37]/90 bg-black/40 px-2.5 py-1 rounded border border-white/5 font-sans">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span>የደረጃ 1 ጠቅላይ ስራ ተቋራጭ እና የሪል እስቴት አልሚ</span>
            </div>
          </div>

          {/* Right: Quick Action Buttons (Brochure PDF & Direct Call) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/10 text-xs font-bold transition-colors cursor-pointer"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>2026 Profile PDF</span>
              </button>
            )}

            <a
              href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-white/90 hover:text-[#d4af37] border border-white/10 text-xs font-mono font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-[#d4af37]/20 cursor-pointer"
            >
              Book Site Tour
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
