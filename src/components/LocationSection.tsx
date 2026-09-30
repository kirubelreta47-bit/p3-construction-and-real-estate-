import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Phone, 
  Clock, 
  Copy, 
  Check, 
  Building2,
  HardHat,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface LocationSectionProps {
  onOpenQuote: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenQuote }) => {
  const [activeSiteIndex, setActiveSiteIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const activeSite = COMPANY_INFO.sites[activeSiteIndex] || COMPANY_INFO.sites[0];

  const handleCopyAddress = (addr: string) => {
    navigator.clipboard.writeText(addr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location-section" className="py-16 sm:py-20 bg-[#0a0b0e] text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>DUAL ADDIS ABABA LOCATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-sans text-white tracking-tight">
              Our Offices & Construction Yards
            </h2>
          </div>

          {/* Location Toggle Tabs (22 Mazoria vs Haile Garment) */}
          <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-2xl border border-white/10">
            {COMPANY_INFO.sites.map((site, sIdx) => {
              const isActive = activeSiteIndex === sIdx;
              return (
                <button
                  key={site.id}
                  onClick={() => setActiveSiteIndex(sIdx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#d4af37] text-[#0a0b0e] shadow-md font-black'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {sIdx === 0 ? <Building2 className="w-3.5 h-3.5" /> : <HardHat className="w-3.5 h-3.5" />}
                  <span>{site.area}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Dual Grid: Sleek Embedded Map + Key Office Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Compact Interactive Map Frame */}
          <motion.div 
            key={`map-${activeSite.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 relative h-[280px] sm:h-[340px] bg-black/40 shadow-xl"
          >
            <iframe
              title={`${activeSite.name} on Google Maps`}
              src={activeSite.embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Quick Action Overlay */}
            <div className="absolute top-3 right-3 z-10">
              <a
                href={activeSite.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black/90 hover:bg-black text-[#d4af37] text-xs font-bold rounded-lg border border-[#d4af37]/40 shadow-lg backdrop-blur-sm transition-all cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Google Maps</span>
              </a>
            </div>

            {/* Bottom Tag */}
            <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-xs text-white/90 font-mono">
              <span className="text-[#d4af37] font-bold">{activeSite.area}</span> • Active Addis Site
            </div>
          </motion.div>

          {/* Right: Site Details Card */}
          <motion.div 
            key={`details-${activeSite.id}`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 bg-[#12151b] rounded-2xl p-6 border border-white/10 flex flex-col justify-between shadow-xl text-left"
          >
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] font-mono block mb-1">
                  Site Profile
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-sans text-white">
                  {activeSite.name}
                </h3>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  {activeSite.address}
                </p>
                <span className="inline-block text-[11px] text-[#d4af37] font-mono mt-1 bg-[#d4af37]/10 px-2.5 py-0.5 rounded border border-[#d4af37]/20">
                  {activeSite.focus}
                </span>
              </div>

              {/* Operating Info */}
              <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-white/80">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{activeSite.hours}</span>
                </div>
                <div className="flex items-center gap-2.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span className="text-white font-bold">{activeSite.phone}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleCopyAddress(activeSite.address)}
                className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/10 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span className="text-[#d4af37] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-white/60" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={activeSite.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#d4af37]/20"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Route</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
