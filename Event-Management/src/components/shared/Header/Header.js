import React, { useState } from "react";
import "./Header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="header">
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src="/logo/ems7.svg" alt=' ' />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/History">History</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
        <div className="hamburger-menu">
            <a href="#/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <FontAwesomeIcon icon="fas fa-yin-yang" />
            =
            </a>
          </div>
        </div>

         
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </div>
  );
};

export default Header;