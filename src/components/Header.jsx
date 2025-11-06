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
        {/* Logo: Text ("GCS") comes first, then the Image */}
        <NavLink to="/" className="header-logo-container">
          GCS
          <img 
            src="/Screenshot 2025-10-25 201107.png" 
            alt="GCS Logo" 
            className="header-logo-img" 
          />
        </NavLink>
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

      <div className="header-right">
        <NavLink to="/donate" className="cta-button donate-button">
          Donate
        </NavLink>
      </div>
    </header>
  );
};

export default Header;