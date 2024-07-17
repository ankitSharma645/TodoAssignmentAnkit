
import React, { useState } from 'react';
import '../styles/HeroSection.css';
const HeroSection = () => {

  return (
    <div className="hero-section" id='get-players'>
      <div className="hero-container">
      <div className="hero-content">
          <h1>Welcome to <span className='span'>Todo </span> App </h1>
          <p>Organize your tasks efficiently with our simple and user-friendly To-Do List application. Add new tasks, mark them as completed, and delete them when done.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className='hero-image'>
        <img src="https://cdn.dribbble.com/users/2520294/screenshots/7269423/alaminxyz.gif" alt="Basketball" />

        </div>

          

        </div>
   
    </div>
  );
};

export default HeroSection;

