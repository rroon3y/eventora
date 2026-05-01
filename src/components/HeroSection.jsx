import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" aria-label="Hero section">
      {/* Animated background particles */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="particle" style={{ animationDelay: `${i * 0.5}s` }} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          New Events Added Daily
        </div>

        <h1>
          Your Gateway to the
          <br />
          <span className="gradient-text">Hottest Events</span>
        </h1>

        <p>
          Discover concerts, meetups, parties, and everything happening near you.
          Book tickets in seconds and never miss out on the action.
        </p>

        <div className="hero-search">
          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search events, artists, venues..."
              aria-label="Search events"
            />
            <Link to="/events" className="search-btn">
              Explore
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Events</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Attendees</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Cities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

