import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const QUOTES = [
  "Data is the new oil. It’s valuable, but if unrefined it cannot really be used.",
  "Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway.",
  "Information is the oil of the 21st century, and analytics is the combustion engine.",
  "In God we trust, all others must bring data.",
  "The goal is to turn data into information, and information into insight."
];

export default function QuoteBox() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate quotes every 15 seconds (making the 5 cycle comfortably in ~1 minute as requested)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
    }, 12000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      whileTap={{ scale: 0.9, rotate: -2, y: 10 }} // "when we click it should move" -> bouncy tap animation
      className="relative max-w-sm w-full bg-card border border-border p-5 rounded-2xl cursor-pointer shadow-xl hover:border-accent-main transition-colors duration-300"
    >
      {/* Decorative Quote Mark */}
      <Quote size={24} className="text-accent-main/30 absolute top-4 left-4" />
      
      <div className="pl-6 pt-2 h-20 flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.6 }}
            className="text-text-sec text-xs font-semibold leading-relaxed tracking-wide italic"
          >
            "{QUOTES[currentIndex]}"
          </motion.p>
        </AnimatePresence>
      </div>
      
      {/* Progress Dots */}
      <div className="flex justify-start gap-1.5 mt-4 ml-6">
        {QUOTES.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-4 bg-accent-main' : 'w-1.5 bg-border'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
