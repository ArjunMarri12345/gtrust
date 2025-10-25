// src/components/ScholarshipApplicationForm.jsx

import React, { useState } from 'react';
import '../css/FormStyles.css';

// 🎯 API endpoint for scholarship submissions
const SCHOLARSHIP_API_URL = "http://localhost:5001/volunteers";

async function postScholarshipData(data) {
    const response = await fetch(SCHOLARSHIP_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server responded with status: ${response.status}`);
    }
    return response.json();
}

const ScholarshipApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', contactNumber: '', email: '', address: '', qualification: '',
    fathersName: '', fathersOccupation: '', mothersName: '', mothersOccupation: '', 
    annualFamilyIncome: '', gender: '', aadhaarNumber: '', handicapped: '',
    keySkills: [], motivationStatement: '', aboutMe: '', howToUseScholarship: '', 
    otherRemarks: '', agreement: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
        // Handle agreement and multi-select checkboxes (Skills)
        if (name === 'agreement') {
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: checked 
                    ? [...prev[name], value] 
                    : prev[name].filter(item => item !== value),
            }));
        }
    } else {
        // Handle text, email, tel, select, radio, and textarea inputs
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation Check (ensure required fields and minimum lengths are met)
    const requiredFields = ['fullName', 'email', 'qualification', 'fathersName', 'annualFamilyIncome', 'gender', 'aadhaarNumber', 'handicapped', 'motivationStatement', 'aboutMe', 'howToUseScholarship'];
    
    for (const field of requiredFields) {
        if (!formData[field] || formData[field].length === 0) {
            alert(`Please fill out the required field: ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
            return;
        }
    }
    if (!formData.agreement) {
        alert("Please agree to the terms and conditions.");
        return;
    }
    if (formData.aboutMe.length < 10 || formData.aboutMe.length > 1000) {
        alert("The 'About Me' section must be between 10 and 1000 characters.");
        return;
    }


    setIsSubmitting(true);
    
    // Prepare data for submission
    const dataToSubmit = {
        ...formData,
        submissionTime: new Date().toISOString()
    };
    
    try {
        await postScholarshipData(dataToSubmit);
        
        console.log('✅ Scholarship Data Successfully Stored in db.json at /scholarships');
        alert('Application submitted successfully! We will contact you soon.');

    } catch (error) {
        console.error("Scholarship Submission Error:", error);
        const message = error.message || "An unknown error occurred.";
        alert(`Submission failed: ${message}. Ensure json-server is running.`);
    } finally {
        setIsSubmitting(false);
    }
  };

  // Options
  const incomeOptions = ['Below ₹2 Lakh', '₹2 - ₹5 Lakh', '₹5 - ₹10 Lakh', 'Above ₹10 Lakh'];
  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];
  const handicappedOptions = ['yes', 'no', 'other'];
  const skillsOptions = ['academic writing', 'coding', 'public speaking', 'design', 'sports', 'arts', 'leadership', 'mathematics', 'science', 'languages', 'music', 'drama', 'other'];


  return (
    <form className="gcs-application-form" onSubmit={handleSubmit}>
      <h2 className='gcs-application-title'>Scholarship Application</h2>
      <p className='form-subtitle'>Take the first step towards achieving your educational goals. We're here to support deserving students.</p>

      {/* --- Basic Information --- */}
      <h3>Basic Information</h3>
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="contactNumber">Contact Number *</label>
          <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address *</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="qualification">Educational Qualification *</label>
        <input type="text" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} required />
      </div>

      {/* --- Family Information --- */}
      <h3>Family Information</h3>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="fathersName">Father's Name *</label>
          <input type="text" id="fathersName" name="fathersName" value={formData.fathersName} onChange={handleChange} required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="fathersOccupation">Father's Occupation *</label>
          <input type="text" id="fathersOccupation" name="fathersOccupation" value={formData.fathersOccupation} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="mothersName">Mother's Name *</label>
          <input type="text" id="mothersName" name="mothersName" value={formData.mothersName} onChange={handleChange} required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="mothersOccupation">Mother's Occupation *</label>
          <input type="text" id="mothersOccupation" name="mothersOccupation" value={formData.mothersOccupation} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="annualFamilyIncome">Annual Family Income *</label>
        <select id="annualFamilyIncome" name="annualFamilyIncome" value={formData.annualFamilyIncome} onChange={handleChange} required>
          <option value="">--- Select ---</option>
          {incomeOptions.map(income => <option key={income} value={income}>{income}</option>)}
        </select>
      </div>

      {/* --- Personal Information --- */}
      <h3>Personal Information</h3>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="gender">Gender *</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">--- Select ---</option>
            {genderOptions.map(gender => <option key={gender} value={gender}>{gender}</option>)}
          </select>
        </div>
        <div className="form-group half-width">
          <label htmlFor="aadhaarNumber">Aadhaar Number *</label>
          <input type="text" id="aadhaarNumber" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-group">
        <label>Are you physically handicapped? *</label>
        <div className="radio-group">
          {handicappedOptions.map(option => (
            <label key={option}>
              <input type="radio" name="handicapped" value={option} checked={formData.handicapped === option} onChange={handleChange} required />
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* --- Skills and Motivation --- */}
      <h3>Skills and Motivation</h3>
      <div className="form-group checkbox-group-container">
        <label>Key Skills (Select all that apply) *</label>
        <div className="checkbox-group multi-column">
          {skillsOptions.map(skill => (
            <label key={skill}>
              <input type="checkbox" name="keySkills" value={skill} checked={formData.keySkills.includes(skill)} onChange={handleChange} />
              {skill.charAt(0).toUpperCase() + skill.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="motivationStatement">Motivation Statement *</label>
        <textarea id="motivationStatement" name="motivationStatement" value={formData.motivationStatement} onChange={handleChange} required minLength="10"></textarea>
        <small>Minimum 10 characters</small>
      </div>
      <div className="form-group">
        <label htmlFor="aboutMe">About Me *</label>
        <textarea id="aboutMe" name="aboutMe" value={formData.aboutMe} onChange={handleChange} required minLength="10" maxLength="1000"></textarea>
        <small>10-1000 characters</small>
      </div>
      <div className="form-group">
        <label htmlFor="howToUseScholarship">How will you use the scholarship? *</label>
        <textarea id="howToUseScholarship" name="howToUseScholarship" value={formData.howToUseScholarship} onChange={handleChange} required minLength="10"></textarea>
        <small>Minimum 10 characters</small>
      </div>
      <div className="form-group">
        <label htmlFor="otherRemarks">Other Remarks (Optional)</label>
        <textarea id="otherRemarks" name="otherRemarks" value={formData.otherRemarks} onChange={handleChange}></textarea>
      </div>

      {/* --- Agreement --- */}
      <div className="form-group agreement-checkbox">
        <label>
          <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required />
          I hereby declare that all the information provided in this application is true and accurate to the best of my knowledge. I agree that my personal information will be used by Ganesh Charitable Society (GCS) for scholarship evaluation, communication, and program administration. I understand that scholarship awards are subject to funding availability and organizational capacity... (Agreement text truncated for brevity) *
        </label>
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

export default ScholarshipApplicationForm;