import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 150) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    // Use Effect CleanUp function
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []); // empty Dependencies Array for one time rendering on refresh

  return (
    <div className={`nav ${showNav === true ? 'nav__black' : ''}`}>
      <div className="nav__contents">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix banner"
          className="nav__logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix avatar"
          className="nav__avatar"
        />
      </div>

      {/* <h2>This is the Nav</h2> */}
    </div>
  );
};

export default NavBar;
