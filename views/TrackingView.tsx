
import React from 'react';
import { AppView } from '../types';
import { getIcon } from '../constants';

const TrackingView: React.FC<{ setView: (view: AppView) => void }> = ({ setView }) => {
  const apps = [
    { id: 'APP1029', name: 'Passport Renewal', status: 'IN_REVIEW', date: 'Oct 24, 2023', progress: 60, type: 'Passport' },
    { id: 'APP1034', name: 'PAN Card Issue', status: 'DISPATCHED', date: 'Oct 20, 2023', progress: 90, type: 'IDCard' },
    { id: 'APP1001', name: 'Income Certificate', status: 'REJECTED', date: 'Oct 15, 2023', progress: 100, type: 'FileText' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN_REVIEW': return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
      case 'DISPATCHED': return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'REJECTED': return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="px-6 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold dark:text-white">Track Progress</h2>
        <button className="p-2 text-slate-500 dark:text-slate-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/></svg>
        </button>
      </div>

      <div className="space-y-4">
        {apps.map(app => (
          <div key={app.id} className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                  {getIcon(app.type, 24)}
                </div>
                <div>
                  <h3 className="font-bold dark:text-white text-sm">{app.name}</h3>
                  <p className="text-[10px] text-slate-500 font-medium">#{app.id} • {app.date}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${getStatusColor(app.status)}`}>
                {app.status.replace('_', ' ')}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Progress</span>
                <span>{app.progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${app.status === 'REJECTED' ? 'bg-red-500' : 'bg-blue-600'}`}
                  style={{ width: `${app.progress}%` }}
                ></div>
              </div>
            </div>

            {app.status === 'REJECTED' && (
              <button className="w-full mt-4 py-3 bg-red-50 text-red-600 font-bold rounded-xl text-xs hover:bg-red-100 transition-colors">
                View Reasons & Re-apply
              </button>
            )}
            
            {app.status === 'DISPATCHED' && (
              <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Tracking: 123456789IN</span>
                </div>
                <button className="text-[10px] text-blue-600 font-bold">Trace Post</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={() => setView(AppView.SERVICE_CATEGORIES)} className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl text-slate-400 font-bold hover:border-blue-500 hover:text-blue-500 transition-all">
        + Apply for another Document
      </button>
    </div>
  );
};

export default TrackingView;
