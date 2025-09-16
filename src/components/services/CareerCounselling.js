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
import ourServiceImage3 from '../../assets/images/our_services/our_service_3.png';

const CareerCounselling = () => {

    return (
        <>
            {/* CAREER COUNSELING Section */}
        <section className="coaching-section">
          <div className="container">
            <div className="coaching-wrapper">

              {/* Left Content - CAREER COUNSELING Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">CAREER COUNSELING</h2>
                  <h5 className="coaching-subtitle">
                    Everything is available on Google but still you need the Expert for your future so, here we are
                  </h5>
                  <p className="coaching-description">
                    Studying abroad is not just an indicator of prestige & quality, it's an investment. It allows you to not only broaden your horizon and develop integral skills but also helps you become a good citizen.
                  </p>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>We understand your career goal</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>In-depth analyse your entire profile</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Understand your budget</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Review the admission and visa possibilities</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Expert opinion with the multiple options</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>But at same time, we guide you what would be the best option for your future</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    BOOK YOUR FREE COUNSELLING WITH THE EXPERT
                  </button>
                </div>
              </div>


              {/* Right Content - CAREER COUNSELING Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage3}
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

export default CareerCounselling;