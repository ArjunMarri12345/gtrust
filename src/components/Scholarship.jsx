// src/pages/Scholarship.jsx

import React, { useState, useRef } from 'react'; 
import ScholarshipApplicationForm from '../components/ScholarshipApplicationForm.jsx';
import '../css/FormStyles.css'; // Reusing your existing styles

function Scholarship() {
  const [showForm, setShowForm] = useState(false); 
  const formRef = useRef(null);

  // Scroll and show function for the "Apply Now" button
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
        <h1>Empowering Dreams Through Education</h1>
        <p>
          We offer scholarships to qualified students facing financial challenges. At GCS, we understand that education is the foundation of opportunity and the key to breaking cycles of poverty. No deserving student should have their dreams limited by economic circumstances.
        </p>
        <p>
          Our scholarship program supports students who demonstrate academic potential, personal determination, and a commitment to using their education to make a positive impact. We believe in investing in bright minds who will become tomorrow's leaders and change-makers.
        </p>
        <p>
          Whether you're pursuing higher education, technical training, or professional development, our scholarships are designed to provide the financial support you need to focus on your studies and achieve your goals.
        </p>
        
        {/* Button appears only if the form is not yet visible */}
        {!showForm && ( 
          <button onClick={scrollToForm} className="apply-now-button">
            Apply Now
          </button>
        )}
      </section>

      {/* The Scholarship Application Form section, only rendered when showForm is true */}
      {showForm && ( 
        <section ref={formRef} className="internship-application-section">
          <ScholarshipApplicationForm />
        </section>
      )}
    </div>
  );
}

export default Scholarship;