import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" aria-label="Eventora Home">
          <span className="brand-icon">E</span>
          <span className="brand-text">Eventora</span>
        </Link>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`} role="menubar">
          <li role="none">
            <Link to="/" className={isActive("/") ? "active" : ""} role="menuitem">Home</Link>
          </li>
          <li role="none">
            <Link to="/events" className={isActive("/events") ? "active" : ""} role="menuitem">Events</Link>
          </li>
          <li role="none">
            <Link to="/events?filter=upcoming" className={location.search.includes("upcoming") ? "active" : ""} role="menuitem">Upcoming</Link>
          </li>
          <li role="none">
            <Link to="/events?filter=past" className={location.search.includes("past") ? "active" : ""} role="menuitem">Past</Link>
          </li>
          <li role="none">
            <Link to="/login" className="nav-btn" role="menuitem">Login</Link>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          <span className={`bar ${menuOpen ? "open" : ""}`} />
          <span className={`bar ${menuOpen ? "open" : ""}`} />
          <span className={`bar ${menuOpen ? "open" : ""}`} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

