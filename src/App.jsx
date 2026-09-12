import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import DepartmentsSection from './components/home/DepartmentsSection';
import FeaturedServicesSection from './components/home/FeaturedServicesSection';
import DoctorsSection from './components/home/DoctorsSection';
import SavingsPlanSection from './components/home/SavingsPlanSection';
import ReviewsSection from './components/home/ReviewsSection';
import LocationHoursSection from './components/home/LocationHoursSection';
import Footer from './components/layout/Footer';
import AllServicesPage from './components/services/AllServicesPage';
import QuoteWizardModal from './components/wizard/QuoteWizardModal';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';
import { BUSINESS_INFO } from './data/businessData';
import { authApi, getStoredToken } from './services/api';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'services' | 'admin'
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardCategory, setWizardCategory] = useState(null);
  const [wizardService, setWizardService] = useState(null);
  const [wizardDetails, setWizardDetails] = useState({});

  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Check stored auth token on mount
  useEffect(() => {
    const token = getStoredToken();
    if (token) {
      authApi.verify()
        .then(res => {
          if (res.authenticated) {
            setIsAdminAuthenticated(true);
            setAdminUser(res.user);
          }
        })
        .catch(() => {
          setIsAdminAuthenticated(false);
        });
    }
  }, []);

  // Sync with browser URL hash for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/admin' || hash === '#admin') {
        setCurrentPage('admin');
      } else if (hash === '#/services' || hash === '#services-all') {
        setCurrentPage('services');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'services') {
      window.location.hash = '#/services';
    } else if (page === 'admin') {
      window.location.hash = '#/admin';
    } else {
      if (window.location.hash.startsWith('#/services') || window.location.hash.startsWith('#/admin')) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWizard = (category = null, service = null, details = {}) => {
    setWizardCategory(category);
    setWizardService(service);
    setWizardDetails(details);
    setWizardOpen(true);
  };

  const handleCloseWizard = () => {
    setWizardOpen(false);
    setWizardCategory(null);
    setWizardService(null);
    setWizardDetails({});
  };

  // If on Admin route, render full-screen Admin portal
  if (currentPage === 'admin') {
    return isAdminAuthenticated ? (
      <AdminLayout
        user={adminUser}
        onLogout={() => {
          setIsAdminAuthenticated(false);
          setAdminUser(null);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    ) : (
      <AdminLogin
        onLoginSuccess={(user) => {
          setIsAdminAuthenticated(true);
          setAdminUser(user);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f9fb] text-slate-900 flex flex-col font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      
      {/* Global Navbar */}
      <Navbar 
        onOpenWizard={() => handleOpenWizard()} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main View: Landing Page OR All Services Page */}
      <main className="flex-grow">
        {currentPage === 'services' ? (
          <AllServicesPage 
            onOpenWizard={handleOpenWizard}
            onBackToHome={() => handleNavigate('home')}
          />
        ) : (
          <>
            <Hero onOpenWizard={handleOpenWizard} />
            <DepartmentsSection 
              onSelectDepartment={(dept) => handleOpenWizard(dept)}
              onOpenWizard={handleOpenWizard}
            />
            <FeaturedServicesSection 
              onOpenWizard={handleOpenWizard}
              onViewAllServices={() => handleNavigate('services')}
            />
            <DoctorsSection onOpenWizard={handleOpenWizard} />
            <SavingsPlanSection onOpenWizard={handleOpenWizard} />
            <ReviewsSection onOpenWizard={handleOpenWizard} />
            <LocationHoursSection onOpenWizard={handleOpenWizard} />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenWizard={() => handleOpenWizard()} 
        onNavigate={handleNavigate}
      />

      {/* Dental Appointment Booking Wizard Modal */}
      <QuoteWizardModal
        isOpen={wizardOpen}
        onClose={handleCloseWizard}
        initialCategory={wizardCategory}
        initialService={wizardService}
        initialDetails={wizardDetails}
      />

      {/* Sticky Mobile Bottom Quick Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center gap-2.5 shadow-xl">
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 active:scale-95 transition"
        >
          <svg className="w-4 h-4 text-[#1aa39b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call Office</span>
        </a>
        <button
          onClick={() => handleOpenWizard()}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#1ea69a] to-[#128a80] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
