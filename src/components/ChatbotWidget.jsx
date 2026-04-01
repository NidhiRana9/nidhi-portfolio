import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Bot, Sparkles } from 'lucide-react';

const QA_PAIRS = [
  {
    question: "What are her top skills?",
    answer: "Nidhi excels in Python, Machine Learning frameworks, Data Analytics, and building interactive dashboards with Streamlit."
  },
  {
    question: "What projects has she built?",
    answer: "She has built an Advanced Disk Scheduling Simulator, an ML Placement Predictor, and a Global Air Quality Prediction System! Check out the Projects section for case studies."
  },
  {
    question: "How can I contact her?",
    answer: "You can reach her at nidhirana929@gmail.com, or use the Contact form at the bottom of the page to connect on LinkedIn!"
  }
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi, I'm Nidhi's AI assistant. Ask me about her projects or skills!" }
  ]);

  const handleFAQClick = (qa) => {
    setMessages(prev => [
      ...prev, 
      { role: 'user', text: qa.question },
      { role: 'assistant', text: qa.answer }
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent-blue rounded-full flex items-center justify-center text-[#121212] shadow-lg z-40 transition-transform"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare size={24} className="fill-current" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-48px)] h-[500px] bg-[#18181B] rounded-2xl border border-[#27272A] overflow-hidden z-50 flex flex-col shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="bg-[#121212] p-4 border-b border-[#27272A] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center border border-accent-teal/30">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm flex items-center gap-1">
                    Nidhi's AI <Sparkles size={12} className="text-accent-teal" />
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-slate-500 text-[10px] uppercase font-semibold">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4 bg-[#121212]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-accent-blue text-[#121212] font-medium rounded-2xl rounded-tr-sm' 
                      : 'bg-[#18181B] border border-[#27272A] text-slate-300 rounded-2xl rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Prompts */}
            <div className="p-4 bg-[#18181B] border-t border-[#27272A]">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3">Ask a Question</p>
              <div className="flex flex-col gap-2">
                {QA_PAIRS.map((qa, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleFAQClick(qa)}
                    className="px-4 py-2 bg-[#121212] border border-[#27272A] text-slate-300 text-xs rounded-xl hover:border-accent-blue hover:text-accent-blue transition-colors text-left font-medium"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
