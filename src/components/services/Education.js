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
import ourServiceImage8 from '../../assets/images/our_services/our_service_8.png';

const Education = () => {

    return (
        <>
            {/* EDUCATIONLOAN Section */}
        <section className="coaching-section">
          <div className="container" style={{ display: 'block', margin: 'auto' }}>
            <div className="coaching-wrapper">

              {/* Left Content - EDUCATIONLOAN Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage8}
                    alt="Coaching - IELTS and PTE preparation with experienced faculty and personalized attention"
                    className="coaching-image"
                  />
                </div>
              </div>

              {/* Right Content - EDUCATIONLOAN Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">EDUCATIONLOAN</h2>
                  <h5 className="coaching-subtitle">
                    We are here to help bridge the financial gap for students, by providing assistance in obtaining education loans
                  </h5>
                  <p className="coaching-description">
                    Availing an education loan to study in your dream university has never been easier! Let our experts take care of your loan process while your focus on enrolling in your dream university
                  </p>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Explaining the different types of education loans available</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assessing the student's financial need and creditworthiness</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Identifying and researching potential loan options that align with the student's needs and goals</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing guidance on how to complete and submit loan applications</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Reviewing and editing loan application materials, such as financial statements and personal statements</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Advising on required documentation and deadlines</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping with preparation for loan interviews or counselling sessions, if required</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Following up on the status of loan applications</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing guidance on loan acceptance and denial letters</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Advising on next steps, such as loan disbursement and repayment plans</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping with loan consolidation and refinance options</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Advising on loan forgiveness and discharge programs.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    KNOW MORE ABOUT EDUCATION LOAN
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default Education;