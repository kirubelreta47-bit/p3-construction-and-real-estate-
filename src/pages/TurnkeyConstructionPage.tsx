import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  HardHat, 
  Wrench, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall,
  Clock,
  Layers
} from 'lucide-react';
import { useSEO, Link } from '../router';
import { COMPANY_INFO } from '../data';

import { BUSINESS_CONFIG } from '../config/business';

interface TurnkeyConstructionPageProps {
  onOpenQuote: (service?: string) => void;
}

export const TurnkeyConstructionPage: React.FC<TurnkeyConstructionPageProps> = ({ onOpenQuote }) => {
  useSEO({
    title: 'Turnkey General Contractor Addis Ababa | P3',
    description: 'MoWUD Class-1 turnkey building construction in Addis Ababa. Commercial high-rises and residential towers built to FIDIC standards. Get a quote.',
    canonicalPath: '/services/turnkey-construction',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Turnkey General Contracting & Building Construction Addis Ababa',
      'serviceType': 'Turnkey General Contracting',
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
      'description': 'End-to-end Class-1 general contracting, high-rise structural execution, MEP engineering, and interior finishing under MoWUD license #GC-01/ET/9824.'
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
          <li className="text-[#e6ca65] font-bold">Turnkey General Contracting</li>
        </ol>
      </nav>

      {/* 2. Hero Header with Single H1 */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>MoWUD Class-1 Licensed (#GC-01/ET/9824)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white uppercase leading-[1.08]">
            Turnkey Building Construction <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              in Addis Ababa
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
            From deep basement excavation and piling to tower crane operations, ready-mix concrete batching, and turnkey key handover. P3 assumes single-source legal and operational accountability under international FIDIC contract standards.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuote('Turnkey General Contracting')}
              className="px-6 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 cursor-pointer"
            >
              Request Contractor Proposal
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

      {/* 3. Operational Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black font-sans text-white mb-8">
          Class-1 General Contracting Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <HardHat className="w-8 h-8 text-[#d4af37] mb-2" />
            <h3 className="text-lg font-bold text-white">
              In-House Plant & Equipment
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              We own and operate high-capacity tower cranes, mobile concrete boom pumps, deep drilling rigs, and heavy earthmoving machinery based at our Haile Garment operations yard.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <Award className="w-8 h-8 text-[#d4af37] mb-2" />
            <h3 className="text-lg font-bold text-white">
              C35/45 Ready-Mix Batching
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Every pour is batch-tested for slump and compressive crushing strength at 7 and 28 days. Strict adherence to water-cement ratios at Addis Ababa's 2,355m altitude.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#d4af37] mb-2" />
            <h3 className="text-lg font-bold text-white">
              10-Year Decennial Warranty
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Comprehensive structural warranty covering foundations, load-bearing concrete frames, and seismic joints. Full 12-month defect liability on all MEP installations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#12151b] to-[#181c24] border border-[#d4af37]/30 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black font-sans text-white uppercase">
            Planning a Commercial or Residential High-Rise?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            Partner with Ethiopia's certified Class-1 general contractor. Visit our 22 Mazoria executive office or Haile Garment branch office for a formal project assessment.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuote('Turnkey Construction Project')}
              className="px-8 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Turnkey Construction Quote
            </button>
          </div>
        </div>
      </footer>

    </article>
  );
};
