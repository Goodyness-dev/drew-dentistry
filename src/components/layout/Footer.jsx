import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onOpenWizard, onNavigate }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs sm:text-sm pb-16 sm:pb-0" role="contentinfo">
      
      {/* Pre-footer Callout Banner */}
      <div className="bg-gradient-to-r from-[#17857a] via-[#1aa39b] to-[#147a71] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready for a healthier, more confident smile?
            </h3>
            <p className="text-teal-100 mt-1.5 text-sm sm:text-base">
              Accepting new patients in Casa Grande. Convenient 7:00 AM appointments available!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenWizard && onOpenWizard()}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-[#107b73] hover:bg-teal-50 font-bold text-sm shadow-md active:scale-95 transition-all text-center"
            >
              Book Appointment Online
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Brand & Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1ea69a] to-[#128a80] flex items-center justify-center text-white shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 10.5h-5.5V5a1.5 1.5 0 00-3 0v5.5H5a1.5 1.5 0 000 3h5.5V19a1.5 1.5 0 003 0v-5.5H19a1.5 1.5 0 000-3z" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold text-white block leading-tight">DREW DENTISTRY</span>
              <span className="text-[10px] text-teal-400 font-semibold tracking-wider uppercase">Casa Grande, AZ</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Compassionate, state-of-the-art dental care led by Dr. Shane Drew, DDS. Specializing in gentle family dentistry, endodontics, in-house oral surgery, and our accessible savings plan.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a
              href={BUSINESS_INFO.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold hover:bg-red-600/30 transition"
            >
              <span>4.6 ★ on Yelp</span>
            </a>
            <span className="text-xs text-slate-500">17+ Patient Reviews</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">
            Quick Navigation
          </h4>
          <ul className="space-y-2">
            <li>
              <button onClick={(e) => handleLinkClick(e, '#')} className="hover:text-teal-400 transition">
                Home
              </button>
            </li>
            <li>
              <button onClick={(e) => handleLinkClick(e, '#departments')} className="hover:text-teal-400 transition">
                Our Departments
              </button>
            </li>
            <li>
              <button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-teal-400 transition">
                All Dental Services
              </button>
            </li>
            <li>
              <button onClick={(e) => handleLinkClick(e, '#doctors')} className="hover:text-teal-400 transition">
                Meet the Doctors & Team
              </button>
            </li>
            <li>
              <button onClick={(e) => handleLinkClick(e, '#reviews')} className="hover:text-teal-400 transition">
                Patient Yelp Reviews
              </button>
            </li>
            <li>
              <button onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-teal-400 transition">
                Location & Office Hours
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Practice Schedule */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">
            Office Hours
          </h4>
          <div className="space-y-1.5 text-xs text-slate-400">
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-white font-medium">Monday</span>
              <span>7:00 AM – 3:00 PM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-white font-medium">Tuesday</span>
              <span>7:00 AM – 3:00 PM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-white font-medium">Wednesday</span>
              <span>7:00 AM – 3:00 PM</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-white font-medium">Thursday</span>
              <span>7:00 AM – 3:00 PM</span>
            </div>
            <div className="flex justify-between py-1 text-slate-500">
              <span>Friday – Sunday</span>
              <span>Closed</span>
            </div>
          </div>
          <p className="text-[11px] text-teal-400 pt-1">
            *Emergency messages monitored on weekends
          </p>
        </div>

        {/* Col 4: Location & Contact */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">
            Contact & Location
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {BUSINESS_INFO.address.formatted}
          </p>
          <div className="space-y-2 pt-1">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 text-white hover:text-teal-400 transition font-bold"
            >
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <p className="text-xs text-slate-400">
              Website: <a href="https://www.drewdentistry.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">drewdentistry.com</a>
            </p>
          </div>

          <div className="pt-3">
            <button
              onClick={() => onNavigate && onNavigate('admin')}
              className="text-[11px] text-slate-500 hover:text-slate-300 flex items-center gap-1 transition"
            >
              <span>Staff Portal Login</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Drew Dentistry PLLC • Dr. Shane Drew, DDS • 1821 N Trekell Rd Ste 9, Casa Grande, AZ 85122 • All Rights Reserved.</p>
      </div>
    </footer>
  );
}
