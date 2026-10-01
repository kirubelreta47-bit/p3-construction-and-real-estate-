import React from 'react';
import { useSEO, Link } from '../router';
import { RecentProjectsGrid } from '../components/RecentProjectsGrid';
import { ProjectItem } from '../types';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onOpenQuote
}) => {
  useSEO({
    title: 'Construction Projects Portfolio Addis Ababa | P3',
    description: 'Explore completed and active high-rise building projects and engineering landmarks across Addis Ababa by Class-1 general contractor P3 Group.',
    canonicalPath: '/projects',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'GeneralContractor',
      'name': 'P3 Construction Group Projects Portfolio',
      'telephone': '+251-11-661-4455',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '22 Mazoria, P3 Plaza, 4th Floor',
        'addressLocality': 'Addis Ababa',
        'addressCountry': 'ET'
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
    </article>
  );
};
