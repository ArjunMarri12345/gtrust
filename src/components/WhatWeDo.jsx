import React from "react";
import "../css/WhatWeDo.css";

// Import the image assets
import whatwedo_1 from "../assets/whatwedo_1.png";
import whatwedo_2 from "../assets/whatwedo_2.png";
import whatwedo_3 from "../assets/whatwedo_3.png";

const WhatWeDo = () => (
  <div className="what-we-do-container">
    <h2>What We Do</h2>
    
    <div className="section approach">
      <h3>Our Approach</h3>
      <p>
        At Ganesh Charitable Society, we act as a bridge between generous donors and verified, impactful organizations. 
        Rather than operating programs directly, we carefully identify and support legitimate institutions 
        that have proven track records in serving vulnerable communities. 
        This approach ensures your contributions create maximum impact through established, trustworthy channels.
      </p>
    </div>
    
    <div className="section feature-section">
      <div className="feature-text">
        <h3>Supporting Children's Homes</h3>
        <p>
          We identify and support legitimate orphanages and children's homes that provide quality care and education. 
          Through careful vetting and ongoing engagement, we ensure our support reaches organizations that maintain 
          high standards of child care and development.
        </p>
      </div>
      <img src={whatwedo_1} alt="Supporting Children's Homes" className="feature-image" />
    </div>
    
    <div className="section feature-section reverse">
      <div className="feature-text">
        <h3>Elder Care Initiatives</h3>
        <p>
          We partner with established elder care facilities that demonstrate excellence in senior citizen care. 
          Our support helps these centers enhance their services, maintain quality standards, and provide dignified care 
          to elderly residents.
        </p>
      </div>
      <img src={whatwedo_2} alt="Elder Care Initiatives" className="feature-image" />
    </div>
    
    <div className="section feature-section">
      <div className="feature-text">
        <h3>Empowering Special Needs Programs</h3>
        <p>
          We collaborate with specialized institutions that serve individuals with hearing and speech impairments. 
          By supporting these programs, we help strengthen their capacity to provide education, skill development, 
          and integration services.
        </p>
      </div>
      <img src={whatwedo_3} alt="Empowering Special Needs Programs" className="feature-image" />
    </div>

    <div className="section action-section">
      <h3>Follow Our Impact</h3>
      <p>
        Subscribe to our newsletter to learn about the organizations we support and the difference your contributions make. 
        We share stories of impact, updates from our partner institutions, and opportunities to get involved.
      </p>
      <a 
        className="newsletter-link action-button" 
        href="https://ganeshcharitablesociety.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read our Newsletter
      </a>
    </div>
    
    <div className="section action-section">
      <h3>Support Verified Programs</h3>
      <p>
        Your contributions help us support carefully vetted organizations that make a real difference. 
        Join us in strengthening these impactful programs.
      </p>
      <a className="donate-link action-button primary-button" href="/donate">
        Donate Now
      </a>
      <a className="donate-link action-button secondary-button" href="/contact">
        Contact Us
      </a>
    </div>
  </div>
);

export default WhatWeDo;