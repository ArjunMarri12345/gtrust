import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/OurPledge.css';

// --- ICON IMPORTS ---
import icon1 from '../assets/Screenshot 2025-10-17 155110.png';
import icon2 from '../assets/Screenshot 2025-10-17 155407.png';
import icon3 from '../assets/Screenshot 2025-10-17 155237.png';

// --- CERTIFICATE BACKGROUND IMPORTS ---
import vizagCertBG from '../assets/P4_Visakhapatnam_certificate_page-0001.jpg';
import anakapalliCertBG from '../assets/P4_Anakapalli_certificate-1.jpg';

const OurPledge = () => {
  const navigate = useNavigate();

  return (
    <div className="our-pledge-page">

      {/* 1️⃣ PLEDGE BANNER SECTION (Deep Blue/Gray) */}
      <section className="page-section pledge-section">
        <div className="page-content center-content">
          <div className="pledge-icons">
            <img src={icon1} alt="Pledge Icon 1" className="pledge-icon" />
            <img src={icon2} alt="Pledge Icon 2" className="pledge-icon" />
            <img src={icon3} alt="Pledge Icon 3" className="pledge-icon" />
          </div>
          <h1 className="pledge-heading">Our Zero Poverty P4 Pledge</h1>
          <p className="pledge-subtext">
            Committed to Creating a Poverty-Free Andhra Pradesh
          </p>
          <div className="pledge-button-container">
            <button className="pledge-button">
              🏛️ Official Government Partner | Bangaru Kutumbalu Program
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ COMMITMENT SECTION (Wider Vertical Cards) */}
      <section className="page-section commitment-section">
        <div className="page-content">
          <div className="center-content">
            <h2 className="main-heading">Our Commitment to Change</h2>
            <p className="max-width-p mission-text commitment-intro">
              As a registered Margadarsi under the Bangaru Kutumbalu program,GCS has pledged to support families across two key districts in Andhra Pradesh.
            </p>
          </div>
          <div className="commitment-grid">
            <div className="commitment-card">
              <h3 className="card-title">📍 Visakhapatnam Families</h3>
              <p>Supporting 10 families in Visakhapatnam / Pendurthi / GVMC areas.</p>
              <span className="goal-text">
                Goal: Financial stability and self-reliance through targeted mentorship.
              </span>
            </div>
            <div className="commitment-card">
              <h3 className="card-title">🧑‍🤝‍🧑 Anakapalli Families</h3>
              <p>Supporting 10 families in Anakapalli / Madugula / Rural areas.</p>
              <span className="goal-text">
                Goal: Rural development and poverty alleviation via community programs.
              </span>
            </div>
            <div className="commitment-card">
              <h3 className="card-title">💚 Our Approach</h3>
              <p>Providing resources, opportunities, and mentorship based on each family's needs.</p>
              <span className="goal-text">
                Principle: Empathy, respect, and privacy preservation.
              </span>
            </div>
            <div className="commitment-card margadarsi-role">
              <h3 className="card-title">🌟 Our Role as Margadarsi (Guide)</h3>
              <p>
                As a registered Margadarsi under the Bangaru Kutumbalu program, GCS serves
                as a trusted mentor. We stand with families to help them achieve a wealthy, healthy, and happy Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ CERTIFICATES AND IMPACT GOALS */}
      <section className="page-section certificate-section">
        <div className="page-content">
          <h2 className="section-heading">Official Government Certificates</h2>
          <p className="center-content mission-text max-width-p certificate-intro">
            Download and view our official Zero Poverty P4 pledge certificates
          </p>
          <div className="certificate-grid">
            {/* Visakhapatnam Certificate */}
            <div className="certificate-card vizag-cert-card">
                <div 
                    className="certificate-bg-container"
                    style={{ backgroundImage: `url(${vizagCertBG})` }}
                ></div>
                <div className="certificate-details">
                    <h3 className="cert-title">Visakhapatnam Area Commitment</h3>
                    <p className="cert-description">
                      Official pledge for supporting 10 families in urban Visakhapatnam region.
                    </p>
                    <p className="cert-date">📅 16-08-2025</p>
                    <div className="cert-actions">
                          <a
                            href="https://www.gcshelpinghands.org/certificates/P4_Visakhapatnam_certificate.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-link view-link"
                          >
                            👁️ View
                          </a>
                          <a
                            href="https://www.gcshelpinghands.org/certificates/P4_Visakhapatnam_certificate.pdf"
                            className="cert-link download-link"
                          >
                            ⬇ Download
                          </a>
                    </div>
                </div>
            </div>
            {/* Anakapalli Certificate */}
            <div className="certificate-card anakapalli-cert-card">
                <div 
                    className="certificate-bg-container"
                    style={{ backgroundImage: `url(${anakapalliCertBG})` }}
                ></div>
                <div className="certificate-details">
                    <h3 className="cert-title">Anakapalli Area Commitment</h3>
                    <p className="cert-description">
                      Official pledge for supporting 10 families in rural Anakapalli region.
                    </p>
                    <p className="cert-date">📅 16-08-2025</p>
                    <div className="cert-actions">
                          <a
                            href="https://www.gcshelpinghands.org/certificates/P4_Anakapalli_certificate.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-link view-link"
                          >
                            👁️ View
                          </a>
                          <a
                            href="https://www.gcshelpinghands.org/certificates/P4_Anakapalli_certificate.pdf"
                            className="cert-link download-link"
                          >
                            ⬇ Download
                          </a>
                    </div>
                </div>
            </div>
          </div>
          {/* IMPACT GOALS (Centered Vertical Stack) */}
          <h2 className="section-heading goals-heading">Our Impact Goals</h2>
          <div className="goals-grid">
            <div className="goal-card"><div className="goal-number">20</div><div className="goal-label">Families Supported</div></div>
            <div className="goal-card"><div className="goal-number">2</div><div className="goal-label">Districts Covered</div></div>
            <div className="goal-card"><div className="goal-number">3</div><div className="goal-label">Focus Areas</div></div>
            <div className="goal-card"><div className="goal-number">18</div><div className="goal-label">Years Experience</div></div>
          </div>
          {/* ⭐️ NEW: THREE PILLARS OF SUPPORT SECTION ⭐️ */}
          <h2 className="section-heading pillars-heading">Our Three Pillars of Support</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
                <div className="pillar-icon">
                    <span role="img" aria-label="Money Bag">💰</span>
                </div>
                <div className="pillar-content">
                    <h3 className="pillar-title">Financial Stability</h3>
                    <p className="pillar-description">
                        Helping families achieve economic independence through targeted financial support and guidance
                    </p>
                </div>
            </div>
            <div className="pillar-card">
                <div className="pillar-icon">
                    <span role="img" aria-label="Target">🎯</span>
                </div>
                <div className="pillar-content">
                    <h3 className="pillar-title">Targeted Resources</h3>
                    <p className="pillar-description">
                        Providing opportunities and mentorship specific to each family's unique needs and circumstances
                    </p>
                </div>
            </div>
            <div className="pillar-card">
                <div className="pillar-icon">
                    <span role="img" aria-label="Handshake">🤝</span>
                </div>
                <div className="pillar-content">
                    <h3 className="pillar-title">Respectful Approach</h3>
                    <p className="pillar-description">
                        Treating everyone with empathy and dignity while preserving their privacy and personal autonomy
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ JOIN OUR MISSION SECTION */}
      <section className="page-section mission-join-section">
        <div className="page-content center-content">
          <h2 className="mission-join-heading">
            Join Our Mission
          </h2>
          <p className="mission-join-text">
            Help us fulfill our pledge to support 20 families across Andhra Pradesh.<br />
            Whether you volunteer your time or contribute financially, your support makes a real difference.
          </p>
          <div className="mission-cta-button-container">
            <button className="mission-volunteer-btn" onClick={() => navigate('/volunteer')}>
              🌼 Become a Volunteer <span className="mission-arrow">&rarr;</span>
            </button>
            <button className="mission-donate-btn" onClick={() => navigate('/donate')}>
              <span role="img" aria-label="donate">🥰</span> Donate Now <span className="mission-arrow">&rarr;</span>
            </button>
          </div>
          <div className="mission-contact-info">
            <div className="mission-contact-label">Questions about our pledge? We're here to help!</div>
            <div className="mission-contact-details">
              <span className="mission-contact-email">✉️ support@ganeshsociety.org</span><br />
              <span className="mission-contact-phone">📞 +91 89127494419</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurPledge;
