import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { CostEstimationPage } from './pages/CostEstimationPage';
import { StructuralEngineeringPage } from './pages/StructuralEngineeringPage';
import { TurnkeyConstructionPage } from './pages/TurnkeyConstructionPage';
import { GeotechnicalPage } from './pages/GeotechnicalPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Shared Modals & Floating Hub
import { QuoteModal } from './components/QuoteModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { DownloadBrochureModal } from './components/DownloadBrochureModal';
import { FloatingActionHub } from './components/FloatingActionHub';

import { ProjectItem, NewsArticle, RealEstateProperty } from './types';

function AppContent() {
  const { pathname } = useRouter();

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<RealEstateProperty | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledTypology, setPrefilledTypology] = useState<string | undefined>(undefined);

  const handleOpenQuoteWithService = (serviceTitle?: string, typology?: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledTypology(typology);
    setQuoteModalOpen(true);
  };

  const handleOpenPropertyInquiry = (propertyTitle?: string) => {
    setPrefilledTypology(propertyTitle || 'P3 Sky Tower Residences (22 Mazoria)');
    setPrefilledService('Real Estate Acquisition / Site Tour');
    setQuoteModalOpen(true);
  };

  const renderCurrentPage = () => {
    // Normalise path (strip trailing slash if not root)
    const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

    switch (normalized) {
      case '/':
        return (
          <HomePage
            onOpenQuote={handleOpenQuoteWithService}
            onOpenBrochure={() => setBrochureModalOpen(true)}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        );
      case '/services':
        return (
          <ServicesIndexPage
            onOpenQuote={(service) => handleOpenQuoteWithService(service)}
          />
        );
      case '/services/cost-estimation':
        return (
          <CostEstimationPage
            onOpenQuote={(service) => handleOpenQuoteWithService(service)}
          />
        );
      case '/services/structural-engineering':
        return (
          <StructuralEngineeringPage
            onOpenQuote={(service) => handleOpenQuoteWithService(service)}
          />
        );
      case '/services/turnkey-construction':
        return (
          <TurnkeyConstructionPage
            onOpenQuote={(service) => handleOpenQuoteWithService(service)}
          />
        );
      case '/services/geotechnical-investigation':
        return (
          <GeotechnicalPage
            onOpenQuote={(service) => handleOpenQuoteWithService(service)}
          />
        );
      case '/properties':
        return (
          <PropertiesPage
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onOpenInquiry={handleOpenPropertyInquiry}
          />
        );
      case '/projects':
        return (
          <ProjectsPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenQuote={() => handleOpenPropertyInquiry()}
          />
        );
      case '/contact':
        return (
          <ContactPage
            onOpenQuote={() => handleOpenPropertyInquiry()}
          />
        );
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0f12] text-white font-sans selection:bg-amber-400 selection:text-gray-950">
      
      {/* 1. Header (P3 Brand + Luxury Obsidian/Gold Nav + Brochure Trigger) */}
      <Header
        onOpenQuote={() => handleOpenPropertyInquiry()}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* Main Page Container */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 2. Luxury Footer */}
      <Footer
        onOpenQuote={() => handleOpenPropertyInquiry()}
        onOpenBrochure={() => setBrochureModalOpen(true)}
      />

      {/* Always Visible Floating Action Hub (WhatsApp + Direct Call + Quick Tour) */}
      <FloatingActionHub
        onOpenQuote={() => handleOpenPropertyInquiry()}
      />

      {/* Interactive Modal: General Inquiry / Quote Dispatch */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={prefilledService}
        initialTypology={prefilledTypology}
      />

      {/* Interactive Modal: Download 2026 Company Portfolio & Price Guide PDF */}
      <DownloadBrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
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

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
