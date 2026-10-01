import React from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  ShieldCheck, 
  Layers, 
  Activity, 
  DraftingCompass, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { useSEO, Link } from '../router';
import { COMPANY_INFO } from '../data';

import { BUSINESS_CONFIG } from '../config/business';

interface StructuralEngineeringPageProps {
  onOpenQuote: (service?: string) => void;
}

export const StructuralEngineeringPage: React.FC<StructuralEngineeringPageProps> = ({ onOpenQuote }) => {
  useSEO({
    title: 'Structural Engineering Addis Ababa | P3 Group',
    description: 'Certified structural engineering and seismic design in Addis Ababa, Ethiopia. EBCS-8 compliance, ETABS modeling, and high-rise dual frames.',
    canonicalPath: '/services/structural-engineering',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Structural Engineering & Seismic Design Addis Ababa',
      'serviceType': 'Structural Engineering',
      'provider': {
        '@type': 'GeneralContractor',
        'name': BUSINESS_CONFIG.legalName,
        'telephone': BUSINESS_CONFIG.primaryPhone,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': BUSINESS_CONFIG.offices[0].streetAddress,
          'addressLocality': BUSINESS_CONFIG.offices[0].locality,
          'addressRegion': BUSINESS_CONFIG.offices[0].region,
          'postalCode': BUSINESS_CONFIG.offices[0].postalCode,
          'addressCountry': BUSINESS_CONFIG.offices[0].country
        }
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Addis Ababa'
      },
      'description': 'Advanced finite element structural modeling, seismic dual frame engineering under revised EBCS-8 codes, and post-tensioned concrete slabs for high-rise towers in Addis Ababa.'
    }
  });

  return (
    <article className="min-h-screen bg-[#0a0b0e] text-white pt-10 pb-20">
      
      {/* 1. Breadcrumb Nav */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <ol className="flex items-center gap-2 text-xs font-mono text-white/50">
          <li>
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/services" className="hover:text-[#d4af37] transition-colors">Services</Link>
          </li>
          <li>/</li>
          <li className="text-[#e6ca65] font-bold">Structural Engineering</li>
        </ol>
      </nav>

      {/* 2. Hero Header with Single H1 */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <DraftingCompass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Seismic & Finite Element Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white uppercase leading-[1.08]">
            Structural Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              in Addis Ababa
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
            High-rise structural calculations engineered to revised Ethiopian Building Codes (EBCS-8) and Eurocodes. P3 designs robust seismic dual frames, post-tensioned floor slabs, and deep foundation systems capable of withstanding East African Rift Valley seismic stresses.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuote('Structural Engineering & Seismic Analysis')}
              className="px-6 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 cursor-pointer"
            >
              Consult Structural Engineer
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, '')}`}
              className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold rounded-xl border border-white/10 transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. Core Structural Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black font-sans text-white mb-8">
          Core Structural & Seismic Competencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-2">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              EBCS-8 Seismic Dual Frames
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Addis Ababa is classified under Seismic Zone 2/3. We engineer reinforced concrete shear walls combined with ductile moment-resisting frames to absorb horizontal lateral loads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-2">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Post-Tensioned Slabs
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Eliminate obstructive internal columns. High-strength bonded tendons provide expansive clear living spans up to 12 meters with reduced structural dead weight and floor thickness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-2">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              ETABS & SAFE 3D Modeling
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Full dynamic response spectrum analysis, P-Delta secondary effects, torsional irregularities, and wind tunnel pressure modeling before blueprint sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Municipal Approvals & Peer Review */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-[#12151b] border border-white/10 rounded-2xl p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black font-sans text-white">
            Municipal Approval & Peer Review Services
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl">
            Securing a building permit from the Addis Ababa Construction Bureau requires certified calculations signed by a registered Professional Structural Engineer (PE). P3 handles:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#0a0b0e] border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Certified Structural Calculation Book with ETABS run logs and design sheets</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0b0e] border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Independent Third-Party Peer Audits for projects exceeding 12 stories</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0b0e] border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Deep Piling and Raft Foundation structural settlement check reports</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0b0e] border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Site rebar inspection sign-offs before every critical concrete pour</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#12151b] to-[#181c24] border border-[#d4af37]/30 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black font-sans text-white uppercase">
            Have Architectural Plans Needing Structural Design?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            Our Chief Resident Structural Engineer at 22 Mazoria HQ will evaluate your floor plans for seismic safety, post-tensioning feasibility, and municipal compliance.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuote('Structural Engineering Review')}
              className="px-8 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Schedule Engineering Consultation
            </button>
          </div>
        </div>
      </footer>

    </article>
  );
};
