import React from "react";
import './Skills.css';
import javaLogo from '../../assets/java-logo.png'
import htmlLogo from '../../assets/html-logo.png';
import cssLogo from '../../assets/css-logo.png';
import javascriptLogo from '../../assets/javascript-logo.webp';
import reactLogo from '../../assets/react-logo.png';
import nextjsLogo from '../../assets/nextjs-logo.png';
import nodejsLogo from '../../assets/nodejs-logo.webp';
import mongodbLogo from '../../assets/mongodb-logo.svg';
import framerLogo from '../../assets/framer-motion-logo.webp';
import gsapLogo from '../../assets/gsap-logo.png';
import bootstrapLogo from '../../assets/bootstrap-logo.png';
import tailwindLogo from '../../assets/tailwind-css-logo.svg';


const Skills = () => {
  return(
    <section className="skills-section">
        <h1>Skills</h1>
      <div className="skills-container">
        <div className="first-row">
          <div className="first-skills-card">
             <img src={javaLogo} alt="" />
          </div>
          <div className="second-skills-card">
            <img src={htmlLogo} alt="" />
          </div>
          <div className="third-skills-card">
            <img style={{height:'7rem',width:'7rem'}}  src={cssLogo} alt="" />
          </div>
          <div className="fourth-skills-card">
            <img src={javascriptLogo} alt="" />
          </div>
        </div>
        <div className="second-row">
        <div className="first-skills-card">
<img style={{height:'7rem',width:'7rem'}}  src={reactLogo} alt="" />
        </div>
          <div className="second-skills-card">
            <img style={{height:'7rem',width:'7rem'}}  src={nextjsLogo} alt="" />
          </div>
          <div className="third-skills-card">
            <img src={nodejsLogo} alt="" />
          </div>
          <div className="fourth-skills-card">
            <img style={{height:'11rem',width:'11rem'}} src={mongodbLogo} alt="" />
          </div>
        </div>
        <div className="third-row">
        <div className="first-skills-card">
          <img style={{height:'7rem',width:'7rem'}}  src={framerLogo} alt="" />
        </div>
          <div className="second-skills-card">
            <img style={{borderRadius:'50%',height:'7rem',width:'7rem'}} src={gsapLogo} alt="" />
          </div>
          <div className="third-skills-card">
            <img style={{height:'6rem',width:'6rem'}} src={bootstrapLogo} alt="" />
          </div>
          <div className="fourth-skills-card">
            <img src={tailwindLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
