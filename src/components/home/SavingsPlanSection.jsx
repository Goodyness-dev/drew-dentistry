import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function SavingsPlanSection({ onOpenWizard }) {
  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="In-House Dental Savings Plan & Insurance">
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#126b64] via-[#107b73] to-[#0d5953] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
        
        {/* Soft radial background effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-teal-200 text-xs sm:text-sm font-semibold">
              <svg className="w-4 h-4 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>No Dental Insurance? We Have You Covered</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Drew Dentistry In-House Savings Plan
            </h2>

            <p className="text-teal-50 text-sm sm:text-base leading-relaxed">
              We believe quality dental care should be accessible to everyone in Casa Grande. Our exclusive in-house savings plan provides full preventative care and major procedure discounts without insurance copays, deductibles, or waiting periods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-teal-100">
                <div className="w-5 h-5 rounded-full bg-teal-300/20 flex items-center justify-center shrink-0">
                  <span className="text-teal-300 text-xs">✓</span>
                </div>
                <span>2 Free Cleanings & Exams / Year</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-teal-100">
                <div className="w-5 h-5 rounded-full bg-teal-300/20 flex items-center justify-center shrink-0">
                  <span className="text-teal-300 text-xs">✓</span>
                </div>
                <span>100% Free Digital 3D X-Rays</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-teal-100">
                <div className="w-5 h-5 rounded-full bg-teal-300/20 flex items-center justify-center shrink-0">
                  <span className="text-teal-300 text-xs">✓</span>
                </div>
                <span>20% Off All Crowns & Root Canals</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-teal-100">
                <div className="w-5 h-5 rounded-full bg-teal-300/20 flex items-center justify-center shrink-0">
                  <span className="text-teal-300 text-xs">✓</span>
                </div>
                <span>Dedicated Military & Veteran Discount</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenWizard && onOpenWizard('General Dentistry', 'In-House Dental Savings Plan Consultation')}
                className="px-6 py-3 rounded-full bg-white text-[#107b73] hover:bg-teal-50 font-bold text-sm sm:text-base shadow-lg active:scale-95 transition-all"
              >
                Inquire About Savings Plan
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm sm:text-base active:scale-95 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-inner">
            <h3 className="text-xl font-bold text-white mb-4">
              Insurance & Financial Benefits
            </h3>
            <ul className="space-y-3.5 text-sm text-teal-100">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 font-bold text-xs">1</span>
                <div>
                  <strong className="text-white">Insurance Concierge:</strong> Mrs. Drew verifies all insurance benefits beforehand so you never experience surprise bills.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 font-bold text-xs">2</span>
                <div>
                  <strong className="text-white">Most PPO Insurances Accepted:</strong> We work directly with major carriers to maximize your coverage.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 font-bold text-xs">3</span>
                <div>
                  <strong className="text-white">Convenient Early Hours:</strong> Open Monday–Thursday from 7:00 AM to 3:00 PM. Get treated before work!
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
