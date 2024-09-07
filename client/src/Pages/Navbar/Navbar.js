import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">Ayush-Veda</Link>
        </div>
        <div className="nav-right">
          <Link to="/startup">Startup</Link>
          <Link to="/investors">Investors</Link>
          <Link to="/mentorship">Mentorship</Link>
          <Link to="/events">Events</Link>
          <Link className="signup" to="/signup">Sign Up</Link>
          <Link className="login" to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
