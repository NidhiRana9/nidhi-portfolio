import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🚨 stop redirect (MAIN FIX)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formData
      }).toString()
    })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400">
            Have something in mind? Drop a message — I’ll get back to you 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Social Links */}
          <div className="flex flex-col space-y-4">
            <a href="mailto:nidhirana929@gmail.com" className="group flex items-center gap-6 p-6 rounded-[24px] bg-[#0d0d0e] border border-white/5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 z-10 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                <Mail className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
              </div>
              <div className="z-10">
                <h4 className="text-white font-bold text-lg leading-tight mb-1">Email</h4>
                <span className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">nidhirana929@gmail.com</span>
              </div>
            </a>

            <a href="tel:+917888431735" className="group flex items-center gap-6 p-6 rounded-[24px] bg-[#0d0d0e] border border-white/5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 z-10 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                <Phone className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
              </div>
              <div className="z-10">
                <h4 className="text-white font-bold text-lg leading-tight mb-1">Phone</h4>
                <span className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">+91 7888431735</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/nidhi-rana-56/" target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-6 rounded-[24px] bg-[#0d0d0e] border border-white/5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 z-10 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                <Linkedin className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
              </div>
              <div className="z-10">
                <h4 className="text-white font-bold text-lg leading-tight mb-1">LinkedIn</h4>
                <span className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">linkedin.com/in/nidhi-rana-56/</span>
              </div>
            </a>

            <a href="https://github.com/NidhiRana9" target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-6 rounded-[24px] bg-[#0d0d0e] border border-white/5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 z-10 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                <Github className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
              </div>
              <div className="z-10">
                <h4 className="text-white font-bold text-lg leading-tight mb-1">GitHub</h4>
                <span className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">github.com/NidhiRana9</span>
              </div>
            </a>
          </div>

          {/* Right Column: Form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-[#0d0d0e] border border-white/5 space-y-6 shadow-2xl relative"
          >
            {/* ✅ REQUIRED for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Success / Error Message */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm font-medium p-3 rounded-lg"
                >
                  Message delivered! I’ll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-500 text-center text-sm font-medium p-3 rounded-lg"
                >
                  Something went wrong. Try again.
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-4 rounded-xl bg-[#080808] border border-white/5 focus:outline-none focus:border-cyan-400/50 text-white placeholder-gray-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-4 rounded-xl bg-[#080808] border border-white/5 focus:outline-none focus:border-cyan-400/50 text-white placeholder-gray-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows={4}
                className="w-full p-4 rounded-xl bg-[#080808] border border-white/5 focus:outline-none focus:border-cyan-400/50 text-white placeholder-gray-600 resize-none transition-colors"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors mt-2"
            >
              <Send size={18} />
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}