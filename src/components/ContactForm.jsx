// src/components/ContactForm.jsx

import React, { useState } from 'react';
import '../css/FormStyles.css'; // Reusing existing styles

// 🎯 API endpoint for contact messages
const MESSAGE_API_URL = "http://localhost:5000/messages";

async function postMessageData(data) {
    const response = await fetch(MESSAGE_API_URL, {
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation Check
    if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill out all required fields.");
        return;
    }

    setIsSubmitting(true);
    
    const dataToSubmit = {
        ...formData,
        submissionTime: new Date().toISOString()
    };
    
    try {
        await postMessageData(dataToSubmit);
        
        console.log('✅ Contact Message Successfully Stored in db.json at /messages');
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' }); // Clear form

    } catch (error) {
        console.error("Contact Submission Error:", error);
        const message = error.message || "An unknown error occurred.";
        alert(`Submission failed: ${message}. Ensure json-server is running.`);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h3 className="contact-form-title">Send Us a Message</h3>
      <form className="gcs-application-form compact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5"></textarea>
        </div>
        
        <div className="form-submit-group">
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;