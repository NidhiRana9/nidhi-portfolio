import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-border transition-colors duration-300 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-accent-main font-semibold mb-4 tracking-widest uppercase text-sm">Strategic Operations</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6">Initiate Dialogue</h3>
          <p className="text-text-sec max-w-xl mx-auto leading-relaxed">
            I am actively evaluating new opportunities within Machine Learning, Artificial Intelligence, and Data Engineering. Whether you require technical consultation, project collaboration, or formal recruitment inquiries, my inbox remains open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links & Info - Fully Clickable Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:nidhirana929@gmail.com" 
              className="flex items-center gap-6 group bg-card/30 backdrop-blur-xl p-6 rounded-3xl border border-white/5 hover:border-accent-main/40 hover:bg-card/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-background/50 border border-white/10 flex items-center justify-center group-hover:border-accent-main/50 transition-colors shadow-inner">
                <Mail className="text-text-sec group-hover:text-accent-main transition-colors" size={22} />
              </div>
              <div>
                <h4 className="text-text-main font-bold text-base mb-1">Direct Email</h4>
                <span className="text-text-sec text-sm group-hover:text-accent-main transition-colors">
                  nidhirana929@gmail.com
                </span>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+917888431735" 
              className="flex items-center gap-6 group bg-card/30 backdrop-blur-xl p-6 rounded-3xl border border-white/5 hover:border-accent-main/40 hover:bg-card/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-background/50 border border-white/10 flex items-center justify-center group-hover:border-accent-main/50 transition-colors shadow-inner">
                <svg className="w-6 h-6 text-text-sec group-hover:text-accent-main transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-text-main font-bold text-base mb-1">Mobile Contact</h4>
                <span className="text-text-sec text-sm group-hover:text-accent-main transition-colors">
                  +91 7888431735
                </span>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/nidhi-rana-56/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-6 group bg-card/30 backdrop-blur-xl p-6 rounded-3xl border border-white/5 hover:border-[#0A66C2]/50 hover:bg-card/50 hover:shadow-[0_0_30px_rgba(10,102,194,0.15)] transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-background/50 border border-white/10 flex items-center justify-center group-hover:border-[#0A66C2]/50 transition-colors shadow-inner">
                <Linkedin className="text-text-sec group-hover:text-[#0A66C2] transition-colors" size={22} />
              </div>
              <div>
                <h4 className="text-text-main font-bold text-base mb-1">Professional Network</h4>
                <span className="text-text-sec text-sm group-hover:text-[#0A66C2] transition-colors">
                  linkedin.com/in/nidhi-rana-56/
                </span>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/NidhiRana9" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-6 group bg-card/30 backdrop-blur-xl p-6 rounded-3xl border border-white/5 hover:border-text-main/50 hover:bg-card/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-background/50 border border-white/10 flex items-center justify-center group-hover:border-text-main/50 transition-colors shadow-inner">
                <Github className="text-text-sec group-hover:text-text-main transition-colors" size={22} />
              </div>
              <div>
                <h4 className="text-text-main font-bold text-base mb-1">Code Repository</h4>
                <span className="text-text-sec text-sm group-hover:text-text-main transition-colors">
                  github.com/NidhiRana9
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card/30 backdrop-blur-xl p-10 rounded-3xl border border-white/5 shadow-2xl flex flex-col justify-between space-y-8"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-sec mb-3">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-text-main focus:outline-none focus:border-accent-main/50 focus:bg-background/80 transition-all shadow-inner"
                placeholder="Industry Professional"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-sec mb-3">Corporate Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-text-main focus:outline-none focus:border-accent-main/50 focus:bg-background/80 transition-all shadow-inner"
                placeholder="inquiry@organization.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-sec mb-3">Inquiry / Objective</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-text-main focus:outline-none focus:border-accent-main/50 focus:bg-background/80 transition-all resize-none shadow-inner"
                placeholder="State your technical requirements or operational inquiries here."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full group flex items-center justify-center gap-2 bg-text-main text-background hover:bg-text-sec transition-all px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase shadow-xl"
            >
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Transmit Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
