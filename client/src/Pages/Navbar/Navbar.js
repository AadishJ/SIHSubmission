import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ language, changeLanguage }) {
  // Text for English
  const englishText = {
    startup: 'Startup',
    investors: 'Investors',
    mentorship: 'Mentorship',
    events: 'Events',
    signup: 'Sign Up',
    login: 'Login'
  };

  // Text for Hindi
  const hindiText = {
    startup: 'स्टार्टअप',
    investors: 'निवेशक',
    mentorship: 'मार्गदर्शन',
    events: 'इवेंट्स',
    signup: 'साइन अप करें',
    login: 'लॉगिन'
  };

  // Select the appropriate language text
  const text = language === 'en' ? englishText : hindiText;

  // Handle language change
  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">Ayush-Veda</Link>
        </div>
        <div className="nav-right">
          <Link to="/startup">{text.startup}</Link>
          <Link to="/investors">{text.investors}</Link>
          <Link to="/mentorship">{text.mentorship}</Link>
          <Link to="/events">{text.events}</Link>
          <Link className="signup" to="/signup">{text.signup}</Link>
          <Link className="login" to="/login">{text.login}</Link>

          {/* Language selector - Dropdown */}
          <div className="language-selector">
            <select onChange={handleLanguageChange} value={language}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
