import React from "react";
import './EchoAIModal.css';

const EchoAIModal = () => {
  const closeModalHandler = ()=>{
    const yyModal = document.getElementsByClassName('echoai-modal')[0];
    yyModal.style.left = '-50%';
    const yyBackdrop = document.getElementsByClassName('echoai-backdrop')[0];
    yyBackdrop.style.left = '-110%'
  }
  return(<>
  <div onClick={closeModalHandler} className="echoai-backdrop"></div>
  <div className="echoai-modal">
  <i onClick={closeModalHandler} class="ri-close-line"></i>
  <div className="echoai-modal-container">
    <div className="echoai-features">
      <h2>Made with OpenAI Edge Stream using OpenAI API. Uses Mongodb to store chats. </h2>
      <h2>Core features - Funny Responses, Auth0 Authentication, 
      Chat History, Theme Customization.
        
      </h2>
    </div>
    <div className="echoai-credentials">
      <h2> Credentials - nikhilv7@yahoo.com, Nikhil123@</h2>
    </div>
  </div>
  </div>
  </> )
};

export default EchoAIModal;
