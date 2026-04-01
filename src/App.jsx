import React from 'react'
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
  return (
    <div className="bg-background text-text-main min-h-screen selection:bg-accent-main/30 selection:text-text-main font-sans relative">
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
