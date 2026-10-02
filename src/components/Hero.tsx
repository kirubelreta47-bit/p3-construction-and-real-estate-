import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  HardHat
} from 'lucide-react';
import heroBgImage from '../assets/hero-bg.webp';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreProperties: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreProperties }) => {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center text-white overflow-hidden border-b border-white/10 bg-[#0a0b0e]"
    >
      {/* 1. Full-Bleed Background Image of Ongoing Construction Site */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgImage}
          alt="Active high-rise concrete construction site with tower cranes at sunset in Addis Ababa"
          width="1920"
          height="1080"
          fetchPriority="high"
          className="w-full h-full object-cover object-center lg:object-[center_35%] scale-100 contrast-[1.08] brightness-[0.80]"
        />

        {/* Uniform Subtle Base Darkening: Prevents the background from overpowering the content while keeping details clearly visible */}
        <div className="absolute inset-0 bg-[#0a0b0e]/45" />

        {/* Theme-Colored Shadows (Deep Obsidian #0a0b0e & Gold Highlights) */}
        {/* Left directional shadow: deep theme obsidian behind typography, fading naturally across the center */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e] via-[#0a0b0e]/90 via-35% sm:via-[#0a0b0e]/75 sm:via-55% to-transparent" />

        {/* Bottom theme shadow: blends smoothly into the #0a0b0e background of subsequent sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/70 via-20% to-transparent" />

        {/* Top subtle theme shadow under the header */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0e]/85 via-[#0a0b0e]/40 via-25% to-transparent" />

        {/* Subtle warm theme gold ambient glow matching the sunset sky */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Hero Content: Clean Words on Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 relative z-10 w-full">
        <div className="max-w-3xl flex flex-col items-start text-left space-y-6">

          {/* Primary Big Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight uppercase leading-[1.05] text-white drop-shadow-md"
          >
            Building Excellence & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              Luxury Real Estate
            </span>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/95 max-w-2xl font-normal leading-relaxed drop-shadow"
          >
            Addis Ababa’s premier Class-1 general contractor and high-end property developer. Delivering certified structural engineering, high-rise architectural landmarks, and guaranteed title deed ownership.
          </motion.p>

          {/* Action CTA Buttons (Gold & Dark/White) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              id="hero-explore-realestate-cta"
              onClick={onExploreProperties}
              className="px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl shadow-2xl shadow-[#d4af37]/30 hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-sans flex items-center gap-2"
            >
              <span>EXPLORE PROPERTIES</span>
              <ArrowRight className="w-4 h-4 text-[#0a0b0e]" />
            </button>

            <button
              id="hero-primary-cta"
              onClick={onOpenQuote}
              className="px-7 sm:px-8 py-3.5 sm:py-4 bg-black/75 hover:bg-black/95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-white/25 hover:border-[#d4af37]/70 transition-all duration-200 cursor-pointer backdrop-blur-md flex items-center gap-2 shadow-2xl"
            >
              <HardHat className="w-4 h-4 text-[#d4af37]" />
              <span>REQUEST CONSULTATION</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
