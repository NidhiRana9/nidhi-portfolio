import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-card transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Left Column: Branding & Location */}
          <div className="flex flex-col">
            <a href="#home" className="font-heading font-extrabold text-3xl tracking-tighter text-text-main mb-6">
              Nidhi<span className="text-accent-main">.</span>
            </a>
            <p className="text-text-sec text-sm leading-loose mb-8 max-w-sm">
              Computer Science undergraduate passionate about AI, Data Engineering, and building highly scalable intelligent infrastructure. Actively seeking to collaborate on high-impact solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-text-sec">
                <MapPin size={16} className="text-accent-main" />
                <span>Charkhi Dadri, Haryana <br /> 127306, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-sec">
                <Mail size={16} className="text-accent-main" />
                <a href="mailto:nidhirana929@gmail.com" className="hover:text-accent-main transition-colors">nidhirana929@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="flex flex-col md:pl-8">
            <h4 className="text-text-main font-bold tracking-widest uppercase text-sm mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-text-sec hover:text-accent-main hover:translate-x-1 transition-all w-max text-sm relative group">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-main opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Portfolio
              </a>
              <a href="#skills" className="text-text-sec hover:text-accent-main hover:translate-x-1 transition-all w-max text-sm relative group">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-main opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Technical Skills
              </a>
              <a href="#projects" className="text-text-sec hover:text-accent-main hover:translate-x-1 transition-all w-max text-sm relative group">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-main opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Strategic Projects
              </a>
              <a href="#certificates" className="text-text-sec hover:text-accent-main hover:translate-x-1 transition-all w-max text-sm relative group">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-main opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Certifications
              </a>
              <a href="#contact" className="text-text-sec hover:text-accent-main hover:translate-x-1 transition-all w-max text-sm relative group">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-main opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Initiate Contact
              </a>
            </nav>
          </div>

          {/* Right Column: Connect */}
          <div className="flex flex-col">
            <h4 className="text-text-main font-bold tracking-widest uppercase text-sm mb-6">Let's Connect</h4>
            <p className="text-text-sec text-sm leading-loose mb-8 max-w-sm">
              Open to extensive opportunities, elite collaborations, and complex engineering conversations.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/NidhiRana9" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-border bg-background flex items-center justify-center text-text-sec hover:text-text-main hover:border-text-main transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a 
                href="https://www.linkedin.com/in/nidhi-rana-56/" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-border bg-background flex items-center justify-center text-text-sec hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all hover:shadow-[0_0_20px_rgba(10,102,194,0.2)] group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a 
                href="mailto:nidhirana929@gmail.com" 
                className="w-12 h-12 rounded-xl border border-border bg-background flex items-center justify-center text-text-sec hover:text-accent-main hover:border-accent-main transition-all hover:shadow-[0_0_20px_var(--accent-glow)] group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform"/>
              </a>
            </div>
          </div>

        </div>

        <div className="w-full h-px bg-border my-8"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-text-muted font-medium uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} NIDHI RANA. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 sm:mt-0">ENGINEERED FOR SCALE.</p>
        </div>

      </div>
    </footer>
  );
}
