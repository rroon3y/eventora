import React from "react";
import "../styles/ValueCard.css";

const ValueCard = ({ valueProp, index = 0 }) => {
  return (
    <div className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="value-icon-circle">
        {valueProp.icon?.startsWith ? (
          <img src={valueProp.icon} alt={valueProp.title} className="value-icon" />
        ) : (
          <span className="value-icon-emoji">{valueProp.icon}</span>
        )}
      </div>
      <h3 className="value-title">{valueProp.title}</h3>
      <p className="value-description">{valueProp.description}</p>
    </div>
  );
};

export default ValueCard;
