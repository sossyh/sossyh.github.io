import React, { useState } from 'react';
import "./Contact.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "e92aeb59-46ca-4380-99de-ad6bdcdb4c7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully!" : "Something went wrong");
  };

  return (
    <div id="contact" className="contact">

      <div className="contact-title">
        <h1>Let's get in touch</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>

      <div className="contact-section">

        {/* LEFT */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm open to discussing new projects, creative ideas, or opportunities
            to be part of your visions. Feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail icon" />
              <p>sosna.achamyeleh@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call icon" />
              <p>+1 (202) 468-5422</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location icon" />
              <p>Alexandria, VA, United States</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input name="name" type="text" placeholder="Your Name" required />

          <label>Your Email</label>
          <input name="email" type="email" placeholder="Your Email" required />

          {/* <label>Subject</label>
          <input name="subject" type="text" placeholder="Subject" required /> */}

          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder="Your Message" required />

          <button type="submit">Send Message</button>

          {result && <p className="form-result">{result}</p>}
        </form>

      </div>
    </div>
  );
};

export default Contact;
