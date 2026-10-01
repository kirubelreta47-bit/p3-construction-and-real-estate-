import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Quote, 
  CheckCircle2
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0d0f14] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

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
            <Quote className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>CLIENT EXPERIENCES & REPUTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight">
            Trusted by Investors, <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              Diaspora & Engineers
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            Real feedback from property owners and corporate clients who chose P3 for guaranteed title deeds and uncompromising Class-1 structural standards.
          </p>
        </motion.div>

        {/* Testimonials 3-Card Grid (Horizontal scroll on mobile, grid on desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 pt-2 gap-5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-[#12151b] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between space-y-6 relative snap-center shrink-0 w-[84vw] max-w-[340px] sm:w-auto sm:max-w-none"
            >
              {/* Top Accent Icon & Star Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating || 5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                  ))}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Buyer</span>
                </span>
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic">
                "{t.quote}"
              </p>

              {/* Client Avatar & Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={`${t.name} - ${t.role}, Addis Ababa client review`}
                  width="44"
                  height="44"
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border border-[#d4af37]/40 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#e6ca65] font-medium">
                    {t.role}
                  </p>
                  <p className="text-[10px] text-white/50 font-mono">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
