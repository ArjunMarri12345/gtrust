// src/pages/WhoWeAre.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/WhoWeAre.css'; 

// 🎯 CRITICAL FIX: The images must be moved to src/assets/ and imported using this path:
import agentsImage from '../assets/Screenshot 2025-10-16 200544.png'
import innovationImage from '../assets/Screenshot 2025-10-16 200554.png'
import stemImage from '../assets/Screenshot 2025-10-16 200611.png'


// Helper component for the blog/feed cards
const FeedCard = ({ imageSrc, title, content }) => (
    <div className="feed-card">
        {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
        <Link to="/blog/details" className="read-more-link">Read More →</Link>
    </div>
);

const WhoWeAre = () => {
    return (
        <div className="who-we-are-page">
            
            {/* ----------------- SECTION 1: WHO WE ARE (Original Text) ----------------- */}
            <section className="page-section center-content primary-section">
                <h1 className="main-heading">Who we are</h1> 
                <p className="mission-text max-width-p">
                    We are a unique blend of entrepreneurs, Wall Street professionals, former rocket scientists 
                    and individuals from underprivileged backgrounds, working with both expertise and deep compassion. 
                    Together, we are dedicated to uplifting lives and ensuring everyone has a chance at happiness, 
                    regardless of their circumstances.
                </p>
            </section>

            {/* ----------------- SECTION 2: OUR BLOGS & FEEDS ----------------- */}
            <section className="page-section feeds-section">
                <div className="page-content center-content">
                    <h2 className="section-heading">Our Blog & Feeds</h2>
                    <div className="feeds-grid">
                        
                        <FeedCard 
                            imageSrc={agentsImage} 
                            title="Agents of change"
                            content="GCS has been dedicated to bringing positive change. Guided by compassion, integrity, and respect, we provide tailored services and programs to support the unique needs and aspirations of those we serve, inspiring others to join our mission."
                        />
                        <FeedCard 
                            imageSrc={innovationImage} 
                            title="Innovation architects"
                            content="At GCS, innovation is central to our approach. We continuously evaluate and improve our services, seeking creative solutions to the complex challenges faced by our community. From developing new programs for the elderly to providing education and support to orphans and those with hearing and speech impairments, we strive to make a lasting impact."
                        />
                        <FeedCard 
                            imageSrc={stemImage} 
                            title="Promote STEM benefactors"
                            content="While our focus is on supporting the most vulnerable, we also promote STEM (Science, Technology, Engineering, and Mathematics) education and careers. We provide educational resources and support initiatives to increase diversity and inclusion in STEM fields, contributing to a brighter future for all."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoWeAre;