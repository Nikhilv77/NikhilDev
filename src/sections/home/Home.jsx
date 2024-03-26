import React from "react";
import './Home.css'
import image from '../../assets/dummy-hero.png'

export default function Home(){
  return(
 <section className="home-section">
  <div className="hero-container">
    <div className="hero-texts">
      <div className="headings">
     <h1>Full Stack Web Developer 👋🏼</h1>
     <h3>Hey there, I'm Nikhil Verma, a full stack developer from Mumbai, India, who loves building cool stuff! checkout the links👇🏼</h3>
     <div className="links">
     <i class="ri-github-fill"></i>
     <i class="ri-linkedin-box-fill"></i>
     <i class="ri-instagram-fill"></i>
     </div>
     <div>
      <button className="headings-button">Contact me</button>
      </div>
     </div>
    </div>
    <div className="hero-image">
      <img src={image} alt="" />
    </div>
  </div>
 </section>
  );
}
