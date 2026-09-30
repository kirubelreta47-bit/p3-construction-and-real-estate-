import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Building2, 
  Users, 
  Compass, 
  ShieldCheck,
  CheckCircle2,
  KeyRound,
  Sparkles
} from 'lucide-react';

interface StatItem {
  id: string;
  icon: 'units' | 'capital' | 'engineers' | 'sites';
  value: number;
  prefix?: string;
  suffix?: string;
  formatted: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    id: 'stat-units',
    icon: 'units',
    value: 850,
    suffix: '+',
    formatted: '850+',
    label: 'HOMES & UNITS DELIVERED'
  },
  {
    id: 'stat-capital',
    icon: 'capital',
    value: 6,
    prefix: 'ETB ',
    suffix: '.2B',
    formatted: 'ETB 6.2B',
    label: 'CAPITAL PORTFOLIO DEVELOPED'
  },
  {
    id: 'stat-engineers',
    icon: 'engineers',
    value: 1200,
    suffix: '+',
    formatted: '1200+',
    label: 'ENGINEERS & SITE CRAFTSMEN'
  },
  {
    id: 'stat-sites',
    icon: 'sites',
    value: 2,
    suffix: ' SITES',
    formatted: '02 SITES',
    label: '22 MAZORIA & HAILE GARMENT'
  }
];

export const StatsCounterBand: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'stat-units': 0,
    'stat-capital': 0,
    'stat-engineers': 0,
    'stat-sites': 0,
  });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const steps = 36;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const factor = progress * (2 - progress);

      setCounts({
        'stat-units': Math.floor(850 * factor),
        'stat-capital': Math.floor(6 * factor),
        'stat-engineers': Math.floor(1200 * factor),
        'stat-sites': Math.floor(2 * factor),
      });

      if (step >= steps) {
        setCounts({
          'stat-units': 850,
          'stat-capital': 6,
          'stat-engineers': 1200,
          'stat-sites': 2,
        });
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#12151b] py-10 sm:py-14 text-white overflow-hidden border-y border-white/10 shadow-2xl"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-25" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => {
            let displayString = '';
            if (stat.id === 'stat-capital') {
              displayString = `ETB ${counts[stat.id]}.2B+`;
            } else if (stat.id === 'stat-sites') {
              displayString = `0${counts[stat.id]} SITES`;
            } else {
              displayString = `${counts[stat.id]}+`;
            }

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Gold outlined icon - sleek compact size */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/60 border border-[#d4af37]/40 flex items-center justify-center mb-2.5 group-hover:bg-[#d4af37] group-hover:text-[#0a0b0e] text-[#d4af37] transition-all duration-300 shadow-md">
                  {stat.icon === 'units' && <KeyRound className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />}
                  {stat.icon === 'capital' && <Building2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />}
                  {stat.icon === 'engineers' && <Users className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />}
                  {stat.icon === 'sites' && <Compass className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />}
                </div>

                {/* Smaller, refined Numerical Count in Gold */}
                <div className="text-xl sm:text-2xl lg:text-3xl font-black font-sans tracking-tight text-[#d4af37] mb-1">
                  {displayString}
                </div>

                {/* Subtitle Label with small, balanced font */}
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/70 font-mono leading-tight max-w-[190px]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
