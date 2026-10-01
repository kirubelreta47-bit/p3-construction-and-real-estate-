import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { NEWS_ARTICLES } from '../data';
import { NewsArticle } from '../types';

interface LatestNewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const LatestNewsSection: React.FC<LatestNewsSectionProps> = ({ onSelectArticle }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <section id="news-section" className="py-20 sm:py-28 bg-[#12151b] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>INDUSTRY INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight">
            Latest News & Insights
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-2">
            Technical bulletins, Ethiopian building code updates, and geotechnical case studies from our lead engineering partners.
          </p>
        </motion.div>

        {/* 3 News Cards Grid (Horizontal scroll on mobile, grid on desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 pt-2 gap-5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 lg:gap-8">
          {NEWS_ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => onSelectArticle(article as NewsArticle)}
              className="bg-[#0a0b0e] rounded-2xl p-7 shadow-xl hover:shadow-2xl border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer group snap-center shrink-0 w-[84vw] max-w-[340px] sm:w-auto sm:max-w-none"
            >
              <div>
                {/* Gold tag pill */}
                <span className="inline-block bg-[#d4af37] text-[#0a0b0e] text-[11px] font-bold font-mono px-3.5 py-1 rounded-full mb-4 shadow-sm group-hover:bg-white group-hover:text-[#0a0b0e] transition-colors">
                  {article.tag}
                </span>

                {/* News Title */}
                <h3 className="text-base sm:text-lg font-bold font-sans text-white group-hover:text-[#d4af37] transition-colors line-clamp-2 leading-snug mb-3">
                  {article.title}
                </h3>

                {/* News Excerpt */}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Date & Action Row */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span className="font-mono text-[11px] flex items-center gap-1.5 text-white/70">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{article.date}</span>
                </span>
                <span className="font-bold text-white group-hover:text-[#d4af37] transition-colors flex items-center gap-1 font-mono">
                  <span>— MORE</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button 
            onClick={() => setActivePageIndex(0)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              activePageIndex === 0 ? 'bg-[#d4af37] w-8 shadow-sm' : 'bg-white/20 hover:bg-white/40 w-2.5'
            }`}
            aria-label="Page 1"
          />
          <button 
            onClick={() => setActivePageIndex(1)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              activePageIndex === 1 ? 'bg-[#d4af37] w-8 shadow-sm' : 'bg-white/20 hover:bg-white/40 w-2.5'
            }`}
            aria-label="Page 2"
          />
        </div>

      </div>
    </section>
  );
};
