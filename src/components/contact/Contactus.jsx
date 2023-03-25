import React from "react";
/*import {Link, NavLink, Route, Routes} from "react-router-dom"*/
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0itdimk",
        "template_1klodyl",
        form.current,
        "cXhwNRqseAS0SIZe0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

    return (
        <section id="contactus">
          <h5>Get In Touch</h5>
          <h2>Contact Us</h2>

          <div className="container contactus__container">
            <div className="contactus__options">
              <article className="contactus__option">
                <MdEmail className="contactus__option-icon" />
                <h4>Email</h4>
                <h5></h5>
                <a href="mailto:kingbasketballcamp@gmail.com" target="_blank">
                  send a message{" "}
                </a>
              </article>

              <article className="contactus__option">
                <IoLogoWhatsapp className="contactus__option-icon" />
                <h4>WhatsApp</h4>
                <h5></h5>
                <a
                  href="https://web.whatsapp.com/send?phone+15173926200"
                  target="_blank"
                >
                  send a message{" "}
                </a>
              </article>
            </div>
            {/*END OF CONTACTS */}
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>
    );
  };

export default Contactus
