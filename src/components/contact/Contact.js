import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsSkype } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_niqn849",
        "template_10sburq",
        form.current,
        "qUyXNn-nKWGvqOwLJ"
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
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="options">
          <article className="option">
            <MdOutlineMail className="icon" />
            <h4>Email</h4>
            <h5>intesarulhaquey4@gmail.com</h5>
            <a href="mailto:intesarulhaquey4@gmail.com">Send a Message</a>
          </article>
          <article className="option">
            <BsSkype className="icon" />
            <h4>Skype</h4>
            <h5>live:.cid.afa88fdf382eafe9</h5>
            <a href="live:.cid.afa88fdf382eafe9">Send a Message</a>
          </article>
          <article className="option">
            <BsWhatsapp className="icon" />
            <h4>Whatsapp</h4>
            <h5>+8801834266766</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801834266766"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Write your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Write your email"
            required
          />

          <textarea
            rows="7"
            name="message"
            placeholder="Write your Message"
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

export default Contact;
