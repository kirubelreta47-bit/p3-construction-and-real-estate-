import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  UserCheck, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Building,
  DraftingCompass,
  FileCheck2,
  HardHat,
  KeyRound
} from 'lucide-react';
import { PROCESS_PHASES } from '../data';
import { ProcessPhase } from '../types';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const phaseIcons = [
    DraftingCompass,
    Building,
    FileCheck2,
    HardHat,
    KeyRound
  ];

  const currentPhase: ProcessPhase = PROCESS_PHASES[activePhaseIndex] || PROCESS_PHASES[0];
  const CurrentIcon = phaseIcons[activePhaseIndex] || DraftingCompass;

  return (
    <section id="process-section" className="py-20 sm:py-28 bg-[#0a0b0e] text-white relative overflow-hidden border-t border-white/10">
      {/* Background glow and subtle grid */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>TRANSPARENT METHODOLOGY & FIDIC STANDARDS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight">
            How We Build: <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              5-Stage Quality Architecture
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Eliminating construction uncertainty. Every step is governed by strict engineering gate checks, laboratory compressive tests, and transparent legal milestone releases.
          </p>
        </motion.div>

        {/* 5-Step Process Tabs Navigation (Horizontal slide on mobile, grid on tablet/desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 pt-1 gap-3 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 mb-10">
          {PROCESS_PHASES.map((phase, idx) => {
            const Icon = phaseIcons[idx] || DraftingCompass;
            const isActive = idx === activePhaseIndex;
            return (
              <button
                key={phase.phaseNum}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between snap-center shrink-0 w-[58vw] max-w-[220px] sm:w-auto sm:max-w-none ${
                  isActive 
                    ? 'bg-[#161a22] border-[#d4af37] shadow-lg shadow-[#d4af37]/15 ring-1 ring-[#d4af37]' 
                    : 'bg-[#0f1217] border-white/10 hover:border-white/20 hover:bg-[#13161c]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-[#d4af37] text-[#0a0b0e]' : 'bg-white/10 text-white/60'
                  }`}>
                    PHASE {phase.phaseNum}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-white/40'}`} />
                </div>
                <div className="space-y-1">
                  <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-white/70'}`}>
                    {phase.name.split('&')[0]}
                  </h4>
                  <span className="text-[11px] text-[#d4af37]/80 font-mono block">
                    {phase.timeframe}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase.phaseNum}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#12151b] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Phase Summary (6 Cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-[#d4af37] uppercase tracking-wider bg-[#d4af37]/10 px-2.5 py-1 rounded">
                      PHASE {currentPhase.phaseNum} • {currentPhase.code}
                    </span>
                    <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{currentPhase.timeframe}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black font-sans text-white">
                    {currentPhase.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e6ca65] mt-1 font-medium">
                    {currentPhase.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed bg-[#0a0b0e] p-4 rounded-xl border border-white/5">
                  {currentPhase.objective}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Official Deliverables & Clearances</span>
                  </h5>
                  <div className="space-y-1.5">
                    {currentPhase.keyDeliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sign-off Authority */}
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                    <UserCheck className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-white/50 block">Sign-off Authority</span>
                    <span className="text-xs font-bold text-white">{currentPhase.signOffRole}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Gate Checks & Laboratory Standards (6 Cols) */}
              <div className="lg:col-span-6 bg-[#0a0b0e] rounded-xl p-6 border border-white/5 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Mandatory Engineering Gate Checks</span>
                </h4>
                
                <p className="text-xs text-white/60">
                  Each gate check must be signed off before construction advances to the subsequent milestone or milestone funds are disbursed.
                </p>

                <div className="space-y-3 pt-2">
                  {currentPhase.gateChecks.map((check, cIdx) => (
                    <div key={cIdx} className="p-3.5 rounded-lg bg-white/5 border border-white/5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">
                          {check.item}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                          check.criticality === 'CRITICAL' 
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            : check.criticality === 'MANDATORY'
                            ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {check.criticality}
                        </span>
                      </div>
                      <p className="text-xs text-white/70">
                        {check.requirement}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <span className="text-xs text-white/60">
                    Ready to discuss your building project?
                  </span>
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#d4af37] hover:text-[#e6ca65] transition-colors cursor-pointer"
                  >
                    <span>Request Engineering Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
