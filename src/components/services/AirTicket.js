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
import ourServiceImage11 from '../../assets/images/our_services/our_service_11.png';

const AirTicket = () => {

    return (
        <>
           {/* AIR TICKET & INSURANCE Section */}
        <section className="coaching-section">
          <div className="container" style={{ display: 'block', margin: 'auto' }}>
            <div className="coaching-wrapper">

              {/* Left Content - AIR TICKET & INSURANCE Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">AIR TICKET & INSURANCE</h2>
                  <h5 className="coaching-subtitle">
                    Get the best deals on your flight tickets and overseas student insurance after cross checking with multiple services providers
                  </h5>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Network: We have an extensive network of reliable partners that allow us to provide you with competitive rates for Airticket & Insurance when available. With us, you can save good money on your travel and Insurance when compared with other student travel agencies.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Travel Advisory: we will ensure that you are well prepared for your journey, especially if there are any travel restrictions or concerns.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Travel Rescheduling: we provides relief in the event of flight delay, cancellation, rescheduling or any other travel disruptions. We can assist you in putting into motion the necessary procedures to ensure your safety and security.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Evacuation & Repatriation: Should you encounter a medical emergency during your travel, Shivasya will provide the necessary assistance to ensure your safety and security.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Airport Pick up: We provide you a smooth journey from the airport to your destination campus with advance booking</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Overseas Student Insurance: Itâ€™s advisable to buy Overseas Student Insurance from India itself as itâ€™s very cheaper compare to medical insurance available in abroad. Again this insurance will not cover only your medical but it would cover your travel insurance like flight delay or cancellation; delay or missing baggage, life insurance, dentistry, family visit in emergency, cover of universityâ€™s fees incase of lose of sponsor etc.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    GET THE BEST DEAL
                  </button>
                </div>
              </div>


              {/* Right Content - AIR TICKET & INSURANCE Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage11}
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

export default AirTicket;