import React from 'react';
import { motion } from 'motion/react';
import { 
  Drill, 
  Layers, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall,
  FileText
} from 'lucide-react';
import { useSEO, Link } from '../router';
import { COMPANY_INFO } from '../data';

import { BUSINESS_CONFIG } from '../config/business';

interface GeotechnicalPageProps {
  onOpenQuote: (service?: string) => void;
}

export const GeotechnicalPage: React.FC<GeotechnicalPageProps> = ({ onOpenQuote }) => {
  useSEO({
    title: 'Geotechnical Investigation Addis Ababa | P3',
    description: 'Certified geotechnical soil investigation, core drilling, and foundation engineering in Addis Ababa, Ethiopia. SPT tests and basalt mapping.',
    canonicalPath: '/services/geotechnical-investigation',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Geotechnical Soil Investigation & Core Drilling Addis Ababa',
      'serviceType': 'Geotechnical Engineering',
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
      'description': 'Rotary core drilling, Standard Penetration Tests (SPT), expansive black cotton soil stabilization, and deep piling foundation design across Addis Ababa.'
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
          <li className="text-[#e6ca65] font-bold">Geotechnical Investigation</li>
        </ol>
      </nav>

      {/* 2. Hero Header with Single H1 */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <Drill className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Soil Investigation & Piling Rigor</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white uppercase leading-[1.08]">
            Geotechnical Soil Investigation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              in Addis Ababa
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
            Addis Ababa’s geology varies drastically from expansive black cotton clay in Bole and CMC to fractured volcanic basalt in 22 Mazoria. P3 conducts rigorous rotary core drilling, Standard Penetration Tests (SPT), and groundwater mapping to ensure zero foundation differential settlement.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuote('Geotechnical Soil Investigation')}
              className="px-6 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 cursor-pointer"
            >
              Order Soil Boring Test
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

      {/* 3. Soil Testing Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black font-sans text-white mb-8">
          Geotechnical Field & Laboratory Testing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <Drill className="w-8 h-8 text-[#d4af37] mb-2" />
            <h3 className="text-lg font-bold text-white">
              Rotary Diamond Core Drilling
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Drilling up to 40+ meters to penetrate weathered pyroclastic layers and reach competent basalt bedrock. Continuous core recovery (RQD logging).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <Layers className="w-8 h-8 text-[#d4af37] mb-2" />
            <h3 className="text-lg font-bold text-white">
              Standard Penetration Testing (SPT)
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Determining in-situ soil density, bearing capacity (N-values), and liquefaction potential at 1.5-meter drilling intervals per ASTM standards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#d4af37] mb-2" />
            <h3 className="text-lg font-bold text-white">
              Black Cotton Clay Mitigation
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Atterberg limits, swell index testing, and chemical lime stabilization solutions to protect basement slabs from high swelling pressures.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#12151b] to-[#181c24] border border-[#d4af37]/30 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black font-sans text-white uppercase">
            Require a Certified Soil Test for Permitting?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            P3's mobile drilling rigs deploy across Addis Ababa subcities. Receive an official geotechnical report ready for municipal permit submission.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuote('Geotechnical Drilling & Report')}
              className="px-8 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Site Drilling Rig
            </button>
          </div>
        </div>
      </footer>

    </article>
  );
};
