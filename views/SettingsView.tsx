
import React from 'react';
import { AppView } from '../types';
import { getIcon } from '../constants';

const SettingsView: React.FC<{ setView: (view: AppView) => void; isDarkMode: boolean; toggleDarkMode: () => void }> = ({ setView, isDarkMode, toggleDarkMode }) => {
  return (
    <div className="px-6 py-8 space-y-8">
      <h2 className="text-2xl font-bold dark:text-white">Settings</h2>

      <section className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Appearance</h3>
        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border dark:border-slate-700 flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="text-blue-600">{getIcon(isDarkMode ? 'ShieldCheck' : 'ShieldCheck', 20)}</div>
             <div>
               <p className="text-sm font-bold dark:text-white">Dark Mode</p>
               <p className="text-[10px] text-slate-500">Easier on the eyes</p>
             </div>
           </div>
           <button 
             onClick={toggleDarkMode}
             className={`w-12 h-6 rounded-full transition-colors relative ${isDarkMode ? 'bg-blue-600' : 'bg-slate-200'}`}
           >
             <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isDarkMode ? 'right-1' : 'left-1'}`}></div>
           </button>
        </div>

        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border dark:border-slate-700 flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="text-blue-600">{getIcon('Passport', 20)}</div>
             <div>
               <p className="text-sm font-bold dark:text-white">Language</p>
               <p className="text-[10px] text-slate-500">English (India)</p>
             </div>
           </div>
           <button className="text-xs font-bold text-blue-600">Change</button>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Notifications</h3>
        <div className="space-y-2">
           <ToggleItem label="Push Notifications" desc="Stay updated on app status" checked />
           <ToggleItem label="Email Updates" desc="Weekly summary & docs" checked={false} />
           <ToggleItem label="SMS Alerts" desc="Critical status changes" checked />
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">App Info</h3>
        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-3xl p-6 text-center space-y-2">
           <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 mx-auto shadow-sm font-bold">B</div>
           <p className="font-bold dark:text-white">BS 24/7 v1.0.4</p>
           <p className="text-[10px] text-slate-500">Made for a Digital India</p>
           <div className="pt-4 flex justify-center gap-4 text-blue-600 text-xs font-bold">
             <button>License</button>
             <button>Support</button>
           </div>
        </div>
      </section>
    </div>
  );
};

const ToggleItem: React.FC<{ label: string; desc: string; checked: boolean }> = ({ label, desc, checked }) => (
  <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border dark:border-slate-700 flex items-center justify-between">
    <div>
      <p className="text-sm font-bold dark:text-white">{label}</p>
      <p className="text-[10px] text-slate-500">{desc}</p>
    </div>
    <button className={`w-10 h-5 rounded-full relative transition-colors ${checked ? 'bg-blue-600' : 'bg-slate-200'}`}>
      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${checked ? 'right-0.5' : 'left-0.5'}`}></div>
    </button>
  </div>
);

export default SettingsView;
