
import React from 'react';
import { AppView } from '../types';
import { getIcon } from '../constants';

const AdminPanelView: React.FC<{ setView: (view: AppView) => void; onLogout: () => void }> = ({ onLogout }) => {
  return (
    <div className="px-6 py-8 space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold dark:text-white">System Admin</h2>
          <p className="text-sm text-slate-500">Platform Overview</p>
        </div>
        <button onClick={onLogout} className="p-2 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-xl">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
        </button>
      </header>

      <div className="grid grid-cols-2 gap-4">
         <AdminCard icon="Users" label="Total Agents" value="245" color="text-blue-600" />
         <AdminCard icon="FileText" label="Services" value="48" color="text-purple-600" />
         <AdminCard icon="BarChart3" label="Revenue" value="₹12.4L" color="text-green-600" />
         <AdminCard icon="ShieldCheck" label="Security" value="Healthy" color="text-orange-600" />
      </div>

      <section className="bg-slate-900 text-white p-6 rounded-[40px] shadow-2xl relative overflow-hidden">
        <h3 className="font-bold mb-4">Quick Management</h3>
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <button className="bg-white/10 backdrop-blur-md p-4 rounded-3xl text-left hover:bg-white/20 transition-all">
             <div className="mb-2">{getIcon('Users', 20)}</div>
             <p className="text-xs font-bold">Manage Agents</p>
          </button>
          <button className="bg-white/10 backdrop-blur-md p-4 rounded-3xl text-left hover:bg-white/20 transition-all">
             <div className="mb-2">{getIcon('Settings', 20)}</div>
             <p className="text-xs font-bold">Service Config</p>
          </button>
          <button className="bg-white/10 backdrop-blur-md p-4 rounded-3xl text-left hover:bg-white/20 transition-all">
             <div className="mb-2">{getIcon('CreditCard', 20)}</div>
             <p className="text-xs font-bold">Pricing Rules</p>
          </button>
          <button className="bg-white/10 backdrop-blur-md p-4 rounded-3xl text-left hover:bg-white/20 transition-all">
             <div className="mb-2">{getIcon('Bell', 20)}</div>
             <p className="text-xs font-bold">Broadcast</p>
          </button>
        </div>
        <div className="absolute right-[-30px] top-[-30px] w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20"></div>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold dark:text-white">Recent Security Logs</h3>
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border dark:border-slate-700">
            <div className="w-8 h-8 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center text-slate-400">
               {getIcon('ShieldCheck', 16)}
            </div>
            <div className="flex-1">
               <p className="text-xs font-bold dark:text-white">Admin Login Successful</p>
               <p className="text-[10px] text-slate-500">IP: 192.168.1.1 • 2m ago</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        ))}
      </section>
    </div>
  );
};

const AdminCard: React.FC<{ icon: string; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border dark:border-slate-700 shadow-sm">
    <div className={`w-8 h-8 ${color} bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-3`}>
      {getIcon(icon, 18)}
    </div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    <p className="text-xl font-bold dark:text-white mt-1">{value}</p>
  </div>
);

export default AdminPanelView;
