// import React from "react";
// import './Experience.css'
// import companyImage from '../../assets/Logo.png'
// import reactImage from '../../assets/react-logo-vector.svg'
// import framerImage from '../../assets/framer.png'
// import {easeInOut, motion} from 'framer-motion'

// const Experience = () => {
//   return (
// <section id="experience" className="experience-section">
//   <div>
//     <h1>Experiences</h1>
// <div className="experience-container">
//   <motion.div initial = {{left:0}}
//   whileInView={{left:'-100%'}}
//   transition={{duration:1.5, delay:0.5, type:easeInOut}}
//   viewport={{once:true}}
//   className="experience-overlay"></motion.div>
// <div className="company-container">

//   <img className="company-image" src={companyImage} alt="" />
//   <h1>Company Overview</h1>
//   <h2>TagSocial is an exciting social media site where you can meet and talk with new people. It's easy to use and has lots of fun features to enjoy. You can chat, share photos, and more. It makes connecting with others online really easy and enjoyable.</h2>
//   <div className="role-info">
//     <div>
//  <i class="ri-briefcase-fill"></i>  <span>| Web Developer</span>
//  </div>
//  <div>
// <i class="ri-calendar-fill"></i> <span>| January, 2024</span>
// </div>
// </div>

// </div>

// <div className="process-container">
//   <div className="experience-wrapper">
//   <h1>Experience Overview</h1>
//     <div className="process">
//     <i class="ri-file-list-2-fill"></i>
//     <div className="vl"></div>
//     <h2>Understood the company's requirement and started working with continous communication with the designer.</h2>
//     </div>
//     <div className="process">
//     <i class="ri-check-double-fill"></i>
//     <div className="vl"></div>
//     <h2>
//     Developed the web application and conducted testing to ensure that it functions reliably.</h2>
//     </div>
//     <div className="work-result">
//     <span>Check the work👇🏼</span>
//     <span><a href="https://tagsocial.in/" target="_blank">https://tagsocial.in</a></span>
//     </div>
//   <span>Stack Used</span>
//   <div className="stack-images">
//   <img src={reactImage} alt="" />
//   <img src={framerImage} alt="" />
//   </div>
//   </div>
// </div>
// </div>
// </div>
// </section>
//   )
// };

// export default Experience;

import React from 'react'
import './Experience.css'
import companyImage from '../../assets/dumpit-logo.jpeg'
import flashLogo from '../../assets/flash-logo.jpg'
import { easeInOut, motion } from 'framer-motion'
const Experience = () => {
  return (
    <section id="experience" className="new-experience-section">
      <h1>Experience</h1>
      <div className="new-experience-container">
        <div className="first-new-experience-card">
          <motion.div
            initial={{ x: 300 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, type: easeInOut }}
            viewport={{ once: true }}
            className="first-new-experience-card-container"
          >
            <div className="first-top-view">
              <div className="first-top-view-first-col">
                <img src={flashLogo} alt="" />
              </div>
              <div className="first-top-view-second-col">
                <h4>Software Developer</h4>
                <span>Flashaid</span>
                <span>July 2024 - Present</span>
              </div>
            </div>
            <div className="first-mid-view">
              <ul>
                <li>
                  Built scalable Node.js services, improving server efficiency
                  and handling over 20,000 user requests.
                </li>
                <li>
                  Developed robust React and Node.js solutions for business
                  clients, creating user-friendly interfaces and scalable
                  back-end systems that served thousands of users.
                </li>
                <li>
                  Used GitHub for collaborating with team members and managing
                  version control.
                </li>
                <li>
                  Managed web applications on Google Cloud Platform, ensuring
                  99.9% uptime and efficient resource use.
                </li>
              </ul>
            </div>
            <div className="first-last-view">
              <span>
                Tech stack - Typescript, React.js, Node.js, Express.js, Firebase, Docker, MongoDB, Posgresql, Postman, Jira,
                Aws
              </span>
            </div>
          </motion.div>
        </div>
        <div className="second-new-experience-card">
          <motion.div
            initial={{ y: 300 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, type: easeInOut }}
            viewport={{ once: true }} className="second-new-experience-card-container">
            <div className="second-top-view">
              <div className="second-top-view-first-col">
                <img src={companyImage} alt="Dumpit Logo" />
              </div>
              <div className="second-top-view-second-col">
                <h4>Software Engineer (Founding Member)</h4>
                <span>Dumpit</span>
                <span>Aug 2023 - July 2024(1 Year)</span>
              </div>
            </div>
            <div className="second-mid-view">
            <ul>
  <li>
    Developed the website for Dumpit using React, GSAP, and Framer Motion, adding smooth animations for an engaging user experience.
  </li>
  <li>
    Built a responsive design, ensuring the site performs well across devices with optimized load times.
  </li>
  <li>
    Worked on Dumpit mobile app using React Native and Firebase, focusing on speed and smooth functionality across different platforms.
  </li>
  <li>
    Collaborated with the designer to add new features, improving functionality and usability on both the website and the app.
  </li>
</ul>

            </div>
            <div className="second-last-view">
              <span>Tech stack -React Native, NodeJs, ReactJs, Framer Motion, GSAP, CSS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
