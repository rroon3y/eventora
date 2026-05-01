import React from "react";
import { Link } from "react-router-dom";
import "../styles/CategoryCard.css";

const CategoryCard = ({ category, index = 0 }) => {
  return (
    <Link 
      to={`/events?category=${encodeURIComponent(category.name)}`} 
      className="category-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={`Browse ${category.name} events`}
    >
      <div className="category-icon-wrapper">
        {category.icon.startsWith('http') ? (
          <img src={category.icon} alt={category.name} className="category-icon" />
        ) : (
          <span className="category-emoji">{category.icon}</span>
        )}
      </div>
      <h3 className="category-name">{category.name}</h3>
      <span className="category-count">{category.count || "50+"} events</span>
    </Link>
  );
};

export default CategoryCard;
