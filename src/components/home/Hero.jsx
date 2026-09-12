import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { DEPARTMENTS } from '../../data/servicesData';

export default function Hero({ onOpenWizard }) {
  const [selectedDept, setSelectedDept] = useState('General Dentistry');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Shane Drew, DDS');
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const handleQuickBook = (e) => {
    e.preventDefault();
    if (onOpenWizard) {
      onOpenWizard(selectedDept, null, { doctor: selectedDoctor, date: selectedDate });
    }
  };

  return (
    <section className="relative pt-4 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Welcome to Drew Dentistry">
      {/* Large Curved Hero Container */}
      <div className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#dff2f8] via-[#e8f6fa] to-[#f4fafc] border border-white/80 shadow-[0_20px_50px_rgba(20,110,120,0.08)]">
        
        {/* Soft decorative background glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 p-6 sm:p-10 lg:p-14 pb-28 lg:pb-32 relative z-10">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Trust pill badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white text-xs sm:text-sm font-semibold text-[#187f76] shadow-sm">
              <span className="flex text-amber-400">★★★★★</span>
              <span className="text-slate-700 font-medium">4.6 Rated on Yelp ({BUSINESS_INFO.reviewCount} Reviews)</span>
            </div>

            {/* Display Headline matching template */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Your Health,<br />
              <span className="text-[#158f84]">Our Priority</span>
            </h1>

            {/* Subtitle matching template */}
            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
              Compassionate Care for You and Your Family. Gentle dentistry, state-of-the-art 3D imaging, and in-house oral surgery in Casa Grande, AZ.
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-white/80 font-medium">
                <svg className="w-4 h-4 text-[#1aa39b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                In-House Savings Plan
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-white/80 font-medium">
                <svg className="w-4 h-4 text-[#1aa39b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon–Thu: 7 AM – 3 PM
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-white/80 font-medium">
                <svg className="w-4 h-4 text-[#1aa39b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Office Comfort Pups
              </span>
            </div>
          </div>

          {/* Right Hero Image matching template */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                alt="Dr. Shane Drew consulting with patient at Drew Dentistry"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              
              {/* Floating Pill on image */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-800">Dr. Shane Drew, DDS</p>
                  <p className="text-[11px] text-slate-500 font-medium">Lead Dentist & Owner • Casa Grande, AZ</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-teal-50 text-[#128a80] text-[11px] font-bold border border-teal-200">
                  Accepting Patients
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Signature Floating Quick Booking Bar (Anchored at the bottom inside hero container) */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12 z-20">
          <form 
            onSubmit={handleQuickBook}
            className="p-3 sm:p-4 rounded-2xl sm:rounded-full bg-white/85 backdrop-blur-xl border border-white shadow-[0_15px_40px_rgba(20,100,110,0.12)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 items-center"
          >
            {/* Department selector */}
            <div className="px-3 py-1.5 bg-white/80 rounded-xl sm:rounded-full border border-slate-200/80 hover:border-teal-400 transition flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Department</span>
              <select 
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer truncate"
              >
                <option value="General Dentistry">General Dentistry</option>
                <option value="Emergency Care">Emergency Care</option>
                <option value="Endodontics & Surgery">Endodontics & Surgery</option>
                <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                <option value="Pediatric & Family">Pediatric & Family</option>
              </select>
            </div>

            {/* Doctor selector */}
            <div className="px-3 py-1.5 bg-white/80 rounded-xl sm:rounded-full border border-slate-200/80 hover:border-teal-400 transition flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Doctor / Provider</span>
              <select 
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer truncate"
              >
                <option value="Dr. Shane Drew, DDS">Dr. Shane Drew, DDS</option>
                <option value="Dr. Carpenter, DDS">Dr. Carpenter, DDS</option>
                <option value="Erica, RDH (Lead Hygienist)">Erica, RDH (Hygienist)</option>
                <option value="First Available Doctor">First Available Doctor</option>
              </select>
            </div>

            {/* Date Picker */}
            <div className="px-3 py-1.5 bg-white/80 rounded-xl sm:rounded-full border border-slate-200/80 hover:border-teal-400 transition flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Preferred Date</span>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#1aa39b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input 
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer w-full"
                />
              </div>
            </div>

            {/* Book Now Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl sm:rounded-full bg-gradient-to-r from-[#1ea69a] to-[#118a80] hover:from-[#19968a] hover:to-[#0e776e] text-white font-bold text-sm sm:text-base shadow-[0_8px_20px_rgba(26,150,140,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Book Now</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
