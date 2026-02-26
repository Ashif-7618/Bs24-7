
import React, { useState, useRef, useEffect } from 'react';
import { AppView, Message } from '../types';
import { getIcon } from '../constants';
import { getChatResponse } from '../services/geminiService';

const ChatAssistantView: React.FC<{ setView: (view: AppView) => void }> = ({ setView }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am your BS 24/7 assistant. How can I help you with your government documents today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg: Message = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await getChatResponse(messages.concat(userMsg).map(m => ({ role: m.role, content: m.content })));
    
    setMessages(prev => [...prev, { role: 'assistant', content: response, timestamp: new Date() }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
      <header className="p-4 bg-white dark:bg-slate-800 border-b dark:border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
            {getIcon('MessageSquare', 24)}
          </div>
          <div>
            <h2 className="font-bold dark:text-white">DocAssistant AI</h2>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">Online</span>
            </div>
          </div>
        </div>
        <button className="text-xs text-blue-600 font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg">Talk to Agent</button>
      </header>

      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 dark:text-white rounded-tl-none'}`}>
              <p className="leading-relaxed">{m.content}</p>
              <p className={`text-[10px] mt-1 ${m.role === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>
                {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-300 animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-300 animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-slate-300 animate-bounce delay-150"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white dark:bg-slate-800 border-t dark:border-slate-700">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Passport, PAN, etc..."
            className="flex-1 bg-slate-100 dark:bg-slate-900 dark:text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 disabled:opacity-50"
          >
            <svg className="w-6 h-6 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          </button>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar py-1">
          {['Passport Status', 'Apply for PAN', 'Center Near Me'].map(tag => (
            <button key={tag} onClick={() => setInput(tag)} className="flex-shrink-0 px-3 py-1 bg-slate-50 dark:bg-slate-700 border dark:border-slate-600 rounded-full text-[10px] font-bold text-slate-500 dark:text-slate-300">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatAssistantView;
