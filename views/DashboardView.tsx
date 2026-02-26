
import React from 'react';
import { AppView, UserProfile } from '../types';
import { getIcon, SERVICE_CATEGORIES } from '../constants';

interface DashboardViewProps {
  setView: (view: AppView) => void;
  user: UserProfile;
}

const DashboardView: React.FC<DashboardViewProps> = ({ setView, user }) => {
  return (
    <div className="px-6 py-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">Hello, {user.name} 👋</h3>
            <p className="text-blue-100 text-sm">Ready to assist with your docs.</p>
          </div>
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
            {getIcon('ShieldCheck', 24)}
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4">
            <p className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">Active Apps</p>
            <p className="text-2xl font-bold">02</p>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4">
            <p className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">Saved Drafts</p>
            <p className="text-2xl font-bold">01</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <section>
        <h4 className="font-bold mb-4 dark:text-white">Quick Actions</h4>
        <div className="grid grid-cols-2 gap-4">
          <ActionTile 
            onClick={() => setView(AppView.SERVICE_CATEGORIES)}
            title="New Application"
            desc="Start applying"
            icon="FileText"
            color="bg-orange-50 dark:bg-orange-900/20"
            iconColor="text-orange-600"
          />
          <ActionTile 
            onClick={() => setView(AppView.TRACKING)}
            title="My Applications"
            desc="Track status"
            icon="IdCard"
            color="bg-green-50 dark:bg-green-900/20"
            iconColor="text-green-600"
          />
          <ActionTile 
            onClick={() => setView(AppView.APPOINTMENT)}
            title="Nearby Centers"
            desc="Visit in-person"
            icon="MapPin"
            color="bg-blue-50 dark:bg-blue-900/20"
            iconColor="text-blue-600"
          />
          <ActionTile 
            onClick={() => setView(AppView.CHAT)}
            title="AI Chat"
            desc="Get guidance"
            icon="MessageSquare"
            color="bg-purple-50 dark:bg-purple-900/20"
            iconColor="text-purple-600"
          />
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold dark:text-white">Services Categories</h4>
          <button onClick={() => setView(AppView.SERVICE_CATEGORIES)} className="text-blue-600 text-sm font-bold">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {SERVICE_CATEGORIES.map(cat => (
            <button key={cat.id} className="flex-shrink-0 flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {getIcon(cat.icon, 28)}
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h4 className="font-bold mb-4 dark:text-white">Recent Updates</h4>
        <div className="space-y-3">
          <ActivityItem status="APPROVED" title="Passport Renewal" time="2h ago" />
          <ActivityItem status="ACTION_REQUIRED" title="Income Certificate" time="Yesterday" />
        </div>
      </section>
    </div>
  );
};

const ActionTile: React.FC<{ onClick: () => void; title: string; desc: string; icon: string; color: string; iconColor: string }> = ({ onClick, title, desc, icon, color, iconColor }) => (
  <button onClick={onClick} className={`${color} p-4 rounded-3xl text-left transition-transform active:scale-95 flex flex-col h-full justify-between border dark:border-white/5`}>
    <div className={`w-10 h-10 ${iconColor} bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
      {getIcon(icon)}
    </div>
    <div>
      <p className="font-bold text-slate-800 dark:text-slate-100 leading-tight">{title}</p>
      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{desc}</p>
    </div>
  </button>
);

const ActivityItem: React.FC<{ status: string; title: string; time: string }> = ({ status, title, time }) => {
  const isAction = status === 'ACTION_REQUIRED';
  return (
    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl flex items-center justify-between border dark:border-slate-700">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${isAction ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`}></div>
        <div>
          <p className="text-sm font-bold dark:text-white">{title}</p>
          <p className="text-[10px] text-slate-500">{status.replace('_', ' ')} • {time}</p>
        </div>
      </div>
      <button className="p-2 text-slate-400">
        {getIcon('Settings', 16)}
      </button>
    </div>
  );
};

export default DashboardView;
