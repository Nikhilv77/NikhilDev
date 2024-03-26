import React from "react";
import './Footer.css'

const Footer = () => {
  return(
    <footer className="footer-section"
    >
      <div className="cta-container">
        <div className="cta">
        <h1>Don't be shy,</h1>
        <h3>Just say hi👇🏼</h3>
         <form className="cta-form">
          <input type="text" placeholder="How is it going?"/>
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
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
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
    <i class="ri-github-fill"></i>
    <i class="ri-linkedin-box-fill"></i>
    </div>
  </div>
    </footer>
  );
};

export default Footer;
