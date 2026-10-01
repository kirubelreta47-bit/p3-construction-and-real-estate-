import React from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  FileSpreadsheet, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Coins, 
  Building2, 
  PhoneCall,
  Clock,
  Layers
} from 'lucide-react';
import { useSEO, Link } from '../router';
import { COMPANY_INFO } from '../data';

import { BUSINESS_CONFIG } from '../config/business';

interface CostEstimationPageProps {
  onOpenQuote: (service?: string) => void;
}

export const CostEstimationPage: React.FC<CostEstimationPageProps> = ({ onOpenQuote }) => {
  useSEO({
    title: 'Construction Cost Estimation Addis Ababa | P3',
    description: 'Accurate construction cost estimation, BOQ preparation, and structural budgeting in Addis Ababa, Ethiopia. Get certified MoWUD estimates.',
    canonicalPath: '/services/cost-estimation',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Construction Cost Estimation & BOQ Advisory Addis Ababa',
      'serviceType': 'Construction Cost Estimation',
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
      'description': 'Certified construction cost estimation, bill of quantities (BOQ) preparation, and quantity surveying according to Ethiopian BaTCoDA and MoWUD building guidelines.'
    }
  });

  return (
    <article className="min-h-screen bg-[#0a0b0e] text-white pt-10 pb-20">
      
      {/* 1. Breadcrumbs Header */}
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
          <li className="text-[#e6ca65] font-bold">Cost Estimation</li>
        </ol>
      </nav>

      {/* 2. Hero Section with Single H1 */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Quantity Surveying & Feasibility</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white uppercase leading-[1.08]">
            Construction Cost Estimation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
              in Addis Ababa
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
            Eliminate budget surprises before ground breaking. P3 provides certified Bill of Quantities (BOQ), unit rate analysis, and realistic material cost projections calibrated for current Addis Ababa market inflation and import tariffs.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuote('Construction Cost Estimation & BOQ')}
              className="px-6 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 cursor-pointer"
            >
              Request Cost Estimation
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

      {/* 3. Cost Per Square Meter Benchmark Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black font-sans text-white mb-3">
          Addis Ababa Construction Cost Benchmarks (2026 Index)
        </h2>
        <p className="text-xs sm:text-sm text-white/70 max-w-2xl mb-8 leading-relaxed">
          Current market rate estimations across residential, commercial, and mixed-use high-rise developments in Addis Ababa corridors including 22 Mazoria, Bole, and Haile Garment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
              Standard Residential Apartments
            </span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white">
              ETB 28,000 – 42,000 <span className="text-xs text-white/50 font-normal">/ m²</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Mid-rise multi-unit residential structures with reinforced concrete dual frame, local hollow concrete blocks (HCB), standard ceramic finishes, and domestic sanitary fixtures.
            </p>
            <ul className="text-xs text-white/80 space-y-1.5 pt-2 border-t border-white/5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>G+4 to G+8 typical typology</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>C25/30 concrete batching</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151b] border border-[#d4af37]/60 shadow-xl space-y-4 relative">
            <div className="absolute -top-3 right-4 bg-[#d4af37] text-[#0a0b0e] text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full">
              Most Requested
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
              Luxury High-Rise & Penthouses
            </span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-[#e6ca65]">
              ETB 45,000 – 68,000 <span className="text-xs text-white/50 font-normal">/ m²</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              High-rise towers (G+15 to G+25) featuring post-tensioned slabs, imported European porcelain finishes, Low-E curtain walls, double basement robotic parking, and Schindler elevators.
            </p>
            <ul className="text-xs text-white/80 space-y-1.5 pt-2 border-t border-white/5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>C35/45 high-strength concrete</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Rooftop amenities & backup power</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151b] border border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
              Grade-A Commercial Plazas
            </span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white">
              ETB 50,000 – 75,000 <span className="text-xs text-white/50 font-normal">/ m²</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Prime corporate office headquarters and banking halls with advanced Building Management Systems (BMS), high acoustic ratings, and full fire-suppression infrastructure.
            </p>
            <ul className="text-xs text-white/80 space-y-1.5 pt-2 border-t border-white/5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Heavy floor live-load tolerances</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Energy-efficient solar facade</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. What We Deliver in Every Cost Estimation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-[#12151b] border border-white/10 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-black font-sans text-white mb-6">
            Comprehensive Quantity Surveying Deliverables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-white/5 space-y-2">
                <h3 className="text-base font-bold text-[#d4af37] flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-[#d4af37]" />
                  <span>Itemized Bill of Quantities (BOQ)</span>
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Line-by-line measurement of excavation volumes, concrete m³, rebar tonnage (Apex B500B), formwork area, and MEP pipe linear meters based on MoWUD standard bidding documents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-white/5 space-y-2">
                <h3 className="text-base font-bold text-[#d4af37] flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#d4af37]" />
                  <span>Unit Rate & Market Price Breakdown</span>
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Transparent costing calculating raw materials, equipment rental (tower cranes, excavators, concrete pumps), labor productivity, and contractor overhead.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-white/5 space-y-2">
                <h3 className="text-base font-bold text-[#d4af37] flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#d4af37]" />
                  <span>Value Engineering & Material Optimization</span>
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Identifying cost-saving engineering substitutions without compromising structural integrity or EBCS-8 seismic safety.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-white/5 space-y-2">
                <h3 className="text-base font-bold text-[#d4af37] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span>Cash Flow Milestone Projections</span>
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Scheduled payment curves mapping capital expenditure to physical monthly progress milestones, ideal for bank financing (CBE, Awash Bank) and escrow monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-[#12151b] to-[#181c24] border border-[#d4af37]/30 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black font-sans text-white uppercase">
            Need an Accurate Budget for Your Building?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            Speak directly with our senior quantity surveyors at 22 Mazoria Executive HQ. Send your architectural drawings for an initial preliminary estimate.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuote('Construction Cost Estimation')}
              className="px-8 py-3.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Free Cost Consultation
            </button>
          </div>
        </div>
      </footer>

    </article>
  );
};
