import React from 'react'
import './Navbar.css'

const navbar = () => {
  const showMobileNavHandler = ()=>{
    const mobileNav = document.getElementsByClassName('mobile-nav')[0];
    mobileNav.style.top = '0';
  }
  const hideMobileNavHandler = ()=>{
    const mobileNav = document.getElementsByClassName('mobile-nav')[0];
    mobileNav.style.top = '-150%';
  }
  return <>
  <nav className='desktop-nav'>
    <div className='logo'>
      <h1>Portfolio</h1>
    </div>
    <div className='nav-items'>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="#projects">Projects</a></li> 
        <li><a href="">Contact</a></li>
      </ul>
      <button className='button-29'>Resume</button>
    </div>
    <i onClick={showMobileNavHandler} class="ri-menu-fill"></i>
  </nav>
  <nav className='mobile-nav'>
  <i onClick={hideMobileNavHandler} class="ri-close-line"></i>
    <div className="mobile-nav-items">
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="#projects">Projects</a></li> 
        <li><a href="">Contact</a></li>
      </ul>
      <button className='button-29'>Resume</button>
    </div>
  </nav>
  </>
}

export default navbar;
