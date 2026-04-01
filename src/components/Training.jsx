import React from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, Award } from 'lucide-react';

const TRAININGS = [
  { 
    name: "Machine Learning Made Easy: From Basics to AI Application", 
    org: "Lovely Professional University", 
    date: "Jun 2025 – Jul 2025", 
    desc: "Mastered full-lifecycle Machine Learning architectures. Engineered and optimized end-to-end predictive models utilizing Linear Regression, Logistic Regression, Decision Trees, K-Nearest Neighbors (KNN), and robust Neural Networks for comprehensive data classification and algorithmic forecasting.",
    tags: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"],
    imagePath: "/cert-ml-training.jpg.jpeg" 
  }
];

export default function Training() {
  return (
    <section id="training" className="py-24 relative border-t border-border transition-colors duration-300 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Target className="text-accent-main" size={32} />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-main">Training</h2>
            <div className="hidden lg:block h-px bg-border flex-grow"></div>
          </div>
          
          <div className="space-y-8">
            {TRAININGS.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.98, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-card/30 backdrop-blur-xl rounded-3xl border border-white/5 p-8 flex flex-col md:flex-row gap-8 hover:bg-card/50 hover:border-accent-main/40 transition-all duration-500 shadow-2xl group relative overflow-hidden"
              >
                {/* Background Accent Glow on Hover */}
                <div className="absolute inset-0 bg-accent-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Left Text Block */}
                <div className="flex-grow flex flex-col z-10 w-full md:w-2/3">
                   <div className="flex items-center gap-3 mb-2">
                     <Award size={18} className="text-accent-main" />
                     <h3 className="text-2xl font-bold text-text-main font-heading leading-tight">{item.name}</h3>
                   </div>
                   
                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6">
                     <p className="text-accent-main text-sm font-bold tracking-wide uppercase">{item.org}</p>
                     <p className="text-text-sec text-sm font-medium flex items-center gap-1.5">
                       <Calendar size={14} /> {item.date}
                     </p>
                   </div>
                   
                   <p className="text-text-sec text-base leading-relaxed mb-6 font-light">
                     {item.desc}
                   </p>

                   <div className="mt-auto flex flex-wrap gap-2">
                     {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-background/50 backdrop-blur-sm border border-white/10 rounded-full text-text-sec text-xs font-bold tracking-wider uppercase group-hover:border-accent-main/30 transition-colors">
                          {tag}
                        </span>
                     ))}
                   </div>
                </div>

                {/* Right Image Block (Conditional) */}
                {item.imagePath && (
                  <div className="w-full md:w-1/3 flex-shrink-0 z-10">
                    <div className="w-full aspect-[4/3] bg-background rounded-xl border border-border overflow-hidden relative shadow-inner">
                      <img 
                        src={item.imagePath} 
                        alt={item.name} 
                        className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div style={{display: 'none'}} className="absolute inset-0 items-center justify-center text-text-sec font-mono text-[10px] bg-background p-4 text-center">
                        [ Missing Asset: {item.imagePath} ]
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
