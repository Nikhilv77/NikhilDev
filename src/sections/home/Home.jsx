import React from "react";
import './Home.css'
import image from '../../assets/my-photo.png'
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Home(){
  return(
 <section id="home" className="home-section">
  <div className="hero-container">
    <motion.div initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition={{duration : 0.9,delay:0.2, type : 'ease'}} className="hero-texts">
      <div className="headings">
     <h1>Full Stack Developer 👋🏼</h1>
     <p>Hi there! I'm Nikhil Verma, a full-stack developer from Mumbai, India. I enjoy building websites and web applications, and I love turning ideas into real, working projects. Checkout the links 👇🏼</p>
     <div className = "links">
     <i onClick={()=>{
      window.open('https://github.com/Nikhilv77')
     }} class="ri-github-fill"></i>
     <i onClick={()=>{
      window.open('https://www.linkedin.com/in/nikhilverma95')
     }} class="ri-linkedin-box-fill"></i>
  
     </div>
     <div>
     <Link 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
    >
   <button className="headings-button">Contact me</button> </Link>
      </div>
     </div>
    </motion.div>
    <motion.div  initial = {{opacity:0,y:50}}
      animate = {{opacity:1,y:0}}
      transition={{duration : 1.5,delay:0.5, type : 'ease'}} className="hero-image">
      <img
      src={image} alt="" />
    </motion.div>
  </div>
 </section>
  );
}
