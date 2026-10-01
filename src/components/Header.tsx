import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileCheck2,
  ChevronDown,
  Calculator,
  Building2,
  HardHat,
  Compass
} from 'lucide-react';
import { useRouter, Link } from '../router';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenBrochure?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onOpenBrochure }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#0a0b0e] text-white border-b border-white/10 shadow-2xl">
      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#0a0b0e]/95 backdrop-blur-md shadow-2xl py-3' : 'bg-[#0a0b0e] py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo (P3 Construction Group & Real Estate) */}
          <Link 
            href="/"
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e6ca65] via-[#d4af37] to-[#b8932b] text-[#0a0b0e] flex items-center justify-center shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform font-black text-xl font-sans tracking-tight">
              P3
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black font-sans tracking-tight text-white uppercase">
                  P3 Construction
                </span>
                <span className="text-[#d4af37] font-serif italic text-sm">&</span>
                <span className="text-[#e6ca65] text-sm font-bold tracking-tight uppercase">
                  Real Estate
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-white/80">
            <Link 
              href="/"
              className={`transition-colors cursor-pointer ${pathname === '/' ? 'text-[#d4af37] font-black' : 'text-white/80 hover:text-[#d4af37]'}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 transition-colors cursor-pointer ${pathname.startsWith('/services') ? 'text-[#d4af37] font-black' : 'text-white/80 hover:text-[#d4af37]'}`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-[#12151b] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors text-gray-200 hover:text-amber-400"
                    >
                      <HardHat className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase">All Services Overview</div>
                        <div className="text-[10px] text-gray-400 normal-case font-normal">Class-1 GC & Engineering Hub</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/cost-estimation"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors text-gray-200 hover:text-amber-400"
                    >
                      <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase">Cost Estimation & BOQ</div>
                        <div className="text-[10px] text-gray-400 normal-case font-normal">Addis Ababa m² rates & takeoff</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/structural-engineering"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors text-gray-200 hover:text-amber-400"
                    >
                      <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase">Structural Engineering</div>
                        <div className="text-[10px] text-gray-400 normal-case font-normal">EBCS-8 seismic & ETABS design</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/turnkey-construction"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors text-gray-200 hover:text-amber-400"
                    >
                      <HardHat className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase">Turnkey Construction</div>
                        <div className="text-[10px] text-gray-400 normal-case font-normal">Class-1 GC #GC-01/ET/9824</div>
                      </div>
                    </Link>

                    <Link
                      href="/services/geotechnical-investigation"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors text-gray-200 hover:text-amber-400"
                    >
                      <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase">Geotechnical & Soils</div>
                        <div className="text-[10px] text-gray-400 normal-case font-normal">SPT tests & core drilling</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/properties"
              className={`transition-colors cursor-pointer ${pathname === '/properties' ? 'text-[#d4af37] font-black' : 'text-[#e6ca65] hover:text-[#d4af37]'}`}
            >
              Real Estate
            </Link>

            <Link 
              href="/projects"
              className={`transition-colors cursor-pointer ${pathname === '/projects' ? 'text-[#d4af37] font-black' : 'text-white/80 hover:text-[#d4af37]'}`}
            >
              Projects
            </Link>

            <Link 
              href="/contact"
              className={`transition-colors cursor-pointer ${pathname === '/contact' ? 'text-[#d4af37] font-black' : 'text-white/80 hover:text-[#d4af37]'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons ("Brochure" + "Inquire / Quote") */}
          <div className="flex items-center gap-2.5">
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/10 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Brochure</span>
              </button>
            )}

            <button
              id="header-get-quote-btn"
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] hover:from-[#d4af37] hover:to-[#a68221] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              Inquire / Quote
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-[#d4af37] hover:bg-white/5 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12151b] border-t border-white/10 px-6 py-5 shadow-2xl space-y-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2 text-sm font-medium text-white/90">
            <button 
              onClick={() => handleNavClick('/')}
              className={`text-left py-2 border-b border-white/5 hover:text-[#d4af37] ${pathname === '/' ? 'text-[#d4af37] font-bold' : ''}`}
            >
              Home
            </button>

            <button 
              onClick={() => handleNavClick('/properties')}
              className={`text-left py-2 border-b border-white/5 hover:text-[#d4af37] ${pathname === '/properties' ? 'text-[#d4af37] font-bold' : 'text-[#e6ca65]'}`}
            >
              Apartments & Real Estate
            </button>

            <button 
              onClick={() => handleNavClick('/services')}
              className={`text-left py-2 border-b border-white/5 hover:text-[#d4af37] ${pathname === '/services' ? 'text-[#d4af37] font-bold' : ''}`}
            >
              All Engineering Services
            </button>

            <div className="pl-3 py-1 space-y-1.5 border-b border-white/5 text-xs text-gray-300">
              <button 
                onClick={() => handleNavClick('/services/cost-estimation')}
                className="block py-1 hover:text-amber-400 text-left w-full"
              >
                • Cost Estimation & BOQ (Addis Ababa)
              </button>
              <button 
                onClick={() => handleNavClick('/services/structural-engineering')}
                className="block py-1 hover:text-amber-400 text-left w-full"
              >
                • Structural Engineering (EBCS-8)
              </button>
              <button 
                onClick={() => handleNavClick('/services/turnkey-construction')}
                className="block py-1 hover:text-amber-400 text-left w-full"
              >
                • Turnkey Construction (Class-1 GC)
              </button>
              <button 
                onClick={() => handleNavClick('/services/geotechnical-investigation')}
                className="block py-1 hover:text-amber-400 text-left w-full"
              >
                • Geotechnical Investigation
              </button>
            </div>

            <button 
              onClick={() => handleNavClick('/projects')}
              className={`text-left py-2 border-b border-white/5 hover:text-[#d4af37] ${pathname === '/projects' ? 'text-[#d4af37] font-bold' : ''}`}
            >
              Projects Portfolio
            </button>

            <button 
              onClick={() => handleNavClick('/contact')}
              className={`text-left py-2 border-b border-white/5 hover:text-[#d4af37] ${pathname === '/contact' ? 'text-[#d4af37] font-bold' : ''}`}
            >
              Contact Dual Offices (22 & Haile Garment)
            </button>
          </nav>

          <div className="pt-2 space-y-2">
            {onOpenBrochure && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBrochure(); }}
                className="w-full py-2.5 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-1.5"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Download 2026 Portfolio PDF</span>
              </button>
            )}

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full py-3 bg-gradient-to-r from-[#e6ca65] via-[#d4af37] to-[#b8932b] text-[#0a0b0e] font-black text-xs uppercase tracking-wider rounded-xl text-center shadow-lg shadow-[#d4af37]/20"
            >
              Inquire / Request Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
