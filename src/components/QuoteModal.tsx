import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  HardHat, 
  Building2, 
  MapPin, 
  Calendar, 
  FileText,
  Clock,
  ShieldCheck,
  Sparkles,
  Phone
} from 'lucide-react';
import { ADDIS_SUBCITIES, PROJECT_TYPOLOGIES, COMPANY_INFO } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialTypology?: string;
  initialSubcity?: string;
  initialGfa?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Real Estate Purchase & Private Site Viewing',
  initialTypology = 'P3 Sky Tower Residences (22 Mazoria)',
  initialSubcity = '22 Mazoria (Haya Hulet)',
  initialGfa = ''
}) => {
  const [formData, setFormData] = useState({
    inquiryType: 'Real Estate Purchase / Unit Viewing',
    projectName: initialTypology,
    clientName: '',
    email: '',
    phone: '',
    subcity: initialSubcity,
    preferredSite: '22 Mazoria Sales HQ',
    notes: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `P3-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <AnimatePresence>
      <div 
        id="quote-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl my-auto bg-[#12151b] rounded-3xl shadow-2xl overflow-hidden border border-[#d4af37]/40 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] text-[#0a0b0e]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0a0b0e] text-[#d4af37] rounded-xl flex items-center justify-center font-black text-lg">
                P3
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black font-sans uppercase tracking-tight">
                  Inquiry & Consultation Dispatch
                </h3>
                <p className="text-xs text-[#0a0b0e] font-bold">
                  P3 Construction Group & Real Estate Development
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-black/20 hover:bg-black/40 text-[#0a0b0e] hover:text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {submittedTicket ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#d4af37]/20 text-[#d4af37] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-sans text-white">Inquiry Registered Successfully</h4>
                <p className="text-sm text-white/70 max-w-md mx-auto">
                  Our lead executive at 22 Mazoria Headquarters has received your dossier dispatch. We will contact you within 2 business hours.
                </p>
                <div className="p-4 bg-black/60 rounded-xl border border-white/10 font-mono text-sm text-[#d4af37]">
                  Tracking Code: <span className="font-bold">{submittedTicket}</span>
                </div>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-[#d4af37] hover:bg-[#b8932b] text-[#0a0b0e] font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Inquiry Type Tabs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2 font-mono">
                    Select Inquiry Focus
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Real Estate Purchase / Unit Viewing', 'General Contracting & Engineering RFP'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`p-2.5 rounded-xl text-xs font-bold transition-all border ${
                          formData.inquiryType === type
                            ? 'bg-[#d4af37] text-[#0a0b0e] border-[#d4af37]'
                            : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1 font-mono">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ato Yohannes Bekele"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1 font-mono">
                      Direct Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+251 91 100 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1 font-mono">
                      Preferred Office Location
                    </label>
                    <select
                      value={formData.preferredSite}
                      onChange={(e) => setFormData({ ...formData, preferredSite: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="22 Mazoria Sales HQ">22 Mazoria Executive HQ (P3 Plaza)</option>
                      <option value="Haile Garment Branch Office">Haile Garment Branch Office</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-1 font-mono">
                    Project Scope / Unit Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide desired bedroom count, floor preference, investment timeline, or general contracting requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#0a0b0e]" />
                    <span>Submit Official Inquiry</span>
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
