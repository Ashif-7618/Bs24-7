
import React from 'react';
import { AppView } from '../types';
import { getIcon } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', apps: 12 },
  { name: 'Tue', apps: 19 },
  { name: 'Wed', apps: 15 },
  { name: 'Thu', apps: 22 },
  { name: 'Fri', apps: 30 },
  { name: 'Sat', apps: 10 },
  { name: 'Sun', apps: 5 },
];

const AgentPanelView: React.FC<{ setView: (view: AppView) => void; onLogout: () => void }> = ({ onLogout }) => {
  return (
    <div className="px-6 py-8 space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold dark:text-white">Agent Dashboard</h2>
          <p className="text-sm text-slate-500">Managing Mumbai Central Zone</p>
        </div>
        <button onClick={onLogout} className="p-2 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-xl">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
        </button>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-sm border dark:border-slate-700">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">New Requests</p>
           <p className="text-2xl font-bold dark:text-white">18</p>
           <div className="mt-2 text-[10px] text-green-600 font-bold">+12% from yesterday</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-sm border dark:border-slate-700">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Avg Response</p>
           <p className="text-2xl font-bold dark:text-white">4.2h</p>
           <div className="mt-2 text-[10px] text-blue-600 font-bold">In target range</div>
        </div>
      </div>

      <section className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border dark:border-slate-700">
        <h3 className="font-bold dark:text-white mb-6">Applications Trends</h3>
        <div className="h-48 w-full">
           <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={data}>
               <defs>
                 <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                   <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                 </linearGradient>
               </defs>
               <Tooltip />
               <Area type="monotone" dataKey="apps" stroke="#2563eb" fillOpacity={1} fill="url(#colorApps)" strokeWidth={2} />
             </AreaChart>
           </ResponsiveContainer>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold dark:text-white">Pending Review</h3>
          <button className="text-xs font-bold text-blue-600">View All</button>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                {getIcon('User', 20)}
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">App #{1000 + i}</p>
                <p className="text-[10px] text-slate-500">Passport Renewal • 15m ago</p>
              </div>
            </div>
            <button className="px-3 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-lg shadow-md shadow-blue-200">Review</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AgentPanelView;
