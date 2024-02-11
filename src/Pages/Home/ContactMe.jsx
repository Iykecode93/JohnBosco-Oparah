import React, { useState, useRef } from "react";
import emails from "../../asset/email copy.png";
import mobile from "../../asset/mobile.png";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    // emailjs.create(contact)
    //   .then(() => {
    //     setLoading(false);

    //   })
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a69ojoa",
        "template_anflkjo",
        form.current,
        "mQKKubPY-LBrohXwz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      
      {!isFormSubmitted ? (
        <>
        <h2 className="contact--section--heading">Hello let's chat</h2>
      <div className="contact--cards">
        <div className="contact--card">
          <img src={emails} alt="email" />
          <a href="mailto:boscoiyke67@gmail.com" className="p">
            boscoiyke67@gmail.com
          </a>
        </div>
        <div className="contact--card">
          <img src={mobile} alt="mobile" />
          <a href="tel: +234 803-456-9390" className="p">
            +234 803-456-9390
          </a>
        </div>
      </div>
        <form ref={form} onSubmit={sendEmail} className="contact--form--flex">
          <div>
            <input
              className="p"
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
          </div>
          <div>
            <input
              className="p"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
          </div>
          <div>
            <textarea
              className="p"
              type="email"
              placeholder="Your Message"
              name="message"
            />
          </div>

          <button type="submit" className="p" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
        </>
      ) : (
        <div className="contact--message">
          <h2 className="contact--section--heading">Thank you for getting in touch</h2>
        </div>
      )}
      ;
    </section>
  );
};

export default ContactMe;
