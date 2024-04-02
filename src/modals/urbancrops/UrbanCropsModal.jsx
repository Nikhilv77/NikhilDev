import React from "react";
import './UrbanCropsModal.css';

const UrbanCropsModal = () => {
  const closeModalHandler = ()=>{
    const yyModal = document.getElementsByClassName('urbancrops-modal')[0];
    yyModal.style.left = '-50%';
    const yyBackdrop = document.getElementsByClassName('urbancrops-backdrop')[0];
    yyBackdrop.style.left = '-110%'
  }
  return(<>
  <div onClick={closeModalHandler} className="urbancrops-backdrop"></div>
  <div className="urbancrops-modal">
  <i onClick={closeModalHandler} class="ri-close-line"></i>
  <div className="urbancrops-modal-container">
    <div className="urbancrops-features">
      <h2>This is a simple website where users can sign up for vegetable memberships by filling out a contact form.</h2>
      <h2>The website is built using HTML for structure, CSS for styling, and JavaScript for interactivity.</h2>
    </div>
  </div>
  </div>
  </> )
};

export default UrbanCropsModal;