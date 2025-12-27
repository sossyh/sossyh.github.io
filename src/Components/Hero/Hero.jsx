import React from 'react';
import './Hero.css';
import profile from '../../assets/sosna-modified.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id="home" className="hero"> 
         <img src={profile} alt="Profile" className="profile-pic" style={{ width: '20%', height: '0.1%' }} />
            <h1><span>Hello,</span> I'm Sosna</h1>
            <p>Welcome to my personal portfolio website. I'm a software developer specializing in building exceptional digital experiences.</p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink
                            className="anchor-link"
                            href="#contact"
                            offset={50}
                            onClick={() => setActiveMenu('contact')}
                          >Connect with me </AnchorLink></div>
                <div className="hero-resume"> View Resume</div>

            </ div>
    </div>
  );
}

export default Hero;