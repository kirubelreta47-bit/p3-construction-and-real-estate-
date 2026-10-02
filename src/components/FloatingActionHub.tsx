import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar
} from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface FloatingActionHubProps {
  onOpenQuote: () => void;
}

export const FloatingActionHub: React.FC<FloatingActionHubProps> = ({ onOpenQuote }) => {
  const whatsappMessage = encodeURIComponent(
    "Hello P3 Construction & Real Estate, I would like to inquire about your 22 Mazoria and Haile Garment developments."
  );
  const whatsappUrl = `https://wa.me/251911237890?text=${whatsappMessage}`;
  const phoneTel = `tel:${COMPANY_INFO.phone1.replace(/\s+/g, '')}`;

  return (
    <aside 
      aria-label="Direct contact options"
      className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-2.5"
    >
      {/* 1. Direct WhatsApp Icon Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 transition-all duration-200 transform hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        {/* Desktop Tooltip */}
        <span className="hidden md:group-hover:block absolute right-14 bg-[#0a0b0e] text-white text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap shadow-xl">
          WhatsApp Chat
        </span>
      </a>

      {/* 2. Direct Call Icon Button */}
      <a
        href={phoneTel}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#12151b] hover:bg-[#1a1e27] border border-[#d4af37]/60 text-[#d4af37] flex items-center justify-center shadow-xl shadow-black/50 transition-all duration-200 transform hover:scale-110 active:scale-95 group relative"
        aria-label={`Call ${COMPANY_INFO.phone1}`}
        title={`Call ${COMPANY_INFO.phone1}`}
      >
        <Phone className="w-4 h-4" />
        {/* Desktop Tooltip */}
        <span className="hidden md:group-hover:block absolute right-14 bg-[#0a0b0e] text-[#e6ca65] text-xs font-mono font-bold px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap shadow-xl">
          {COMPANY_INFO.phone1}
        </span>
      </a>

      {/* 3. Quick Booking / Quote Icon Button */}
      <button
        onClick={onOpenQuote}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] flex items-center justify-center shadow-xl shadow-[#d4af37]/25 transition-all duration-200 transform hover:scale-110 active:scale-95 group relative cursor-pointer"
        aria-label="Book Consultation / Get Quote"
        title="Book Consultation / Get Quote"
      >
        <Calendar className="w-4 h-4 text-[#0a0b0e]" />
        {/* Desktop Tooltip */}
        <span className="hidden md:group-hover:block absolute right-14 bg-[#0a0b0e] text-white text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap shadow-xl">
          Book Consultation / Quote
        </span>
      </button>
    </aside>
  );
};
