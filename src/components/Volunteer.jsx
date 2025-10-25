// src/pages/Volunteer.jsx

import React, { useState, useRef } from 'react'; 
import VolunteerForm from '../components/VolunteerForm.jsx';
import '../css/FormStyles.css'; // Reusing your existing styles

function Volunteer() {
  const [showForm, setShowForm] = useState(false); 
  const formRef = useRef(null);

  // Scroll and show function for the "Sign Up" button
  const scrollToForm = () => {
    // 1. Show the form
    setShowForm(true);
    
    // 2. Wait for the form to render, then scroll
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); 
  };

  return (
    <div className="gcs-page">
      <section className="internship-intro"> {/* Reusing the class name for styling consistency */}
        <h1>Make a Change in Our Community</h1>
        <p>
          Join hands with us in making a meaningful difference! Your time and skills can transform lives in our community. Whether you're passionate about education, elderly care, childcare, or technology, there's a place for your unique contribution at GCS.
        </p>
        <p>
          As a GCS volunteer, you'll work alongside our dedicated team to support the causes that truly matter. Every hour you contribute creates ripples of positive change that extend far beyond what you can imagine.
        </p>
        <p>
          This is more than volunteering – it's about becoming part of a movement that believes in the power of community, compassion, and collective action to build a better tomorrow.
        </p>
        
        {/* Button appears only if the form is not yet visible */}
        {!showForm && ( 
          <button onClick={scrollToForm} className="apply-now-button">
            Sign Up
          </button>
        )}
      </section>

      {/* The Volunteer Form section, only rendered when showForm is true */}
      {showForm && ( 
        <section ref={formRef} className="internship-application-section">
          <VolunteerForm />
        </section>
      )}
    </div>
  );
}

export default Volunteer;