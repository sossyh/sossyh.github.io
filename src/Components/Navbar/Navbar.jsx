import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import menu_icon from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

   const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      <div  className="nav-logo">Sosna Achamyeleh</div>
      <img src={menu_icon} onClick={openMenu} alt="Menu icon" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close menu icon" className="nav-mob-close" />

        <li className={activeMenu === 'home' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            href="#home"
            offset={50}
            onClick={() => setActiveMenu('home')}
          >
            Home
          </AnchorLink>
        </li>

        <li className={activeMenu === 'about' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            href="#about"
            offset={50}
            onClick={() => setActiveMenu('about')}
          >
            About
          </AnchorLink>
        </li>

        <li className={activeMenu === 'experience' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            href="#experience"
            offset={50}
            onClick={() => setActiveMenu('experience')}
          >
            Experience
          </AnchorLink>
        </li>

        <li className={activeMenu === 'projects' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            href="#projects"
            offset={50}
            onClick={() => setActiveMenu('projects')}
          >
            Projects
          </AnchorLink>
        </li>

        {/* <li className={activeMenu === 'education' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            href="#education"
            offset={50}
            onClick={() => setActiveMenu('education')}
          >
            Education
          </AnchorLink>
        </li> */}

        <li className={activeMenu === 'contact' ? 'active' : ''}>
          <AnchorLink
            className="anchor-link"
            href="#contact"
            offset={50}
            onClick={() => setActiveMenu('contact')}
          >
            Contact
          </AnchorLink>
        </li>

      </ul>

           <div className="nav-connect"> <AnchorLink
            className="anchor-link"
            href="#contact"
            offset={50}
            onClick={() => setActiveMenu('contact')}
          >Connect with me</AnchorLink></div>

    </div>
  );
};

export default Navbar;
