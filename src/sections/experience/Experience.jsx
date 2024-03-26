import React from "react";
import './Experience.css'
import companyImage from '../../assets/Logo.png'
import reactImage from '../../assets/react-logo-vector.svg'
import framerImage from '../../assets/framer.png'

const Experience = () => {
  return (
<section className="experience-section">
  <div>
    <h1>Experiences</h1>
<div className="experience-container">
  
<div className="company-container">
 
  <img className="company-image" src={companyImage} alt="" />
  <h1>Company Overview</h1>
  <h2>TagSocial is an exciting social media site where you can meet and talk with new people. It's easy to use and has lots of fun features to enjoy. You can chat, share photos, and more. It makes connecting with others online really easy and enjoyable.</h2>
  <div className="role-info">
    <div>
 <i class="ri-briefcase-fill"></i>  <span>| Web Developer</span>
 </div>
 <div>
<i class="ri-calendar-fill"></i> <span>| January, 2024</span>
</div>
</div>

</div>

<div className="process-container">
  <div className="experience-wrapper">
  <h1>Experience Overview</h1>
    <div className="process">
    <i class="ri-file-list-2-fill"></i>
    <div className="vl"></div>
    <h2>Understood the company's requirement and started working with continous communication with the designer.</h2>
    </div>
    <div className="process">
    <i class="ri-check-double-fill"></i>
    <div className="vl"></div>
    <h2>
    Developed the web application and conducted testing to ensure that it functions reliably.</h2>
    </div>
    <div className="work-result">
    <span>Check the work👇🏼</span>
    <span><a href="https://tagsocial.in/" target="_blank">https://tagsocial.in</a></span>
    </div>
  <span>Stack Used</span>
  <div className="stack-images">
  <img src={reactImage} alt="" />
  <img src={framerImage} alt="" />
  </div>
  </div>
</div>
</div>
</div>
</section>
  )
};

export default Experience;
