import React from "react";
import "./HomeFooter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            Discover a world of books at Libofy BookPoint. From timeless classics
            to the latest bestsellers, we aim to ignite your love for reading.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#twitter" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#instagram" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#linkedin" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Libofy BookPoint. All rights reserved.</p>
        <p>
          <a href="#terms">Terms of Service</a> | <a href="#privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
