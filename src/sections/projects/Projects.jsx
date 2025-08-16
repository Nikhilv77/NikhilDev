import React, { useRef } from "react";
import './Projects.css';
import { easeInOut, motion } from 'framer-motion';
import VimeoPlayer from '@vimeo/player'; // Import VimeoPlayer

import iShowcaseVideo from '../../assets/ishowcase.mp4'


const Projects = () => {
  const vimeoRefs = useRef({});

  const handleMouseEnter = (id) => {
    if (vimeoRefs.current[id]) {
      vimeoRefs.current[id].play();
    }
  };

  const handleMouseLeave = (id) => {
    if (vimeoRefs.current[id]) {
      vimeoRefs.current[id].pause();
    }
  };

  const openYumyardModalHandler = () => {
    const yyModal = document.getElementsByClassName('yumyard-modal')[0];
    yyModal.style.left = '50%';
    const yyBackdrop = document.getElementsByClassName('yumyard-backdrop')[0];
    yyBackdrop.style.left = '0'
  };

  const openEchoAIModalHandler = () => {
    const echoAIModal = document.getElementsByClassName('echoai-modal')[0];
    echoAIModal.style.left = '50%';
    const eaiBackdrop = document.getElementsByClassName('echoai-backdrop')[0];
    eaiBackdrop.style.left = '0'
  };

  const openUrbanCropsHandler = () => {
    const urbanCropsModal = document.getElementsByClassName('urbancrops-modal')[0];
    urbanCropsModal.style.left = '50%';
    const ucBackdrop = document.getElementsByClassName('urbancrops-backdrop')[0];
    ucBackdrop.style.left = '0'
  };

  const scoopSavorHandler = () => {
    const scoopSavor = document.getElementsByClassName('scoopsavor-modal')[0];
    scoopSavor.style.left = '50%';
    const scoopSavorBackdrop = document.getElementsByClassName('scoopsavor-backdrop')[0];
    scoopSavorBackdrop.style.left = '0'
  };

  const blinkChatHandler = () => {
    const blinkChat = document.getElementsByClassName('blinkchat-modal')[0];
    blinkChat.style.left = '50%';
    const blinkChatBackdrop = document.getElementsByClassName('blinkchat-backdrop')[0];
    blinkChatBackdrop.style.left = '0'
  };

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
      transition={{type:easeInOut, duration:0.7, delay:0.3}}
      viewport={{once:true}}
      className="project-card">


<div
              style={{ padding: '50.63% 0 0 0', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('video1')}
              onMouseLeave={() => handleMouseLeave('video1')}
            >
              <iframe
                ref={(ref) => (vimeoRefs.current['video1'] = new VimeoPlayer(ref))}
                src="https://player.vimeo.com/video/943291448?loop=1&controls=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                title="gc-video"
              ></iframe>
            </div>

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
transition={{type:easeInOut, duration:0.7, delay:0.3}}
viewport={{once:true}}
className="project-card">
<div
              style={{ padding: '50.63% 0 0 0', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('video2')}
              onMouseLeave={() => handleMouseLeave('video2')}
            >
              <iframe
                ref={(ref) => (vimeoRefs.current['video2'] = new VimeoPlayer(ref))}
                src="https://player.vimeo.com/video/943289305?loop=1&controls=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                title="gc-video"
              ></iframe>
            </div>
<div className="project-card-texts">
<div className="project-texts">
<h1>GingerChat</h1>
  <h2>Full stack Social media web app with Chat functionality. Made with Socket.IO, React, express, mongodb.
  
  </h2>
  <div>
  <button onClick={blinkChatHandler} className="know-more">Know more</button>
  </div>
  </div>
  <div className="project-card-bottom">
  <div onClick={()=>{
    window.open('https://github.com/Nikhilv77/gingerchat-fullstack')
  }} className="project-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div onClick={()=>{
    window.open('https://gingerchat.vercel.app/')
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
      transition={{type:easeInOut, duration:0.7, delay:0.3}}
      viewport={{once:true}}
      className="project-card">


<div
              style={{ padding: '50.63% 0 0 0', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('video3')}
              onMouseLeave={() => handleMouseLeave('video3')}
            >
              <iframe
                ref={(ref) => (vimeoRefs.current['video3'] = new VimeoPlayer(ref))}
                src="https://player.vimeo.com/video/943294135?loop=1&controls=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                title="gc-video"
              ></iframe>
            </div>

<div className="project-card-texts">
<div className="project-texts">
<h1>EchoAI</h1>
<h2>{`Full stack AI friend developed in Next.js, MongoDB, and Auth0 authentication. (This project currently may not work because the API credits might have ended)`}</h2>
  <div>
  <button onClick={openEchoAIModalHandler} className="know-more">Know more</button>
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
      <motion.div
initial = {{
  rotate:15,
  filter:'grayscale(100%)'
}}
whileInView={{rotate:0,filter:'grayscale(0)'}}
transition={{type:easeInOut, duration:0.7, delay:0.3}}
viewport={{once:true}}
className="project-card">
<video className="project-video" src={iShowcaseVideo} type ='video/mp4' playsInline muted loop autoPlay></video>
<div className="project-card-texts">
  <div className="project-texts">
<h1>iShowcase</h1>
  <h2>Front-End website made in React Js, Css, Framer-motion(for animations).
 This website is showcase for iphones.
  </h2>
  <div>
  {/* <button className="know-more">Know more</button> */}
  </div>
  </div>
  <div className="project-card-bottom">
  <div onClick={()=>{
    window.open('https://github.com/Nikhilv77/iShowcase')
  }} className="project-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
  </div>
  <div onClick={()=>{
    window.open('https://ishowcase.vercel.app/')
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
transition={{type:easeInOut, duration:0.7, delay:0.3}}
viewport={{once:true}}
className="project-card">


<div
              style={{ padding: '50.63% 0 0 0', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('video4')}
              onMouseLeave={() => handleMouseLeave('video4')}
            >
              <iframe
                ref={(ref) => (vimeoRefs.current['video4'] = new VimeoPlayer(ref))}
                src="https://player.vimeo.com/video/943293450?loop=1&controls=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                title="gc-video"
              ></iframe>
            </div>

<div className="project-card-texts">
<div className="project-texts">
<h1>ScoopSavor</h1>
  <h2>Front-End Animated Ice cream Website made in React, Gsap and Framer motion.
  
  </h2>
  <div>
  <button onClick={scoopSavorHandler} className="know-more">Know more</button>
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
        <motion.div
initial = {{
  rotate:15,
  filter:'grayscale(100%)'
}}
whileInView={{rotate:0,filter:'grayscale(0)'}}
transition={{type:easeInOut, duration:0.7, delay:0.3}}
viewport={{once:true}}
className="project-card">


<div
              style={{ padding: '50.63% 0 0 0', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('video5')}
              onMouseLeave={() => handleMouseLeave('video5')}
            >
              <iframe
                ref={(ref) => (vimeoRefs.current['video5'] = new VimeoPlayer(ref))}
                src="https://player.vimeo.com/video/943294837?loop=1&controls=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                title="gc-video"
              ></iframe>
            </div>


<div className="project-card-texts">
<div className="project-texts">
<h1>UrbanCrops</h1>
  <h2>Front-End Vegetable membership website built in HTML, CSS and Javascript.
  
  </h2>
  <div>
  <button onClick={openUrbanCropsHandler} className="know-more">Know more</button>
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


        </div>
      </div>
    </section>
  );
};

export default Projects;
