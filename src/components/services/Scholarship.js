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
import ourServiceImage7 from '../../assets/images/our_services/our_service_7.png';

const Scholarship = () => {

    return (
        <>
            {/* SCHOLARSHIP Section */}
        <section className="coaching-section">
          <div className="container">
            <div className="coaching-wrapper">

              {/* Left Content - SCHOLARSHIP Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">SCHOLARSHIP</h2>
                  <h5 className="coaching-subtitle">
                    Get assistance on extra funds and professional guidance on various scholarships offered by international universities
                  </h5>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assessing the student's qualifications and eligibility for scholarships</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Identifying and researching potential scholarships that align with the student's interests and goals</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Providing guidance on how to complete and submit scholarship applications</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Reviewing and editing scholarship application materials, such as essays and personal statements</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Advising on required documentation and deadlines</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping with preparation for interviews, if required</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Following up on the status of scholarship applications</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Helping with the maintenance of scholarship requirements, such as maintaining a certain GPA.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    KNOW MORE ABOUT AVAILABLE SCHOLARSHIPS
                  </button>
                </div>
              </div>


              {/* Right Content - SCHOLARSHIP Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage7}
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

export default Scholarship;