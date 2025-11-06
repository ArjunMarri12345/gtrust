// src/components/Home.jsx

import React, { useState } from 'react'; // <-- Imported useState
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'; // Import the main CSS file

// REQUIRED ICONS AND ASSETS: 
import { FaHandshake, FaDownload, FaTimes } from 'react-icons/fa'; // <-- Added FaTimes for closing modal
import { GiNotebook } from 'react-icons/gi';
import { RiUserHeartFill } from 'react-icons/ri';

// Import specific logo icons for the partnership section
import icon1 from '../assets/Screenshot 2025-10-17 155110.png';
import icon2 from '../assets/Screenshot 2025-10-17 155407.png';
import icon3 from '../assets/Screenshot 2025-10-17 155237.png';

// Import the Certificate Images (as provided by the user)
import vizagCertBG from '../assets/P4_Visakhapatnam_certificate_page-0001.jpg';
import anakapalliCertBG from '../assets/P4_Anakapalli_certificate-1.jpg';


const Home = () => {
  const navigate = useNavigate();
  // State to track the currently viewed certificate image source
  const [currentCertImage, setCurrentCertImage] = useState(null); 

  // Function to open the modal and set the image source
  const handleViewCertificate = (certImageSrc) => {
    setCurrentCertImage(certImageSrc);
  };
  
  // Function to close the modal
  const handleCloseModal = () => {
    setCurrentCertImage(null);
  };

  // Function to handle certificate click (Now calls the view function)
  const handleCertClick = (district) => {
    if (district === 'Visakhapatnam') {
      handleViewCertificate(vizagCertBG);
    } else if (district === 'Anakapalli') {
      handleViewCertificate(anakapalliCertBG);
    }
  };

  return (
    <div className="home-page-wrapper">
    
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION (Main Banner) */}
      {/* ---------------------------------------------------- */}
      <div className="gcs-hero-container">
        <div className="hero-content">
          <div className="text-section">
            <p className="society-name">Ganesh Charitable Society</p>
            <h1 className="main-heading">Lending Hands To Those Who Need It the Most.</h1>
            <p className="mission-text">
              Established in 2007, Ganesh Charitable Society (GCS) is a devoted non-profit
              organization with the mission of uplifting the lives of the most vulnerable sections
              of society. We extend a helping hand towards orphans, elders, and people with hearing
              and speech impairments, recognizing their unique needs and aspirations.
            </p>
            <button
              className="donate-button"
              onClick={() => navigate('/donate')}
            >
              Donate
            </button>
          </div>

          <div className="image-section">
            <div className="silhouette-background"></div>
            <img
              src="/Screenshot 2025-10-16 155814.png"
              alt="Happy boy"
              className="hero-image boy-image"
            />
            <img
              src="/Screenshot 2025-10-16 155841.png"
              alt="Smiling elderly woman"
              className="hero-image elderly-woman-image"
            />
          </div>
        </div>
      </div>
      
      {/* ---------------------------------------------------- */}
      {/* 2. GOVERNMENT PARTNERSHIP SECTION (INLINED) */}
      {/* ---------------------------------------------------- */}
      <div className="partnership-section-wrapper">
        <div className="page-content center-content">
          
          {/* Logos/Official Partner Badge */}
          <div className="partnership-logos">
            <img src={icon1} alt="Partnership Icon 1" className="partnership-logo-icon" />
            <img src={icon2} alt="Partnership Icon 2" className="partnership-logo-icon" />
            <img src={icon3} alt="Partnership Icon 3" className="partnership-logo-icon" />
            <span className="official-partner-badge">Official Partner</span>
          </div>

          {/* Heading */}
          <h2 className="partnership-heading">
            <FaHandshake className="handshake-icon" /> Government Partnership
          </h2>
          
          <h3 className="partnership-subheading">
            Zero Poverty P4 Initiative
          </h3>

          {/* Description */}
          <p className="partnership-description max-width-p">
            GCS is officially registered under the Bangaru Kutumbalu program, committed to 
            supporting 20 families across Visakhapatnam and Anakapalli districts.
          </p>

          {/* Statistics */}
          <div className="partnership-stats">
            <div className="stat-item">
              <span className="stat-number">20</span>
              <span className="stat-label">Families</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Districts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Aug 2025</span>
              <span className="stat-label">Registered</span>
            </div>
          </div>

          {/* Certificate Buttons (UPDATED onClick) */}
          <div className="certificate-buttons-group">
            <button 
              className="certificate-button" 
              onClick={() => handleCertClick('Visakhapatnam')} // View Vizag cert image
            >
              Visakhapatnam Certificate <FaDownload className="download-icon" />
            </button>
            <button 
              className="certificate-button"
              onClick={() => handleCertClick('Anakapalli')} // View Anakapalli cert image
            >
              Anakapalli Certificate <FaDownload className="download-icon" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="partnership-action-buttons-group">
            <button 
              className="action-button pledge-action-button"
              onClick={() => navigate('/ourpledge')}
            >
              <GiNotebook className="action-icon" /> View Pledge
            </button>
            <button 
              className="action-button volunteer-action-button"
              onClick={() => navigate('/volunteer')}
            >
              <RiUserHeartFill className="action-icon" /> Volunteer
            </button>
          </div>

        </div>
      </div>
      
      {/* ---------------------------------------------------- */}
      {/* 3. CERTIFICATE MODAL (Renders only when currentCertImage is set) */}
      {/* ---------------------------------------------------- */}
      {currentCertImage && (
        <div className="certificate-modal-overlay" onClick={handleCloseModal}>
          {/* Prevent clicks inside the content from closing the modal */}
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={handleCloseModal}>
              <FaTimes />
            </button>
            <img 
              src={currentCertImage} 
              alt="Government Partnership Certificate" 
              className="certificate-modal-image" 
            />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Home;