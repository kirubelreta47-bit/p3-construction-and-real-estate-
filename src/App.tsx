import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RealEstateSection } from './components/RealEstateSection';
import { CoreDisciplinesSection } from './components/CoreDisciplinesSection';
import { SplitFeatureBanner } from './components/SplitFeatureBanner';
import { RecentProjectsGrid } from './components/RecentProjectsGrid';
import { StatsCounterBand } from './components/StatsCounterBand';
import { LatestNewsSection } from './components/LatestNewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

import { QuoteModal } from './components/QuoteModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';

import { ProjectItem, NewsArticle, RealEstateProperty } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<RealEstateProperty | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledTypology, setPrefilledTypology] = useState<string | undefined>(undefined);

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setQuoteModalOpen(true);
  };

  const handleOpenPropertyInquiry = (propertyTitle?: string) => {
    setPrefilledTypology(propertyTitle || 'P3 Sky Tower Residences (22 Mazoria)');
    setPrefilledService('Real Estate Acquisition / Site Tour');
    setQuoteModalOpen(true);
  };

  const scrollToRealEstate = () => {
    const el = document.getElementById('real-estate-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0f12] text-white font-sans selection:bg-amber-400 selection:text-gray-950">
      
      {/* 1. Header (P3 Brand + Luxury Obsidian/Gold Nav) */}
      <Header
        onOpenQuote={() => handleOpenPropertyInquiry()}
      />

      {/* Main Sections Body */}
      <main className="flex-1">
        {/* 2. Hero: "BUILDING LUXURY & ENGINEERING REALITY" + Real Engineer & Building Typology Selector */}
        <Hero
          onOpenQuote={() => handleOpenPropertyInquiry()}
          onExploreProperties={scrollToRealEstate}
        />

        {/* 3. NEW: Premier Real Estate Properties Showcase (22 Mazoria & Haile Garment + Integrated MoWUD-1 Credentials) */}
        <RealEstateSection
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onOpenInquiry={handleOpenPropertyInquiry}
        />

        {/* 4. Core Disciplines / Turnkey General Contracting, Luxury Real Estate & Engineering */}
        <CoreDisciplinesSection
          onSelectDiscipline={handleOpenQuoteWithService}
        />

        {/* 5. Split Feature Banner: "Don't Wait For anything. Build it right today!" */}
        <SplitFeatureBanner
          onOpenQuote={() => handleOpenPropertyInquiry()}
          onOpenEstimator={scrollToRealEstate}
        />

        {/* 6. Recent Projects Grid: 6-Card Bento Layout with 22 & Haile Garment Landmarks */}
        <RecentProjectsGrid
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenQuote={() => handleOpenPropertyInquiry()}
        />

        {/* 7. Stats Counter Band: 850+ Homes Delivered, ETB 6.2B Capital, 1200+ Engineers, 02 Active Sites */}
        <StatsCounterBand />

        {/* 8. Latest News & Market Insights */}
        <LatestNewsSection
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 9. Dual Locations Section: Compact Sleek 22 Mazoria & Haile Garment Hubs */}
        <LocationSection
          onOpenQuote={() => handleOpenPropertyInquiry()}
        />
      </main>

      {/* 11. Luxury Footer (22 Mazoria HQ + Haile Garment Site Operations) */}
      <Footer
        onOpenQuote={() => handleOpenPropertyInquiry()}
      />

      {/* Interactive Modal: General Inquiry / Quote Dispatch */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={prefilledService}
        initialTypology={prefilledTypology}
      />

      {/* Interactive Modal: Real Estate Property Dossier Detail */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={handleOpenPropertyInquiry}
      />

      {/* Interactive Modal: Project Engineering Dossier Detail */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => {
          setSelectedProject(null);
          handleOpenPropertyInquiry();
        }}
      />

      {/* Interactive Modal: News Article Reading Drawer */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenQuote={() => {
          setSelectedArticle(null);
          handleOpenPropertyInquiry();
        }}
      />
    </div>
  );
}
