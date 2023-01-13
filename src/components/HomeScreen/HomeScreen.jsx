import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* NAVBAR */}
      <NavBar />

      {/* BANNER */}
      <Banner />
      {/* ROWS */}
    </div>
  );
};

export default HomeScreen;
