import React from 'react';
import './HomeSec1.css';
import background from "../../Assets/Grass.png";

function HomSec1({ language }) {
  // Text for English
  const englishText = {
    heading: 'Ayush-Veda',
    line1: 'For startups & innovators redefining',
    line2: 'the Ayush sector leveraging new',
    line3: 'technologies',
  };

  // Text for Hindi
  const hindiText = {
    heading: 'आयुष-वेद',
    line1: 'स्टार्टअप्स और नवप्रवर्तकों के लिए',
    line2: 'जो नई तकनीकों का उपयोग करके',
    line3: 'आयुष क्षेत्र को फिर से परिभाषित कर रहे हैं',
  };

  // Select the appropriate language text
  const text = language === 'hi' ? hindiText: englishText;

  return (
    <div className="overall">
      <div className="main-content">
        <div className="left-half">
          <div className="flex space">
            <h1>
              <span className="orange">{text.heading.split('-')[0]}</span>
              -{text.heading.split('-')[1]}
            </h1>
          </div>
          <div>
            <p style={{ color: "green", fontSize: "24px", fontWeight: "700" }}>{text.line1}</p>
            <p style={{ color: "green", fontSize: "24px", fontWeight: "700" }}>{text.line2}</p>
            <p style={{ color: "green", fontSize: "24px", fontWeight: "700" }}>{text.line3}</p>
          </div>
        </div>
        <div className="right-half">
          <img src={background} alt="bgrnd" className="backrnd" />
        </div>
      </div>
    </div>
  );
}

export default HomSec1;
