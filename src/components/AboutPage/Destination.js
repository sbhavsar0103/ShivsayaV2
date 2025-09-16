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
import Canada from '../../assets/images/about/destination/canada.jpg';
import UK from '../../assets/images/about/destination/UK.jpg';
import USA from '../../assets/images/about/destination/USA.jpg';
import Australia from '../../assets/images/about/destination/australia.jpg';
import Germany from '../../assets/images/about/destination/germany.jpg';
import France from '../../assets/images/about/destination/france.jpg';
import NewZeland from '../../assets/images/about/destination/new-zeland.jpg';
import Dubai from '../../assets/images/about/destination/dubai_1.jpg';

const Destination = () => {

    return (
        <>
            {/* Choose Your Dream Destination Section */}
              <section className="dream-destination-section">
                <div className="destination-container">
                  <div className="destination-content">

                    {/* Section Header */}
                    <div className="destination-header">
                      <div className="destination-badge">
                        <span className="badge-text">CHOOSE YOUR DREAM DESTINATION</span>
                      </div>
                      <div className="destination-title-row">
                        <h2 className="destination-title">Let Us Help You Live Your Dream</h2>
                        <button className="apply-now-btn">APPLY NOW</button>
                      </div>
                    </div>

                    {/* Destination Cards Grid */}
                    <div className="destination-grid">

                      {/* Canada Card */}
                      <div className="destination-card">
                        <div className="destination-image">
                          <img src={Canada} alt="Study in Canada" />
                          <div className="destination-overlay">
                            <p className="destination-label">Study in Canada</p>
                          </div>
                        </div>
                      </div>

                      {/* UK Card */}
                      <div className="destination-card">
                        <div className="destination-image">
                          <img src={UK} alt="Study in UK" />
                          <div className="destination-overlay">
                            <p className="destination-label">Study in UK</p>
                          </div>
                        </div>
                      </div>

                      {/* USA Card */}
                      <div className="destination-card">
                        <div className="destination-image">
                          <img src={USA} alt="Study in USA" />
                          <div className="destination-overlay">
                            <p className="destination-label">Study in USA</p>
                          </div>
                        </div>
                      </div>

                      {/* Australia Card */}
                      <div className="destination-card">
                        <div className="destination-image">
                          <img src={Australia} alt="Study in Australia" />
                          <div className="destination-overlay">
                            <p className="destination-label">Study in Australia</p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Destination Cards Grid */}
                    <div className="destination-grid">

                      {/* Canada Card */}
                      <div className="destination-card">
                        <div className="destination-image">
                          <img src={Germany} alt="Study in Canada" />
                          <div className="destination-overlay">
                            <p className="destination-label">Study in Germany</p>
                          </div>
                        </div>
                      </div>

                      {/* UK Card */}
                      <div className="destination-card">
                        <div className="destination-image">
                          <img src={France} alt="Study in UK" />
                          <div className="destination-overlay">
                            <p className="destination-label">Study in France</p>
                          </div>
                        </div>
                      </div>

                      {/* USA Card */}
                      <div className="destination-card">
                        <div className="destination-image">
                          <img src={NewZeland} alt="Study in USA" />
                          <div className="destination-overlay">
                            <p className="destination-label">Study in New Zeland</p>
                          </div>
                        </div>
                      </div>

                      {/* Australia Card */}
                      <div className="destination-card">
                        <div className="destination-image">
                          <img src={Dubai} alt="Study in Australia" />
                          <div className="destination-overlay">
                            <p className="destination-label">Study in Dubai</p>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </section>
        </>
    );
};

export default Destination;