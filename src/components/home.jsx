import React from 'react';
import '../css//Home.css'; // Import CSS

const home = () => {
  return (
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
        </div>

        <div className="image-section">
          <div className="silhouette-background"></div> 
          <img src="/Screenshot 2025-10-16 155814.png" alt="Happy boy" className="hero-image boy-image" />
          <img src="/Screenshot 2025-10-16 155841.png" alt="Smiling elderly woman" className="hero-image elderly-woman-image" />
        </div>
      </div>
    </div>
  );
};

export default home;
