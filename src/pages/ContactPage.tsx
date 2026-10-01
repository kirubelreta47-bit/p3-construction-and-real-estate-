import React from 'react';
import { useSEO, Link } from '../router';
import { LocationSection } from '../components/LocationSection';
import { COMPANY_INFO } from '../data';

import { BUSINESS_CONFIG } from '../config/business';
import { SITE_URL } from '../config/site';

interface ContactPageProps {
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuote }) => {
  useSEO({
    title: 'Contact P3 Construction | Addis Ababa',
    description: 'Contact P3 Construction Group in Addis Ababa. Visit our 22 Mazoria Sales HQ or Haile Garment operations yard. Call +251 11 661 4455.',
    canonicalPath: '/contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': `${BUSINESS_CONFIG.legalName} Contact`,
      'url': `${SITE_URL}/contact`,
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

  return (
    <article className="min-h-screen bg-[#0a0b0e] text-white pt-10 pb-20">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <ol className="flex items-center gap-2 text-xs font-mono text-white/50">
          <li>
            <Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li className="text-[#e6ca65] font-bold">Contact</li>
        </ol>
      </nav>

      {/* Main Single H1 Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
          Contact Our Offices <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
            in Addis Ababa
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-white/70 max-w-xl mt-2 leading-relaxed">
          Visit our 22 Mazoria Executive & Sales Headquarters or our Haile Garment Engineering & Precast Operations Yard.
        </p>
      </header>

      {/* Location Section */}
      <LocationSection
        onOpenQuote={onOpenQuote}
      />
    </article>
  );
};
