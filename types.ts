
export enum AppView {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  OTP = 'OTP',
  DASHBOARD = 'DASHBOARD',
  PROFILE = 'PROFILE',
  SERVICE_CATEGORIES = 'SERVICE_CATEGORIES',
  WIZARD = 'WIZARD',
  APPLICATIONS = 'APPLICATIONS',
  NEARBY_CENTERS = 'NEARBY_CENTERS',
  CHAT = 'CHAT',
  APPOINTMENT = 'APPOINTMENT',
  TRACKING = 'TRACKING',
  PAYMENT = 'PAYMENT',
  AGENT_PANEL = 'AGENT_PANEL',
  ADMIN_PANEL = 'ADMIN_PANEL',
  SETTINGS = 'SETTINGS',
  NOTIFICATIONS = 'NOTIFICATIONS'
}

export enum UserRole {
  USER = 'USER',
  AGENT = 'AGENT',
  ADMIN = 'ADMIN'
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
}

export interface Application {
  id: string;
  serviceName: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'ACTION_REQUIRED';
  date: string;
  progress: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}
