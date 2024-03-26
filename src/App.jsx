import React from "react";
import Navbar from './components/nav/Navbar'
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Skills from "./sections/skills/Skills";
export default function App() {
  return <>
  <Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Experience/>
  <Projects/>
  <Contact/>
  <Footer/>
  </>
}
