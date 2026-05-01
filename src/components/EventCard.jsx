import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/EventCard.css";

const statusConfig = {
  ongoing: { label: "Live Now", className: "status-ongoing" },
  upcoming: { label: "Upcoming", className: "status-upcoming" },
  past: { label: "Ended", className: "status-past" },
};

const EventCard = ({ event, index = 0 }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const status = statusConfig[event.status] || statusConfig.upcoming;

  const formatPrice = (price, currency) => {
    if (price === 0) return "Free";
    return `${currency} ${price.toLocaleString()}`;
  };

  return (
    <article className="event-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <Link to={`/events/${event.id}`} className="event-card-link" aria-label={`View ${event.title}`}>
        <div className="event-image-wrapper">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={imgLoaded ? "loaded" : ""}
          />
          {!imgLoaded && <div className="image-skeleton" aria-hidden="true" />}

          <span className={`event-status ${status.className}`}>
            {event.status === "ongoing" && <span className="live-dot" aria-hidden="true" />}
            {status.label}
          </span>

          <span className="event-price">{formatPrice(event.price, event.currency)}</span>
        </div>

        <div className="event-info">
          <div className="event-meta">
            <span className="event-category">{event.category}</span>
            <span className="event-attendees">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              {event.attendees?.toLocaleString()}
            </span>
          </div>

          <h3 className="event-title">{event.title}</h3>

          <div className="event-details">
            <span className="event-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {event.date} &bull; {event.time}
            </span>
            <span className="event-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {event.location}
            </span>
          </div>

          <button className="event-cta" tabIndex={-1}>
            {event.status === "past" ? "View Recap" : "Get Tickets"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </Link>
    </article>
  );
};

export default EventCard;

