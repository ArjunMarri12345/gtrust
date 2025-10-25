// src/pages/WhatWeDo.jsx (Complete File with <video> tag)
import React from 'react';
import '../css/WhatWeDo.css'; 

const WhatWeDo = () => {
    // Local video URL (adjust path if needed, but keeping your original 'autoplay' and 'mute' query params)
    const videoSource = "./WhatWeDoVideo.mp4?autoplay=1&mute=1"; 
    
    return (
        <div className="what-we-do-page page-section"> 
            <div className="page-content">
                
                {/* --- 1. OUR MISSION SECTION --- */}
                <header className="mission-header">
                    <p className="mission-subheading">Our Mission</p>
                    <h1 className="mission-title">Creating Lasting Change Through Compassion</h1>
                    <p className="mission-text">
                        At Ganesh Charitable Society, we believe in the transformative power of compassionate action. Our work focuses on providing comprehensive support to orphaned children, elderly individuals, and people with hearing and speech impairments. Through dedicated care, education, and empowerment programs, we're building a more inclusive and supportive society.
                    </p>
                </header>

                {/* --- 2. WAYS TO MAKE A DIFFERENCE / CORE PILLARS (WITH VIDEO) --- */}
                <section className="pillars-section">
                    <h2 className="pillars-heading">Ways to Make a Difference</h2>

                    {/* GRID CONTAINER for Pillars + Video */}
                    <div className="pillars-video-layout"> 
                        
                        {/* Pillar 1: Identifying & Supporting Programs */}
                        <div className="pillar-card-wd">
                            <div className="pillar-icon-wd">
                                <span role="img" aria-label="Identifying icon">
                                    {/* Placeholder SVG Icon */}
                                    <svg className="icon-placeholder" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                </span>
                            </div>
                            <h3 className="card-title-wd">Identifying & Supporting Programs</h3>
                            <p className="card-description-wd">
                                We carefully identify and support legitimate organizations that provide care for orphaned children, elderly individuals, and people with hearing and speech impairments. Our thorough vetting process ensures your contributions reach trustworthy institutions.
                            </p>
                        </div>

                        {/* Pillar 2: Resource Mobilization */}
                        <div className="pillar-card-wd">
                            <div className="pillar-icon-wd">
                                <span role="img" aria-label="Mobilization icon">
                                    {/* Placeholder SVG Icon */}
                                    <svg className="icon-placeholder" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                </span>
                            </div>
                            <h3 className="card-title-wd">Resource Mobilization</h3>
                            <p className="card-description-wd">
                                We connect generous donors with verified programs to create lasting change. Your contributions are directed to established organizations that demonstrate excellence in their respective fields of service.
                            </p>
                        </div>

                        {/* Central Video Element - Changed from <iframe> to <video> */}
                        <div className="pillars-video-container">
                            <video
                                className="pillars-video"
                                src={videoSource}
                                title="Ways to Make a Difference Video"
                                autoPlay
                                muted
                                loop // Video often loops in this type of layout
                                playsInline
                                controls={false} // Hide default controls for a clean look
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        
                        {/* Pillar 3: Quality Assurance */}
                        <div className="pillar-card-wd">
                            <div className="pillar-icon-wd">
                                <span role="img" aria-label="Quality icon">
                                    {/* Placeholder SVG Icon */}
                                    <svg className="icon-placeholder" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20c-1.72-1.72-3.32-2.5-5.5-2.5-2 0-4.5 1-6 2.5-1.5-1.5-4-2.5-6-2.5V2"/></svg>
                                </span>
                            </div>
                            <h3 className="card-title-wd">Quality Assurance</h3>
                            <p className="card-description-wd">
                                We regularly monitor and evaluate our partner organizations to ensure they maintain high standards of care and utilize resources effectively. This ensures sustainable, positive impact on beneficiaries.
                            </p>
                        </div>

                        {/* Pillar 4: Building Partnerships */}
                        <div className="pillar-card-wd">
                            <div className="pillar-icon-wd">
                                <span role="img" aria-label="Partnerships icon">
                                    {/* Placeholder SVG Icon */}
                                    <svg className="icon-placeholder" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                                </span>
                            </div>
                            <h3 className="card-title-wd">Building Partnerships</h3>
                            <p className="card-description-wd">
                                We collaborate with various stakeholders - donors, institutions, and volunteers - to strengthen support for vulnerable communities. Together, we're creating a network of reliable support systems.
                            </p>
                        </div>

                    </div> {/* End pillars-video-layout */}

                </section>

            </div> {/* End page-content */}
        </div> // End what-we-do-page
    );
};

export default WhatWeDo;