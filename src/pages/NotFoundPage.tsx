import React from 'react';
import { useSEO, Link } from '../router';
import { ArrowLeft, Home, Building2, Calculator, HardHat, Compass, PhoneCall } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useSEO({
    title: 'Page Not Found | P3 Construction Addis Ababa',
    description: 'The requested page was not found on P3 Construction Group & Real Estate website in Addis Ababa. Explore our turnkey contracting and luxury residences.',
    canonicalPath: '/404',
    robots: 'noindex, nofollow'
  });

  return (
    <main className="min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-6">
          <span>Error 404 • Missing Blueprint</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight mb-4">
          404 - Page Not Found
        </h1>

        <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto">
          The architectural plan or URL you requested does not exist or has been relocated within our Addis Ababa development index.
        </p>

        <section aria-labelledby="quick-nav-heading" className="bg-[#12161d] border border-gray-800 rounded-2xl p-6 sm:p-8 mb-8 text-left">
          <h2 id="quick-nav-heading" className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 font-mono">
            Explore Verified Addis Ababa Services & Portfolios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-amber-400/40 text-gray-200 hover:text-amber-400 transition-colors text-sm"
            >
              <Home className="w-4 h-4 text-amber-400 shrink-0" />
              <span>P3 Home Overview</span>
            </Link>

            <Link
              href="/services"
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-amber-400/40 text-gray-200 hover:text-amber-400 transition-colors text-sm"
            >
              <HardHat className="w-4 h-4 text-amber-400 shrink-0" />
              <span>All Engineering Services</span>
            </Link>

            <Link
              href="/services/cost-estimation"
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-amber-400/40 text-gray-200 hover:text-amber-400 transition-colors text-sm"
            >
              <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Cost Estimation Calculator</span>
            </Link>

            <Link
              href="/services/structural-engineering"
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-amber-400/40 text-gray-200 hover:text-amber-400 transition-colors text-sm"
            >
              <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Structural Engineering</span>
            </Link>

            <Link
              href="/properties"
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-amber-400/40 text-gray-200 hover:text-amber-400 transition-colors text-sm"
            >
              <Compass className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Apartments For Sale</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-amber-400/40 text-gray-200 hover:text-amber-400 transition-colors text-sm"
            >
              <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Contact Headquarters</span>
            </Link>
          </div>
        </section>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-gray-950 font-semibold hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <a
            href="tel:+251911234567"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Call Advisory Desk</span>
          </a>
        </div>
      </div>
    </main>
  );
};
