
import React, { useState, useEffect, useCallback } from 'react';
import { AppView, UserRole, UserProfile } from './types';
import { MOCK_USER } from './constants';
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';
import ServiceCategoriesView from './views/ServiceCategoriesView';
import WizardView from './views/WizardView';
import ProfileView from './views/ProfileView';
import AppointmentView from './views/AppointmentView';
import ChatAssistantView from './views/ChatAssistantView';
import TrackingView from './views/TrackingView';
import PaymentView from './views/PaymentView';
import AgentPanelView from './views/AgentPanelView';
import AdminPanelView from './views/AdminPanelView';
import SettingsView from './views/SettingsView';
import NotificationView from './views/NotificationView';
import { getIcon } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LOGIN);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState<number>(3);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.replace('bg-slate-50', 'bg-slate-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.replace('bg-slate-900', 'bg-slate-50');
    }
  }, [isDarkMode]);

  const handleLogin = (role: UserRole) => {
    setUser({ ...MOCK_USER, role } as UserProfile);
    setCurrentView(role === UserRole.USER ? AppView.DASHBOARD : (role === UserRole.AGENT ? AppView.AGENT_PANEL : AppView.ADMIN_PANEL));
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView(AppView.LOGIN);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.LOGIN:
      case AppView.SIGNUP:
      case AppView.OTP:
        return <LoginView onLogin={handleLogin} currentView={currentView} setView={setCurrentView} />;
      case AppView.DASHBOARD:
        return <DashboardView setView={setCurrentView} user={user!} />;
      case AppView.SERVICE_CATEGORIES:
        return <ServiceCategoriesView setView={setCurrentView} />;
      case AppView.WIZARD:
        return <WizardView setView={setCurrentView} />;
      case AppView.PROFILE:
        return <ProfileView setView={setCurrentView} user={user!} onLogout={handleLogout} />;
      case AppView.APPOINTMENT:
        return <AppointmentView setView={setCurrentView} />;
      case AppView.CHAT:
        return <ChatAssistantView setView={setCurrentView} />;
      case AppView.TRACKING:
        return <TrackingView setView={setCurrentView} />;
      case AppView.PAYMENT:
        return <PaymentView setView={setCurrentView} />;
      case AppView.AGENT_PANEL:
        return <AgentPanelView setView={setCurrentView} onLogout={handleLogout} />;
      case AppView.ADMIN_PANEL:
        return <AdminPanelView setView={setCurrentView} onLogout={handleLogout} />;
      case AppView.SETTINGS:
        return <SettingsView setView={setCurrentView} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />;
      case AppView.NOTIFICATIONS:
        return <NotificationView setView={setCurrentView} />;
      default:
        return <DashboardView setView={setCurrentView} user={user!} />;
    }
  };

  const showNavbar = user && currentView !== AppView.LOGIN && currentView !== AppView.WIZARD && currentView !== AppView.PAYMENT;

  return (
    <div className={`min-h-screen max-w-lg mx-auto relative shadow-2xl bg-white dark:bg-slate-800 transition-colors duration-300 overflow-hidden flex flex-col`}>
      {/* Header */}
      {showNavbar && (
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
            <h1 className="font-bold text-lg dark:text-white">BS 24/7</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView(AppView.NOTIFICATIONS)}
              className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"
            >
              {getIcon('Bell')}
              {notifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            <button 
              onClick={() => setCurrentView(AppView.PROFILE)}
              className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-300 dark:border-slate-600"
            >
              <img src={user?.avatar} alt="Profile" className="w-full h-full object-cover" />
            </button>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {renderView()}
      </main>

      {/* Bottom Nav */}
      {showNavbar && user.role === UserRole.USER && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white dark:bg-slate-800 border-t dark:border-slate-700 px-6 py-3 flex justify-between items-center z-50">
          <NavItem active={currentView === AppView.DASHBOARD} icon="Home" label="Home" onClick={() => setCurrentView(AppView.DASHBOARD)} />
          <NavItem active={currentView === AppView.TRACKING} icon="IdCard" label="Status" onClick={() => setCurrentView(AppView.TRACKING)} />
          <NavItem active={currentView === AppView.CHAT} icon="MessageSquare" label="AI Help" onClick={() => setCurrentView(AppView.CHAT)} />
          <NavItem active={currentView === AppView.SETTINGS} icon="Settings" label="Settings" onClick={() => setCurrentView(AppView.SETTINGS)} />
        </nav>
      )}
    </div>
  );
};

const NavItem: React.FC<{ active: boolean; icon: string; label: string; onClick: () => void }> = ({ active, icon, label, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`}>
    {getIcon(icon, 24)}
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);

export default App;
