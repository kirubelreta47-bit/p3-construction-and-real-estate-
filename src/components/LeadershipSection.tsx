import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  Clock, 
  Briefcase 
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0b0e] text-white relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

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
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>ENGINEERING & LEGAL LEADERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight">
            The Minds Behind P3
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            Registered Professional Engineers, certified urban architects, and real estate conveyancing attorneys overseeing every structural beam and title deed.
          </p>
        </motion.div>

        {/* Team Grid (Horizontal scroll on mobile, grid on desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 pt-2 gap-5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-[#12151b] rounded-2xl border border-white/10 overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl flex flex-col snap-center shrink-0 w-[78vw] max-w-[280px] sm:w-auto sm:max-w-none"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} at P3 Construction Addis Ababa`}
                  width="400"
                  height="300"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-[#12151b]/40 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md border border-[#d4af37]/30 px-2.5 py-1 rounded text-[10px] font-mono text-[#e6ca65] font-bold">
                  {member.experience}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#e6ca65]">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5 text-[11px] text-white/70">
                  <div className="flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{member.credential}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                    <span className="text-white/60">{member.specialty}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
