import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", damping: 25, stiffness: 100 } }
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 bg-grid-pattern pointer-events-none"></div>

      {/* Floating Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] bg-accent-main/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5"
          >
            {/* Glassmorphism Wrapper for Text */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#0A0A0B]/40 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group"
            >
              {/* Subtle animated gradient glow inside the card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-main/10 rounded-full blur-[80px] -z-10 group-hover:bg-accent-main/20 transition-colors duration-700"></div>

              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-extrabold text-text-main mb-6 leading-tight tracking-tight">
                Hi, I’m <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-main via-cyan-300 to-purple-400 tracking-wider relative inline-block">
                  Nidhi Rana
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-main to-transparent rounded-full opacity-50"></span>
                </span>
              </motion.h1>

              <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-text-main font-medium mb-4 leading-relaxed tracking-wide">
                I build modern, interactive web experiences and explore AI-driven solutions.
              </motion.h2>

              <motion.p variants={itemVariants} className="text-base md:text-lg text-text-sec mb-6 leading-relaxed font-light max-w-xl">
                BTech student focused on creating interfaces that feel alive and impactful.
              </motion.p>

              <motion.p variants={itemVariants} className="text-sm md:text-sm text-accent-main font-bold tracking-widest uppercase mb-10 block">
                Turning ideas into real experiences.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects" 
                  className="px-8 py-4 bg-gradient-to-r from-accent-main to-cyan-500 text-[#050505] font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)]"
                >
                  View Projects <ArrowRight size={18} />
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:border-accent-main/50 hover:bg-white/10 text-center shadow-xl"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 aspect-square group">
              {/* Spinning decorative ring directly referencing accent variable */}
              <div className="absolute inset-0 border border-dashed border-accent-main/40 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-accent-main transition-colors duration-700"></div>
              
              {/* Static ring */}
              <div className="absolute inset-4 border border-white/10 rounded-full"></div>
              
              <div className="absolute inset-8 rounded-full overflow-hidden border border-white/10 bg-card/30 backdrop-blur-md shadow-2xl z-20 flex items-center justify-center transform group-hover:scale-[1.03] transition-transform duration-700">
                <img 
                  src="/profile.jpg.jpeg" 
                  alt="Nidhi Rana Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{display: 'none'}} className="w-full h-full items-center justify-center text-text-sec bg-background/50 backdrop-blur text-sm p-4 text-center">
                  [ Profile Image Required ]
                </div>
              </div>

              {/* Decorative data points */}
              <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-accent-main/20 border border-accent-main shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="flex flex-col items-center justify-center text-text-sec hover:text-accent-main transition-colors duration-300 cursor-pointer group">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">Scroll</span>
          <ChevronDown size={24} className="opacity-70 group-hover:opacity-100" />
        </a>
      </motion.div>
    </section>
  );
}
