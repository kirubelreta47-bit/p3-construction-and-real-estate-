import React from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  Truck, 
  Drill, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  Activity 
} from 'lucide-react';
import { CORE_DISCIPLINES, CoreDiscipline } from '../data';

interface CoreDisciplinesSectionProps {
  onSelectDiscipline: (serviceTitle: string) => void;
}

export const CoreDisciplinesSection: React.FC<CoreDisciplinesSectionProps> = ({
  onSelectDiscipline
}) => {
  return (
    <section id="services-section" className="py-20 sm:py-28 bg-[#12151b] text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>ENGINEERING & CONTRACTING EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight">
            Class-1 Capabilities <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              Built For Precision.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            Comprehensive geotechnical, structural, and turn-key general contracting services calibrated for prime high-rise construction in Addis Ababa.
          </p>
        </motion.div>

        {/* 3-Column Feature Cards Grid (Horizontal scroll on mobile, grid on desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 pt-2 gap-5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-8 lg:gap-10">
          {CORE_DISCIPLINES.map((discipline, idx) => (
            <motion.div
              key={discipline.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => onSelectDiscipline(discipline.linkService)}
              className="group relative bg-[#0a0b0e] rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center overflow-hidden hover:border-[#d4af37]/60 snap-center shrink-0 w-[84vw] max-w-[340px] sm:w-auto sm:max-w-none"
            >
              {/* Top Accent Line Glow on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#e6ca65] group-hover:via-[#d4af37] group-hover:to-[#b8932b] transition-all duration-300" />

              {/* Minimalist Icon Circle with Gold Accent */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#d4af37] group-hover:rotate-6 transition-all duration-300 flex items-center justify-center shadow-lg">
                  {discipline.iconType === 'floors' && (
                    <Building className="w-8 h-8 text-[#d4af37] group-hover:text-[#0a0b0e] transition-colors" />
                  )}

                  {discipline.iconType === 'rooms' && (
                    <Truck className="w-8 h-8 text-[#d4af37] group-hover:text-[#0a0b0e] transition-colors" />
                  )}

                  {discipline.iconType === 'basements' && (
                    <Drill className="w-8 h-8 text-[#d4af37] group-hover:text-[#0a0b0e] transition-colors" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                {discipline.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-xs mb-6">
                {discipline.description}
              </p>

              {/* Subfeature chips */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-auto mb-6">
                {discipline.subfeatures.map((feat, fIdx) => (
                  <span 
                    key={fIdx} 
                    className="text-[11px] font-medium bg-white/5 group-hover:bg-[#d4af37]/10 text-white/80 group-hover:text-[#d4af37] border border-white/5 group-hover:border-[#d4af37]/30 px-2.5 py-1 rounded-full transition-colors font-mono"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Hover action indicator */}
              <div className="w-full pt-4 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-white group-hover:text-[#d4af37] transition-colors">
                <span>View Full Scope</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
