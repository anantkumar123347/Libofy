import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css';
import logo from '../assets/Rectangle 3.png';
import { FaUserCircle, FaHome, FaInfoCircle, FaPhone, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail'); // Read from localStorage
    if (email) {
      setUserEmail(email); // Set the email to state
    }
  }, []); // This runs once when the component is mounted

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <span>Libofy</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <FaHome className="nav-icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <FaInfoCircle className="nav-icon" />
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <FaPhone className="nav-icon" />
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <FaShoppingCart className="nav-icon" />
            Cart
          </NavLink>
        </li>
      </ul>
      <div className="profile">
        <FaUserCircle className="user-icon" />
        <span>{userEmail ? userEmail : 'user@bookpoint.com'}</span>
      </div>
    </nav>
  );
}

export default Navbar;
