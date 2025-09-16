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
import ourServiceImage9 from '../../assets/images/our_services/our_service_9.png';

const VisaGuidence = () => {

    return (
        <>
            {/* VISA GUIDANCE Section */}
        <section className="coaching-section">
          <div className="container">
            <div className="coaching-wrapper">

              {/* Left Content - VISA GUIDANCE Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">VISA GUIDANCE</h2>
                  <h5 className="coaching-subtitle">
                    This is the most crucial step. Our experience and free support will help you to navigate through the complexities of visa requirements for the procedure increasing chance of success
                  </h5>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing detailed information and guidance on the visa application process and requirements.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Gathering the necessary documents and preparing them in the correct format</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Especially expert guidance for SOP and Financial documents for successful visa process</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Completing the visa application form accurately and completely</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping students schedule the medical appointments and required documents</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping students schedule and prepare for visa interviews</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing ongoing support and communication with the university and embassy throughout the visa process</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Understanding the processing time and checking the status of your application</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Offering additional services such as visa fee payment and courier service for submitting the application</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Tips for a successful application, including common mistakes to avoid</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Troubleshooting common issues such as denied applications and how to appeal</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Information on legal representation and where to seek help if needed.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    BOOK YOUR APPOINTMENT
                  </button>
                </div>
              </div>


              {/* Right Content - VISA GUIDANCE Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage9}
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

export default VisaGuidence;