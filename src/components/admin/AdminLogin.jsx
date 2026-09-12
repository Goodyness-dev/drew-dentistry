import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { authApi } from '../../services/api';

export default function AdminLogin({ onLoginSuccess, onBackToSite }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter your staff portal password.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await authApi.login(password);
      if (result.success) {
        onLoginSuccess(result.user);
      } else {
        setError(result.error || 'Invalid credentials.');
      }
    } catch (err) {
      // Demo fallback: allow standard passwords if backend server is not running
      if (password === 'drew2025' || password === 'admin' || password === '1234') {
        onLoginSuccess({
          username: 'admin',
          role: 'Practice Administrator',
          name: 'Mrs. Drew & Team'
        });
      } else {
        setError('Invalid password. Default demo access key is "drew2025".');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#eff7fa] text-slate-900 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-2xl pointer-events-none" />

      {/* Back to Site Button */}
      <div className="w-full max-w-md mb-6 z-10">
        <button
          onClick={onBackToSite}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition px-3 py-1.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 cursor-pointer"
        >
          <span>&larr; Back to Patient Website</span>
        </button>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-8 sm:p-10 relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1ea69a] to-[#128a80] text-white mb-4 shadow-lg shadow-teal-500/20">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 10.5h-5.5V5a1.5 1.5 0 00-3 0v5.5H5a1.5 1.5 0 000 3h5.5V19a1.5 1.5 0 003 0v-5.5H19a1.5 1.5 0 000-3z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            {BUSINESS_INFO.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
            Staff Portal & Appointment Dispatch
          </p>
          <div className="inline-flex items-center space-x-1.5 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full mt-3 text-[11px] text-[#128a80]">
            <span className="font-semibold">Protected Clinical Management Suite</span>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start space-x-2">
            <span>⚠</span>
            <span className="leading-snug">{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Staff Access Key / Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (default: drew2025)"
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#1aa39b] focus:bg-white rounded-xl pl-4 pr-11 py-3 text-sm text-slate-900 placeholder-slate-400 transition outline-none"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-[#1ea69a] to-[#128a80] hover:from-[#19968a] hover:to-[#0e776e] disabled:opacity-50 text-white font-bold text-sm rounded-xl transition shadow-md active:scale-[0.99] cursor-pointer"
          >
            {isLoading ? 'Authenticating...' : 'Unlock Staff Dashboard'}
          </button>
        </form>

        {/* Helpful Tip */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400 leading-relaxed">
            Authorized staff only. Default demo password: <code className="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">drew2025</code>
          </p>
        </div>
      </div>
    </div>
  );
}
