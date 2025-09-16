import React, { useEffect } from 'react';
import '../../assets/styles/frontend.mindabc.css';
import '../../assets/styles/widget-icon-list.mindabc.css';
import '../../assets/styles/widget-spacer.mindabc.css';
import '../../assets/styles/fontawesome.min52d5.css';
import '../../assets/styles/regular.min4113.css';
import '../../assets/styles/jkiticon4113.css';
import '../../assets/styles/solid.min4113.css';
import '../../assets/styles/main4113.css';
import '../../assets/styles/frontend.min2916.css';
import '../../assets/styles/widget-heading.mindabc.css';
import '../../assets/styles/widget-divider.mindabc.css';
import '../../assets/styles/swiper.minf2de.css';
import '../../assets/styles/loftloader.min44fa.css';
import '../../assets/styles/all.min4113.css';
import '../../assets/styles/our_services.css'; 
import ourServiceImage6 from '../../assets/images/our_services/our_service_6.png';

const Sop = () => {

    return (
        <>
        {/* SOP CV LOR ASSISTANCE Section */}
        <section className="coaching-section">
          <div className="container">
            <div className="coaching-wrapper">

              {/* Left Content - SOP CV LOR ASSISTANCE Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage6}
                    alt="Coaching - IELTS and PTE preparation with experienced faculty and personalized attention"
                    className="coaching-image"
                  />
                </div>
              </div>

              {/* Right Content - SOP CV LOR ASSISTANCE Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">SOP CV LOR ASSISTANCE</h2>
                  <h5 className="coaching-subtitle">
                    Our professional content writers create first-class artefacts that place you high in the candidate pool
                  </h5>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Reviewing and editing the Statement of Purpose (SOP)</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assessing the CV and providing advice on how to make it more relevant and comprehensive</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping to identify and approach potential referees for letters of recommendation</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Reviewing and editing the letters of recommendation</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Advising on how to tailor the SOP, CV and LOR to the specific university and program</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing guidance on how to highlight relevant skills, experiences, and achievements</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Offering feedback on the overall coherence and flow of the application materials</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping to ensure that all application materials meet the standard requirements and guidelines.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    TALK WITH OUR CONSULTANT
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default Sop;