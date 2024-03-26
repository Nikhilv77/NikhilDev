import React from "react";
import './Projects.css';
import firstImage from '../../assets/yy-1.png';
import secondImage from '../../assets/yy-2.png'
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
<h1>My Work</h1>
        <div className="first-card-container">
      <div className="first-card">
        <div>
<img className="first-image" src={firstImage} alt="" />
<img className="second-image" src={secondImage} alt="" />
</div>
<div className="first-card-texts">
<h1>YumYard </h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. </h2>
  <div className="first-card-bottom">
  <div className="first-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div className="first-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
      </div>
      <div className="second-card">
      <div>
<img className="first-image" src={firstImage} alt="" />
<img className="second-image" src={secondImage} alt="" />
</div>
<div className="first-card-texts">
<h1>YumYard </h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. </h2>
  <div className="first-card-bottom">
  <div className="first-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div className="first-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
      </div>
        </div>
        <div className="second-card-container">
<div className="third-card">
<div>
<img className="first-image" src={firstImage} alt="" />
<img className="second-image" src={secondImage} alt="" />
</div>
<div className="first-card-texts">
<h1>YumYard </h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. </h2>
  <div className="first-card-bottom">
  <div className="first-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div className="first-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
</div>
<div className="fourth-card">
<div>
<img className="first-image" src={firstImage} alt="" />
<img className="second-image" src={secondImage} alt="" />
</div>
<div className="first-card-texts">
<h1>YumYard </h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. </h2>
  <div className="first-card-bottom">
  <div className="first-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div className="first-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
</div>
        </div>
        <div className="third-card-container">
<div className="fifth-card">
<div>
<img className="first-image" src={firstImage} alt="" />
<img className="second-image" src={secondImage} alt="" />
</div>
<div className="first-card-texts">
<h1>YumYard </h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. </h2>
  <div className="first-card-bottom">
  <div className="first-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
    
  </div>
  <div className="first-card-links">
    <i class="ri-global-line"></i>
    <span>Live demo</span>
  </div>
</div>
</div>
</div>
<div className="sixth-card">
<div>
<img className="first-image" src={firstImage} alt="" />
<img className="second-image" src={secondImage} alt="" />
</div>
<div className="first-card-texts">
  <div className="project-texts">
<h1>YumYard</h1>
  <h2>Full stack Restraunt web app with Admin Dashboard. Made with React, express, mongodb, bootstrap.
    {/* <br />
    core features - Payment gateway, automatic receipt generation, order cancellation, location fetching with maps, dynamic data visualisation.
    <br />
    Credentials - nv581339@gmail.com, 123456 */}
  </h2>
  <div>
  <button className="know-more">Know more</button>
  </div>
  </div>
  <div className="first-card-bottom">
  <div className="first-card-links">
  <i class="ri-github-line"></i>
    <span>Source code</span>
  </div>
  <div className="first-card-links">
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
