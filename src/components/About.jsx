import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-border transition-colors duration-300 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row gap-16 justify-between items-center">
            
            <div className="md:w-1/2 relative group">
              <div className="absolute inset-0 bg-accent-main/20 rotate-3 rounded-3xl -z-10 blur-2xl group-hover:bg-accent-main/30 group-hover:rotate-6 transition-all duration-700"></div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-card/40 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:border-accent-main/40 transition-all duration-700"
              >
                <span className="text-4xl text-accent-main/80 mb-2 block font-serif leading-[0]">"</span>
                <p className="text-base md:text-lg font-sans text-text-sec leading-relaxed relative z-10 font-light">
                  I believe that elegant algorithms and robust data infrastructure hold the power to solve our most critical global challenges. My objective is to bridge the gap between unstructured data and actionable, predictive intelligence.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-0.5 w-12 bg-accent-main/70 group-hover:w-24 group-hover:bg-accent-main transition-all duration-500"></div>
                  <span className="text-text-sec font-mono uppercase tracking-widest text-xs font-bold">Mission Statement</span>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 text-left">
              <h2 className="text-sm font-semibold text-accent-main tracking-widest uppercase mb-4">About My Work</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-8">
                Turning Complexity into Strategic Innovation
              </h3>
              
              <div className="space-y-6 text-text-sec text-base leading-loose">
                <p>
                  As an emerging Data Engineer, I specialize in architecting highly scalable end-to-end machine learning pipelines. By unifying disparate datasets, optimizing algorithmic precision, and developing interactive analytic interfaces, I empower organizations to extract tangible value from their operational data streams.
                </p>
                <p>
                  My foundational expertise spans Python data science ecosystems, robust backend frameworks, and predictive modeling algorithms. I thrive in highly collaborative, cross-functional engineering teams where challenging technical problems require creative, data-driven solutions.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
