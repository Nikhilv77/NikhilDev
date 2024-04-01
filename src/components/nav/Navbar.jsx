import React from 'react'
import './Navbar.css'
import n from '../../assets/n.png'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';
import resume from '../../assets/Resume.pdf'

const navbar = () => {
  const showMobileNavHandler = () => {
    const mobileNav = document.getElementsByClassName('mobile-nav')[0]
    mobileNav.style.top = '0'
    const backdrop = document.getElementsByClassName('backdrop')[0]
    backdrop.style.top = '0'
  }
  const hideMobileNavHandler = () => {
    const mobileNav = document.getElementsByClassName('mobile-nav')[0]
    mobileNav.style.top = '-150%'
    const backdrop = document.getElementsByClassName('backdrop')[0]
    backdrop.style.top = '-110%'
  }

  return (
    <>
      <div onClick={hideMobileNavHandler} className="backdrop"></div>
      <motion.nav
        initial={{ opacity:0,scale:0.7 }}
        animate={{ scale:1,opacity:1 }}
        transition={{ duration: 1, delay: 0.7, type: 'ease' }}
        viewport={{once:true}}
        className="desktop-nav"
      >
        <div
          onClick={() => {
            window.location.reload()
          }}
          className="logo"
        >
          <img src={n} alt="" />
        </div>
        <div className="nav-items">
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
      offset={-80} 
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
          <a href={resume} target='_blank'><button className="button-29">Resume</button></a>
        </div>
        <i onClick={showMobileNavHandler} class="ri-menu-fill"></i>
      </motion.nav>
      <nav  className="mobile-nav">
        <i onClick={hideMobileNavHandler} class="ri-close-line"></i>
        <div className="mobile-nav-items">
          <ul>
            <li>
            <Link 
            onClick={hideMobileNavHandler}
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
            onClick={hideMobileNavHandler}
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={500} 
    >
      About
    </Link>
            </li>
            <li>
            <Link
            onClick={hideMobileNavHandler} 
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
            onClick={hideMobileNavHandler}
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
            onClick={hideMobileNavHandler}
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
            onClick={hideMobileNavHandler}
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
          <a href={resume} target='_blank'><button className="button-29">Resume</button></a>
        </div>
      </nav>
    </>
  )
}

export default navbar
