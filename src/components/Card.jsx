// Card.js
import React from 'react';
import './style/Card.css'; // Import the CSS file for styling

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="cardTitle">{title}</h2>
      <p className="cardDescription">{content}</p>
    </div>
  );
};

export default Card;
