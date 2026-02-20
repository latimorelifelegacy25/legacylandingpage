import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, ShieldCheck } from 'lucide-react';
import { Message } from '../types';
import { APP_DATA } from '../constants';
import { mockAIService } from '../services/aiService';

interface AssistantProps {
  onClose: () => void;
}

const GREETINGS = [
  "Strategic Legacy Engine active. What are you trying to solve today—protection, growth, debt, or retirement?",
  "I'm here. Tell me your goal and your timeline (1–3 years, 3–10, or 10+).",
  "Quick start: what do you want protected (income, mortgage, family, business) and what do you want built (retirement, legacy, liquidity)?",
  "What brought you here today—coverage amount, living benefits, or an indexed growth strategy?",
];

function getRotatingGreeting(): string {
  try {
    const key = 'latimore_ai_greeting_index_v1';
    const raw = window.localStorage.getItem(key);
    const idx = raw ? Number(raw) : 0;
    const safeIdx = Number.isFinite(idx) ? idx : 0;
    const next = (safeIdx + 1) % GREETINGS.length;
    window.localStorage.setItem(key, String(next));
    return GREETINGS[safeIdx % GREETINGS.length];
  } catch {
    return GREETINGS[0];
  }
}

const Assistant: React.FC<AssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: getRotatingGreeting(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await mockAIService.generateContent(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I apologize for the technical difficulty. Please contact Jackson directly at ${APP_DATA.phone} or schedule a consultation at ${APP_DATA.links.booking}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="p-6 bg-[#1D3A5F] text-white flex justify-between items-center shrink-0 shadow-2xl relative z-20">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="bg-[#C29D6F] p-3 rounded-2xl shadow-inner text-white">
              <Bot size={28} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1D3A5F]"></div>
          </div>
          <div>
            <h3 className="font-black text-lg tracking-tight">Legacy AI</h3>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck size={10} className="text-[#C29D6F]" />
              <p className="text-[9px] text-[#C29D6F] font-black uppercase tracking-[0.2em]">Strategic Engine</p>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X size={24} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-[#1D3A5F] text-white' 
                : 'bg-white text-slate-800 shadow-sm border border-slate-100'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-[#C29D6F] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-[#C29D6F] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-[#C29D6F] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-200 shrink-0">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about wealth strategies, life insurance, or retirement..."
            className="flex-1 px-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C29D6F] text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-[#1D3A5F] text-white p-3 rounded-2xl hover:bg-[#152a45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
