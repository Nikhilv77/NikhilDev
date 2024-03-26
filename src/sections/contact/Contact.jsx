import React from "react";
import './Contact.css';
import contactImage from '../../assets/contact-me.png'

const Contact = () => {
  return(
    <section className="contact-section">
<div>
      <h1>Contact me</h1>
    <div className="container">
      <div className="image-container">
    <img src={contactImage} alt="" />
      </div>
      <div className="form-container">
        <h1>Let's Talk</h1>
        <div>
     <form className="contact-form">
      <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name"/>
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      </div>
      <div>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols={28} rows={5} ></textarea>
      </div>
      <button>send message</button>
     </form>
     </div>
     <div className="bottom-links">
     <i class="ri-github-fill"></i>
     <i class="ri-linkedin-box-fill"></i>
     </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Contact;
