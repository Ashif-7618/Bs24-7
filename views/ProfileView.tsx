
import React from 'react';
import { AppView, UserProfile } from '../types';
import { getIcon } from '../constants';

const ProfileView: React.FC<{ setView: (view: AppView) => void; user: UserProfile; onLogout: () => void }> = ({ setView, user, onLogout }) => {
  return (
    <div className="px-6 py-8 space-y-8">
      <div className="text-center space-y-4">
        <div className="relative w-24 h-24 mx-auto">
          <img src={user.avatar} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl" />
          <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-lg border-2 border-white dark:border-slate-800">
             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold dark:text-white">{user.name}</h2>
          <p className="text-sm text-slate-500">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
         <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-3xl border dark:border-slate-700 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone</p>
            <p className="text-xs font-bold dark:text-white mt-1">{user.phone}</p>
         </div>
         <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-3xl border dark:border-slate-700 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kyc Status</p>
            <p className="text-xs font-bold text-green-600 mt-1">Verified</p>
         </div>
      </div>

      <section className="space-y-3">
        <h3 className="font-bold text-sm text-slate-400 uppercase tracking-widest px-2">Account Settings</h3>
        <ProfileLink icon="User" label="Edit Profile" onClick={() => {}} />
        <ProfileLink icon="ShieldCheck" label="Security & 2FA" onClick={() => {}} />
        <ProfileLink icon="Bell" label="Notification Settings" onClick={() => setView(AppView.NOTIFICATIONS)} />
        <ProfileLink icon="MapPin" label="Saved Addresses" onClick={() => {}} />
      </section>

      <section className="space-y-3">
        <h3 className="font-bold text-sm text-slate-400 uppercase tracking-widest px-2">Support</h3>
        <ProfileLink icon="FileText" label="My Documents" onClick={() => setView(AppView.TRACKING)} />
        <ProfileLink icon="Gavel" label="Privacy Policy" onClick={() => {}} />
        <ProfileLink icon="MessageSquare" label="Help Center" onClick={() => setView(AppView.CHAT)} />
      </section>

      <button onClick={onLogout} className="w-full py-4 text-red-500 font-bold bg-red-50 dark:bg-red-900/10 rounded-3xl mt-4">
         Sign Out
      </button>
    </div>
  );
};

const ProfileLink: React.FC<{ icon: string; label: string; onClick: () => void }> = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border dark:border-slate-700 hover:bg-slate-50 transition-all">
    <div className="flex items-center gap-3">
      <div className="text-slate-400">{getIcon(icon, 20)}</div>
      <span className="text-sm font-bold dark:text-white">{label}</span>
    </div>
    <div className="text-slate-300">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
    </div>
  </button>
);

export default ProfileView;
