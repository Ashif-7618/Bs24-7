
import React, { useState } from 'react';
import { AppView } from '../types';
import { getIcon } from '../constants';

const AppointmentView: React.FC<{ setView: (view: AppView) => void }> = ({ setView }) => {
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null);

  const centers = [
    { id: 1, name: 'Mumbai Central PSK', distance: '1.2 km', address: 'Dr. E Moses Rd, Worli', time: '10 AM - 6 PM' },
    { id: 2, name: 'Andheri Passport Office', distance: '4.5 km', address: 'Saki Naka, Andheri East', time: '9 AM - 5 PM' },
    { id: 3, name: 'Borivali Citizen Center', distance: '12 km', address: 'SV Rd, Borivali West', time: '11 AM - 7 PM' },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
      {/* Map Simulation */}
      <div className="h-64 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           {/* Visual Pattern for Map */}
           <div className="absolute w-[800px] h-[800px] border border-slate-300 dark:border-slate-600 rounded-full -top-40 -left-40"></div>
           <div className="absolute w-[600px] h-[600px] border border-slate-300 dark:border-slate-600 rounded-full -top-20 -left-20"></div>
           <div className="absolute w-[400px] h-[400px] border border-slate-300 dark:border-slate-600 rounded-full 0 0"></div>
        </div>
        
        {/* Mock Map Pins */}
        <div className="absolute top-24 left-32 text-blue-600 drop-shadow-lg">{getIcon('MapPin', 32)}</div>
        <div className="absolute top-40 right-20 text-slate-400">{getIcon('MapPin', 24)}</div>
        <div className="absolute bottom-12 left-48 text-slate-400">{getIcon('MapPin', 24)}</div>

        <div className="absolute top-4 left-4 flex gap-2">
          <button className="bg-white dark:bg-slate-700 p-2 rounded-xl shadow-md text-slate-600 dark:text-white">{getIcon('MapPin', 20)}</button>
          <div className="bg-white dark:bg-slate-700 px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
            <span className="text-xs font-bold dark:text-white">Current: Mumbai, MH</span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-slate-800 -mt-6 rounded-t-[40px] px-6 pt-8 space-y-6 shadow-2xl relative z-10 overflow-y-auto no-scrollbar pb-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold dark:text-white">Nearby Centers</h2>
          <span className="text-xs text-blue-600 font-bold bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">3 Found</span>
        </div>

        <div className="space-y-4">
          {centers.map(center => (
            <div 
              key={center.id}
              onClick={() => setSelectedCenter(center.id)}
              className={`p-5 rounded-3xl border transition-all cursor-pointer ${selectedCenter === center.id ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'border-slate-100 dark:border-slate-700'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold dark:text-white">{center.name}</h3>
                <span className="text-xs font-bold text-slate-500">{center.distance}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{center.address}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>{center.time}</span>
                </div>
                {selectedCenter === center.id && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-200">Book Slot</button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-700/50 p-5 rounded-3xl border border-dashed dark:border-slate-600">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
              {getIcon('ShieldCheck', 24)}
            </div>
            <div>
              <h4 className="font-bold text-sm dark:text-white">Home Visit Available</h4>
              <p className="text-[10px] text-slate-500">Expert agent visits for biometric collection.</p>
            </div>
          </div>
          <button className="w-full py-3 bg-white dark:bg-slate-800 border dark:border-slate-600 text-blue-600 dark:text-blue-400 font-bold rounded-2xl text-xs">Request Home Visit</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentView;
