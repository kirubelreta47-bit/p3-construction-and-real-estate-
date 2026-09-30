import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Share2, BookOpen, HardHat, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../types';

interface ArticleDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onOpenQuote
}) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div 
        id="article-detail-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl my-auto bg-[#12151b] rounded-3xl shadow-2xl overflow-hidden border border-[#d4af37]/40 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] text-[#0a0b0e]">
            <div className="flex items-center gap-2">
              <span className="bg-[#0a0b0e] text-[#d4af37] text-xs font-mono font-black px-3 py-1 rounded-full">
                {article.tag}
              </span>
              <span className="text-xs font-mono text-[#0a0b0e] font-bold">{article.date}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#0a0b0e] hover:bg-black/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-sans text-white leading-tight mb-3">
                {article.title}
              </h3>
              
              <div className="flex items-center gap-4 text-xs text-white/60 font-mono pb-4 border-b border-white/10">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="font-semibold text-white/90">{article.author || 'P3 Real Estate & Engineering Desk'}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
              {article.content ? (
                article.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))
              ) : (
                <p>{article.excerpt}</p>
              )}
            </div>

            {/* Engineering Callout */}
            <div className="p-4 bg-black/50 border-l-4 border-[#d4af37] rounded-r-xl text-xs text-white/80">
              <span className="font-bold text-[#d4af37] block mb-1 font-mono">P3 Construction Group Assurance:</span>
              <span>All properties and civil works comply with Ethiopian Building Code Standards (EBCS-EN) and Ministry of Urban Development & Construction (MoWUD Class-1 GC) regulations.</span>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase transition-colors"
              >
                Back to News
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 cursor-pointer flex items-center gap-1.5"
              >
                <span>Inquire About Insights</span>
                <ArrowRight className="w-4 h-4 text-[#0a0b0e]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
