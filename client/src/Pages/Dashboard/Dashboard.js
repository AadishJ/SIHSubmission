import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Dashboard.css';

const Dashboard = () => {
    return (
      <div>
    <div className="notification-container">
      <div className="icon">✓</div>
      <div className="message">
        Successfully logged in!
        <span className="subtext">You can register your startup now</span>
      </div>
      {/* Add the button */}
            </div>
            <div className='but-div'>
      <Link to="/registration" className="registration-button">
        Go to Registration
                </Link>
                </div>
    </div>
  );
};

export default Dashboard;
