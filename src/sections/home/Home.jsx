import React from "react";
import './Home.css'
import image from '../../assets/my-new-image.jpg'
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Home(){
  return(
 <section id="home" className="home-section">
  <div className="hero-container">
    <motion.div initial = {{opacity:0}}
      animate = {{opacity:1}}
      transition={{duration : 1,delay:0.5, type : 'ease'}} className="hero-texts">
      <div className="headings">
     <h1>Full Stack Developer 👋🏼</h1>
     <p>Hey there, I'm Nikhil Verma, a full stack developer from Mumbai, India, who loves building cool stuff! checkout the links👇🏼</p>
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
      transition={{duration : 2.3,delay:0.5, type : 'ease'}} className="hero-image">
      <img
      src={image} alt="" />
    </motion.div>
  </div>
 </section>
  );
}
