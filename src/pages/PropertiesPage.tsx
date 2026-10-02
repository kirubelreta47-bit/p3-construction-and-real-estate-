import React from 'react';
import { useSEO, Link } from '../router';
import { RealEstateSection } from '../components/RealEstateSection';
import { RealEstateProperty } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { SITE_URL } from '../config/site';
import { FileText, Download } from 'lucide-react';

interface PropertiesPageProps {
  onSelectProperty: (property: RealEstateProperty) => void;
  onOpenInquiry: (propertyTitle?: string) => void;
  onOpenBrochure?: () => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  onSelectProperty,
  onOpenInquiry,
  onOpenBrochure
}) => {
  useSEO({
    title: 'Apartments For Sale Addis Ababa | P3 Real Estate',
    description: 'Browse verified luxury apartments and penthouses for sale in 22 Mazoria and Haile Garment, Addis Ababa. Title deed (Yekartab Bet) guaranteed.',
    canonicalPath: '/properties',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      'name': `${BUSINESS_CONFIG.legalName} - Luxury Real Estate Addis Ababa`,
      'url': `${SITE_URL}/properties`,
      'telephone': BUSINESS_CONFIG.primaryPhone,
      'email': BUSINESS_CONFIG.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': BUSINESS_CONFIG.offices[0].streetAddress,
        'addressLocality': BUSINESS_CONFIG.offices[0].locality,
        'addressRegion': BUSINESS_CONFIG.offices[0].region,
        'postalCode': BUSINESS_CONFIG.offices[0].postalCode,
        'addressCountry': BUSINESS_CONFIG.offices[0].country
      },
      'priceRange': BUSINESS_CONFIG.propertyPriceRange
    }
  });

  return (
    <article className="min-h-screen bg-[#0a0b0e] text-white pt-10 pb-20">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <ol className="flex items-center gap-2 text-xs font-mono text-white/50">
          <li>
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li className="text-[#e6ca65] font-bold">Properties</li>
        </ol>
      </nav>

      {/* Main Single H1 Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
          Luxury Apartments & Real Estate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
            in Addis Ababa
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-white/70 max-w-xl mt-2 leading-relaxed">
          Direct developer sales with 100% legal title deed guarantees (Yekartab Bet / የካርታ ቤት) in 22 Mazoria and Haile Garment.
        </p>
      </header>

      {/* Properties Component */}
      <RealEstateSection
        onSelectProperty={onSelectProperty}
        onOpenInquiry={onOpenInquiry}
      />

      {/* 2026 Price List & Floor Plans PDF Resource Card */}
      {onOpenBrochure && (
        <section aria-labelledby="dossier-heading" className="max-w-7xl mx-auto px-4 sm:px-8 mt-14">
          <div className="bg-gradient-to-r from-[#12151b] via-[#1a1f29] to-[#12151b] border border-[#d4af37]/35 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-mono font-bold uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>2026 Investor & Homebuyer Dossier</span>
                </div>
                
                <h2 id="dossier-heading" className="text-2xl sm:text-3xl font-bold font-sans text-white">
                  Download 2026 Apartment Price List & Floor Plans (PDF)
                </h2>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Detailed architectural layouts (2 to 4-bedroom units, 128 – 245 m²), itemized ETB and USD price schedules, diaspora financing escrow terms (Commercial Bank of Ethiopia & Awash Bank), and title deed documentation.
                </p>
              </div>

              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-[#d4af37]/25 hover:scale-105 transition-all shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#0a0b0e]" />
                <span>Download 2026 Price Guide (PDF)</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
