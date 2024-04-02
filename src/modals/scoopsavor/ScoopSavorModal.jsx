import React from "react";
import './ScoopSavorModal.css';

const ScoopSavorModal = () => {
  const closeModalHandler = ()=>{
    const yyModal = document.getElementsByClassName('scoopsavor-modal')[0];
    yyModal.style.left = '-50%';
    const yyBackdrop = document.getElementsByClassName('scoopsavor-backdrop')[0];
    yyBackdrop.style.left = '-110%'
  }
  return(<>
  <div onClick={closeModalHandler} className="scoopsavor-backdrop"></div>
  <div className="scoopsavor-modal">
  <i onClick={closeModalHandler} class="ri-close-line"></i>
  <div className="scoopsavor-modal-container">
    <div className="scoopsavor-features">
      <h2>This is an ice cream website featuring a variety of flavors. Utilizing React, Styled Components, GSAP, and Framer Motion, It offers animations and scroll-triggered effects for enhancing the browsing experience. </h2>
    </div>
  </div>
  </div>
  </> )
};

export default ScoopSavorModal;
