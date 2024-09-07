import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ header, info }) => {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-info">{info}</div>
    </div>
  );
};

export default Card;
