// src/pages/WhoWeAre.js
import React, { useState, useRef } from 'react';
import '../css/WhoWeAre.css';

// Import images from assets
import agentsImage from '../assets/Screenshot 2025-10-16 200544.png';
import innovationImage from '../assets/Screenshot 2025-10-16 200554.png';
import stemImage from '../assets/Screenshot 2025-10-16 200611.png';
import gcsImage from '../assets/Screenshot 2025-11-01 092005.png';

const FeedCard = ({ imageSrc, title, content, onReadMore }) => (
  <div className="feed-card">
    {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
    <h3 className="card-title">{title}</h3>
    <p className="card-content">{content}</p>
    <button 
      className="read-more-link-button" 
      onClick={onReadMore}
      aria-label={`Read more about ${title}`}
    >
      Read More →
    </button>
  </div>
);

const WhoWeAre = () => {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const fullText = [
    "Ganesh Charitable Society (GCS) stands as a beacon of hope for countless individuals across our community.",
    "Established in 2007, our organization's mission is to uplift and support vulnerable groups, ensuring they lead lives filled with dignity, respect, and love. We are passionate about making a difference for orphans, the elderly, and those with hearing and speech impairments. At the heart of GCS is our dedicated team.",
    "At the core of GCS is our unique and dynamic team. Comprising of innovative entrepreneurs, astute Wall Street professionals, former rocket scientists, and resilient members from underprivileged sections of society, our team represents a confluence of diverse backgrounds and experiences. This diversity fuels our passion, creativity, and dedication, ensuring we bring fresh perspectives and innovative solutions to tackle the challenges we face.",
    "Our team's collective strength lies not just in their professional accomplishments but in their shared commitment to our cause. They are the backbone of our operations, driving us forward, ensuring that our mission translates into tangible, positive outcomes for those we serve.",
    "Through our combined efforts, we strive every day to improve the quality of life of those under our care, affirming our belief that every individual deserves a chance at happiness, no matter their circumstances."
  ];

  const videoSource = "/WhatWeDoVideo.mp4"; // ensure this file lives in the public/ folder

  return (
    <div className="who-we-are-page">
      
      {/* Section 1: Who we are (Header) */}
      <section className="page-section center-content primary-section">
        <h1 className="main-heading">Who we are</h1>
        <p className="mission-text max-width-p">
          We are a unique blend of entrepreneurs, Wall Street professionals, former rocket scientists 
          and individuals from underprivileged backgrounds, working with both expertise and deep compassion. 
          Together, we are dedicated to uplifting lives and ensuring everyone has a chance at happiness, 
          regardless of their circumstances.
        </p>
      </section>

      {/* Section 2: Our Blogs & Feeds (Feeds Grid) */}
      {!expanded && (
        <section className="page-section feeds-section">
          <div className="page-content center-content">
            <h2 className="section-heading">Our Blog & Feeds</h2>
            <div className="feeds-grid">
              <FeedCard 
                imageSrc={agentsImage} 
                title="Agents of change"
                content="GCS has been dedicated to bringing positive change. Guided by compassion, integrity, and respect, we provide tailored services and programs to support the unique needs and aspirations of those we serve, inspiring others to join our mission."
                onReadMore={() => setExpanded(true)}
              />
              <FeedCard 
                imageSrc={innovationImage} 
                title="Innovation architects"
                content="At GCS, innovation is central to our approach. We continuously evaluate and improve our services, seeking creative solutions to the complex challenges faced by our community. From developing new programs for the elderly to providing education and support to orphans and those with hearing and speech impairments, we strive to make a lasting impact."
                onReadMore={() => setExpanded(true)}
              />
              <FeedCard 
                imageSrc={stemImage} 
                title="Promote STEM benefactors"
                content="While our focus is on supporting the most vulnerable, we also promote STEM (Science, Technology, Engineering, and Mathematics) education and careers. We provide educational resources and support initiatives to increase diversity and inclusion in STEM fields, contributing to a brighter future for all."
                onReadMore={() => setExpanded(true)}
              />
            </div>
          </div>
        </section>
      )}

      {/* Expanded Section */}
      {expanded && (
        <section className="expanded-section flex-layout">
          <div className="expanded-image">
            <img src={gcsImage} alt="Ganesh Charitable Society" />
          </div>
          <div className="expanded-text">
            {fullText.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <button className="read-less-btn" onClick={() => setExpanded(false)}>Show Less</button>
          </div>
        </section>
      )}

      {/* Section 3: Ways to Make a Difference / Core Pillars */}
      <section className="pillars-section">
        <h2 className="pillars-heading">Ways to Make a Difference</h2>
        
        <div className="pillars-video-layout">
            
          {/* Pillar 1 */}
          <div className="pillar-card-wd">
              <div className="pillar-icon-wd" aria-label="Identifying icon" role="img">
                  <svg className="icon-placeholder" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 className="card-title-wd">Identifying & Supporting Programs</h3>
              <p className="card-description-wd">
                  We carefully identify and support legitimate organizations that provide care for orphaned children, elderly individuals, and people with hearing and speech impairments. Our thorough vetting process ensures your contributions reach trustworthy institutions.
              </p>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card-wd">
              <div className="pillar-icon-wd" aria-label="Mobilization icon" role="img">
                  <svg className="icon-placeholder" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="card-title-wd">Resource Mobilization</h3>
              <p className="card-description-wd">
                  We connect generous donors with verified programs to create lasting change. Your contributions are directed to established organizations that demonstrate excellence in their respective fields of service.
              </p>
          </div>

          {/* Central Video with play/pause button */}
          <div className="pillars-video-container">
            <video
              ref={videoRef}
              className="pillars-video"
              src={videoSource}
              title="Ways to Make a Difference Video"
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <button
              className="video-toggle-button"
              onClick={handleVideoToggle}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? "❚❚ Pause" : "▶ Play"}
            </button>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-card-wd">
              <div className="pillar-icon-wd" aria-label="Quality icon" role="img">
                  <svg className="icon-placeholder" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20c-1.72-1.72-3.32-2.5-5.5-2.5-2 0-4.5 1-6 2.5-1.5-1.5-4-2.5-6-2.5V2"/></svg>
              </div>
              <h3 className="card-title-wd">Quality Assurance</h3>
              <p className="card-description-wd">
                  We regularly monitor and evaluate our partner organizations to ensure they maintain high standards of care and utilize resources effectively. This ensures sustainable, positive impact on beneficiaries.
              </p>
          </div>

          {/* Pillar 4 */}
          <div className="pillar-card-wd">
              <div className="pillar-icon-wd" aria-label="Partnerships icon" role="img">
                  <svg className="icon-placeholder" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <h3 className="card-title-wd">Building Partnerships</h3>
              <p className="card-description-wd">
                  We collaborate with various stakeholders - donors, institutions, and volunteers - to strengthen support for vulnerable communities. Together, we're creating a network of reliable support systems.
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
