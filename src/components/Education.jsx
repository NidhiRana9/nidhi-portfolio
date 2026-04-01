import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-[#1F1F22]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Education</h2>
            <div className="h-px bg-[#1F1F22] flex-grow"></div>
          </div>

          <div className="relative pl-8 md:pl-0 space-y-12">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-30"></div>
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-30"></div>

            {/* BTech */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full md:w-1/2 md:pr-12 md:text-right"
            >
              <div className="absolute left-[-37px] md:left-auto md:right-[-9px] top-6 w-4 h-4 rounded-full bg-accent-blue shadow-[0_0_15px_rgba(0,240,255,0.7)] z-10"></div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-card/30 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:bg-card/50 hover:border-accent-blue/40 transition-all duration-500 shadow-2xl"
              >
                <div className="flex flex-col md:items-end mb-4">
                  <span className="inline-block px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue rounded-full text-xs font-bold font-mono tracking-widest mb-3 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                    Aug '23 - Present
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1 font-heading">BTech Computer Science & Engineering</h3>
                  <h4 className="text-lg text-slate-400 font-medium tracking-wide">Lovely Professional University | Punjab, India</h4>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  Focused on core computer science subjects with a specialization in Artificial Intelligence, Machine Learning, and Data Engineering.<br/><br/>
                  <strong className="text-white font-bold tracking-wider">CGPA: 7.1</strong>
                </p>
              </motion.div>
            </motion.div>

            {/* Intermediate */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full md:w-1/2 md:pl-12 md:ml-auto md:text-left"
            >
              <div className="absolute left-[-37px] md:left-[-9px] top-6 w-4 h-4 rounded-full bg-accent-purple shadow-[0_0_15px_rgba(138,43,226,0.7)] z-10"></div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-card/30 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:bg-card/50 hover:border-accent-purple/40 transition-all duration-500 shadow-2xl"
              >
                <div className="flex flex-col md:items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-accent-purple/10 border border-accent-purple/20 text-accent-purple rounded-full text-xs font-bold font-mono tracking-widest mb-3 shadow-[0_0_10px_rgba(138,43,226,0.1)]">
                    Apr '22 - Mar '23
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 font-heading">Intermediate</h3>
                  <h4 className="text-base text-slate-400 font-medium tracking-wide">Kendriya Vidyalaya D.G.Q.A | Chennai, TN</h4>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  <strong className="text-white font-bold tracking-wider">Percentage: 74%</strong>
                </p>
              </motion.div>
            </motion.div>

            {/* Matriculation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full md:w-1/2 md:pr-12 md:text-right"
            >
              <div className="absolute left-[-37px] md:left-auto md:right-[-9px] top-6 w-4 h-4 rounded-full bg-accent-blue shadow-[0_0_15px_rgba(0,240,255,0.7)] z-10"></div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-card/30 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:bg-card/50 hover:border-accent-blue/40 transition-all duration-500 shadow-2xl"
              >
                <div className="flex flex-col md:items-end mb-4">
                  <span className="inline-block px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue rounded-full text-xs font-bold font-mono tracking-widest mb-3 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                    Apr '20 - Mar '21
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 font-heading">Matriculation</h3>
                  <h4 className="text-base text-slate-400 font-medium tracking-wide">Kendriya Vidyalaya D.G.Q.A | Chennai, TN</h4>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  <strong className="text-white font-bold tracking-wider">Percentage: 90%</strong>
                </p>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
