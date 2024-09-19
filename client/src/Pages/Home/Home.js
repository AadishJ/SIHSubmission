import React from 'react';
import HomeSec1 from './HomeSec1';
import HomeSec2 from './HomeSec2';
import HomeSec3 from './HomeSec3';
import AboutUs from './AboutUs';
import "./Home.css";
import Carousels from './Carousels';

function Home({ language }) {
  return (
    <div className='backgrounds'>
      <HomeSec1 language={language} />
      <HomeSec2 />
      <HomeSec3 />
      <Carousels text="|InvestIndia| |StartupIndia| |All India Intitute of Ayurveda| |Ministry Of Ayush|" />
      <AboutUs />
    </div>
  );
}

export default Home;
