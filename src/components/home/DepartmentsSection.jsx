import React from 'react';

export default function DepartmentsSection({ onSelectDepartment, onOpenWizard }) {
  return (
    <section id="departments" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Our Departments">
      {/* Title matching template */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Our Departments
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Comprehensive dental solutions under one roof with modern technology and gentle specialists.
        </p>
      </div>

      {/* Grid of 4 Squircle Clay Cards matching template */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        
        {/* Department 1: Emergency Care */}
        <div 
          onClick={() => onOpenWizard && onOpenWizard('Emergency Care')}
          className="group cursor-pointer bg-white rounded-[2rem] p-8 sm:p-10 flex flex-col items-center text-center border border-slate-100/90 shadow-[0_15px_35px_-8px_rgba(20,110,120,0.08)] hover:shadow-[0_25px_50px_-10px_rgba(20,110,120,0.16)] hover:-translate-y-1.5 transition-all duration-300"
        >
          {/* 3D-effect Medical Ambulance Icon matching screenshot */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 border border-teal-100/60 flex items-center justify-center shadow-inner mb-6 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-14 h-14 sm:w-16 sm:h-16 text-[#1aa39b] drop-shadow-sm" viewBox="0 0 64 64" fill="none">
              <rect x="8" y="20" width="34" height="24" rx="4" fill="currentColor" fillOpacity="0.85" />
              <path d="M42 28H52L56 36V44H42V28Z" fill="currentColor" fillOpacity="0.85" />
              <rect x="14" y="24" width="10" height="8" rx="2" fill="#ffffff" />
              <path d="M44 30H50L53 36H44V30Z" fill="#ffffff" />
              <rect x="23" y="26" width="4" height="12" rx="1" fill="#ffffff" />
              <rect x="19" y="30" width="12" height="4" rx="1" fill="#ffffff" />
              <circle cx="20" cy="46" r="6" fill="#0f766e" />
              <circle cx="20" cy="46" r="2.5" fill="#ffffff" />
              <circle cx="48" cy="46" r="6" fill="#0f766e" />
              <circle cx="48" cy="46" r="2.5" fill="#ffffff" />
              <rect x="22" y="16" width="6" height="4" rx="2" fill="#06b6d4" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-[#128a80] transition-colors">
            Emergency Care
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
            Same-day relief for acute toothaches, chipped teeth, and dental infections.
          </p>
          <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#188e84] group-hover:underline">
            Book Emergency &rarr;
          </span>
        </div>

        {/* Department 2: Pediatric Department */}
        <div 
          onClick={() => onOpenWizard && onOpenWizard('Pediatric & Family')}
          className="group cursor-pointer bg-white rounded-[2rem] p-8 sm:p-10 flex flex-col items-center text-center border border-slate-100/90 shadow-[0_15px_35px_-8px_rgba(20,110,120,0.08)] hover:shadow-[0_25px_50px_-10px_rgba(20,110,120,0.16)] hover:-translate-y-1.5 transition-all duration-300"
        >
          {/* 3D-effect Teddy Bear Icon matching screenshot */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-cyan-50 via-teal-50 to-sky-50 border border-teal-100/60 flex items-center justify-center shadow-inner mb-6 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-14 h-14 sm:w-16 sm:h-16 text-[#1aa39b] drop-shadow-sm" viewBox="0 0 64 64" fill="none">
              <circle cx="18" cy="18" r="7" fill="currentColor" fillOpacity="0.85" />
              <circle cx="18" cy="18" r="4" fill="#ffffff" fillOpacity="0.8" />
              <circle cx="46" cy="18" r="7" fill="currentColor" fillOpacity="0.85" />
              <circle cx="46" cy="18" r="4" fill="#ffffff" fillOpacity="0.8" />
              <circle cx="32" cy="27" r="15" fill="currentColor" fillOpacity="0.9" />
              <circle cx="27" cy="24" r="2.5" fill="#0f766e" />
              <circle cx="37" cy="24" r="2.5" fill="#0f766e" />
              <ellipse cx="32" cy="31" rx="6" ry="4.5" fill="#ffffff" />
              <ellipse cx="32" cy="29.5" rx="2" ry="1.5" fill="#0f766e" />
              <path d="M30 33Q32 35 34 33" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" />
              <ellipse cx="32" cy="48" rx="14" ry="12" fill="currentColor" fillOpacity="0.85" />
              <circle cx="32" cy="48" r="7" fill="#ffffff" fillOpacity="0.75" />
              <circle cx="15" cy="44" r="5" fill="currentColor" fillOpacity="0.85" />
              <circle cx="49" cy="44" r="5" fill="currentColor" fillOpacity="0.85" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-[#128a80] transition-colors">
            Pediatric Department
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
            Gentle dental care for kids, sealants, cleanings, and calming office comfort pups.
          </p>
          <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#188e84] group-hover:underline">
            Family Dental Care &rarr;
          </span>
        </div>

        {/* Department 3: Endodontics & Surgery */}
        <div 
          onClick={() => onOpenWizard && onOpenWizard('Endodontics & Surgery')}
          className="group cursor-pointer bg-white rounded-[2rem] p-8 sm:p-10 flex flex-col items-center text-center border border-slate-100/90 shadow-[0_15px_35px_-8px_rgba(20,110,120,0.08)] hover:shadow-[0_25px_50px_-10px_rgba(20,110,120,0.16)] hover:-translate-y-1.5 transition-all duration-300"
        >
          {/* 3D-effect Pulse Heart Icon matching screenshot */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 border border-teal-100/60 flex items-center justify-center shadow-inner mb-6 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-14 h-14 sm:w-16 sm:h-16 text-[#1aa39b] drop-shadow-sm" viewBox="0 0 64 64" fill="none">
              <path 
                d="M32 52C32 52 10 38 10 23C10 15 16 10 23 10C27.5 10 30.5 12.5 32 15C33.5 12.5 36.5 10 41 10C48 10 54 15 54 23C54 38 32 52 32 52Z" 
                fill="currentColor" 
                fillOpacity="0.85" 
              />
              <path 
                d="M16 26H24L27 18L32 34L37 22L40 26H48" 
                stroke="#ffffff" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-[#128a80] transition-colors">
            Endodontics & Surgery
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
            In-house root canals, precision extractions, and restorative oral surgery.
          </p>
          <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#188e84] group-hover:underline">
            View Procedures &rarr;
          </span>
        </div>

        {/* Department 4: Cosmetic Dentistry */}
        <div 
          onClick={() => onOpenWizard && onOpenWizard('Cosmetic Dentistry')}
          className="group cursor-pointer bg-white rounded-[2rem] p-8 sm:p-10 flex flex-col items-center text-center border border-slate-100/90 shadow-[0_15px_35px_-8px_rgba(20,110,120,0.08)] hover:shadow-[0_25px_50px_-10px_rgba(20,110,120,0.16)] hover:-translate-y-1.5 transition-all duration-300"
        >
          {/* 3D-effect Sparkling Smile Icon */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-cyan-50 via-teal-50 to-amber-50 border border-teal-100/60 flex items-center justify-center shadow-inner mb-6 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-14 h-14 sm:w-16 sm:h-16 text-[#1aa39b] drop-shadow-sm" viewBox="0 0 64 64" fill="none">
              <path 
                d="M22 14C27 14 30 18 32 18C34 18 37 14 42 14C48 14 52 19 52 27C52 38 45 44 42 54C40 60 36 58 34 50C33 46 31 46 30 50C28 58 24 60 22 54C19 44 12 38 12 27C12 19 16 14 22 14Z" 
                fill="currentColor" 
                fillOpacity="0.85" 
              />
              <path d="M22 32Q32 40 42 32" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
              <path d="M46 10L47.5 14.5L52 16L47.5 17.5L46 22L44.5 17.5L40 16L44.5 14.5L46 10Z" fill="#38bdf8" />
              <path d="M14 20L15 23L18 24L15 25L14 28L13 25L10 24L13 23L14 20Z" fill="#38bdf8" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-[#128a80] transition-colors">
            Cosmetic Dentistry
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
            Professional teeth whitening, porcelain veneers, and complete smile makeovers.
          </p>
          <span className="mt-4 inline-flex items-center text-xs font-semibold text-[#188e84] group-hover:underline">
            Transform Smile &rarr;
          </span>
        </div>

      </div>
    </section>
  );
}
