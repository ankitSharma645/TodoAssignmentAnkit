import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="about">
    <div className="footer-header">
      <h2>
        <span>About</span> Us
      </h2>
    </div>
    <div className="footer-content">
      <div className="about-section">
        <div className="about-image">
          <img
            src="https://i.ytimg.com/vi/JR1Vm6dNUXM/maxresdefault.jpg"
            alt="About Todo App"
          />
        </div>
       
      </div>
      <div className="contact-section">
      <div className="about-content">
          <h3>About Todo App</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat urna
            sit amet nisl aliquet, eu dapibus est fermentum. Nunc laoreet, turpis at
            efficitur blandit, felis ex ultrices sem, sed vehicula arcu ex quis ligula.
          </p>
        </div>
        
      </div>
      <div className="social-section">
      <h3>Contact Us</h3>
        <ul>
          <li>Email: contact@todoapp.com</li>
          <li>Phone: +1234567890</li>
          <li>Address: 123 Todo Street, City, Country</li>
        </ul>
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Made with ❤️</p>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
