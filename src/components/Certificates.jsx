import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CERTIFICATES = [
  { name: "Internet Of Things", org: "NPTEL", date: "Apr '25", imagePath: "/cert-iot.jpg.jpeg", link: "#" },
  { name: "Data Structures & Algorithms", org: "LPU Iamneo", date: "May '25", imagePath: "/cert-iamneo-dsa.jpg.png", link: "#" },
  { name: "Java Programming", org: "LPU Iamneo", date: "May '25", imagePath: "/cert-iamneo-java.jpg.png", link: "#" },
  { name: "AI Data Engineer Certificate Programme", org: "Reliance Foundation | Skill Academy", date: "Sept '25", imagePath: "/cert-ai-data-engineer.jpg.png", link: "#" }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative border-t border-border transition-colors duration-300 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-main">Certifications</h2>
            <div className="hidden lg:block h-px bg-border flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-card/30 backdrop-blur-xl rounded-3xl border border-white/5 p-6 flex flex-col hover:bg-card/50 hover:border-accent-main/50 transition-all duration-500 shadow-2xl group"
              >
                {/* Image Holder with Padding (Matching Screenshot) */}
                <div className="w-full aspect-[4/3] bg-white rounded-lg border border-slate-700 overflow-hidden relative p-2 mb-6 flex items-center justify-center">
                  <img 
                    src={cert.imagePath} 
                    alt={cert.name} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{display: 'none'}} className="absolute inset-0 items-center justify-center text-text-sec font-mono text-[10px] bg-background p-4 text-center">
                    [ Missing Image: {cert.imagePath} ]
                  </div>
                </div>

                {/* Card Data */}
                <div className="flex-grow flex flex-col">
                   <h3 className="text-xl font-bold text-text-main font-heading leading-tight mb-1">{cert.name}</h3>
                   <p className="text-text-sec text-sm font-medium mb-6">{cert.org}</p>
                   
                   {/* Accessible View Link Button pointing to image path */}
                   <motion.a 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href={cert.imagePath} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-text-main text-background hover:bg-text-sec transition-all duration-300 w-max text-sm font-bold tracking-wide shadow-xl"
                   >
                     View Certificate <ExternalLink size={16} />
                   </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
