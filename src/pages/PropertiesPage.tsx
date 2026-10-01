import React from 'react';
import { useSEO, Link } from '../router';
import { RealEstateSection } from '../components/RealEstateSection';
import { RealEstateProperty } from '../types';

interface PropertiesPageProps {
  onSelectProperty: (property: RealEstateProperty) => void;
  onOpenInquiry: (propertyTitle?: string) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  onSelectProperty,
  onOpenInquiry
}) => {
  useSEO({
    title: 'Apartments For Sale Addis Ababa | P3 Real Estate',
    description: 'Luxury apartments, penthouses and commercial spaces for sale in 22 Mazoria and Haile Garment, Addis Ababa. 100% legal title deeds guaranteed.',
    canonicalPath: '/properties',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      'name': 'P3 Real Estate Development Addis Ababa',
      'telephone': '+251-11-661-4455',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '22 Mazoria, P3 Plaza, 4th Floor',
        'addressLocality': 'Addis Ababa',
        'addressCountry': 'ET'
      },
      'priceRange': 'ETB 9,500,000 - 29,000,000'
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
    </article>
  );
};
