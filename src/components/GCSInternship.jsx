// src/pages/GCSInternship.jsx (No change needed)

import React, { useState, useRef } from 'react'; 
import GCSInternshipApplication from '../components/GCSInternshipApplication';
import '../css/FormStyles.css';

function GCSInternship() {
  const [showForm, setShowForm] = useState(false); 
  const applicationRef = useRef(null);

  // Scroll and show function for the "Apply Now" button
  const scrollToApplication = () => {
    // 1. Show the form
    setShowForm(true);
    
    // 2. Wait a moment for the form to render, then scroll
    setTimeout(() => {
      if (applicationRef.current) {
        applicationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); 
  };

  return (
    <div className="gcs-page">
      <section className="internship-intro">
        <h1>GCS Internship</h1>
        <p>
          Join us in making a difference! GCS internships are now open for passionate individuals who want to create meaningful impact in society...
        </p>
        <p>
          As a GCS intern, you will work directly with our dedicated team, gain hands-on experience in the non-profit sector...
        </p>
        
        {/* The button now triggers both showing and scrolling */}
        {!showForm && ( 
          <button onClick={scrollToApplication} className="apply-now-button">
            Apply Now
          </button>
        )}
      </section>

      {/* The Application Form section, only rendered when showForm is true */}
      {showForm && ( 
        <section ref={applicationRef} className="internship-application-section">
          <GCSInternshipApplication />
        </section>
      )}
    </div>
  );
}

export default GCSInternship;