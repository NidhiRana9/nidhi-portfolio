import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const COUNTER_DATA = [
  { label: "Major Projects", target: 3, suffix: "+" },
  { label: "Programming Languages", target: 3, suffix: "+" },
  { label: "Certifications", target: 5, suffix: "+" },
  { label: "ML-Based Applications", target: 2, suffix: "+" }
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          setCount(target);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [target, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-extrabold text-text-main group-hover:text-text-sec transition-colors duration-500">
      {count}<span className="text-accent-main">{suffix}</span>
    </span>
  );
}

export default function AnimatedCounters() {
  return (
    <div className="w-full py-12 border-y border-border relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/50">
          {COUNTER_DATA.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-2 group px-4"
            >
              <Counter target={item.target} suffix={item.suffix} />
              <span className="text-text-sec text-xs tracking-wider uppercase md:text-sm font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
