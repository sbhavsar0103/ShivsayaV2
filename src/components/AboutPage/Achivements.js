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
import British from '../../assets/images/about/achivement/british.jpg';
import IEAA from '../../assets/images/about/achivement/leaa.jpg';
import ISANA from '../../assets/images/about/achivement/isana.jpg';
import TOEFL from '../../assets/images/about/achivement/toefl.jpg';
import ICEF from '../../assets/images/about/achivement/icef.png';
import Pearson from '../../assets/images/about/achivement/pearson.jpg';
import IDP from '../../assets/images/about/achivement/idp.jpg';
import NAFSA from '../../assets/images/about/achivement/nafsa.jpg'; 

const Achivements = () => {

    return (
        <>
            {/* Achievements & Accreditations Section */}
              <section className="achievements-section">
                <div className="achievements-container">
                  <div className="achievements-content">

                    {/* Section Title */}
                    <div className="achievements-header">
                      <h2 className="achievements-title">Achievements & Accreditations</h2>
                    </div>

                    {/* Achievements Content */}
                    <div className="achievements-main">

                      {/* Left Side - Certification Logos */}
                      <div className="certifications-grid">

                        {/* Row 1 */}
                        <div className="certification-row">
                          <div className="certification-logo">
                            <img src={British} alt="British Council" />
                          </div>
                          <div className="certification-logo">
                            <img src={IEAA} alt="IEAA" />
                          </div>
                          <div className="certification-logo">
                            <img src={ISANA} alt="ISANA" />
                          </div>
                        </div>

                        {/* Row 2 */}
                        <div className="certification-row">
                          <div className="certification-logo">
                            <img src={TOEFL} alt="TOEFL" />
                          </div>
                          <div className="certification-logo">
                            <img src={ICEF} alt="ICEF" />
                          </div>
                          <div className="certification-logo">
                            <img src={Pearson} alt="Pearson" />
                          </div>
                        </div>

                        {/* Row 3 */}
                        <div className="certification-row">
                          <div className="certification-logo">
                            <img src={IDP} alt="IDP" />
                          </div>
                          <div className="certification-logo">
                            <img src={NAFSA} alt="NAFSA" />
                          </div>
                          <div className="certification-logo empty-slot">
                            {/* Empty slot for alignment */}
                          </div>
                        </div>

                      </div>

                      {/* Right Side - Credentials List */}
                      <div className="credentials-list">
                        <div className="credential-item">
                          <span className="credential-bullet">●</span>
                          <span className="credential-text">IDP Certified Node Agent</span>
                        </div>
                        <div className="credential-item">
                          <span className="credential-bullet">●</span>
                          <span className="credential-text">Pearson PTE Certified Node Agent</span>
                        </div>
                        <div className="credential-item">
                          <span className="credential-bullet">●</span>
                          <span className="credential-text">Additional Credentials: ICEF, IEAA, ISANA, NAFSA, TOEFL</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </section>
        </>
    );
};

export default Achivements;