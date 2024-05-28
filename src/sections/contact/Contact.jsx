import React from "react";
import './Contact.css';
import contactImage from '../../assets/contact-me.png'
import {easeInOut, motion} from 'framer-motion'

const Contact = () => {
  return(
    <motion.section
    initial = {{scale:0.8,opacity:0.8}}
    whileInView={{scale:1, opacity:1}}
    transition={{duration:1,delay:0.5, type:easeInOut}}
    viewport={{once:true}}
    className="contact-section"
    id="contact"
    >
<div>
      <h1>Contact me</h1>
    <div className="container">
      <div className="image-container">
    <img src={contactImage} alt="" />
      </div>
      <div className="form-container">
        <h1>Let's Talk</h1>
        <div>
     <form  action="https://formspree.io/f/xvoeokjp"
      method="POST" className="contact-form">
      <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name"/>
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      </div>
      <div>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols={28} rows={5} ></textarea>
      </div>
      <button>send message</button>
     </form>
     </div>
     <div className="bottom-links">
     <i onClick={()=>{
      window.open('https://github.com/Nikhilv77')
     }} class="ri-github-fill"></i>
     <i onClick={()=>{
      window.open('https://www.linkedin.com/in/nikhilverma95')
     }} class="ri-linkedin-box-fill"></i>
     </div>
      </div>
    </div>
    </div>
    </motion.section>
  );
};

export default Contact;
