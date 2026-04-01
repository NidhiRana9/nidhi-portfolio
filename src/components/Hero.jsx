import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 border border-white/10 rounded-full bg-card/30 backdrop-blur-md mb-8 shadow-2xl hover:bg-card/50 transition-all duration-500">
              <span className="text-text-sec text-xs md:text-sm font-mono tracking-widest uppercase flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-main opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-main"></span>
                </span>
                Available for Engineering Roles
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-extrabold text-text-main mb-6 leading-tight tracking-tight">
              Hello , I Am <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-main to-purple-400 tracking-wider">
                Nidhi Rana
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-text-sec max-w-2xl mb-12 leading-relaxed font-light">
              I am a driven Data Engineer and AI Specialist dedicated to building resilient machine learning pipelines, scalable data architectures, and intelligent software systems capable of analyzing complex, high-velocity datasets to deliver exceptional strategic insights.
            </motion.p>

            <motion.p variants={itemVariants} className="text-sm md:text-md text-text-main font-semibold mb-10 flex items-center gap-2">
              <ArrowRight size={18} className="text-accent-main" />
              Open to Internships, AI/ML Projects & Industry Collaborations
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf" 
                target="_blank"
                rel="noreferrer"
                className="group px-8 py-4 bg-text-main text-background font-bold text-xs tracking-widest uppercase rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-3 transition-colors hover:bg-text-sec"
              >
                <FileText size={18} /> Download Portfolio Resume
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-8 py-4 bg-card/30 backdrop-blur-md border border-white/10 text-text-main font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 hover:border-accent-main hover:bg-card/50 text-center shadow-2xl"
              >
                Explore Projects
              </motion.a>
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
    </section>
  );
}
