import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Calendar, 
  ShieldCheck, 
  Check, 
  Phone, 
  ArrowRight,
  Sparkles,
  Building2,
  FileText
} from 'lucide-react';
import { RealEstateProperty } from '../types';
import { COMPANY_INFO } from '../data';

interface PropertyDetailModalProps {
  property: RealEstateProperty | null;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onInquire
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#12151b] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#d4af37]/40 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/15 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Gallery / Main Hero Image */}
            <div className="space-y-3">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={images[activeImageIndex] || property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-[#d4af37] text-[#0a0b0e] text-xs font-black font-mono px-3 py-1 rounded-full uppercase shadow-lg">
                    {property.status}
                  </span>
                  <span className="bg-black/80 backdrop-blur-md text-[#d4af37] text-xs font-mono px-3 py-1 rounded-full border border-[#d4af37]/30">
                    {property.siteZone}
                  </span>
                </div>

                {/* Price Display */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/15">
                  <span className="text-[10px] text-white/60 font-mono uppercase block">Total Acquisition Price</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-black text-[#d4af37] font-sans">{property.price}</span>
                    {property.priceUsd && (
                      <span className="text-xs text-white/90 font-mono bg-white/10 px-2 py-0.5 rounded">
                        {property.priceUsd}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#d4af37] scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] mb-1">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-sans text-white">
                {property.title}
              </h2>
              <p className="text-sm text-white/70 mt-2 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Key Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-black/50 rounded-2xl border border-white/5 text-center text-xs">
              <div>
                <span className="text-[10px] font-mono text-white/60 uppercase block">Bedrooms</span>
                <span className="font-bold text-white text-sm">{property.bedrooms}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/60 uppercase block">Bathrooms</span>
                <span className="font-bold text-white text-sm">{property.bathrooms}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/60 uppercase block">Total Area</span>
                <span className="font-bold text-white text-sm">{property.area}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/60 uppercase block">Estimated Handover</span>
                <span className="font-bold text-[#d4af37] text-sm">{property.handover}</span>
              </div>
            </div>

            {/* Amenities Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] font-mono">
                Included Features & Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.amenities.map((amenity, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white/90">
                    <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onInquire(property.title);
                }}
                className="w-full sm:flex-1 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Unit Floorplan & Private Viewing</span>
                <ArrowRight className="w-4 h-4 text-[#0a0b0e]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone1}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/15 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Sales Desk</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
