import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Songy</Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/information">Information</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/quote" className="quote-button">Request a Quote</Link>
      </div>
    </nav>
  );
};

export default Navbar;