import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import events from "../data/events";
import EventCard from "../components/EventCard";
import "../styles/EventCard.css";
import categories from "../data/categories";
import CategoryCard from "../components/CategoryCard";
import "../styles/CategoryCard.css";
import valueProps from "../data/valueProps";
import ValueCard from "../components/ValueCard";
import "../styles/ValueCard.css";

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <section className="hero">
                <div className="hero-content">
                    <h1>Your Gateway to the Hottest Events</h1>
                    <p>Discover concerts, meetups, parties, and everything happening near you.</p>
                    <button className="cta-btn">Explore Events</button>
                </div>
            </section>

            <section className="featured-events">
  <h2>Featured Events</h2>
  <div className="events-container">
    {events.map(event => (
      <EventCard
        key={event.id}
        title={event.title}
        date={event.date}
        location={event.location}
        image={event.image}
      />
    ))}
  </div>
</section>

<section className="categories-section">
  <h2>Event Categories</h2>
  <div className="categories-container">
    {categories.map(cat => (
      <CategoryCard key={cat.id} name={cat.name} icon={cat.icon} />
    ))}
  </div>
</section>

<section className="value-props-section">
  <h2>Why Eventora?</h2>
  <div className="value-props-container">
    {valueProps.map(prop => (
      <ValueCard
        key={prop.id}
        title={prop.title}
        description={prop.description}
        icon={prop.icon}
      />
    ))}
  </div>
</section>




            <Footer />
        </div>
    );
};

export default Home;