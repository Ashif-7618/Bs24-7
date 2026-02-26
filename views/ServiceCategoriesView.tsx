
import React, { useState } from 'react';
import { AppView } from '../types';
import { getIcon, SERVICE_CATEGORIES } from '../constants';

const ServiceCategoriesView: React.FC<{ setView: (view: AppView) => void }> = ({ setView }) => {
  const [search, setSearch] = useState('');

  const filtered = SERVICE_CATEGORIES.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="px-6 py-8 space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => setView(AppView.DASHBOARD)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl dark:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <h2 className="text-2xl font-bold dark:text-white">Service Directory</h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{getIcon('Search', 20)}</div>
        <input 
          type="text" 
          placeholder="Search for ID cards, Passports..."
          className="w-full bg-slate-100 dark:bg-slate-800 dark:text-white px-12 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filtered.map(cat => (
          <button 
            key={cat.id} 
            onClick={() => setView(AppView.WIZARD)}
            className="flex items-center gap-4 p-5 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-3xl hover:border-blue-500 transition-all text-left shadow-sm group"
          >
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {getIcon(cat.icon, 28)}
            </div>
            <div className="flex-1">
              <h3 className="font-bold dark:text-white">{cat.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{cat.description}</p>
            </div>
            <div className="text-slate-300 group-hover:text-blue-500 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
        ))}
      </div>

      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-[40px] text-center border border-blue-100 dark:border-blue-800">
         <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4 shadow-sm">
           {getIcon('MessageSquare', 24)}
         </div>
         <h4 className="font-bold dark:text-white mb-2">Can't find a service?</h4>
         <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Our AI assistant can guide you through special requests and custom documents.</p>
         <button onClick={() => setView(AppView.CHAT)} className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs">Chat Now</button>
      </div>
    </div>
  );
};

export default ServiceCategoriesView;
