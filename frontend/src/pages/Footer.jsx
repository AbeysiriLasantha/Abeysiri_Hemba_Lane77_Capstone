import React from 'react';
import './Footer.css'; // Make sure to create a Footer.css for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Be the first to know</h3>
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="subscribe-button">Sign Up</button>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/returns-exchanges">Returns and Exchanges</a></li>
            <li><a href="/size-guide">Size Guide</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/international-shipping">International Shipping and Returns Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow us on</h3>
          <div className="social-media-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="mailto:your-email@example.com">
              <img src="/assets/images/email-icon.png" alt="Email" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-feedback">
        <p>Fashionable Feedback</p>
      </div>
    </footer>
  );
};

export default Footer;
