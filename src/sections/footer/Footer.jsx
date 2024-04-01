import React from "react";
import './Footer.css';
import {easeInOut, motion} from 'framer-motion'
import { Link } from "react-scroll";

const Footer = () => {
  return(
    <motion.footer initial = {{
      filter : 'grayscale(100%)'
    }}
    whileInView={{filter:'grayscale(0)'}}
    transition={{duration:1, delay:0.5, type:easeInOut}}
    viewport={{once:true}}
    className="footer-section"
    >
      <div className="cta-container">
        <div className="cta">
        <h1>Don't be shy,</h1>
        <h3>Just say hi👇🏼</h3>
         <form action="https://formspree.io/f/xvoeokjp"
      method="POST" className="cta-form">
          <input name="message" required type="text" placeholder="How is it going?"/>
          <button>Send</button>
         </form>
         </div>
      </div>
  <div className="footer-container">

    <div className="copyright">
 <p>© 2024 by Nikhil Verma. All rights reserved.</p>
    </div>
    <div className="links">
    <ul>
            <li>
            <Link 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
    >
      Home
    </Link>

            </li>
            <li>
            <Link 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} 
    >
      About
    </Link>
            </li>
            <li>
            <Link 
      to="skills" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
    >
      Skills
    </Link>
            </li>
            <li>
            <Link 
      to="experience" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
    >
      Experience
    </Link>
            </li>
            <li>
            <Link 
      to="projects" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
    >
      Projects
    </Link>
            </li>
            <li>
            <Link 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
    >
      Contact
    </Link>
            </li>
          </ul>
    </div>
    <div className="contact">
      <div className="phone">
      <i class="ri-phone-fill"></i>
      <span>+91 7208291301</span>
      </div>
      <div className="email">
      <i class="ri-mail-fill"></i>
      <span>nv581339@gmail.com</span>
      </div>
    </div>
    <div className="symbols">
    <i onClick={()=>{
      window.open('https://github.com/Nikhilv77')
     }} class="ri-github-fill"></i>
     <i onClick={()=>{
      window.open('https://www.linkedin.com/in/nikhil-verma-051696176/')
     }} class="ri-linkedin-box-fill"></i>
    </div>
  </div>
    </motion.footer>
  );
};

export default Footer;
