import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Dashboard from './Pages/Dashboard/Dashboard';
import NavBar from './Pages/Navbar/Navbar';
import Profile from './Pages/Profile/Profile';
import Footer from './Pages/Footer/Footer';
import Registration from './Pages/StartupRegistration/Register';

function App() {
  const [language, setLanguage] = useState('en'); // Default language set to English

  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  return (
    <>
      <NavBar language={language} changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
