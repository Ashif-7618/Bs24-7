
import React, { useState } from 'react';
import { AppView } from '../types';
import { getIcon } from '../constants';

const WizardView: React.FC<{ setView: (view: AppView) => void }> = ({ setView }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else setView(AppView.PAYMENT);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
    else setView(AppView.DASHBOARD);
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b dark:border-slate-700">
        <button onClick={prevStep} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full dark:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="text-center">
          <h2 className="font-bold dark:text-white text-sm">Passport Application</h2>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Step {step} of {totalSteps}</p>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1">
        <div 
          className="bg-blue-600 h-full transition-all duration-500" 
          style={{ width: `${(step / totalSteps) * 100}%` }}
        ></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 overflow-y-auto no-scrollbar">
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right duration-300">
            <h3 className="text-xl font-bold dark:text-white">Personal Information</h3>
            <div className="space-y-4">
              <Input label="Full Name (As per ID)" placeholder="John Doe" />
              <Input label="Father/Spouse Name" placeholder="Richard Doe" />
              <Input label="Date of Birth" type="date" placeholder="" />
              <div className="flex gap-4">
                <Input label="Gender" placeholder="Male" className="flex-1" />
                <Input label="Nationality" placeholder="Indian" className="flex-1" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right duration-300">
            <h3 className="text-xl font-bold dark:text-white">Address Details</h3>
            <div className="space-y-4">
              <Input label="House No. / Street" placeholder="123 Green Ave" />
              <Input label="City / Village" placeholder="Mumbai" />
              <div className="flex gap-4">
                <Input label="State" placeholder="Maharashtra" className="flex-1" />
                <Input label="Pincode" placeholder="400001" className="flex-1" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right duration-300">
            <h3 className="text-xl font-bold dark:text-white">Upload Documents</h3>
            <p className="text-sm text-slate-500">Securely upload your supporting documents (Max 5MB each).</p>
            <div className="space-y-4">
              <FileUploader label="Identity Proof" required />
              <FileUploader label="Address Proof" required />
              <FileUploader label="Birth Certificate" />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in slide-in-from-right duration-300">
            <h3 className="text-xl font-bold dark:text-white">Preview & Submit</h3>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-5 border dark:border-slate-700 space-y-4">
              <SummaryItem label="Full Name" value="John Doe" />
              <SummaryItem label="Service" value="Passport Renewal" />
              <SummaryItem label="Documents" value="3 Files Uploaded" />
              <SummaryItem label="Priority" value="Normal" />
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
              <p className="text-xs text-slate-600 dark:text-slate-400">I hereby declare that all information provided is true and correct to the best of my knowledge.</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-6 bg-white dark:bg-slate-800 border-t dark:border-slate-700 flex gap-4">
        <button 
          onClick={prevStep}
          className="flex-1 py-4 border border-slate-200 dark:border-slate-700 dark:text-white font-bold rounded-2xl hover:bg-slate-50"
        >
          Back
        </button>
        <button 
          onClick={nextStep}
          className="flex-[2] py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200"
        >
          {step === totalSteps ? 'Proceed to Pay' : 'Next Step'}
        </button>
      </div>
    </div>
  );
};

const Input: React.FC<{ label: string; placeholder: string; type?: string; className?: string }> = ({ label, placeholder, type = "text", className = "" }) => (
  <div className={className}>
    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

const FileUploader: React.FC<{ label: string; required?: boolean }> = ({ label, required }) => (
  <div className="relative border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center group hover:border-blue-500 transition-all cursor-pointer">
    <div className="text-blue-600 mb-2 flex justify-center">{getIcon('FileText', 32)}</div>
    <p className="text-sm font-bold dark:text-white">{label} {required && '*'}</p>
    <p className="text-[10px] text-slate-500 mt-1">Tap to select or drop file (PDF/JPG)</p>
    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
  </div>
);

const SummaryItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-600 last:border-0 last:pb-0">
    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</span>
    <span className="text-sm font-bold dark:text-white">{value}</span>
  </div>
);

export default WizardView;
