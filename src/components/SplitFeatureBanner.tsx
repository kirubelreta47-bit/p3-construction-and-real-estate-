import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Building2, 
  Award, 
  Clock, 
  Coins, 
  Sparkles, 
  Layers 
} from 'lucide-react';

interface SplitFeatureBannerProps {
  onOpenQuote: () => void;
  onOpenEstimator: () => void;
}

export const SplitFeatureBanner: React.FC<SplitFeatureBannerProps> = ({
  onOpenQuote,
  onOpenEstimator
}) => {
  return (
    <section id="about-section" className="py-20 sm:py-28 bg-[#0a0b0e] border-y border-white/10 relative overflow-hidden text-white">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Site Engineering Photo Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-[4/3] sm:aspect-[16/11] group bg-black">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                alt="P3 Construction Group Lead Structural Engineer on Site in Addis Ababa" 
                width="1200"
                height="825"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              {/* Floating Engineer Badge in bottom-left */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#12151b]/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-white/15 flex items-center gap-3 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d4af37] text-[#0a0b0e] flex items-center justify-center font-bold shadow-sm">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-sans">Eng. Dagnachew T. (PE)</div>
                  <div className="text-[11px] text-white/60 font-mono">Lead Structural Resident Auditor</div>
                </div>
              </motion.div>

              {/* Top Floating Badge ("CLASS 1 GC") */}
              <div className="absolute top-4 right-4 bg-[#d4af37] text-[#0a0b0e] text-xs font-bold font-mono px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>MoWUD CLASS-1</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Interactive Feature Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d4af37] font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRECISION ENGINEERING</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-sans text-white leading-tight">
                Don't Wait For anything. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
                  Build it right today!
                </span>
              </h3>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              We eliminate costly foundation settlement, structural rebar congestion, and speculative contractor delays. Our on-site resident engineers uphold the highest international FIDIC and Ethiopian Building Code standards from ground-breaking to occupancy handover.
            </p>

            {/* Value Props Interactive Cards */}
            <div className="space-y-3 pt-2">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12151b] border border-white/10 shadow-sm transition-all"
              >
                <div className="p-1.5 rounded-lg bg-[#d4af37]/15 text-[#d4af37] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white">Zero Structural Failures in 14 Years:</span>
                  <p className="text-xs text-white/60 mt-0.5">Peer-reviewed finite element models and relentless pre-pour slump testing.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12151b] border border-white/10 shadow-sm transition-all"
              >
                <div className="p-1.5 rounded-lg bg-[#d4af37]/15 text-[#d4af37] mt-0.5">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white">Average 18.4% Capital Saved:</span>
                  <p className="text-xs text-white/60 mt-0.5">Value engineering steel tonnage and auditing contractor interim payment takeoffs.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12151b] border border-white/10 shadow-sm transition-all"
              >
                <div className="p-1.5 rounded-lg bg-[#d4af37]/15 text-[#d4af37] mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white">Subsurface Geotechnical Defense:</span>
                  <p className="text-xs text-white/60 mt-0.5">Specialized black cotton clay moisture barriers and high-capacity bored friction piles.</p>
                </div>
              </motion.div>
            </div>

            {/* Golden Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                id="banner-quote-btn"
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer font-sans flex items-center gap-2"
              >
                <span>CONSULT NOW</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0a0b0e]" />
              </button>

              <button
                id="banner-estimator-btn"
                onClick={onOpenEstimator}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/15 transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>EXPLORE PROPERTIES</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
