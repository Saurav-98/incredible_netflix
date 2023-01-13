import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav nav__black">
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
