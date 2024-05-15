import React from "react";
import './BlinkChatModal.css';

const BlinkChatModal = () => {
  const closeModalHandler = ()=>{
    const yyModal = document.getElementsByClassName('blinkchat-modal')[0];
    yyModal.style.left = '-50%';
    const yyBackdrop = document.getElementsByClassName('blinkchat-backdrop')[0];
    yyBackdrop.style.left = '-110%'
  }
  return(<>
  <div onClick={closeModalHandler} className="blinkchat-backdrop"></div>
  <div className="blinkchat-modal">
  <i onClick={closeModalHandler} class="ri-close-line"></i>
  <div className="blinkchat-modal-container">
    <div className="blinkchat-features">
      <h2>This is a social media platform Made with Socket.IO, React, Vanilla css, Express Js, Mongodb.</h2>
      <h2>Core features - OTP verification for signup and forgot password, everything in real time like Add a friend, Remove a friend, make a post, like a post, comment a post, delete a post, send friend requests, decline/accept friend request, edit profile, real time chat with friends.
      </h2>
    </div>
    <div className="blinkchat-credentials">
      <h2> Credentials - nykhilverma@gmail.com, 123456</h2>
    </div>
  </div>
  </div>
  </> )
};

export default BlinkChatModal;
