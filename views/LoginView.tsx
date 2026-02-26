
import React, { useState } from 'react';
import { AppView, UserRole } from '../types';
import { getIcon } from '../constants';

interface LoginViewProps {
  onLogin: (role: UserRole) => void;
  currentView: AppView;
  setView: (view: AppView) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin, currentView, setView }) => {
  const [step, setStep] = useState<'ID' | 'OTP'>('ID');
  const [id, setId] = useState('');
  const [roleSelection, setRoleSelection] = useState<UserRole>(UserRole.USER);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'ID') {
      setStep('OTP');
    } else {
      onLogin(roleSelection);
    }
  };

  return (
    <div className="px-8 pt-12 flex flex-col min-h-full">
      <div className="mb-10 text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center text-white text-4xl font-black mb-6 shadow-xl shadow-blue-200">B</div>
        <h2 className="text-3xl font-bold dark:text-white">Welcome to BS 24/7</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Government Document Assistance, Reimagined.</p>
      </div>

      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-700 rounded-xl mb-8">
        <button 
          onClick={() => setRoleSelection(UserRole.USER)}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${roleSelection === UserRole.USER ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-300 shadow-sm' : 'text-slate-500'}`}
        >
          Citizen
        </button>
        <button 
          onClick={() => setRoleSelection(UserRole.AGENT)}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${roleSelection === UserRole.AGENT ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-300 shadow-sm' : 'text-slate-500'}`}
        >
          Agent
        </button>
        <button 
          onClick={() => setRoleSelection(UserRole.ADMIN)}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${roleSelection === UserRole.ADMIN ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-300 shadow-sm' : 'text-slate-500'}`}
        >
          Admin
        </button>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        {step === 'ID' ? (
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Mobile or Email</label>
            <input 
              type="text" 
              required
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Enter OTP</label>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <input 
                  key={i}
                  type="text" 
                  maxLength={1}
                  className="w-full h-12 text-center text-xl font-bold rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">Resend OTP in 00:45</p>
          </div>
        )}

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all">
          {step === 'ID' ? 'Send OTP' : 'Login'}
        </button>
      </form>

      <div className="mt-auto pb-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Don't have an account? <button className="text-blue-600 font-bold">Sign Up</button>
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-xs">
          {getIcon('ShieldCheck', 14)}
          <span>Secure AES-256 Encryption Enabled</span>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
