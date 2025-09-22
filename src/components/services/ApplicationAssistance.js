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
import ourServiceImage5 from '../../assets/images/our_services/our_service_5.png';

const ApplicationAssistance = () => {

    return (
        <>
        {/* APPLICATION ASSISTANCE Section */}
        <section className="coaching-section">
          <div className="container" style={{ display: 'block', margin: 'auto' }}>
            <div className="coaching-wrapper">

              {/* Left Content - APPLICATION ASSISTANCE Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">APPLICATION ASSISTANCE</h2>
                  <h5 className="coaching-subtitle">
                    We ensure that your application is sent across after thorough review and aim to get you an offer letter from the university of your choice
                  </h5>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assisting with the application process, including completing forms, essays and personal statements</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Reviewing and editing application materials</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing guidance on obtaining and submitting required documents, such as transcripts, test scores, and letters of recommendation</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Advising on application deadlines and timelines</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping with preparation for interviews and tests (if required)</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Communicating with university or program representatives on behalf of the student</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Following up on the status of the application</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing guidance on enrollment and acceptance letters</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Advising on next steps, such as visa application and pre-departure preparations.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    KNOW MORE ABOUT APPLICATION ASSISTANCE
                  </button>
                </div>
              </div>


              {/* Right Content - APPLICATION ASSISTANCE Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage5}
                    alt="Coaching - IELTS and PTE preparation with experienced faculty and personalized attention"
                    className="coaching-image"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default ApplicationAssistance;