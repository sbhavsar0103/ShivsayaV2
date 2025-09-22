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
import ourServiceImage12 from '../../assets/images/our_services/our_service_12.png';

const ForexService = () => {

    return (
        <>
            {/* FOREX SERVICES Section */}
        <section className="coaching-section">
          <div className="container" style={{ display: 'block', margin: 'auto' }}>
            <div className="coaching-wrapper">

              {/* Left Content - FOREX SERVICES Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage12}
                    alt="Coaching - IELTS and PTE preparation with experienced faculty and personalized attention"
                    className="coaching-image"
                  />
                </div>
              </div>

              {/* Right Content - FOREX SERVICES Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">FOREX SERVICES</h2>
                  <h5 className="coaching-subtitle">
                    One stop solution for Fees transfer to University, Travel Currency Card, Foreign Currency, Flywire, Wester Union with the best possible rates
                  </h5>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Provide information and resources on currency exchange options for students, such as banks and foreign currency exchange bureaus with the best forex rates.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Offer assistance in obtaining a travel currency card, which can be used internationally and may offer favourable exchange rates.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Facilitate the process of transferring fees to the university by providing information on international wire transfer services and the necessary documentation.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Help students understand and comply with any regulations or requirements for obtaining and using foreign currency in their destination country.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assist students in finding the best way to carry currency, including a debit card, credit card, travel currency card etc.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Suggesting students to check with the university regarding any restrictions on currency exchange.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    GET THE LOWEST FOREX RATES
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default ForexService;