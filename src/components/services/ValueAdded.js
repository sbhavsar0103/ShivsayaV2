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
import ourServiceImage1 from '../../assets/images/our_services/our_service_1.png';

const ValueAdded = () => {

    return (
        <>
            {/* Value Added Services Section */}
        <section className="value-added-services">
          <div className="container" style={{ display: 'block', margin: 'auto' }}>
            <div className="services-wrapper">

              {/* Left Content - Text and Services List */}
              <div className="services-content">
                <div className="services-header">
                  <h1 className="services-title">
                    VALUE ADDED <span className="highlight">SERVICES</span>
                  </h1>
                  <p className="services-description">
                    We at Shivasya, are here to guide you, just as a reliable friend,
                    starting from admission counselling until you reach at your
                    dream destination
                  </p>
                </div>

                <div className="services-list">
                  <div className="service-item-our">
                    <div className="check-icon">✓</div>
                    <span>Coaching - IELTS | PTE</span>
                  </div>
                  <div className="service-item-our">
                    <div className="check-icon">✓</div>
                    <span>Career Counselling - Country and University Selection</span>
                  </div>
                  <div className="service-item-our">
                    <div className="check-icon">✓</div>
                    <span>Application & SOP CV LOR Assistance</span>
                  </div>
                  <div className="service-item-our">
                    <div className="check-icon">✓</div>
                    <span>Scholarship & Education Loan</span>
                  </div>
                  <div className="service-item-our">
                    <div className="check-icon">✓</div>
                    <span>Visa Guidance</span>
                  </div>
                  <div className="service-item-our">
                    <div className="check-icon">✓</div>
                    <span>Pre-departure Assistance - Accommodation | Airticket and Insurance | Forex Services</span>
                  </div>
                  <div className="service-item-our">
                    <div className="check-icon">✓</div>
                    <span>Dependent & Visitor Visa for your family</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual Elements */}
              <div className="services-visual">
                <div className="services-image-container">
                  <img
                    src={ourServiceImage1}
                    alt="Value Added Services - Our comprehensive services including coaching, career counselling, visa guidance, accommodation assistance, and more educational support services"
                    className="services-image"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default ValueAdded;