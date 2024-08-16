import React from "react";
import { useState } from "react";
import "./Contact.css";
import theme from "../../assets/theme.svg";
import location from "../../assets/location.png";
import mail from "../../assets/mail.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e634a25f-4327-4331-bc2d-459825dfd577");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-menu">
        <h1>Contact ME!</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-sections">
        <div className="contact-me">
          <h1>Find Me On</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="https://www.facebook.com/Jershey2021/">
                <img src={facebook} alt="" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://mail.google.com/mail/u/0/?to=inbox@example.com&bcc=admin@example.com&subject=Hey#inbox?compose=CllgCJTJnWwgHwqVlKmHpPwhTVfQvLqpdxdzfnFLFBrrJVhNffSkwsjdVgRFjqzNVFSSXHwCqML">
                <img src={mail} alt="" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://www.linkedin.com/in/jershey-aguinaldo-456364313/">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <div className="contact-detail">
              <a href="https://www.google.com/search?q=pulilan%2C+bulacan&oq=pulilan%2C+bulacan&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQ5NzVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8">
                <img src={location} alt="" />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-form">
          <h1>GET IN TOUCH</h1>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <label htmlFor="">Your Message Here!</label>
          <textarea
            type="text"
            placeholder="Enter Your Message"
            name="message"
            required
          ></textarea>
          <button className="contact-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
