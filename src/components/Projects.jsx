import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const PROJECTS = [
  {
    id: "air-quality",
    title: "Global Air Quality Prediction System",
    subtitle: "End-to-End ML Pipeline & Dashboard",
    tech: ["XGBoost", "Data Analytics", "Streamlit", "Python"],
    desc: "Engineered a comprehensive machine learning pipeline powered by a highly optimized XGBoost model. This system ingests volatile atmospheric datasets to generate accurate, real-time air quality forecasts. Delivered extensive data insights through an interactive dashboard with automated reporting capabilities, significantly accelerating strategic decision-making.",
    githubLink: "https://github.com/NidhiRana9/global-aqi-pred-nidhi",
    imagePath: "/project-air-quality.png"
  },
  {
    id: "disk-scheduling",
    title: "Advanced Disk Scheduling Architecture",
    subtitle: "OS Algorithm Visualization Suite",
    tech: ["HTML", "CSS", "JavaScript", "Algorithms"],
    desc: "Built a sophisticated visualization suite to accurately simulate complex operating system disk scheduling algorithms (including FCFS, SSTF, and SCAN). Eliminated manual calculation bottlenecks and successfully modeled a 30% improvement in comparative algorithmic efficiency through systematic metric tracking.",
    githubLink: "https://github.com/NidhiRana9/Advanced-Disk-Scheduling-Simulator",
    imagePath: "/project-disk-scheduler.png"
  },
  {
    id: "placement-predictor",
    title: "Readiness Scoring & Placement Predictor",
    subtitle: "Predictive Analytics Web Application",
    tech: ["Python", "Streamlit", "Machine Learning"],
    desc: "Architected a predictive web application utilizing statistical classification methodologies to assess early-career readiness. Engineered a proprietary scoring system capable of evaluating multivariate candidate profiles, providing highly accurate and actionable personalized estimations.",
    githubLink: "https://github.com/NidhiRana9/Student-Placement-Predictor-with-Readiness-Scoring-System",
    imagePath: "/project-placement.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-border transition-colors duration-300 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-main">Featured Implementations</h2>
            <div className="hidden lg:block h-px bg-border flex-grow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-card/30 backdrop-blur-xl rounded-3xl p-8 border border-white/5 flex flex-col hover:bg-card/50 hover:border-accent-main/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 shadow-2xl group"
              >
                {/* Image Block */}
                <div className="w-full aspect-video rounded-xl bg-[#050505] overflow-hidden mb-6 border border-border">
                  <img 
                    src={project.imagePath} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{display: 'none'}} className="w-full h-full items-center justify-center text-text-muted font-mono text-xs bg-background">
                    [ Repository Asset Required ]
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-text-main mb-2 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-accent-main font-medium text-sm mb-4">{project.subtitle}</p>

                  <p className="text-text-sec text-base leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((techItem, tIdx) => (
                      <span key={tIdx} className="flex items-center gap-2 px-4 py-1.5 bg-background border border-border text-text-sec rounded-full text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-accent-main"></span>
                        {techItem}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-text-main text-background hover:bg-text-sec font-bold transition-all duration-300 w-max shadow-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      Explore Architecture
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
