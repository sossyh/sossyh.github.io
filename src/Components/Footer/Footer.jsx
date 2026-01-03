import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">

      <div className="footer-top">
        <h3>Sosna Achamyeleh</h3>
        <p>Software Engineer · Machine Learning Enthusiast</p>
      </div>

      <div className="footer-links">
                <a href="#home">Home</a>

        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-socials">
        <a
          href="https://github.com/sossyh"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sosna-achamyeleh/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:sosna.achamyeleh@gmail.com">
          Email
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sosna Achamyeleh. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
