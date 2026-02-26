
import React, { useState } from 'react';
import { AppView } from '../types';
import { getIcon } from '../constants';

const PaymentView: React.FC<{ setView: (view: AppView) => void }> = ({ setView }) => {
  const [method, setMethod] = useState<'UPI' | 'CARD' | 'PAYTM'>('UPI');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setView(AppView.TRACKING);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
      <div className="p-6 bg-white dark:bg-slate-800 border-b dark:border-slate-700">
        <h2 className="text-xl font-bold dark:text-white">Complete Payment</h2>
        <p className="text-xs text-slate-500 mt-1">Application ID: #APP1029</p>
      </div>

      <div className="p-6 space-y-6 flex-1 overflow-y-auto no-scrollbar">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Amount Due</p>
            <h3 className="text-4xl font-bold">₹1,500.00</h3>
            <p className="text-[10px] text-slate-500 mt-4 font-medium uppercase tracking-tighter">Normal Processing Fee + GST</p>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
            {getIcon('ShieldCheck', 120)}
          </div>
        </div>

        <section className="space-y-4">
          <h4 className="text-sm font-bold dark:text-white">Payment Method</h4>
          
          <button onClick={() => setMethod('UPI')} className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${method === 'UPI' ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'border-slate-100 dark:bg-slate-800 dark:border-slate-700'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                <span className="font-bold italic">UPI</span>
              </div>
              <span className="font-bold text-sm dark:text-white">UPI / GPay / PhonePe</span>
            </div>
            {method === 'UPI' && <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>}
          </button>

          <button onClick={() => setMethod('PAYTM')} className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${method === 'PAYTM' ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'border-slate-100 dark:bg-slate-800 dark:border-slate-700'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-sm font-black text-xs">P</div>
              <span className="font-bold text-sm dark:text-white">PayTM Wallet</span>
            </div>
            {method === 'PAYTM' && <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>}
          </button>

          <button onClick={() => setMethod('CARD')} className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${method === 'CARD' ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'border-slate-100 dark:bg-slate-800 dark:border-slate-700'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-700 shadow-sm">{getIcon('CreditCard', 20)}</div>
              <span className="font-bold text-sm dark:text-white">Credit / Debit Card</span>
            </div>
            {method === 'CARD' && <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>}
          </button>
        </section>

        {method === 'CARD' && (
          <div className="animate-in slide-in-from-top duration-300 space-y-4">
             <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500" />
             <div className="flex gap-4">
               <input type="text" placeholder="MM/YY" className="flex-1 px-4 py-3 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500" />
               <input type="password" placeholder="CVV" className="flex-1 px-4 py-3 rounded-xl border dark:bg-slate-900 dark:text-white dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white dark:bg-slate-800 border-t dark:border-slate-700 space-y-4">
        <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          {getIcon('ShieldCheck', 14)}
          <span>PCI DSS Compliant • 256-Bit SSL</span>
        </div>
        <button 
          onClick={handlePay}
          disabled={isProcessing}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-75"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Processing...</span>
            </>
          ) : (
            <span>Pay ₹1,500.00 Now</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentView;
