import React from 'react';
import { useSEO, Link } from '../router';
import { RecentProjectsGrid } from '../components/RecentProjectsGrid';
import { ProjectItem } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { SITE_URL } from '../config/site';
import { ShieldCheck, Download } from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
  onOpenBrochure?: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onOpenQuote,
  onOpenBrochure
}) => {
  useSEO({
    title: 'Construction Projects Portfolio Addis Ababa | P3',
    description: 'Explore completed high-rises and active construction sites delivered by P3 Construction Group across Addis Ababa, Bole, and Nifas Silk.',
    canonicalPath: '/projects',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'GeneralContractor',
      'name': `${BUSINESS_CONFIG.legalName} - Landmark Project Portfolio`,
      'url': `${SITE_URL}/projects`,
      'telephone': BUSINESS_CONFIG.primaryPhone,
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
          <li className="text-[#e6ca65] font-bold">Projects</li>
        </ol>
      </nav>

      {/* Main Single H1 Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
          Engineering Landmarks & Projects <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3de8a] via-[#d4af37] to-[#b8932b]">
            in Addis Ababa
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-white/70 max-w-xl mt-2 leading-relaxed">
          High-rise commercial towers, multi-family residential enclaves, and precast infrastructure delivered across prime Addis Ababa corridors.
        </p>
      </header>

      {/* Projects Grid Component */}
      <RecentProjectsGrid
        onSelectProject={onSelectProject}
        onOpenQuote={onOpenQuote}
      />

      {/* 2026 Engineering Technical Portfolio Dossier */}
      {onOpenBrochure && (
        <section aria-labelledby="tech-dossier-heading" className="max-w-7xl mx-auto px-4 sm:px-8 mt-14">
          <div className="bg-gradient-to-r from-[#12151b] via-[#1a1f29] to-[#12151b] border border-[#d4af37]/35 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-mono font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Official Class-1 GC Dossier</span>
                </div>
                
                <h2 id="tech-dossier-heading" className="text-2xl sm:text-3xl font-bold font-sans text-white">
                  Download 2026 Engineering Track Record & Technical Dossier (PDF)
                </h2>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Comprehensive documentation of completed G+24 high-rise structures, certified seismic testing data under revised EBCS-8 guidelines, MoWUD licensing documentation (#GC-01/ET/9824), and batching plant capacities.
                </p>
              </div>

              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-[#d4af37]/25 hover:scale-105 transition-all shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#0a0b0e]" />
                <span>Download 2026 Technical Dossier (PDF)</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
