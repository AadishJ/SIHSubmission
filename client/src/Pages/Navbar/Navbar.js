import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ language, changeLanguage }) {
  // Text for English
  const englishText = {
    startup: 'Startup',
    investors: 'Investors',
    mentorship: 'Mentorship',
    faq: 'FAQ', // Changed from events to FAQ
    signup: 'Sign Up',
    login: 'Login'
  };

  // Text for Hindi
  const hindiText = {
    startup: 'स्टार्टअप',
    investors: 'निवेशक',
    mentorship: 'मार्गदर्शन',
    faq: 'प्रश्नोत्तर', // Hindi translation for FAQ
    signup: 'साइन अप करें',
    login: 'लॉगिन'
  };

  // Select the appropriate language text
  const text = language === 'en' ? englishText : hindiText;

  // Handle language change
  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  // Handle dropdown change for Signup
  const handleSignupChange = (e) => {
    const value = e.target.value;
    if (value) {
      window.location.href = value; // Navigate to the selected route
    }
  };

  // Handle dropdown change for Login
  const handleLoginChange = (e) => {
    const value = e.target.value;
    if (value) {
      window.location.href = value; // Navigate to the selected route
    }
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
          <Link to="/faq">{text.faq}</Link> {/* Changed from /events to /faq */}

          {/* Signup dropdown */}
          <div className="language-selector">
            <select onChange={handleSignupChange} defaultValue="">
              <option value="" disabled>{text.signup}</option>
              <option value="/signup">Entrepreneur</option>
              <option value="/signup">Investor</option>
              <option value="/signup">Government Official</option>
              <option value="/signup">Mentor</option>
            </select>
          </div>

          {/* Login dropdown */}
          <div className="language-selector">
            <select onChange={handleLoginChange} defaultValue="">
              <option value="" disabled>{text.login}</option>
              <option value="/login">Entrepreneur</option>
              <option value="/login">Investor</option>
              <option value="/login">Government Official</option>
              <option value="/login">Mentor</option>
            </select>
          </div>

          {/* Language selector - Dropdown */}
          <div className="language-selector">
            <select onChange={handleLanguageChange} value={language}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="bn">Bengali</option>
              <option value="te">Telugu</option>
              <option value="mr">Marathi</option>
              <option value="ta">Tamil</option>
              <option value="gu">Gujarati</option>
              <option value="kn">Kannada</option>
              <option value="ml">Malayalam</option>
              <option value="pa">Punjabi</option>
              <option value="or">Odia</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
