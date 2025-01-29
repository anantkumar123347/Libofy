import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            Discover a world of books at Libofy BookPoint. From timeless classics
            to the latest bestsellers, we aim to ignite your love for reading.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/home" activeClassName="active-link">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active-link">FAQs</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#twitter" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/anant.6765/profilecard/?igsh=MXFkcTA0ZDgzMW9iZg==" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/anant-kumar-a0439028b" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Libofy BookPoint. All rights reserved.</p>
        <p>
          <NavLink to="/terms" activeClassName="active-link">Terms of Service</NavLink> |  
          <NavLink to="/privacy" activeClassName="active-link">Privacy Policy</NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
