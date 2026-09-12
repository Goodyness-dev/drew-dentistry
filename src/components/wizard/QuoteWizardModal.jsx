import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { SERVICES, DEPARTMENTS } from '../../data/servicesData';

export default function QuoteWizardModal({ isOpen, onClose, initialCategory = null, initialService = null, initialDetails = {} }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [formData, setFormData] = useState({
    department: 'General Dentistry',
    service: 'Comprehensive Dental Exams & 3D Imaging',
    isNewPatient: true,
    doctor: 'Dr. Shane Drew, DDS',
    preferredDate: '',
    timePreference: 'Early Morning (7:00 AM - 9:00 AM)',
    coverageType: 'Dental Insurance (PPO)',
    insuranceCarrier: '',
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    notes: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const defaultDate = tomorrow.toISOString().split('T')[0];

      setFormData(prev => ({
        ...prev,
        department: initialCategory || 'General Dentistry',
        service: initialService || (initialCategory === 'Emergency Care' ? 'Emergency Toothache & Dental Relief' : 'Comprehensive Dental Exams & 3D Imaging'),
        doctor: initialDetails?.doctor || 'Dr. Shane Drew, DDS',
        preferredDate: initialDetails?.date || defaultDate,
      }));
      setCurrentStep(1);
      setSubmissionSuccess(false);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, initialCategory, initialService, initialDetails]);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ref = 'DD-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(ref);
      setSubmissionSuccess(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header with Title & Close */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#eff9fa] to-white border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1aa39b] text-white flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 10.5h-5.5V5a1.5 1.5 0 00-3 0v5.5H5a1.5 1.5 0 000 3h5.5V19a1.5 1.5 0 003 0v-5.5H19a1.5 1.5 0 000-3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Book Your Smile Appointment
              </h2>
              <p className="text-xs text-slate-500">
                Drew Dentistry • Casa Grande, AZ • Mon–Thu 7 AM – 3 PM
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step Progress Bar */}
        {!submissionSuccess && (
          <div className="px-6 py-3 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className={currentStep >= 1 ? 'text-[#148379] font-bold' : ''}>1. Treatment</span>
            <span className="text-slate-300">&rarr;</span>
            <span className={currentStep >= 2 ? 'text-[#148379] font-bold' : ''}>2. Doctor & Date</span>
            <span className="text-slate-300">&rarr;</span>
            <span className={currentStep >= 3 ? 'text-[#148379] font-bold' : ''}>3. Insurance / Plan</span>
            <span className="text-slate-300">&rarr;</span>
            <span className={currentStep >= 4 ? 'text-[#148379] font-bold' : ''}>4. Patient Info</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submissionSuccess ? (
            /* Success View */
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Appointment Request Confirmed!
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">
                Booking Reference: <span className="font-mono text-[#148379] text-base font-bold">{bookingRef}</span>
              </p>
              <div className="bg-slate-50 p-5 rounded-2xl text-left border border-slate-200 text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                <p><strong>Patient:</strong> {formData.patientName}</p>
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Preferred Provider:</strong> {formData.doctor}</p>
                <p><strong>Requested Date:</strong> {formData.preferredDate} ({formData.timePreference})</p>
                <p><strong>Coverage:</strong> {formData.coverageType}</p>
              </div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed pt-2">
                Mrs. Drew and our patient care team will review your benefits and text you at <span className="font-semibold text-slate-800">{formData.patientPhone}</span> with your final appointment time.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-[#1aa39b] hover:bg-[#158b80] text-white font-bold text-sm shadow-md active:scale-95 transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Form Steps */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Department & Service */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    What type of dental care do you need?
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                      Department
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {['General Dentistry', 'Emergency Care', 'Endodontics & Surgery', 'Cosmetic Dentistry', 'Pediatric & Family'].map((dept) => (
                        <button
                          key={dept}
                          type="button"
                          onClick={() => setFormData({ ...formData, department: dept })}
                          className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                            formData.department === dept
                              ? 'bg-teal-50 border-[#1aa39b] text-[#128a80] shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                      Select Treatment / Procedure
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1aa39b]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <label className="text-xs font-bold text-slate-700">Are you a new patient?</label>
                    <div className="flex items-center gap-3 text-xs font-semibold">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="newPatient"
                          checked={formData.isNewPatient}
                          onChange={() => setFormData({ ...formData, isNewPatient: true })}
                          className="accent-[#1aa39b]"
                        />
                        <span>Yes, First Visit</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="newPatient"
                          checked={!formData.isNewPatient}
                          onChange={() => setFormData({ ...formData, isNewPatient: false })}
                          className="accent-[#1aa39b]"
                        />
                        <span>Returning Patient</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Doctor & Scheduling */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Preferred Provider & Appointment Time
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                      Preferred Dentist or Specialist
                    </label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1aa39b]"
                    >
                      <option value="Dr. Shane Drew, DDS">Dr. Shane Drew, DDS (Lead Dentist & Owner)</option>
                      <option value="Dr. Carpenter, DDS">Dr. Carpenter, DDS (Restorative & General)</option>
                      <option value="Erica, RDH (Lead Hygienist)">Erica, RDH (Gentle Hygiene & Cleanings)</option>
                      <option value="First Available Doctor">First Available Doctor (Soonest Opening)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        Preferred Date (Mon–Thu)
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1aa39b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        Time Slot (Early Hours)
                      </label>
                      <select
                        value={formData.timePreference}
                        onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1aa39b]"
                      >
                        <option value="Early Morning (7:00 AM - 9:00 AM)">Early Bird: 7:00 AM – 9:00 AM</option>
                        <option value="Mid-Morning (9:00 AM - 12:00 PM)">Mid-Morning: 9:00 AM – 12:00 PM</option>
                        <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon: 12:00 PM – 3:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-100 text-xs text-[#0f766e] flex items-center gap-2">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Our Casa Grande office opens early at <strong>7:00 AM</strong> Monday through Thursday for your convenience!</span>
                  </div>
                </div>
              )}

              {/* STEP 3: Insurance & Savings Plan */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in duration-150">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Insurance & Financial Coverage
                  </h3>

                  <div className="space-y-2.5">
                    {[
                      { type: 'Dental Insurance (PPO)', desc: 'We accept most PPO insurances. Mrs. Drew verifies all benefits in advance.' },
                      { type: 'In-House Dental Savings Plan', desc: 'No insurance? Join our membership plan for free cleanings, exams, and 20% discounts.' },
                      { type: 'Military / Veteran Discount', desc: 'Proudly offering dedicated dental care discounts for veterans and military families.' },
                      { type: 'Self-Pay / CareCredit Financing', desc: 'Flexible monthly payment options with zero surprise fees.' }
                    ].map((plan) => (
                      <div
                        key={plan.type}
                        onClick={() => setFormData({ ...formData, coverageType: plan.type })}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.coverageType === plan.type
                            ? 'bg-teal-50 border-[#1aa39b] shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="coverage"
                            checked={formData.coverageType === plan.type}
                            onChange={() => setFormData({ ...formData, coverageType: plan.type })}
                            className="accent-[#1aa39b]"
                          />
                          <span className="text-xs sm:text-sm font-bold text-slate-800">{plan.type}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-500 mt-1 pl-5">
                          {plan.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {formData.coverageType === 'Dental Insurance (PPO)' && (
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        Insurance Carrier & Member ID (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Delta Dental, Cigna, MetLife, Guardian..."
                        value={formData.insuranceCarrier}
                        onChange={(e) => setFormData({ ...formData, insuranceCarrier: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-[#1aa39b]"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: Patient Info */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Patient Contact & Comfort Notes
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kaye Thompson"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-[#1aa39b]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        Phone Number (Text updates) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(520) 000-0000"
                        value={formData.patientPhone}
                        onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-[#1aa39b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="patient@example.com"
                        value={formData.patientEmail}
                        onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-[#1aa39b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">
                      Symptoms, Dental History or Puppy Comfort Request
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any sensitivity, tooth pain, dental anxiety, or let us know if you want puppy love during your visit!"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-[#1aa39b]"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs sm:text-sm transition"
                  >
                    &larr; Back
                  </button>
                ) : <div />}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-2.5 rounded-full bg-[#1aa39b] hover:bg-[#148e84] text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition flex items-center gap-1.5"
                  >
                    <span>Continue</span>
                    <span>&rarr;</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.patientName || !formData.patientPhone}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#1ea69a] to-[#128a80] hover:from-[#19968a] hover:to-[#0e776e] disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition"
                  >
                    {isSubmitting ? 'Securing Slot...' : 'Confirm Appointment Request'}
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
