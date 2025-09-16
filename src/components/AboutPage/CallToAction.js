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
import '../../assets/styles/about_style.css'; 

const CallToAction = () => {

    return (
        <>
            {/* Call to Action Section */}
              <section className="cta-section">
                <div className="cta-container">
                  <div className="cta-content">
                    
                    {/* Left Side - Text Content */}
                    <div className="cta-text-content">
                      <div className="cta-text-wrapper">
                        <p className="cta-headline">
                          Are you ready to embark on a successful education journey abroad with one of the best Educational Consultants in India?
                        </p>
                        
                        <p className="cta-description">
                          Shivasya is your gateway to a world of opportunities. We offer distinctive support for your educational journey and proudly stand as the best study abroad consultant. Contact us today and give us the chance to help shape your future and turn your study abroad dreams into reality.
                        </p>
                        
                        <div className="cta-button-wrapper">
                          <button className="cta-button">
                            CONTACT US
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="cta-image-content">
                      <div className="cta-image-wrapper">
                        <img 
                          src="https://res.cloudinary.com/dzptyqozu/images/f_auto,q_auto/v1703073554/female-student-with-suitcase-pointing-with-finger-9DL9HDL/female-student-with-suitcase-pointing-with-finger-9DL9HDL.png?_i=AA.webp" 
                          alt="Student ready for study abroad journey"
                          className="cta-image"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </section>
        </>
    );
};

export default CallToAction;