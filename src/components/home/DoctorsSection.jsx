import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function DoctorsSection({ onOpenWizard }) {
  return (
    <section id="doctors" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Meet Our Doctors & Team">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-[#128a80] text-xs font-bold uppercase tracking-wider mb-3">
          Gentle & Compassionate Providers
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Meet Our Doctors & Care Team
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          From Dr. Drew’s thorough clinical exams to Erica’s painless cleanings and our welcoming office dogs, every member of our team is dedicated to your comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
        {BUSINESS_INFO.team.map((member, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(20,110,120,0.07)] hover:shadow-[0_20px_40px_-8px_rgba(20,110,120,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                  {member.qualification}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#148379] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#188e84] mt-0.5">
                  {member.role}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenWizard && onOpenWizard('General Dentistry', null, { doctor: member.name })}
                  className="w-full py-2.5 rounded-full bg-slate-50 hover:bg-[#1aa39b] text-slate-700 hover:text-white font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>Book with {member.name.split(',')[0]}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
