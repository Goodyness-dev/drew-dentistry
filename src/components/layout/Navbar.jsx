import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Navbar({ onOpenWizard, currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        if (target === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (target === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', target: '#' },
    { name: 'Services', target: 'services' },
    { name: 'Departments', target: '#departments' },
    { name: 'Doctors', target: '#doctors' },
    { name: 'Reviews', target: '#reviews' },
    { name: 'Contact', target: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_25px_rgba(20,100,110,0.06)] border-b border-slate-100' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo matching template CarePlus Medical */}
        <button 
          onClick={(e) => handleNavClick(e, '#')} 
          className="flex items-center gap-3 text-left group"
          aria-label="Drew Dentistry Home"
        >
          {/* Medical Cross Icon Squircle */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#1ea69a] to-[#128a80] flex items-center justify-center shadow-[0_4px_14px_rgba(26,150,140,0.35)] group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 10.5h-5.5V5a1.5 1.5 0 00-3 0v5.5H5a1.5 1.5 0 000 3h5.5V19a1.5 1.5 0 003 0v-5.5H19a1.5 1.5 0 000-3z" />
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-800 leading-tight">
              DREW <span className="text-[#158f84]">DENTISTRY</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-500">
              Family & Cosmetic Care • Casa Grande
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation Links matching template */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = link.target === 'services' && currentPage === 'services';
            return (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.target)}
                className={`text-sm font-semibold transition-colors py-1 relative ${
                  isActive 
                    ? 'text-[#128a80] font-bold' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1aa39b] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Direct Phone link */}
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#128a80] px-3 py-2 rounded-full hover:bg-slate-100/70 transition"
          >
            <svg className="w-4 h-4 text-[#1aa39b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          {/* Book Appointment Teal Pill matching template */}
          <button
            onClick={() => onOpenWizard()}
            className="px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1ea69a] to-[#128a80] hover:from-[#19968a] hover:to-[#0e776e] text-white font-bold text-xs sm:text-sm shadow-[0_8px_20px_rgba(26,150,140,0.35)] active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Book Appointment</span>
            <svg className="w-3.5 h-3.5 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.target)}
              className="block w-full text-left py-2 text-sm font-bold text-slate-700 hover:text-[#128a80]"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-2.5 rounded-full bg-slate-50 text-slate-800 text-center font-bold text-xs flex items-center justify-center gap-2 border border-slate-200"
            >
              <svg className="w-4 h-4 text-[#1aa39b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call ({BUSINESS_INFO.phone})</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWizard();
              }}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#1ea69a] to-[#128a80] text-white text-center font-bold text-xs shadow-md"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
