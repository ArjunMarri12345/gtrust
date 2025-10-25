// src/components/Header.jsx

import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../css/Home.css';

const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Who we are', path: '/whoweare' },
    { name: 'Our Pledge', path: '/ourpledge' },
    { name: 'What we do', path: '/whatwedo' },
   
    { name: 'GCS Internship', path: '/internship' }, 
    { name: 'Volunteer', path: '/volunteer' },       
    { name: 'Scholarship', path: '/scholarship' },   
    { name: 'Contact us', path: '/contact' },        
  ];

  const getNavLinkClassName = ({ isActive }) =>
    isActive ? 'nav-link active-link' : 'nav-link';

  return (
    <header className="gcs-header">
      <div className="header-left">
        <NavLink to="/" className="logo">GCS</NavLink> 
        <div className="theme-toggle">
          {/* future theme toggle button or icon goes here */}
        </div>
      </div>

      <nav className="header-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={getNavLinkClassName}
                end={item.path === '/'}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* Donate button as a separate CTA */}
      <div className="header-right">
        <NavLink to="/donate" className="cta-button donate-button">
          Donate
        </NavLink>
      </div>
    </header>
  );
};

export default Header;