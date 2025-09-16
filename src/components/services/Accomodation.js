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
import ourServiceImage10 from '../../assets/images/our_services/our_service_10.png';

const Accomodation = () => {

    return (
        <>
            {/* ACCOMMODATION Section */}
        <section className="coaching-section">
          <div className="container">
            <div className="coaching-wrapper">

              {/* Left Content - ACCOMMODATION Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage10}
                    alt="Coaching - IELTS and PTE preparation with experienced faculty and personalized attention"
                    className="coaching-image"
                  />
                </div>
              </div>

              {/* Right Content - ACCOMMODATION Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">ACCOMMODATION</h2>
                  <h5 className="coaching-subtitle">
                    Find your home, away from home. Shivasya help to find your dream student home within your budget with world-class facilities
                  </h5>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assisting students in identifying suitable housing options such as university-provided housing, private apartments, or homestay.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing information on the cost of living and housing in the destination country.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping students arrange viewing appointments for potential housing options.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assisting with the negotiation of rental agreements and lease contracts.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing information on local housing regulations and laws.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Connecting students with local resources such as utility companies and internet providers.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping students with move-in logistics such as arranging for furniture rental or purchasing household items.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Offering ongoing support and communication to help students settle into their new accommodation.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Provide assistance in connecting students with other students from their home country who have already settled in the destination country.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Provide assistance in finding short-term accommodation for students arriving before the start of their academic program.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    FIND YOUR STUDENT APARTMENT
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default Accomodation;