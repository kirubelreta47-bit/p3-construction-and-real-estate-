import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  Sparkles,
  Phone,
  Check,
  FileCheck,
  Award,
  Coins,
  Compass,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { REAL_ESTATE_PROPERTIES, COMPANY_INFO } from '../data';
import { RealEstateProperty } from '../types';

interface RealEstateSectionProps {
  onSelectProperty: (property: RealEstateProperty) => void;
  onOpenInquiry: (propertyTitle?: string) => void;
}

type PropertyCategory = 'ALL' | 'RESIDENTIAL' | 'PENTHOUSE' | 'COMMERCIAL';

export const RealEstateSection: React.FC<RealEstateSectionProps> = ({
  onSelectProperty,
  onOpenInquiry
}) => {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('ALL');
  const [activeSiteZone, setActiveSiteZone] = useState<string>('ALL');
  const [expandedCardIds, setExpandedCardIds] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setExpandedCardIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories: PropertyCategory[] = ['ALL', 'RESIDENTIAL', 'PENTHOUSE', 'COMMERCIAL'];

  const filteredProperties = REAL_ESTATE_PROPERTIES.filter(prop => {
    const matchCategory = activeCategory === 'ALL' || prop.category === activeCategory;
    const matchZone = activeSiteZone === 'ALL' || prop.siteZone === activeSiteZone;
    return matchCategory && matchZone;
  });

  return (
    <section id="real-estate-section" className="py-20 sm:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>PREMIER REAL ESTATE DEVELOPMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-white">
            Premier Luxury Residences & <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              Commercial Landmarks
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Direct developer sales with 100% legal title deed guarantees (Yekartab Bet), high-yield rental returns, and Class-1 engineering construction.
          </p>
        </motion.div>

        {/* Filter Categories & Site Zone Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#d4af37] text-[#0a0b0e] shadow-lg shadow-[#d4af37]/20 scale-105 font-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Zone Filter Switcher */}
          <div className="flex items-center gap-2 bg-black/60 p-1 rounded-xl border border-white/10 text-xs">
            <span className="text-[11px] font-mono text-white/60 pl-2">Filter Location:</span>
            {['ALL', '22 Mazoria', 'Haile Garment'].map((zone) => (
              <button
                key={zone}
                onClick={() => setActiveSiteZone(zone)}
                className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  activeSiteZone === zone
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProperties.map((prop, idx) => {
              const isExpanded = !!expandedCardIds[prop.id];

              return (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative bg-[#12151b] rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4af37]/60 shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 flex flex-col justify-between"
                >
                {/* Top Image & Floating Badges */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-black">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-black/60" />

                  {/* Top Status Tag */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="bg-[#d4af37] text-[#0a0b0e] text-[10px] font-black font-mono px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                      {prop.status}
                    </span>
                    <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/15">
                      {prop.category}
                    </span>
                  </div>

                  {/* Site Zone Pill */}
                  <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md text-[#d4af37] text-[11px] font-bold font-mono px-3 py-1 rounded-lg border border-[#d4af37]/30 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    <span>{prop.siteZone}</span>
                  </div>

                  {/* Price Tag Overlay at bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-white/60 uppercase block">Starting Price</span>
                      <span className="text-lg sm:text-xl font-black text-[#d4af37] font-sans tracking-tight">
                        {prop.price}
                      </span>
                    </div>
                    {prop.priceUsd && (
                      <span className="text-xs text-white/90 font-mono bg-black/60 px-2 py-0.5 rounded border border-white/10">
                        {prop.priceUsd}
                      </span>
                    )}
                  </div>
                </div>

                {/* Compact Card Content Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-sans text-white group-hover:text-[#d4af37] transition-colors line-clamp-1">
                      {prop.title}
                    </h3>
                    <div className="text-[11px] text-white/60 flex items-center gap-1 font-mono mt-1">
                      <MapPin className="w-3 h-3 text-[#d4af37] shrink-0" />
                      <span className="truncate">{prop.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons: Details Toggle & Inquire */}
                  <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                    <button
                      onClick={() => toggleDetails(prop.id)}
                      className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                        isExpanded
                          ? 'bg-[#d4af37]/15 border-[#d4af37]/50 text-[#d4af37]'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
                      }`}
                    >
                      <Info className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{isExpanded ? 'Hide Details' : 'Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#d4af37]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-white/50" />
                      )}
                    </button>

                    <button
                      onClick={() => onOpenInquiry(prop.title)}
                      className="flex-1 py-2 px-3 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#d4af37]/20"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Expandable Details Container: Revealed Only When 'Details' is Clicked */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-3 border-t border-white/10 space-y-3 overflow-hidden"
                      >
                        <p className="text-xs text-white/70 leading-relaxed">
                          {prop.tagline}
                        </p>

                        {/* 3-Column Metrics Specs Bar */}
                        <div className="grid grid-cols-3 gap-1.5 py-2.5 px-2.5 bg-black/60 rounded-xl border border-white/5 text-center text-xs">
                          <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center gap-1 text-white/60 mb-0.5">
                              <Bed className="w-3 h-3 text-[#d4af37]" />
                              <span className="text-[9px] uppercase font-mono">Beds</span>
                            </div>
                            <span className="font-bold text-white text-[11px] truncate w-full">{prop.bedrooms}</span>
                          </div>

                          <div className="flex flex-col items-center justify-center border-x border-white/10">
                            <div className="flex items-center gap-1 text-white/60 mb-0.5">
                              <Maximize2 className="w-3 h-3 text-[#d4af37]" />
                              <span className="text-[9px] uppercase font-mono">Area</span>
                            </div>
                            <span className="font-bold text-white text-[11px] truncate w-full">{prop.area}</span>
                          </div>

                          <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center gap-1 text-white/60 mb-0.5">
                              <Calendar className="w-3 h-3 text-[#d4af37]" />
                              <span className="text-[9px] uppercase font-mono">Handover</span>
                            </div>
                            <span className="font-bold text-[#d4af37] text-[11px] truncate w-full">{prop.handover}</span>
                          </div>
                        </div>

                        {/* Key Amenities */}
                        <div className="space-y-1 pt-1">
                          {prop.amenities.slice(0, 2).map((amenity, aIdx) => (
                            <div key={aIdx} className="flex items-center gap-2 text-[11px] text-white/80 font-medium">
                              <Check className="w-3 h-3 text-[#d4af37]" />
                              <span className="truncate">{amenity}</span>
                            </div>
                          ))}
                        </div>

                        {/* Open Full Dossier & Floor Plans Modal */}
                        <button
                          onClick={() => onSelectProperty(prop)}
                          className="w-full py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/15"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>View Full Dossier & Plans</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>

        {/* INTEGRATED MOWUD CLASS-1 CREDENTIALS & INVESTOR PROTECTION BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#12151b] rounded-3xl p-8 sm:p-10 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Credential Title & License */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-bold font-mono">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>OFFICIAL DEVELOPER & CONTRACTOR ACCREDITATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-sans text-white">
                MoWUD Class-1 Licensed Contractor & <br />
                <span className="text-[#d4af37]">Guaranteed Legal Title Deed</span>
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Every residential apartment and commercial office by <strong className="text-white">P3 Construction Group</strong> is backed by complete legal municipal approvals, verified escrow account milestones, and individualized Title Deed (<span className="text-[#d4af37] font-mono">የካርታ ባለቤትነት</span>) transfer directly into your name.
              </p>

              {/* 4 Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-black/50 rounded-xl border border-white/5">
                  <span className="block text-[10px] font-mono text-white/60 uppercase">License</span>
                  <span className="text-xs font-bold text-[#d4af37]">MoWUD GC-01</span>
                </div>
                <div className="p-3 bg-black/50 rounded-xl border border-white/5">
                  <span className="block text-[10px] font-mono text-white/60 uppercase">Title Deed</span>
                  <span className="text-xs font-bold text-white">100% Guaranteed</span>
                </div>
                <div className="p-3 bg-black/50 rounded-xl border border-white/5">
                  <span className="block text-[10px] font-mono text-white/60 uppercase">Warranty</span>
                  <span className="text-xs font-bold text-white">10-Year Decennial</span>
                </div>
                <div className="p-3 bg-black/50 rounded-xl border border-white/5">
                  <span className="block text-[10px] font-mono text-white/60 uppercase">Seismic</span>
                  <span className="text-xs font-bold text-[#d4af37]">EBCS-8 Zone 4</span>
                </div>
              </div>
            </div>

            {/* Right: Direct Consultation CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end space-y-4">
              <div className="w-full sm:max-w-xs bg-black/70 p-5 rounded-2xl border border-[#d4af37]/30 text-left space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#d4af37] text-[#0a0b0e] flex items-center justify-center font-bold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/60 font-mono block">Speak to Sales Director</span>
                    <span className="text-xs font-bold text-white font-mono">{COMPANY_INFO.phone1}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry()}
                  className="w-full py-3 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 cursor-pointer text-center"
                >
                  Book Private Site Tour
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
