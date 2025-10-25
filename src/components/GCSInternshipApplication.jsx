// src/components/GCSInternshipApplication.jsx

import React, { useState } from 'react';
import LanguageInput from './LanguageInput';
import '../css/FormStyles.css';

// 🎯 Temporary function for json-server simulation (sends JSON, excludes File object)
const SIMULATION_API_URL = "http://localhost:5000/applications";

async function postDataForSimulation(data) {
  const response = await fetch(SIMULATION_API_URL, {
    method: 'POST',
    // CRUCIAL: Tell the server we are sending pure JSON
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Server responded with status: ${response.status}`);
  }
  return response.json();
}

const GCSInternshipApplication = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', city: '', state: '', zipCode: '', 
    phone: '', email: '', languages: [], computerKnowledge: 'Basic', educationLevel: '', 
    resume: null, // Holds the File object
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleLanguagesChange = (newLanguages) => {
    setFormData((prevData) => ({
      ...prevData,
      languages: newLanguages,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.resume || !formData.educationLevel) {
        alert("Please ensure all required fields are filled and the resume is uploaded.");
        return;
    }

    setIsSubmitting(true);

    // 🎯 1. PREPARE JSON PAYLOAD (EXCLUDE FILE OBJECT for json-server)
    const dataToSend = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        phone: formData.phone,
        email: formData.email,
        languages: formData.languages,
        computerKnowledge: formData.computerKnowledge,
        educationLevel: formData.educationLevel,
        // Send file metadata instead of the File object
        resumeFile: formData.resume ? { name: formData.resume.name, size: formData.resume.size, type: formData.resume.type } : null,
        submissionTime: new Date().toISOString()
    };
    
    // 2. Post data using the simulation function
    try {
        await postDataForSimulation(dataToSend);
        
        console.log('✅ Application Data Successfully Stored in db.json');
        alert('Application submitted successfully! Data saved to local db.json.');
    
    } catch (error) {
        const message = error.message || "An unknown error occurred. Check json-server terminal.";
        alert(`Submission failed: ${message}`);
        
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <form className="gcs-application-form" onSubmit={handleSubmit}>
      <h2 className='gcs-application-title'>GCS Internship Application</h2>

      {/* Rows 1-4: Personal Info */}
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="address">Address *</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="city">City *</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="state">State *</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="zipCode">Zip Code *</label>
          <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="phone">Phone *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      {/* Languages Known (Custom Component) */}
      <LanguageInput onLanguagesChange={handleLanguagesChange} />

      {/* Computer Knowledge (Radio Buttons) */}
      <div className="form-group">
        <label>Computer Knowledge *</label>
        <div className="radio-group">
          {['Basic', 'Intermediate', 'Advanced'].map(level => (
            <label key={level}>
              <input
                type="radio"
                name="computerKnowledge"
                value={level}
                checked={formData.computerKnowledge === level}
                onChange={handleChange}
                required
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      {/* Education Level (Dropdown) */}
      <div className="form-group">
        <label htmlFor="educationLevel">Education Level *</label>
        <select
          id="educationLevel"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          required
        >
          <option value="">--- Select ---</option>
          <option value="No degree">No degree</option>
          <option value="Passed 10th">Passed 10th</option>
          <option value="Passed 12th">Passed 12th</option>
          <option value="B.Tech">B.Tech</option>
          <option value="B.Sc.">B.Sc.</option>
          <option value="Post Graduate">Post Graduate</option>
        </select>
      </div>

      {/* Resume Upload */}
      <div className="form-group">
        <label htmlFor="resume">Resume *</label>
        <div className="file-input-wrapper">
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
            required
            style={{ display: 'none' }}
          />
          <button
            type="button"
            className="custom-file-button"
            onClick={() => document.getElementById('resume').click()}
            disabled={isSubmitting}
          >
            Choose File
          </button>
          <span className="file-chosen-name">
            {formData.resume ? formData.resume.name : 'No file chosen'}
          </span>
        </div>
      </div>
      
      {/* Submission Button */}
      <div className="form-submit-group">
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Posting to Local JSON...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
};

export default GCSInternshipApplication;