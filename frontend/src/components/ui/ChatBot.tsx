import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I am NEXYOVI AI. How can I assist you with our smart technology solutions today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Response logic
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('service') || lowerInput.includes('offer')) {
        botResponse = "We offer a wide range of services including IT & Network Installation, CCTV Systems, Web Development, UI/UX Design, Cybersecurity Testing, and Data Recovery.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
        botResponse = "You can contact us via our contact page or email us at sync@nexyovi.tech. Our nodes are always scanning for your signals.";
      } else if (lowerInput.includes('ai') || lowerInput.includes('bot')) {
        botResponse = "I am NEXYOVI AI, a decentralized reasoning engine designed to help you navigate our technological matrix.";
      } else {
        botResponse = "That's an interesting query. Would you like to explore our latest Mission Logs or initialize a sync with our engineering units?";
      }

      const botMsg: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-brand-charcoal rounded-2xl flex items-center justify-center text-white shadow-floating border border-white/10 group overflow-hidden"
      >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue" />
        <MessageSquare className="relative z-10 group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
            className="fixed bottom-28 right-8 z-[60] w-[400px] h-[600px] bg-white/90 backdrop-blur-3xl border border-black/10 rounded-[2.5rem] shadow-floating overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-brand-charcoal text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center">
                  <Bot size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest leading-none">NEXYOVI AI</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-mint animate-pulse" />
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Logic_Core_Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                    msg.sender === 'user' 
                      ? 'bg-brand-blue text-white rounded-tr-none' 
                      : 'bg-black/[0.03] border border-black/5 text-brand-charcoal rounded-tl-none'
                  }`}>
                    {msg.sender === 'bot' && <Sparkles size={16} className="text-brand-blue shrink-0 mt-1" />}
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                      <span className="text-[8px] font-bold opacity-30 uppercase tracking-widest">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    {msg.sender === 'user' && <User size={16} className="text-white/40 shrink-0 mt-1" />}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-black/[0.03] border border-black/5 p-4 rounded-2xl rounded-tl-none flex gap-2">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-black/5 bg-white/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask NEXYOVI AI..."
                  className="w-full bg-black/[0.03] border border-black/10 rounded-xl py-4 pl-6 pr-14 text-sm font-medium focus:outline-none focus:border-brand-blue/30 transition-all font-inter"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-charcoal text-white rounded-lg flex items-center justify-center hover:bg-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                {['Services', 'Contact', 'AI Logic'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="whitespace-nowrap px-4 py-1.5 rounded-full border border-black/5 bg-black/[0.02] text-[9px] font-black uppercase tracking-widest text-brand-charcoal/40 hover:bg-brand-blue/5 hover:text-brand-blue hover:border-brand-blue/20 transition-all"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
