import React from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function LocationHoursSection({ onOpenWizard }) {
  const practiceOpen = isOpenNow();
  const currentDayIndex = new Date().getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[currentDayIndex];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Location & Hours">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-[#128a80] text-xs font-bold uppercase tracking-wider mb-3">
          Visit Our Casa Grande Clinic
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Location & Convenient Hours
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Conveniently located on N Trekell Rd in Casa Grande. Offering early morning appointments from 7:00 AM so your dental care never interrupts your workday.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Hours & Contact Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_12px_35px_-10px_rgba(20,110,120,0.08)] flex flex-col justify-between">
          <div>
            {/* Live Open / Closed indicator */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#eff8fa] border border-teal-100 mb-6">
              <div className="flex items-center space-x-3">
                <span className={`w-3.5 h-3.5 rounded-full ${practiceOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                <div>
                  <span className={`font-bold text-sm sm:text-base block ${practiceOpen ? 'text-emerald-800' : 'text-slate-700'}`}>
                    {practiceOpen ? 'Office Open Now' : 'Currently Closed'}
                  </span>
                  <span className="text-xs text-slate-500">Today is {currentDayName}</span>
                </div>
              </div>
              <svg className="w-6 h-6 text-[#1aa39b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Weekly Hours Table */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Practice Working Schedule
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm">
                {BUSINESS_INFO.hours.map((h) => {
                  const isToday = h.day.toLowerCase() === currentDayName.toLowerCase();
                  return (
                    <div
                      key={h.day}
                      className={`py-2 px-3 flex justify-between items-center rounded-xl transition-colors ${
                        isToday 
                          ? 'bg-teal-50 font-bold text-[#0f766e] border border-teal-200/70' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{h.day}</span>
                      <div className="flex items-center gap-2">
                        <span>
                          {h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
                        </span>
                        {isToday && (
                          <span className="text-[10px] bg-teal-600 text-white px-1.5 py-0.5 rounded font-bold">
                            Today
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Address & Direct Phone */}
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-50 text-[#1aa39b] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Office Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {BUSINESS_INFO.address.formatted}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-50 text-[#1aa39b] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Direct Phone</h4>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} 
                    className="text-xs sm:text-sm font-bold text-[#1aa39b] hover:underline mt-0.5 block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4">
            <button
              onClick={() => onOpenWizard && onOpenWizard()}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#1ea69a] to-[#118a80] text-white font-bold text-sm shadow-[0_8px_20px_rgba(26,150,140,0.35)] active:scale-95 transition-all"
            >
              Book Your Appointment
            </button>
          </div>
        </div>

        {/* Map & Directions Card */}
        <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_12px_35px_-10px_rgba(20,110,120,0.08)] flex flex-col">
          <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] bg-slate-100">
            <iframe
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Drew Dentistry Casa Grande AZ Location Map"
              className="w-full h-full"
            />
          </div>

          <div className="p-5 sm:p-6 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-800">
                1821 N Trekell Rd Ste 9, Casa Grande, AZ 85122
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Convenient parking right outside Suite 9 • Wheelchair accessible
              </p>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white hover:bg-teal-50 text-[#148379] border border-teal-200 font-bold text-xs shadow-sm active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Get Directions</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
