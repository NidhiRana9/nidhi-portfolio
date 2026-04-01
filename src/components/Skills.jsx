import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  'C++': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  'Power BI': "https://img.icons8.com/color/144/power-bi.png",
  Excel: "https://img.icons8.com/color/144/microsoft-excel-2019--v1.png"
};

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["HTML", "CSS", "Bootstrap", "Flask", "React", "Git", "GitHub"]
  },
  {
    title: "Data Platforms",
    skills: ["MySQL", "Power BI", "Excel"]
  },
  {
    title: "Soft Skills",
    isTextOnly: true,
    skills: ["Teamwork", "Public Speaking", "Event Management", "Time Management", "Adaptability", "Leadership"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative border-t border-border transition-colors duration-300 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16 text-center lg:text-left justify-center lg:justify-start">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main">Technical Skills</h2>
            <div className="hidden lg:block h-px bg-border flex-grow"></div>
          </div>

          <div className="space-y-16">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-text-sec font-medium text-sm tracking-widest uppercase mb-8 text-center lg:text-left">
                  {category.title}
                </h3>
                
                {category.isTextOnly ? (
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: sIdx * 0.05 + idx * 0.1 }}
                        className="px-6 py-3 bg-card/30 backdrop-blur-md border border-white/10 text-text-sec rounded-full font-medium hover:text-text-main hover:border-accent-main/50 hover:bg-card/50 shadow-lg transition-all duration-300"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                    {category.skills.map((skill, sIdx) => {
                      const iconSrc = ICON_MAP[skill];
                      return (
                        <motion.div 
                          key={sIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ y: -5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: sIdx * 0.05 + idx * 0.1 }}
                          className="group flex flex-col items-center gap-4 w-28"
                        >
                          <div className="w-20 h-20 rounded-3xl bg-card/30 backdrop-blur-xl border border-white/5 flex items-center justify-center group-hover:border-accent-main/50 group-hover:bg-card/50 transition-all duration-500 p-4 shadow-2xl">
                            {iconSrc ? (
                              <img src={iconSrc} alt={`${skill} icon`} className="w-full h-full object-contain filter group-hover:brightness-110 transition-all" />
                            ) : (
                              <div className="w-8 h-8 rounded bg-white/10"></div>
                            )}
                          </div>
                          <span className="text-sm font-medium text-text-sec group-hover:text-text-main transition-colors text-center w-full">
                            {skill}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
