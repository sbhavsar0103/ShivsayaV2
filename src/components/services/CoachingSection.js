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
import ourServiceImage2 from '../../assets/images/our_services/our_service_2.png';

const CoachingSection = () => {

    return (
        <>
            {/* Coaching Section */}
        <section className="coaching-section">
          <div className="container" style={{ display: 'block', margin: 'auto' }}>
            <div className="coaching-wrapper">

              {/* Left Content - Coaching Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage2}
                    alt="Coaching - IELTS and PTE preparation with experienced faculty and personalized attention"
                    className="coaching-image"
                  />
                </div>
              </div>

              {/* Right Content - Coaching Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">COACHING</h2>
                  <h5 className="coaching-subtitle">
                    Why Shivasya is the best place for Coaching ?
                  </h5>
                  <p className="coaching-description">
                    The most important step for any one hoping to go to another country for further studies is appearing for the IELTS or PTE.
                  </p>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>NODE partner of IDP, British Council and Pearson</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Certified Faculties with more than 10 years of experience</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Limited Students: only 15 to 20 Students in 1 batch for personal attention to each student</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Tailor made materials, software and library to achieve required score</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Flexible batch Timings and 1 year of validity</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Mock Test on every Saturday</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Specially designed Mock Tests for final exam</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Special tutors for the everyday speaking</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    JOIN FREE DEMO CLASS
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default CoachingSection;