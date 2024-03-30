import React from "react";
import './Projects.css';
import firstImage from '../../assets/yy-1.png';
import secondImage from '../../assets/yy-2.png';
import echoAIVideo from '../../assets/echo-ai.mp4';
import urbanCropsVideo from '../../assets/uc.mp4';
import yumyardVideo from '../../assets/Yumyard.mp4';
import scoopSavorVideo from '../../assets/ss.mp4';
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
<h1>My Work</h1>
        <div className="first-card-container">
      <div className="project-card">
      <video className="project-video" src={yumyardVideo} type ='video/mp4' playsInline muted loop autoPlay></video>

<div className="project-card-texts">
<div className="project-texts">
<h1>YumYard</h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. Made with React, express, mongodb, bootstrap.
  
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
      </div>
      <div className="project-card">
 
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
      </div>
        </div>
        <div className="second-card-container">
<div className="project-card">

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
</div>
<div className="project-card">
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
</div>
        </div>
        <div className="third-card-container">
<div className="project-card">
<video className="project-video" src={yumyardVideo} type ='video/mp4' playsInline muted loop autoPlay></video>
<div className="project-card-texts">
<div className="project-texts">
<h1>YumYard</h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. Made with React, express, mongodb, bootstrap.
  
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
</div>
<div className="project-card">
<video className="project-video" src={yumyardVideo} type ='video/mp4' playsInline muted loop autoPlay></video>
<div className="project-card-texts">
  <div className="project-texts">
<h1>YumYard</h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. Made with React, express, mongodb, bootstrap.
  
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
</div>
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