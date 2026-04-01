import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Training from './components/Training'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ChatbotWidget from './components/ChatbotWidget'
import AnimatedCounters from './components/AnimatedCounters'
import WhyHireMe from './components/WhyHireMe'
import NetworkBackground from './components/NetworkBackground'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="bg-background text-text-main min-h-screen selection:bg-accent-main/30 selection:text-text-main font-sans relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-accent-main to-purple-500 z-[100]"
        style={{ scaleX }}
      />
      
      <NetworkBackground />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <AnimatedCounters />
        <About />
        <WhyHireMe />
        <Skills />
        <Projects />
        <Education />
        <Training />
        <Certificates />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  )
}

export default App
