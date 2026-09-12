import React from 'react';

export default function FeaturedServicesSection({ onOpenWizard, onViewAllServices }) {
  const featuredServices = [
    {
      id: 'advanced-diagnostics',
      title: 'Advanced Diagnostics',
      subtitle: 'Advanced diagnostics with modern 3D imaging machine and low-radiation digital sensors.',
      category: 'General Dentistry',
      badge: '3D Imaging',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      actionText: 'Book Exam'
    },
    {
      id: 'specialized-surgeries',
      title: 'Specialized Surgeries',
      subtitle: 'In-house oral surgery, painless tooth extractions, and restorative procedures without external referrals.',
      category: 'Endodontics & Surgery',
      badge: 'In-House Suite',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      actionText: 'Learn More'
    },
    {
      id: 'restorations-crowns',
      title: 'Restorations & Crowns',
      subtitle: 'Tooth-colored composite fillings, durable porcelain crowns, and sealant protection for all ages.',
      category: 'General Dentistry',
      badge: 'Natural Tooth Color',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      actionText: 'Book Restoration'
    },
    {
      id: 'cosmetic-whitening',
      title: 'Smile Makeovers & Whitening',
      subtitle: 'Safe, brilliant shade-brightening power whitening and handcrafted cosmetic veneers.',
      category: 'Cosmetic Dentistry',
      badge: 'Bright Smile',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      actionText: 'Brighten Smile'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Featured Services">
      {/* Title matching template */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            State-of-the-art procedures performed with gentle precision and genuine comfort.
          </p>
        </div>
        <button
          onClick={onViewAllServices}
          className="mt-4 sm:mt-0 text-sm font-bold text-[#158f84] hover:text-[#0e776e] flex items-center gap-1.5 self-start sm:self-auto group"
        >
          <span>View All 12+ Dental Procedures</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Cards Deck matching template layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {featuredServices.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100/90 shadow-[0_12px_32px_-8px_rgba(20,110,120,0.08)] hover:shadow-[0_20px_45px_-8px_rgba(20,110,120,0.16)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
          >
            {/* Image banner */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#148379] shadow-sm">
                  {service.badge}
                </span>
              </div>
            </div>

            {/* Content matching template */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#148379] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  {service.category}
                </span>
                <button
                  onClick={() => onOpenWizard && onOpenWizard(service.category, service.title)}
                  className="px-4 py-1.5 rounded-full bg-teal-50 hover:bg-[#1aa39b] text-[#128a80] hover:text-white font-bold text-xs transition-all active:scale-95 shadow-sm"
                >
                  {service.actionText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
