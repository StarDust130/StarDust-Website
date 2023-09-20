import "./contact.css" 
import {MdOutgoingMail} from "react-icons/md"
import { BsXSquare } from "react-icons/bs";
import "./contact.css";
import { BsWhatsapp} from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

function Contact() {
  const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_1xf1xph",
         "template_p0o1qtq",
         form.current,
         "cu7X-PcmdKfW1GQyR"
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
        <div className="contact_options">
          <article className="contact_option">
            <MdOutgoingMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>csyadav0513@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJZfSkfWqvZHZZGfQJXSKJBvXRmMtGtntDZgdnKzmzggbMfzsbLDXrzcdkxhbwgsXJpWgbV"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          {/* Twitter */}
          <article className="contact_option">
            <BsXSquare className="contact_option-icon" />
            <h4>X</h4>
            <h5>csyadav130</h5>

            <a
              href="https://twitter.com/csyadav130"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>91+93XXX XXXXX</h5>
            <a href="https://media.tenor.com/TKSEpuhns1oAAAAC/haha-baby.gif">
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="You Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
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
}
export default Contact;