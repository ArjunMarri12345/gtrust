// src/components/VolunteerForm.jsx (Updated to save data via fetch)

import React, { useState } from 'react';
import '../css/FormStyles.css';

// 🎯 New API endpoint for volunteer submissions
const VOLUNTEER_API_URL = "http://localhost:5001/volunteers";

/**
 * Posts volunteer data to the json-server endpoint.
 * @param {object} data - The cleaned form data object.
 */
async function postVolunteerData(data) {
    const response = await fetch(VOLUNTEER_API_URL, {
        method: 'POST',
        // CRUCIAL: Must send as JSON for json-server
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        // Attempt to parse server error, fallback to status
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server responded with status: ${response.status}`);
    }
    return response.json();
}


const VolunteerForm = () => {
  // Initial state reflects all requested fields
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', address: '', contactMethod: '',
    convenientDays: [], timeSlots: [], areasOfInterest: [],
    skills: '', inspiration: '', hopes: '', agreement: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
        // Handle agreement and multi-select checkboxes (Days, Time, Areas)
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
        // Handle text, email, tel, textarea, and select inputs
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.address || !formData.contactMethod || 
        formData.convenientDays.length === 0 || !formData.inspiration || !formData.hopes || !formData.agreement) {
        alert("Please fill out all required fields and check the agreement box.");
        return;
    }

    setIsSubmitting(true);
    
    // 🎯 1. Prepare data for submission
    const dataToSubmit = {
        ...formData,
        submissionTime: new Date().toISOString()
    };
    
    try {
        // 🎯 2. Call the new post function to save to db.json
        await postVolunteerData(dataToSubmit);
        
        console.log('✅ Volunteer Data Successfully Stored in db.json at /volunteers');
        alert('Thank you! Your volunteer application has been submitted successfully and saved to your local database.');
        // Optional: Reset form here for a clean experience
        // setFormData(initialState); 

    } catch (error) {
        console.error("Volunteer Submission Error:", error);
        const message = error.message || "An unknown network error occurred.";
        alert(`Submission failed: ${message}. Ensure json-server is running.`);
    } finally {
        setIsSubmitting(false);
    }
  };

  // Options for Checkbox/Select Fields (No change)
  const daysOptions = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const timeOptions = ['morning', 'afternoon', 'evening', 'flexible'];
  const areasOptions = ['childcare', 'elderly care', 'education', 'fundraising', 'event planning', 'social media', 'technology', 'administration', 'healthcare', 'food distribution', 'other'];

  return (
    <form className="gcs-application-form" onSubmit={handleSubmit}>
      <h2 className='gcs-application-title'>Join Our Volunteer Community</h2>
      <p className='form-subtitle'>Thank you for your interest in volunteering with GCS. Your contribution will make a real difference in the lives of those we serve.</p>

      {/* --- Personal Information --- */}
      <h3>Personal Information</h3>
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
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
        <label htmlFor="contactMethod">Preferred Contact Method *</label>
        <select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleChange} required>
          <option value="">--- Select ---</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="Either">Either</option>
        </select>
      </div>

      {/* --- Availability --- */}
      <h3>Availability</h3>
      <div className="form-group checkbox-group-container">
        <label>Convenient Days (Select all that apply) *</label>
        <div className="checkbox-group">
          {daysOptions.map(day => (
            <label key={day}>
              <input type="checkbox" name="convenientDays" value={day} checked={formData.convenientDays.includes(day)} onChange={handleChange} />
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div className="form-group checkbox-group-container">
        <label>Preferred Time Slots (Select all that apply) *</label>
        <div className="checkbox-group">
          {timeOptions.map(time => (
            <label key={time}>
              <input type="checkbox" name="timeSlots" value={time} checked={formData.timeSlots.includes(time)} onChange={handleChange} />
              {time.charAt(0).toUpperCase() + time.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* --- Areas of Interest & Skills --- */}
      <h3>Areas of Interest & Skills</h3>
      <div className="form-group checkbox-group-container">
        <label>Areas of Interest (Select all that apply) *</label>
        <div className="checkbox-group multi-column">
          {areasOptions.map(area => (
            <label key={area}>
              <input type="checkbox" name="areasOfInterest" value={area} checked={formData.areasOfInterest.includes(area)} onChange={handleChange} />
              {area.charAt(0).toUpperCase() + area.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="skills">Skills (Please list your skills separated by commas)</label>
        <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} placeholder="Separate multiple skills with commas" />
      </div>

      {/* --- Tell Us About Yourself --- */}
      <h3>Tell Us About Yourself</h3>
      <div className="form-group">
        <label htmlFor="inspiration">What inspired you to volunteer with GCS? *</label>
        <textarea id="inspiration" name="inspiration" value={formData.inspiration} onChange={handleChange} required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="hopes">What do you hope to gain from this volunteer experience? *</label>
        <textarea id="hopes" name="hopes" value={formData.hopes} onChange={handleChange} required></textarea>
      </div>

      {/* --- Agreement --- */}
      <div className="form-group agreement-checkbox">
        <label>
          <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required />
          I agree that my personal information collected through this form will be used by Ganesh Charitable Society (GCS) for volunteer coordination, communication regarding volunteer opportunities, and future organizational updates. I understand that my information will be handled in accordance with GCS's privacy practices and will not be shared with third parties without my consent. *
        </label>
      </div>
      
      {/* Submission Button */}
      <div className="form-submit-group">
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Posting to Local JSON...' : 'Join as Volunteer'}
        </button>
      </div>
    </form>
  );
};

export default VolunteerForm;