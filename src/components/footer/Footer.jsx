import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Impressum</a></li>
          <li><a href="/">Datenschutz</a></li>
          <li><a href="/">Nutzungsbedingungen</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;


