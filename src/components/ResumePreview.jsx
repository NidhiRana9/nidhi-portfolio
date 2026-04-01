import React from 'react';
import { motion } from 'framer-motion';
import { Download, Maximize } from 'lucide-react';

export default function ResumePreview() {
  return (
    <section id="resume" className="py-24 relative border-t border-[#1F1F22] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">My Resume</h2>
            <p className="text-slate-400 max-w-2xl">
              Take a closer look at my professional journey, skills, and academic background. Feel free to download a copy for your records.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl aspect-[1/1.414] bg-[#111113] rounded-2xl border border-[#1F1F22] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            
            <iframe 
              src="/resume.pdf#toolbar=0"
              className="w-full h-full border-none grayscale-[0.2] invert-[0.9] hue-rotate-180 contrast-125" 
              title="Resume Preview"
            ></iframe>
            
          </div>
          
          <div className="mt-8 flex justify-center">
            <a
              href="/resume.pdf"
              download="Nidhi_Rana_Resume.pdf"
              className="group flex items-center gap-2 bg-slate-100 text-[#0A0A0B] hover:bg-white transition-all px-8 py-3 rounded-full font-semibold"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Download PDF Version
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
