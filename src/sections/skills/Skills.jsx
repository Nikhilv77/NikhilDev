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
import { easeInOut, motion } from "framer-motion";


const Skills = () => {
  return(
    <section id="skills" className="skills-section">
     
        <h1>Skills</h1>
        <div className="skills-container-container">
      <div
 
      className="skills-container">
     
        <div
   
        className="first-row">
          <div className="first-skills-card">
             <motion.img
             initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
             src={javaLogo} alt="" />
          </div>
          <div className="second-skills-card">
            <motion.img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            src={htmlLogo} alt="" />
          </div>
          <div className="third-skills-card">
            <motion.img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            style={{height:'7rem',width:'7rem'}}  src={cssLogo} alt="" />
          </div>
          <div className="fourth-skills-card">
            <motion.img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            src={javascriptLogo} alt="" />
          </div>
        </div>
        <div
 
        className="second-row">
        <div className="first-skills-card">
<motion.img
initial = {{
  scale:0.2
}}
whileInView={{scale:1,rotate:-360}}
transition={{duration:1, delay:0.2, type:easeInOut}}
viewport={{once:true}}
style={{height:'7rem',width:'7rem'}}  src={reactLogo} alt="" />
        </div>
          <div className="second-skills-card">
            <motion.img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:-360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            style={{height:'7rem',width:'7rem'}}  src={nextjsLogo} alt="" />
          </div>
          <div className="third-skills-card">
            <motion.img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:-360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            src={nodejsLogo} alt="" />
          </div>
          <div className="fourth-skills-card">
            <motion.img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:-360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            style={{height:'11rem',width:'11rem'}} src={mongodbLogo} alt="" />
          </div>
        </div>
        <div
        className="third-row">
        <div className="first-skills-card">
          <motion.img
          initial = {{
            scale:0.2
          }}
          whileInView={{scale:1,rotate:360}}
          transition={{duration:1, delay:0.2, type:easeInOut}}
          viewport={{once:true}}
          style={{height:'7rem',width:'7rem'}}  src={framerLogo} alt="" />
        </div>
          <div className="second-skills-card">
            <motion.img 
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            style={{borderRadius:'50%',height:'7rem',width:'7rem'}} src={gsapLogo} alt="" />
          </div>
          <div className="third-skills-card">
            <motion.img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            style={{height:'6rem',width:'6rem'}} src={bootstrapLogo} alt="" />
          </div>
          <div className="fourth-skills-card">
            <motion.img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            src={tailwindLogo} alt="" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
