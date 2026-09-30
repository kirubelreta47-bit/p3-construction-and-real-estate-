import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowRight, Eye, MapPin, Building2, Calendar, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';

interface RecentProjectsGridProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

type FilterCategory = 'ALL' | 'BUILDINGS' | 'COMMERCIAL' | 'RESIDENTIAL' | 'INFRASTRUCTURE' | 'INTERIOR' | 'OFFICE';

export const RecentProjectsGrid: React.FC<RecentProjectsGridProps> = ({
  onSelectProject,
  onOpenQuote
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
  const [showAll, setShowAll] = useState(false);

  const categories: FilterCategory[] = [
    'ALL',
    'BUILDINGS',
    'COMMERCIAL',
    'RESIDENTIAL',
    'INFRASTRUCTURE',
    'INTERIOR',
    'OFFICE'
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects-section" className="py-20 sm:py-28 bg-[#0a0b0e] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-2">
            Selected geotechnical reviews, structural peer calculations, and on-site engineering supervisions across Addis Ababa.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase()}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0a0b0e] shadow-md scale-105 font-bold'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* 6-Card Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-[#12151b] border border-white/10 hover:border-[#d4af37]/60 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo & Overlays */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-black/50" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-[#d4af37] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-[#d4af37]/30 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Location badge */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    <span>{project.location}</span>
                  </div>

                  {/* View Details Hover Trigger */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <div className="w-11 h-11 rounded-full bg-[#d4af37] text-[#0a0b0e] flex items-center justify-center font-bold shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold font-sans text-white group-hover:text-[#d4af37] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/60 line-clamp-2 mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                    <span className="font-mono text-[11px] text-[#d4af37]">{project.subcategory || project.year}</span>
                    <span className="flex items-center gap-1 font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      <span>Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && !showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/15 transition-all cursor-pointer inline-flex items-center gap-2 hover:border-[#d4af37]/40"
            >
              <Plus className="w-4 h-4 text-[#d4af37]" />
              <span>Show All {filteredProjects.length} Projects</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
