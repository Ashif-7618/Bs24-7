
import React from 'react';
import { AppView } from '../types';
import { getIcon } from '../constants';

const NotificationView: React.FC<{ setView: (view: AppView) => void }> = ({ setView }) => {
  const notifications = [
    { id: 1, title: 'Application Approved', body: 'Your Passport renewal #APP1029 has been approved and sent for printing.', time: '2h ago', type: 'success' },
    { id: 2, title: 'Appointment Reminder', body: 'Friendly reminder for your appointment at Worli PSK tomorrow at 10 AM.', time: '5h ago', type: 'info' },
    { id: 3, title: 'Document Required', body: 'Action needed: Please upload a clear photo for your PAN card application.', time: '1d ago', type: 'alert' },
  ];

  return (
    <div className="px-6 py-8 space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => setView(AppView.DASHBOARD)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl dark:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <h2 className="text-2xl font-bold dark:text-white">Notifications</h2>
      </div>

      <div className="space-y-4">
        {notifications.map(n => (
          <div key={n.id} className="bg-white dark:bg-slate-800 p-5 rounded-3xl border dark:border-slate-700 flex gap-4 shadow-sm hover:border-blue-500 transition-all cursor-pointer">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              n.type === 'success' ? 'bg-green-50 text-green-600 dark:bg-green-900/20' : 
              n.type === 'alert' ? 'bg-red-50 text-red-600 dark:bg-red-900/20' : 
              'bg-blue-50 text-blue-600 dark:bg-blue-900/20'
            }`}>
              {getIcon(n.type === 'success' ? 'ShieldCheck' : n.type === 'alert' ? 'Bell' : 'MessageSquare', 20)}
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold dark:text-white">{n.title}</h3>
                <span className="text-[10px] text-slate-400 font-medium">{n.time}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{n.body}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-3 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">Mark all as read</button>
    </div>
  );
};

export default NotificationView;
