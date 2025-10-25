// src/App.js

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home.jsx'; 
import WhoWeAre from './components/WhoWeAre.jsx'; 
import Header from './components/Header.jsx';
import OurPledge from './components/OurPledge.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
// 🎯 IMPORT THE NEW INTERNSHIP PAGE
import GCSInternship from './components/GCSInternship.jsx'; 
import Volunteer from './components/Volunteer.jsx';
import Scholarship from './components/Scholarship.jsx';
import Contact from './components/Contact.jsx';
// 🎯 1. IMPORT THE DONATE PAGE COMPONENT
import Donate from './components/Donate.jsx'; 


const App = () => {
  return (
    <BrowserRouter>
      {/* Header is rendered here to appear on ALL pages */}
      <Header /> 
      
      {/* Routes define which component loads for which path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/ourpledge" element={<OurPledge />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        
        <Route path="/internship" element={<GCSInternship />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/contact" element={<Contact />} />
       
        {/* 🎯 2. ADD THE NEW DONATE ROUTE HERE */}
        <Route path="/donate" element={<Donate />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;