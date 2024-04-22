import React from "react";
import './Skills.css';

import mongodbLogo from '../../assets/mongodb-logo.svg';

import githubLogo from '../../assets/github-logo.png'

import { easeInOut, motion } from "framer-motion";


const Skills = () => {
  return(
    <section id="skills" className="skills-section">
     
        <h1>Skills</h1>
        <div className="skills-container-container">
      <motion.div
      initial = {{
       x:200,
       filter:'hue-rotate(360deg)'
      }}
      whileInView={{x:0,filter:'hue-rotate(0)'}}
      transition={{duration:3, type:easeInOut}}
      viewport={{once:true}}
      className="skills-container">
     
        <div
   
        className="first-row">
          <div className="first-skills-card">
             <img src='https://i.postimg.cc/zfkr1rYq/java-logo.png' alt="" />
          </div>
          <div className="second-skills-card">
            <img
            src='https://i.postimg.cc/pLzvqj0h/html-logo.png' alt="" />
          </div>
          <div className="third-skills-card">
            <img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            style={{height:'7rem',width:'7rem'}}  src='https://i.postimg.cc/QxRsQmqZ/css-logo.png' alt="" />
          </div>
          <div className="fourth-skills-card">
            <img
            initial = {{
              scale:0.2
            }}
            whileInView={{scale:1,rotate:360}}
            transition={{duration:1, delay:0.2, type:easeInOut}}
            viewport={{once:true}}
            src='https://i.postimg.cc/4yYktH73/javascript-logo.webp' alt="" />
          </div>
        </div>
        <div
 
        className="second-row">
        <div className="first-skills-card">
<img
initial = {{
  scale:0.2
}}
whileInView={{scale:1,rotate:-360}}
transition={{duration:1, delay:0.2, type:easeInOut}}
viewport={{once:true}}
style={{height:'7rem',width:'7rem'}}  src='https://i.postimg.cc/HLdqzhcR/react-logo.png' alt="" />
        </div>
          <div className="second-skills-card">
            <img
            
            style={{height:'7rem',width:'7rem'}}  src='https://i.postimg.cc/CK7WQsb1/nextjs-logo.png' alt="" />
          </div>
          <div className="third-skills-card">
            <img src='https://i.postimg.cc/W3fx2pWc/nodejs-logo.webp' alt="" />
          </div>
          <div className="fourth-skills-card">
            <img style={{height:'11rem',width:'11rem'}} src={mongodbLogo} alt="" />
          </div>
        </div>
        <div
        className="third-row">
        <div className="first-skills-card">
        <img  src='https://i.postimg.cc/FFYH0YQc/socket-io-logo.png' alt="" />
        </div>
          <div className="second-skills-card">
          <img style={{height:'7rem',width:'7rem'}}  src='https://i.postimg.cc/0jSvFJ8B/framer-motion-logo.webp' alt="" />

          </div>
          <div className="third-skills-card">
            <img style={{borderRadius:'50%',height:'7rem',width:'7rem'}} src='https://i.postimg.cc/2S7kCv4p/gsap-logo.png' alt="" />

          </div>
          <div className="fourth-skills-card">
            <img style={{height:'6rem',width:'6rem'}} src='https://i.postimg.cc/Y2Dt9MG9/bootstrap-logo.png' alt="" />

          </div>
        </div>
        <div
        className="fourth-row">
        <div className="first-skills-card">
          <img style={{height:'6rem',width:'6rem'}} src={githubLogo} alt="" />

        </div>
          <div className="second-skills-card">
          <img style={{height:'7rem',width:'7rem'}}  src='https://i.postimg.cc/yYJs3tcT/docker-logo.png' alt="" />

          </div>
          <div className="third-skills-card">
          <img style={{height:'7rem',width:'9rem'}} src='https://i.postimg.cc/SRP4tfF8/aws-logo.png' alt="" />

          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Skills;
