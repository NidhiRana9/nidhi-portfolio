import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Code2, Users } from 'lucide-react';

const REASONS = [
  {
    icon: <Database className="text-accent-main mb-4" size={32} />,
    title: "Scalable Data Architecture",
    description: "Proficient in designing structural database schemas and optimizing complex SQL pipelines to ensure high-velocity data retrieval and analytic accuracy."
  },
  {
    icon: <TrendingUp className="text-accent-main mb-4" size={32} />,
    title: "Predictive Intelligence",
    description: "Experienced in training and evaluating complex machine learning models incorporating XGBoost, Random Forest, and generalized ensemble techniques to forecast critical outcomes."
  },
  {
    icon: <Code2 className="text-accent-main mb-4" size={32} />,
    title: "End-to-End Execution",
    description: "Capable of handling the entire developmental lifecycle—from raw data ingestion and feature engineering to deploying accessible web-based interfaces."
  },
  {
    icon: <Users className="text-accent-main mb-4" size={32} />,
    title: "Collaborative Synergy",
    description: "Highly adaptable professional who excels in cross-functional environments, prioritizing clear communication and strategic teamwork to achieve overarching technical goals."
  }
];

export default function WhyHireMe() {
  return (
    <section className="py-24 relative bg-card transition-colors duration-300 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-accent-main tracking-widest uppercase mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-text-main">
            Why Partner With Me
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((r, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: i * 0.1 }}
               className="bg-card border border-border p-8 rounded-2xl hover:border-accent-main hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] transition-all duration-500"
             >
               {r.icon}
               <h4 className="text-xl font-bold text-text-main mb-3">{r.title}</h4>
               <p className="text-text-sec text-sm leading-relaxed">{r.description}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
