import React from "react";
import "../styles/ValueCard.css";

const ValueCard = ({ title, description, icon }) => {
  return (
    <div className="value-card">
      {typeof icon === 'string' && icon.length === 1 ? (
        <div style={{ fontSize: '60px', marginBottom: '15px' }}>{icon}</div>
      ) : (
        <img src={icon} alt={title} />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ValueCard;