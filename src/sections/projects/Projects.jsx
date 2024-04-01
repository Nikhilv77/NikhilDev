import React from "react";
import './Projects.css';
import echoAIVideo from '../../assets/echo-ai.mp4';
import urbanCropsVideo from '../../assets/uc.mp4';
import yumyardVideo from '../../assets/Yumyard.mp4';
import scoopSavorVideo from '../../assets/ss.mp4';
import portfolioVideo from '../../assets/portfolio-video.mp4';
import blinkChatVideo from '../../assets/blinkchat-video.mp4'
import {easeInOut, motion} from 'framer-motion';
const Projects = () => {
  const openYumyardModalHandler = ()=>{
    const yyModal = document.getElementsByClassName('yumyard-modal')[0];
    yyModal.style.left = '50%';
    const yyBackdrop = document.getElementsByClassName('yumyard-backdrop')[0];
    yyBackdrop.style.left = '0'
  }
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
<h1>My Work</h1>
        <div className="first-card-container">
      <motion.div
      initial = {{
        rotate:15,
        filter:'grayscale(100%)'
      }}
      whileInView={{rotate:0,filter:'grayscale(0)'}}
      transition={{type:easeInOut, duration:1, delay:0.5}}
      viewport={{once:true}}
      className="project-card">
      <video className="project-video" src={yumyardVideo} type ='video/mp4' playsInline muted loop autoPlay></video>

<div className="project-card-texts">
<div className="project-texts">
<h1>YumYard</h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. Made with React, express, mongodb, bootstrap.
  
  </h2>
  <div>
  <button onClick={openYumyardModalHandler} className="know-more">Know more</button>
  </div>
  </div>
  <div className="project-card-bottom">
  <div onClick={()=>{
    window.open('https://github.com/Nikhilv77/YumYard-Client')
  }} className="project-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div onClick={()=>{
    window.open('https://yumyard.vercel.app/')
  }} className="project-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
      </motion.div>
      <motion.div
      initial = {{
        rotate:15,
        filter:'grayscale(100%)'
      }}
      whileInView={{rotate:0,filter:'grayscale(0)'}}
      transition={{type:easeInOut, duration:1, delay:0.5}}
      viewport={{once:true}}
      className="project-card">
 
      <video className="project-video" src={echoAIVideo} type ='video/mp4' playsInline muted loop autoPlay></video>
<div className="project-card-texts">
<div className="project-texts">
<h1>EchoAI</h1>
<h2>Full stack AI friend developed in Next.js, MongoDB, and Auth0 authentication.</h2>
  <div>
  <button className="know-more">Know more</button>
  </div>
  </div>
  <div className="project-card-bottom">
  <div onClick={()=>{
    window.open('https://github.com/Nikhilv77/EchoAI')
  }} className="project-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div onClick={()=>{
    window.open('https://echo-ai-pi.vercel.app/')
  }} className="project-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
      </motion.div>
        </div>
        <div className="second-card-container">
<motion.div
initial = {{
  rotate:15,
  filter:'grayscale(100%)'
}}
whileInView={{rotate:0,filter:'grayscale(0)'}}
transition={{type:easeInOut, duration:1, delay:0.5}}
viewport={{once:true}}
className="project-card">
<video className="project-video" src={urbanCropsVideo} type ='video/mp4' playsInline muted loop autoPlay></video>

<div className="project-card-texts">
<div className="project-texts">
<h1>UrbanCrops</h1>
  <h2>Front-End Vegetable membership website built in HTML, CSS and Javascript.
  
  </h2>
  <div>
  <button className="know-more">Know more</button>
  </div>
  </div>
  <div className="project-card-bottom">
  <div onClick={()=>{
    window.open('https://github.com/Nikhilv77/UrbanCrops')
  }} className="project-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div onClick={()=>{
    window.open('https://urban-crops.vercel.app/')
  }} className="project-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
</motion.div>
<motion.div
initial = {{
  rotate:15,
  filter:'grayscale(100%)'
}}
whileInView={{rotate:0,filter:'grayscale(0)'}}
transition={{type:easeInOut, duration:1, delay:0.5}}
viewport={{once:true}}
className="project-card">
<video className="project-video" src={scoopSavorVideo} type ='video/mp4' playsInline muted loop autoPlay></video>
<div className="project-card-texts">
<div className="project-texts">
<h1>ScoopSavor</h1>
  <h2>Front-End Animated Ice cream Website made in React, Gsap and Framer motion.
  
  </h2>
  <div>
  <button className="know-more">Know more</button>
  </div>
  </div>
  <div className="project-card-bottom">
  <div onClick={()=>{
    window.open('https://github.com/Nikhilv77/ScoopSavor')
  }} className="project-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div onClick={()=>{
    window.open('https://scoop-savor.vercel.app/')
  }} className="project-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
</motion.div>
        </div>
        <div className="third-card-container">
<motion.div
initial = {{
  rotate:15,
  filter:'grayscale(100%)'
}}
whileInView={{rotate:0,filter:'grayscale(0)'}}
transition={{type:easeInOut, duration:1, delay:0.5}}
viewport={{once:true}}
className="project-card">
<video className="project-video" src={blinkChatVideo} type ='video/mp4' playsInline muted loop autoPlay></video>
<div className="project-card-texts">
<div className="project-texts">
<h1>BlinkChat</h1>
  <h2>Full stack Social media web app with Chat functionality. Made with React, express, mongodb.
  
  </h2>
  <div>
  <button className="know-more">Know more</button>
  </div>
  </div>
  <div className="project-card-bottom">
  <div className="project-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div className="project-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
</motion.div>
<motion.div
initial = {{
  rotate:15,
  filter:'grayscale(100%)'
}}
whileInView={{rotate:0,filter:'grayscale(0)'}}
transition={{type:easeInOut, duration:1, delay:0.5}}
viewport={{once:true}}
className="project-card">
<video className="project-video" src={portfolioVideo} type ='video/mp4' playsInline muted loop autoPlay></video>
<div className="project-card-texts">
  <div className="project-texts">
<h1>Portfolio</h1>
  <h2>Front-End portfolio website made in React Js, Css, Framer-motion(for animations).
  
  </h2>
  <div>
  <button className="know-more">Know more</button>
  </div>
  </div>
  <div className="project-card-bottom">
  <div onClick={()=>{
    window.open('https://github.com/Nikhilv77/NikhilDev')
  }} className="project-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
  </div>
  <div onClick={()=>{
    window.open('https://nikhilverma.vercel.app/')
  }} className="project-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


  {/* <br />
    core features - Payment gateway, automatic receipt generation, order cancellation, location fetching with maps, dynamic data visualisation.
    <br />
    Credentials - nv581339@gmail.com, 123456 */}