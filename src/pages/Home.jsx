import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EventCard from "../components/EventCard";
import CategoryCard from "../components/CategoryCard";
import ValueCard from "../components/ValueCard";
import Footer from "../components/Footer";
import events from "../data/events";
import categories from "../data/categories";
import valueProps from "../data/valueProps";
import "../styles/Home.css";

const Home = () => {
  const featuredEvents = events.filter(e => e.featured).slice(0, 3);
  const upcomingEvents = events.filter(e => e.status === "upcoming").slice(0, 3);
  const ongoingEvents = events.filter(e => e.status === "ongoing");
 
  return (
    <div className="home">
      <Navbar />

      <HeroSection />

      {/* Ongoing Events */}
      {ongoingEvents.length > 0 && (
        <section className="section ongoing-section" id="ongoing">
          <div className="container">
            <div className="section-header">
              <span className="section-badge live">
                <span className="live-dot" /> Happening Now
              </span>
              <h2 className="section-title">Live Events</h2>
            </div>
            <div className="events-grid">
              {ongoingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Events */}
      <section className="section featured-section" id="events">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Events</h2>
            <Link to="/events?filter=featured" className="view-all">
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="events-grid">
            {featuredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section upcoming-section" id="upcoming">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Coming Soon</h2>
            <Link to="/events?filter=upcoming" className="view-all">
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section categories-section" id="categories">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Eventora */}
      <section className="section value-section">
        <div className="container">
          <h2 className="section-title">Why Eventora?</h2>
          <div className="value-grid">
            {valueProps.map((prop, index) => (
              <ValueCard key={prop.id} valueProp={prop} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-cta">
            <h2>Never Miss an Event</h2>
            <p>Subscribe to get notified about upcoming events, exclusive discounts, and more.</p>
            <Link to="/signup" className="cta-btn">Get Started</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
