import React from 'react';
import './Carousels.css'; // Import the CSS file

const Carousels = ({ text }) => {
  return (
    <div className="revolving-strip">
      <div className="strip-content">{text}</div>
    </div>
  );
};

export default Carousels;
