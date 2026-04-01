import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Primary Dot - Subdued Size */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent-main pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0 }}
      />
      {/* Snappy Trailing Glow - Zero lag */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-accent-main/80 bg-accent-main/10 pointer-events-none z-[99] blur-[1px]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.4)' : 'rgba(6, 182, 212, 0.1)'
        }}
        transition={{ type: "spring", stiffness: 800, damping: 28, mass: 0.1 }}
      />
    </>
  );
}
