import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | success

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400">
            Have something in mind? Drop a message — I’ll get back to you 🚀
          </p>
        </div>

        {/* Form */}
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/"
          onSubmit={() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
          }}
          className="p-8 rounded-2xl border border-white/10 space-y-6 relative backdrop-blur-lg"
        >
          {/* REQUIRED hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Success Message */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-400 text-center"
              >
                ✅ Message delivered! I’ll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
            rows={4}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400 resize-none"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-white text-black py-3 rounded-xl font-semibold"
          >
            Send Message
          </motion.button>

        </motion.form>
      </div>
    </section>
  );
}