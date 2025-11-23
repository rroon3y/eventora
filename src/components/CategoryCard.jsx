import React from "react";
import "../styles/CategoryCard.css";

const CategoryCard = ({ name, icon }) => {
  return (
    <div className="category-card">
      <img src={icon} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default CategoryCard;
