import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative border-t border-[#27272A] bg-grid overflow-hidden">
      {/* Background decoration */ /* Subdued */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-b from-transparent via-[#121212]/90 to-[#121212] z-0 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="glass-card p-12 rounded-[2rem] border border-[#27272A] shadow-lg flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#0A0A0B] border border-[#27272A] flex items-center justify-center mb-8 shadow-inner">
            <FileText size={32} className="text-accent-teal" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">My Resume</h2>
          <p className="text-slate-400 mb-10 leading-relaxed text-sm max-w-md">
            Interested in my professional journey and full academic background? Download the complete PDF resume for your records.
          </p>
          
          <a
            href="/resume.pdf"
            download="Nidhi_Rana_Resume.pdf"
            className="group flex items-center gap-3 bg-slate-100 text-zinc-900 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all px-8 py-4 rounded-full font-bold text-sm w-full sm:w-auto justify-center"
          >
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            Download Resume PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
}
