import React from 'react';
import { useSEO } from '../router';
import { Hero } from '../components/Hero';
import { RealEstateSection } from '../components/RealEstateSection';
import { CoreDisciplinesSection } from '../components/CoreDisciplinesSection';
import { ProcessSection } from '../components/ProcessSection';
import { SplitFeatureBanner } from '../components/SplitFeatureBanner';
import { RecentProjectsGrid } from '../components/RecentProjectsGrid';
import { StatsCounterBand } from '../components/StatsCounterBand';
import { LeadershipSection } from '../components/LeadershipSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { LatestNewsSection } from '../components/LatestNewsSection';
import { LocationSection } from '../components/LocationSection';

import { ProjectItem, NewsArticle, RealEstateProperty } from '../types';

import { BUSINESS_CONFIG } from '../config/business';
import { SITE_URL } from '../config/site';

interface HomePageProps {
  onOpenQuote: (serviceTitle?: string, typology?: string) => void;
  onSelectProject: (proj: ProjectItem) => void;
  onSelectProperty: (prop: RealEstateProperty) => void;
  onSelectArticle: (art: NewsArticle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuote,
  onSelectProject,
  onSelectProperty,
  onSelectArticle
}) => {
  useSEO({
    title: 'P3 Construction & Real Estate | Addis Ababa',
    description: 'Class-1 general contractor and real estate developer in Addis Ababa. Building construction, structural engineering, and apartments in 22 & Haile Garment.',
    canonicalPath: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService', 'GeneralContractor'],
      '@id': `${SITE_URL}/#organization`,
      'name': BUSINESS_CONFIG.legalName,
      'alternateName': BUSINESS_CONFIG.shortName,
      'url': `${SITE_URL}/`,
      'logo': `${SITE_URL}/favicon.svg`,
      'image': `${SITE_URL}/og-image.jpg`,
      'description': BUSINESS_CONFIG.tagline,
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
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': BUSINESS_CONFIG.offices[0].coordinates.latitude,
        'longitude': BUSINESS_CONFIG.offices[0].coordinates.longitude
      },
      'openingHoursSpecification': BUSINESS_CONFIG.standardHours.map(sh => ({
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': sh.days,
        'opens': sh.opens,
        'closes': sh.closes
      })),
      'areaServed': [
        { '@type': 'City', 'name': 'Addis Ababa' },
        { '@type': 'AdministrativeArea', 'name': 'Bole Sub-City' },
        { '@type': 'AdministrativeArea', 'name': 'Nifas Silk-Lafto Sub-City' },
        { '@type': 'Country', 'name': 'Ethiopia' }
      ],
      'priceRange': BUSINESS_CONFIG.constructionPriceRange,
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Construction & Real Estate Services in Addis Ababa',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Construction Cost Estimation & BOQ Preparation',
              'url': `${SITE_URL}/services/cost-estimation`
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Structural Engineering & Seismic EBCS-8 Design',
              'url': `${SITE_URL}/services/structural-engineering`
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Turnkey General Contracting Class-1',
              'url': `${SITE_URL}/services/turnkey-construction`
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Geotechnical Soil Investigation & Core Drilling',
              'url': `${SITE_URL}/services/geotechnical-investigation`
            }
          }
        ]
      }
    }
  });

  const scrollToRealEstate = () => {
    const el = document.getElementById('real-estate-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Hero: Single H1 "Building Excellence & Luxury Real Estate" */}
      <Hero
        onOpenQuote={() => onOpenQuote()}
        onExploreProperties={scrollToRealEstate}
      />

      {/* 2. Premier Real Estate Properties Showcase */}
      <RealEstateSection
        onSelectProperty={onSelectProperty}
        onOpenInquiry={(title) => onOpenQuote(undefined, title)}
      />

      {/* 4. Core Disciplines */}
      <CoreDisciplinesSection
        onSelectDiscipline={(discipline) => onOpenQuote(discipline)}
      />

      {/* 5. 5-Stage Process Section */}
      <ProcessSection
        onOpenQuote={() => onOpenQuote()}
      />

      {/* 6. Split Feature Banner */}
      <SplitFeatureBanner
        onOpenQuote={() => onOpenQuote()}
        onOpenEstimator={scrollToRealEstate}
      />

      {/* 7. Recent Projects Grid */}
      <RecentProjectsGrid
        onSelectProject={onSelectProject}
        onOpenQuote={() => onOpenQuote()}
      />

      {/* 8. Stats Counter Band */}
      <StatsCounterBand />

      {/* 9. Leadership Team */}
      <LeadershipSection />

      {/* 10. Client Testimonials */}
      <TestimonialsSection />

      {/* 11. Latest News & Market Insights */}
      <LatestNewsSection
        onSelectArticle={onSelectArticle}
      />

      {/* 12. Dual Locations Section */}
      <LocationSection
        onOpenQuote={() => onOpenQuote()}
      />
    </>
  );
};
