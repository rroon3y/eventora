import React from "react";
import "../styles/EventCard.css";

const EventCard = ({ title, date, location, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-info">
        <h3>{title}</h3>
        <p>{date} | {location}</p>
        <button className="view-btn">View Event</button>
      </div>
    </div>
  );
};

export default EventCard;
