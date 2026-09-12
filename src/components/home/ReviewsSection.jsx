import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Patient Reviews">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#d32323] text-xs font-bold uppercase tracking-wider mb-3">
          <svg className="w-3.5 h-3.5 fill-[#d32323]" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>Verified Yelp Reviews</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          What Our Casa Grande Patients Say
        </h2>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="flex text-amber-400 text-lg">
            {'★★★★★'.split('').map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span className="text-slate-700 font-bold text-sm sm:text-base">
            4.6 Rating on Yelp ({BUSINESS_INFO.reviewCount} Reviews)
          </span>
          <a
            href={BUSINESS_INFO.yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#d32323] font-bold hover:underline"
          >
            View on Yelp &rarr;
          </a>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {BUSINESS_INFO.reviews.map((rev, idx) => (
          <article
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/90 shadow-[0_12px_30px_-8px_rgba(20,110,120,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(20,110,120,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Highlight Tag & Stars */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-amber-400 text-base">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                  {rev.source}
                </span>
              </div>

              {rev.highlight && (
                <div className="mb-3 text-xs font-bold text-[#148379] bg-teal-50/70 border border-teal-100/80 px-2.5 py-1 rounded-lg">
                  "{rev.highlight}"
                </div>
              )}

              {/* Review Text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                "{rev.comment}"
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-white font-bold text-xs flex items-center justify-center">
                  {rev.author[0]}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm">{rev.author}</h3>
                    {rev.badge && (
                      <span className="text-[10px] font-bold bg-red-100 text-red-700 px-1.5 py-0.2 rounded">
                        {rev.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-slate-400 text-[11px]">{rev.location}</span>
                </div>
              </div>
              <span className="text-slate-400 text-[11px] font-medium">{rev.date}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Review Section Footer CTA */}
      <div className="mt-12 text-center">
        <button
          onClick={() => onOpenWizard && onOpenWizard()}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1ea69a] to-[#128a80] hover:from-[#19968a] hover:to-[#0e776e] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(26,150,140,0.4)] active:scale-95 transition-all inline-flex items-center gap-2"
        >
          <span>Schedule Your Smile Consultation</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
