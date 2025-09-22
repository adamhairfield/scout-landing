import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Scout</h3>
            <p>Connecting sports teams, players, and parents.</p>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@teamscout.co">Support</a></li>
              <li><a href="mailto:privacy@teamscout.co">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Scout Technologies, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
