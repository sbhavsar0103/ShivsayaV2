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
import ourServiceImage4 from '../../assets/images/our_services/our_service_4.png';

const Country = () => {

    return (
        <>
            {/* COUNTRY & UNIVERSITY SELECTION Section */}
        <section className="coaching-section">
          <div className="container">
            <div className="coaching-wrapper">

              {/* Left Content - COUNTRY & UNIVERSITY SELECTION Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage4}
                    alt="Coaching - IELTS and PTE preparation with experienced faculty and personalized attention"
                    className="coaching-image"
                  />
                </div>
              </div>

              {/* Right Content - COUNTRY & UNIVERSITY SELECTION Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">COUNTRY & UNIVERSITY SELECTION</h2>
                  <h5 className="coaching-subtitle">
                    After understanding your career goal and analysing your profile, our counsellors provide you with their expert opinion and advise
                  </h5>
                  <p className="coaching-description">
                    University and country guidance refers to the process of helping students and professionals choose the best universities and countries to pursue their education or career goals.
                  </p>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Researching the political, economic and social stability of the country</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assessing the availability and quality of education and research opportunities</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Investigating the cost of living and potential earning opportunities</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Evaluating the level of English proficiency in the country</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Considering cultural and social compatibility with one's own values and lifestyle</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Reviewing the safety and security situation in the country</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Exploring the potential for personal and professional growth</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Checking the ease of obtaining work permit post-graduation</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Investigating the healthcare system and accessibility of medical facilities in the country</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    GET THE EXPERT ADVISE FROM THE LARGEST PORTFOLIO
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default Country;