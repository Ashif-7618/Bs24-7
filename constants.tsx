
import React from 'react';
import { 
  IdCard, 
  FileText, 
  Contact, 
  Gavel, 
  GraduationCap, 
  Home, 
  User, 
  MapPin, 
  MessageSquare, 
  Bell, 
  Settings,
  ShieldCheck,
  CreditCard,
  BarChart3,
  Users
} from 'lucide-react';
import { ServiceCategory } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: '1', name: 'ID Cards', icon: 'IdCard', description: 'Aadhaar, PAN, Voter ID' },
  { id: '2', name: 'Certificates', icon: 'FileText', description: 'Birth, Death, Income' },
  { id: '3', name: 'Passport', icon: 'Passport', description: 'New Application & Renewal' },
  { id: '4', name: 'Legal', icon: 'Gavel', description: 'Affidavits, Property Docs' },
  { id: '5', name: 'Scholarships', icon: 'GraduationCap', description: 'State & Central Schemes' },
];

export const getIcon = (name: string, size = 20, className = "") => {
  const icons: Record<string, any> = {
    IdCard: <IdCard size={size} className={className} />,
    FileText: <FileText size={size} className={className} />,
    Passport: <Contact size={size} className={className} />,
    Gavel: <Gavel size={size} className={className} />,
    GraduationCap: <GraduationCap size={size} className={className} />,
    Home: <Home size={size} className={className} />,
    User: <User size={size} className={className} />,
    MapPin: <MapPin size={size} className={className} />,
    MessageSquare: <MessageSquare size={size} className={className} />,
    Bell: <Bell size={size} className={className} />,
    Settings: <Settings size={size} className={className} />,
    ShieldCheck: <ShieldCheck size={size} className={className} />,
    CreditCard: <CreditCard size={size} className={className} />,
    BarChart3: <BarChart3 size={size} className={className} />,
    Users: <Users size={size} className={className} />,
  };
  return icons[name] || <FileText size={size} className={className} />;
};

export const MOCK_USER = {
  id: 'u1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+91 9876543210',
  role: 'USER',
  avatar: 'https://picsum.photos/seed/john/200'
};
