import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import events from "../data/events";
import categories from "../data/categories";
import "../styles/Events.css";

const statusFilters = [
  { id: "all", label: "All Events" },
  { id: "ongoing", label: "Happening Now" },
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
];

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "all";
  const activeCategory = searchParams.get("category") || "";

  const filteredEvents = useMemo(() => {
    let result = [...events];

    // Filter by status
    if (activeFilter !== "all") {
      result = result.filter(e => e.status === activeFilter);
    }

    // Filter by category
    if (activeCategory) {
      result = result.filter(e => e.category.toLowerCase() === activeCategory.toLowerCase());
    }

    return result;
  }, [activeFilter, activeCategory]);

  const handleFilterChange = (filterId) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("filter", filterId);
    setSearchParams(newParams);
  };

  const handleCategoryChange = (categoryName) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryName === activeCategory) {
      newParams.delete("category");
    } else {
      newParams.set("category", categoryName);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="events-page">
      <Navbar />

      <main className="events-main">
        <div className="container">
          <header className="events-header">
            <h1 className="events-title">
              {activeCategory ? `${activeCategory} Events` : "Discover Events"}
            </h1>
            <p className="events-subtitle">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} found
              {activeFilter !== "all" && ` in ${activeFilter}`}
            </p>
          </header>

          {/* Status Filter Tabs */}
          <div className="filter-tabs" role="tablist" aria-label="Event status filter">
            {statusFilters.map(filter => (
              <button
                key={filter.id}
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`filter-tab ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => handleFilterChange(filter.id)}
              >
                {filter.id === "ongoing" && <span className="live-dot" />}
                {filter.label}
              </button>
            ))}
          </div>

          {/* Category Pills */}
          <div className="category-pills" role="tablist" aria-label="Category filter">
            <button
              role="tab"
              aria-selected={!activeCategory}
              className={`category-pill ${!activeCategory ? "active" : ""}`}
              onClick={clearFilters}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.name}
                className={`category-pill ${activeCategory === cat.name ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat.name)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="no-events">
              <div className="no-events-icon">🎭</div>
              <h2>No Events Found</h2>
              <p>Try adjusting your filters or check back later for new events.</p>
              <button className="clear-filters-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
