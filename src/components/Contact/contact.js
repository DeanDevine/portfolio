import React, { useRef } from 'react';
import './contact.css';
import emailjs from "@emailjs/browser";
import GitHub from '../../assets/GitHub.png'
import LinkedIn from '../../assets/LinkedIn.png'
 
const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_vlts8qb",
         "template_io6wb3k",
         form.current,
         "aMkNagUj6EHApYevS"
       )
       .then(
         (result) => {
           console.log(result.text);
           alert('Your email has been sent');
           e.target.reset()
         },
         (error) => {
           console.log(error.text);
         }
       );
   };

    return (
      <section id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form if you want to get in touch with me.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            rows="5"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://github.com/DeanDevine" target="_blank">
              <img src={GitHub} alt="GitHub logo" className="link" />
            </a>
            <a
              href="https://linkedin.com/in/dean-devine-a30a41294"
              target="_blank"
            >
              <img src={LinkedIn} alt="LinkedIn logo" className="link" />
            </a>
          </div>
        </form>
      </section>
    );
}

export default Contact;
