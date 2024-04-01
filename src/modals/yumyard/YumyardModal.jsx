import React from "react";
import './YumyardModal.css';

const YumyardModal = () => {
  const closeModalHandler = ()=>{
    const yyModal = document.getElementsByClassName('yumyard-modal')[0];
    yyModal.style.left = '-50%';
    const yyBackdrop = document.getElementsByClassName('yumyard-backdrop')[0];
    yyBackdrop.style.left = '-110%'
  }
  return(<>
  <div onClick={closeModalHandler} className="yumyard-backdrop"></div>
  <div className="yumyard-modal">
  <i onClick={closeModalHandler} class="ri-close-line"></i>
  <div className="yumyard-modal-container">
    <div className="features">
      <h2>Core features - Payment gateway, automatic receipt generation, order cancellation, order updation, location fetching with maps, dynamic data visualisation, email verification, otp verification, routes protection, Donation system with receipt, Account deletion, Account updation, product updation, product deletion, Customer management, feedbacks, blogs.
      </h2>
    </div>
    <div className="credentials">
      <h2> Credentials - nv581339@gmail.com, 123456(with admin access)</h2>
    </div>
  </div>
  </div>
  </> )
};

export default YumyardModal;
