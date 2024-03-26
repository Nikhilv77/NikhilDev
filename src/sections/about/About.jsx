import React from "react";
import aboutImage from '../../assets/other.png'
import './About.css'

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
       <div className="about-image">
        <img src={aboutImage} alt="" />
       </div>
       <div className="about-texts">
        <div>
        <h1>About me</h1>
    
<h2>Hey, I'm Nikhil Verma, a driven engineer with a strong foundation in Electronics and Computer Science. Graduating with a 9.3 CGPA from Pillai College of Engineering, Panvel, I've always had a knack for diving deep into technology and uncovering its potential. As a tech enthusiast, I thrive on the thrill of building things from scratch.</h2>
        <button>Resume</button>
        </div>
       </div>
      </div>
    </section>
  );
}
