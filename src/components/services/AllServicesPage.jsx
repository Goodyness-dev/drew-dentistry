import React, { useState, useEffect } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AllServicesPage({ onOpenWizard, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.subType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2f9fb] via-[#f7fbfd] to-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Back Link & Header */}
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#148379] hover:text-[#0e6f66] transition mb-4"
          >
            &larr; Back to Practice Overview
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#128a80] text-xs font-bold uppercase tracking-wider mb-2">
                Complete Clinical Catalog
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                Comprehensive Dental Services
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl">
                From preventative pediatric cleanings to advanced in-house oral surgery and root canals, explore all treatments offered at Drew Dentistry.
              </p>
            </div>

            {/* Direct Phone Assistance */}
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="px-6 py-3 rounded-full bg-white border border-teal-200 text-[#128a80] font-bold text-xs sm:text-sm shadow-sm hover:bg-teal-50 transition flex items-center gap-2 self-start md:self-auto"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="space-y-4">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search treatments, crowns, root canal, whitening..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1aa39b]"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#1ea69a] to-[#128a80] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_10px_30px_-8px_rgba(20,110,120,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(20,110,120,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-[#128a80] font-bold text-[11px] border border-teal-100">
                    {service.category}
                  </span>
                  {service.popular && (
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                      ★ Popular
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {service.subType}
                </span>
                <button
                  onClick={() => onOpenWizard && onOpenWizard(service.category, service.title)}
                  className="px-4 py-1.5 rounded-full bg-slate-900 hover:bg-[#1aa39b] text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Book Slot &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">No dental procedures found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Services'); }}
              className="mt-3 text-xs font-bold text-[#148379] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
