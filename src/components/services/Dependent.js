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
import ourServiceImage13 from '../../assets/images/our_services/our_service_13.png';

const Dependent = () => {

    return (
        <>
            {/* DEPENDENT & VISITOR VISA VISITOR VISA Section */}
        <section className="coaching-section">
          <div className="container" style={{ display: 'block', margin: 'auto' }}>
            <div className="coaching-wrapper">

              {/* Left Content - DEPENDENT & VISITOR VISA VISITOR VISA Details */}
              <div className="coaching-content">
                <div className="coaching-header">
                  <h2 className="coaching-title">DEPENDENT & VISITOR VISA VISITOR VISA</h2>
                  <h5 className="coaching-subtitle">
                    After your successful student visa, you are now a part of Shivasya family. We also take care of Dependent visa of your spouse & children as well as Visitor visa of your parents
                  </h5>
                  <p className="coaching-description">
                    Provide guidance and resources on the application process for dependent and visitor visas for the student's family members for student visit or traveling or to attend the convocation.
                  </p>
                </div>

                <div className="coaching-features">
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Assist in gathering and preparing the necessary documentation for the dependent and visitor visa application.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Help the student's family members understand and comply with any regulations or requirements for obtaining a dependent or visitor visa.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Facilitate communication with the relevant authorities and embassies to ensure the smooth processing of the dependent and visitor visa applications.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Provide support and assistance throughout the entire process, from the initial application to the final approval.</span>
                  </div>
                  <div className="feature-item-services">
                    <div className="feature-icon">✓</div>
                    <span>Help students and their families understand the immigration rules and regulations of the destination country, and provide information on the rights and responsibilities of dependent and visitor visa holders.</span>
                  </div>
                </div>

                <div className="coaching-cta">
                  <button className="demo-class-btn">
                    START VISA PROCESS FOR YOUR FAMILY
                  </button>
                </div>
              </div>


              {/* Right Content - DEPENDENT & VISITOR VISA VISITOR VISA Image */}
              <div className="coaching-visual">
                <div className="coaching-image-container">
                  <img
                    src={ourServiceImage13}
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

export default Dependent;