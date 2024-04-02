import React from 'react'
import Navbar from './components/nav/Navbar'
import Home from './sections/home/Home'
import About from './sections/about/About'
import Experience from './sections/experience/Experience'
import Projects from './sections/projects/Projects'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import Skills from './sections/skills/Skills'
import YumyardModal from './modals/yumyard/YumyardModal'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import EchoAIModal from './modals/echoai/EchoAIModal'
import UrbanCropsModal from './modals/urbancrops/UrbanCropsModal'
import ScoopSavorModal from './modals/scoopsavor/ScoopSavorModal'
import BlinkChatModal from './modals/blinkchat/BlinkChatModal'
export default function App() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  return (
    <>
      <AnimatePresence>
        <Navbar />
        <YumyardModal />
        <EchoAIModal />
        <UrbanCropsModal />
        <ScoopSavorModal/>
        <BlinkChatModal/>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </AnimatePresence>
    </>
  )
}
