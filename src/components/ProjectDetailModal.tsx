import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Building2, Calendar, HardHat, CheckCircle2, Ruler, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuote
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        id="project-detail-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl my-auto bg-[#12151b] rounded-3xl shadow-2xl overflow-hidden border border-[#d4af37]/40 text-white"
        >
          {/* Top Banner Image with Title */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-black/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#d4af37] text-[#0a0b0e] font-black font-mono text-xs px-3 py-1 rounded-full shadow">
                {project.category}
              </span>
              <span className="bg-black/70 backdrop-blur-md text-[#d4af37] font-mono text-xs px-3 py-1 rounded-full border border-[#d4af37]/30">
                P3 DELIVERED {project.year}
              </span>
            </div>

            {/* Bottom Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6 text-white text-left">
              <h3 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#d4af37] font-mono flex items-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>{project.location}</span>
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-left">
            
            {/* Engineering Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-black/50 border border-white/10 rounded-2xl text-xs">
              <div>
                <span className="text-white/60 font-mono block">BUILT AREA</span>
                <span className="font-bold text-white text-sm">{project.area}</span>
              </div>
              <div>
                <span className="text-white/60 font-mono block">DEVELOPER / CLIENT</span>
                <span className="font-bold text-white text-sm truncate block">{project.client}</span>
              </div>
              <div>
                <span className="text-white/60 font-mono block">SCOPE</span>
                <span className="font-bold text-[#d4af37] text-sm">{project.subcategory || 'General Contracting & GC'}</span>
              </div>
              <div>
                <span className="text-white/60 font-mono block">COMPLIANCE</span>
                <span className="font-bold text-[#d4af37] text-sm">MoWUD GC-01</span>
              </div>
            </div>

            {/* Executive Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] font-mono mb-2">
                Executive Project Summary
              </h4>
              <p className="text-sm text-white/70 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] font-mono">
                Key Structural & Engineering Interventions
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Seismic ductility reinforcement detailing compliant with Ethiopian Building Code (EBCS-8) Zone-4 parameters.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>High-capacity bored friction piling and concrete slump test validation for zero differential settlement.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Precast structural components and post-tensioned slabs manufactured in P3 Haile Garment operations yard.</span>
                </div>
              </div>
            </div>

            {/* Footer Action Row */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase transition-colors"
              >
                Close Dossier
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 cursor-pointer flex items-center gap-1.5"
              >
                <span>Request Similar Project Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0a0b0e]" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
