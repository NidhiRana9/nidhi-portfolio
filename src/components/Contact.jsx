import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    try {
      const serviceID = 'service_vm2kb3o';
      const templateID = 'template_8pcox1l';
      const publicKey = 'gLJbMy7nKryD1KTEY';

      await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        publicKey
      );

      console.log("SUCCESS");
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error("FAILED", error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-border transition-colors duration-300 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-accent-main font-semibold mb-4 tracking-widest uppercase text-sm">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6">Let's Connect</h3>
          <p className="text-text-sec max-w-xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities in ML, AI, and Data Engineering.
          </p>
        </div>

        <motion.form
          ref={formRef}   // ✅ IMPORTANT
          onSubmit={handleSubmit}
          className="bg-card/30 backdrop-blur-xl p-10 rounded-3xl border border-white/5 shadow-2xl flex flex-col space-y-8 relative"
        >

          <AnimatePresence>
            {status === 'success' && (
              <motion.div className="absolute -top-16 left-0 right-0 bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl text-center">
                Message sent! I’ll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div className="absolute -top-16 left-0 right-0 bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-center">
                Something went wrong. Please try again.
              </motion.div>
            )}
          </AnimatePresence>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="p-4 rounded-xl bg-background/50"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-4 rounded-xl bg-background/50"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="p-4 rounded-xl bg-background/50"
            required
          />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-white text-black py-3 rounded-xl"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

        </motion.form>
      </div>
    </section>
  );
}