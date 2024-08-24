import React from "react";
import aboutImage from '../../assets/hello-world.webp'
import './About.css'
import {motion} from 'framer-motion'
import resume from '../../assets/Nikhil_Verma_Resume.pdf'

export default function About() {
  const downloadResume = ()=>{
    window.open(resume)
  }
  return (
    <section id="about" className="about-section">
      <div className="about-container">
       <div className="about-image">
        <motion.img initial = {{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        viewport={{once:true}}
        transition={{duration:1, delay:0.5,type:'ease'}}
        src={aboutImage} alt="" />
       </div>
       <motion.div
       initial = {{opacity:0}}
       whileInView={{ opacity:1}}
       viewport={{once:true}}
       transition={{duration:1, delay:0.5,type:'ease'}}
       className="about-texts">
        <div>
        <h1>About me</h1>
    
<p>Hey, I'm Nikhil Verma, a driven engineer with a strong foundation in Electronics and Computer Science. Graduating with a 9.3 CGPA from Pillai College of Engineering, Panvel, I've always had a knack for diving deep into technology and uncovering its potential. As a tech enthusiast, I thrive on the thrill of building things from scratch.</p>
       <button onClick={downloadResume}>Resume</button> 
        </div>
       </motion.div>
      </div>
    </section>
  );
}
