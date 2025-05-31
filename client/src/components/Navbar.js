import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile when the window resizes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Songy</Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
        <Link to="/request" onClick={() => setIsOpen(false)}>Request a Song</Link>
        <Link to="/how" onClick={() => setIsOpen(false)}>How It Works</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/pricing" className="quote-button" onClick={() => setIsOpen(false)}>Pricing</Link>
      </div>
      
      {/* Only render the hamburger on mobile */}
      {isMobile && (
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      )}
    </nav>
  );
};

export default Navbar;
