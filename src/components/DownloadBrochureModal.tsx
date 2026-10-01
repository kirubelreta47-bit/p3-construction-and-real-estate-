import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  FileText, 
  Download, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface DownloadBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadBrochureModal: React.FC<DownloadBrochureModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [interest, setInterest] = useState('22 Mazoria Sky Tower');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger simulated brochure download
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob([
        `P3 CONSTRUCTION GROUP & REAL ESTATE DEVELOPMENT - 2026 OFFICIAL DOSSIER\n\n` +
        `MoWUD Class-1 General Contractor #GC-01/ET/9824\n` +
        `Headquarters: 22 Mazoria, P3 Plaza, 4th Floor, Addis Ababa\n` +
        `Phone: ${COMPANY_INFO.phone1} | ${COMPANY_INFO.phone2}\n` +
        `Email: ${COMPANY_INFO.email}\n\n` +
        `FEATURED DEVELOPMENTS:\n` +
        `1. P3 Sky Tower Residences (22 Mazoria) - From ETB 14,800,000 / $115,000 USD (Q4 2026)\n` +
        `2. P3 Heights Executive Complex (Haile Garment) - From ETB 9,500,000 / $75,000 USD (Q2 2026)\n` +
        `3. The Crown Signature Penthouses (22 Mazoria) - From ETB 29,000,000 / $225,000 USD\n\n` +
        `TITLE DEED GUARANTEE: 100% Individual Title Deed (Yekartab Bet) registered with Addis Ababa Land Bureau.\n` +
        `ESCROW PARTNERS: Commercial Bank of Ethiopia (CBE) & Awash Bank.`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'P3-Construction-Real-Estate-2026-Portfolio-Dossier.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-xl bg-[#12151b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Top Gold Accent */}
        <div className="h-1 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          
          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6 space-y-2">
                <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-xs font-mono font-bold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>OFFICIAL 2026 DOSSIER & BROCHURE</span>
                </div>
                <h3 className="text-2xl font-black font-sans text-white">
                  Download Company Profile & Investment Catalog
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Receive comprehensive architectural floor plans, pricing schedules, payment milestones, and MoWUD Class-1 structural specifications.
                </p>
              </div>

              {/* What's included preview */}
              <div className="bg-[#0a0b0e] p-4 rounded-xl border border-white/5 mb-6 space-y-2 text-xs">
                <span className="font-mono text-[#d4af37] uppercase tracking-wider font-bold block">
                  Included in this dossier:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>22 Mazoria & Haile Garment Plans</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Bank Escrow Milestone Schedule</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Title Deed (የካርታ ቤት) Transfer Protocol</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>MoWUD Class-1 Engineering Certs</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Dawit Bekele"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0a0b0e] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Phone or WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+251 91 123 4567 or +1 (US/Diaspora)"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0a0b0e] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0a0b0e] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="22 Mazoria Sky Tower">22 Mazoria Sky Tower Residences</option>
                    <option value="Haile Garment Heights">Haile Garment Heights Complex</option>
                    <option value="The Crown Penthouses">The Crown Signature Penthouses</option>
                    <option value="Commercial Plaza">22 Axis Commercial High-Rise</option>
                    <option value="Turnkey General Contracting">Turnkey General Contracting / Engineering</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Dossier Now</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black font-sans text-white">
                Dossier Download Initiated!
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. Your copy of the P3 2026 Corporate Portfolio is downloading. A property advisory officer will also follow up on WhatsApp / Phone ({contact}) regarding {interest}.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Close Window
              </button>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
