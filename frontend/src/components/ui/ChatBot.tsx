import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

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
      text: "NEXYOVI AI Node Active. How can I assist with your mission-critical deployment today?",
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

    setTimeout(() => {
      let botResponse = "";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('service') || lowerInput.includes('offer')) {
        botResponse = "We provide Africa's No. 1 AI logic design, elite ethical hacking, and national-scale digital infrastructure implementation.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
        botResponse = "Initialize a sync via our contact page or email us at sync@nexyovi.tech. Our nodes are scanning.";
      } else if (lowerInput.includes('africa') || lowerInput.includes('leader')) {
        botResponse = "NEXYOVI is the definitive #1 technology authority in Africa, leading the continent in neural implementation.";
      } else {
        botResponse = "Logical query detected. Would you like to explore our Mission Protocol or review the Project Continuum?";
      }

      const botMsg: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-brand-charcoal rounded-2xl flex items-center justify-center text-white shadow-premium group overflow-hidden border-0"
      >
        <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageSquare className="relative z-10" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-[60] w-[420px] h-[650px] bg-white border border-black/5 rounded-[3rem] shadow-floating overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-8 bg-brand-gray-light border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-blue shadow-sm border border-black/5">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest leading-none text-brand-charcoal">NEXYOVI AI</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                    <span className="text-[9px] font-black text-brand-charcoal/30 uppercase tracking-[0.2em] font-mono">Logic_Node_01_Stable</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl hover:bg-brand-gray-bold flex items-center justify-center transition-colors text-brand-charcoal/40 hover:text-brand-charcoal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-8 space-y-8 scrollbar-hide bg-white/50"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-6 rounded-[2rem] flex gap-4 ${
                    msg.sender === 'user' 
                      ? 'bg-brand-charcoal text-white rounded-tr-none' 
                      : 'bg-brand-gray-light border border-black/5 text-brand-charcoal rounded-tl-none shadow-sm'
                  }`}>
                    {msg.sender === 'bot' && <Sparkles size={16} className="text-brand-blue shrink-0 mt-1" />}
                    <div className="space-y-2">
                      <p className="text-sm font-bold leading-relaxed">{msg.text}</p>
                      <span className="text-[8px] font-black opacity-30 uppercase tracking-widest font-mono">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} // SYNC_OK
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-brand-gray-light border border-black/5 p-4 rounded-2xl rounded-tl-none flex gap-2">
                    {[0, 0.2, 0.4].map((d) => (
                       <motion.div key={d} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: d }} className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-8 border-t border-black/5 bg-white">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask NEXYOVI AI..."
                  className="w-full bg-brand-gray-light border border-black/5 rounded-2xl py-5 pl-8 pr-16 text-sm font-bold focus:outline-none focus:bg-white focus:border-brand-blue/30 transition-all font-inter text-brand-charcoal placeholder:text-brand-charcoal/20 shadow-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-charcoal text-white rounded-xl flex items-center justify-center hover:bg-brand-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-premium"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                {['Dominance', 'Security', 'AI Logic', 'Handshake'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="whitespace-nowrap px-6 py-2 rounded-full border border-black/5 bg-brand-gray-light text-[9px] font-black uppercase tracking-widest text-brand-charcoal/40 hover:bg-white hover:text-brand-blue hover:border-brand-blue/30 hover:shadow-premium transition-all"
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
