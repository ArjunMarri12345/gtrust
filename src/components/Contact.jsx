// src/pages/Contact.jsx

import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import '../css/ContactStyles.css'; // We'll add new styles here

// The address for GCS in URL-encoded format
// This address is used directly in the map source URL
const ADDRESS = "Door+no+48-1-45+Srinagar,+Visakhapatnam,+Andhra+Pradesh,+530016";
const MAP_SOURCE = `https://maps.google.com/maps?q=${ADDRESS}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

function Contact() {
  return (
    <div className="gcs-page contact-page">
      <h1 className="page-title">Contact Us</h1>
      
      <div className="contact-content-wrapper">
        
        {/* --- 1. Contact Form & Map (Now combined in this section) --- */}
        <div className="contact-section form-section">
          
          <div className="map-embed-container">
            <h3>Our Location</h3>
            <iframe
              width="100%"
              height="350"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={MAP_SOURCE}
              title="Ganesh Charitable Society location map"
              style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <ContactForm />

        </div>

        {/* --- 2. Contact Details --- */}
        <div className="contact-section details-section">
          <h3>Reach Out Directly</h3>
          
          <div className="contact-detail">
            <span className="icon">📞</span>
            <p>+91 89127494419</p>
          </div>
          
          <div className="contact-detail">
            <span className="icon">📧</span>
            <p>support@ganeshsociety.org</p>
          </div>
          
          <div className="contact-detail address-detail">
            <span className="icon">📍</span>
            <p>Door no 48-1-45 Srinagar, Visakhapatnam, Andhra Pradesh, 530016</p>
          </div>
          
          <div className="updates-box">
            <h4>Get the latest updates</h4>
            <div className="email-subscribe">
              <input type="email" placeholder="Email me" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- 3. Footer Section (Remains the same) --- */}
      <footer className="contact-footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>GCS</h4>
            <p>Ganesh Charitable Society</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="/howitworks">How it Works</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="/helpcenter">Help Center</a>
            <a href="/terms">Terms of service</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="/privacy">Privacy policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ganesh Charitable Society, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;