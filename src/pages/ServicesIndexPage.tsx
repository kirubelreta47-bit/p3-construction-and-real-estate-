import React from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  DraftingCompass, 
  Building2, 
  Drill, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  PhoneCall,
  FileCheck
} from 'lucide-react';
import { useSEO, Link } from '../router';
import { COMPANY_INFO } from '../data';

import { BUSINESS_CONFIG } from '../config/business';
import { SITE_URL } from '../config/site';

interface ServicesIndexPageProps {
  onOpenQuote?: (service?: string) => void;
  onOpenBrochure?: () => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onOpenQuote, onOpenBrochure }) => {
  useSEO({
    title: 'Construction Services Addis Ababa | P3 Group',
    description: 'Class-1 general contracting, structural engineering, BOQ estimation, and soil investigation services across Addis Ababa and greater Ethiopia.',
    canonicalPath: '/services',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': `${BUSINESS_CONFIG.legalName} Engineering Services`,
      'url': `${SITE_URL}/services`,
      'telephone': BUSINESS_CONFIG.primaryPhone,
      'email': BUSINESS_CONFIG.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': BUSINESS_CONFIG.offices[0].streetAddress,
        'addressLocality': BUSINESS_CONFIG.offices[0].locality,
        'addressRegion': BUSINESS_CONFIG.offices[0].region,
        'postalCode': BUSINESS_CONFIG.offices[0].postalCode,
        'addressCountry': BUSINESS_CONFIG.offices[0].country
      }
    }
  });

  const services = [
    {
      id: 'cost-estimation',
      title: 'Construction Cost Estimation & BOQ',
      href: '/services/cost-estimation',
      icon: Calculator,
      tag: 'Quantity Surveying',
      summary: 'Accurate cost per m² forecasting, itemized Bill of Quantities (BOQ), material market price index tracking, and cash-flow milestone modeling.',
      highlights: ['MoWUD Standard BOQ Preparation', 'Current 2026 Material Price Index', 'Value Engineering Cost Optimization']
    },
    {
      id: 'structural-engineering',
      title: 'Structural Engineering & Seismic Design',
      href: '/services/structural-engineering',
      icon: DraftingCompass,
      tag: 'Seismic & EBCS-8',
      summary: 'Advanced ETABS finite element dynamic modeling, post-tensioned floor slabs for wide clear spans, and certified municipal permit calculation books.',
      highlights: ['EBCS-8 Rift Valley Seismic Dual Frames', 'Post-Tensioned Slabs up to 12m', 'Municipal Permit Stamped Approvals']
    },
    {
      id: 'turnkey-construction',
      title: 'Turnkey Building General Contracting',
      href: '/services/turnkey-construction',
      icon: Building2,
      tag: 'Class-1 GC (#GC-01/ET/9824)',
      summary: 'Full-cycle commercial and residential high-rise building execution. Heavy plant equipment, batch-tested C35/45 concrete, and FIDIC supervision.',
      highlights: ['MoWUD Class-1 General Contractor', 'In-House Tower Cranes & Boom Pumps', '10-Year Decennial Structural Warranty']
    },
    {
      id: 'geotechnical-investigation',
      title: 'Geotechnical Soil Investigation & Core Drilling',
      href: '/services/geotechnical-investigation',
      icon: Drill,
      tag: 'Soil Testing',
      summary: 'Rotary diamond core drilling down to basalt rock, Standard Penetration Tests (SPT), black cotton soil mitigation, and deep bored piling design.',
      highlights: ['Rotary Core Drilling up to 40m', 'SPT Soil Bearing Capacity Log', 'Deep Piling vs. Raft Foundation Modeling']
    }
  ];

  return (
    <article className="min-h-screen bg-[#0a0b0e] text-white pt-10 pb-20">
      
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <ol className="flex items-center gap-2 text-xs font-mono text-white/50">
          <li>
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li className="text-[#e6ca65] font-bold">Services</li>
        </ol>
      </nav>

      {/* 2. Hero Header with Single H1 */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Class-1 Capabilities in Addis Ababa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white uppercase leading-[1.08]">
            Construction Engineering Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              in Addis Ababa
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
            Providing institutional property developers, corporate investors, and diaspora clients with full-lifecycle construction advisory, certified structural engineering, and Class-1 general contracting.
          </p>
        </div>
      </header>

      {/* 3. 4-Service Showcase Grid with Dedicated Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div 
                key={svc.id}
                className="p-8 rounded-2xl bg-[#12151b] border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded font-bold">
                      {svc.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0a0b0e] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-sans text-white group-hover:text-[#d4af37] transition-colors">
                    {svc.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {svc.summary}
                  </p>

                  <ul className="text-xs text-white/80 space-y-1.5 pt-2 border-t border-white/5">
                    {svc.highlights.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e6ca65] hover:text-white transition-colors"
                  >
                    <span>Read Full Service Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenQuote(svc.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#d4af37] text-white hover:text-[#0a0b0e] text-xs font-bold transition-colors cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Footer CTA */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#12151b] to-[#181c24] border border-[#d4af37]/30 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black font-sans text-white uppercase">
            Start Your Project with P3 Engineering
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            Our multi-disciplinary team is ready to consult on your residential or commercial project anywhere in Addis Ababa.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote && onOpenQuote('General Engineering Consultation')}
              className="px-8 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Engineering Consultation
            </button>

            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 hover:border-[#d4af37]/50 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Download 2026 Profile (PDF)</span>
              </button>
            )}
          </div>
        </div>
      </footer>

    </article>
  );
};
