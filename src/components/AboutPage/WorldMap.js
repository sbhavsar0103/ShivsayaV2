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

const WorldMap = () => {

    return (
        <>
            {/* World Map Section */}
              <section className="elementor-section elementor-top-section elementor-element world-map-section elementor-section-boxed elementor-section-height-default"
                data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">

                      {/* World Map Container */}
                      <div className="elementor-element elementor-widget world-map-container" data-element_type="widget">
                        <div className="elementor-widget-container">
                          <div className="world-map-wrapper">

                            {/* World Map with Background Image */}
                            <div className="world-map-container-bg">
                              <div className="world-map-overlay">
                                {/* Highlighted Countries - Positioned over background image */}
                                <div className="country-hotspots">
                                  {/* Canada - Corrected position */}
                                  <div className="country-highlight canada" style={{left: '25%', top: '40%'}}>
                                    <div className="hotspot-pulse"></div>
                                    <span className="country-label">Canada</span>
                                  </div>

                                  {/* USA - Corrected position */}
                                  <div className="country-highlight usa" style={{left: '28%', top: '52%'}}>
                                    <div className="hotspot-pulse"></div>
                                    <span className="country-label">USA</span>
                                  </div>

                                  {/* UK - Corrected position */}
                                  <div className="country-highlight uk" style={{left: '49%', top: '44%'}}>
                                    <div className="hotspot-pulse"></div>
                                    <span className="country-label">UK</span>
                                  </div>

                                  {/* Germany - Corrected position */}
                                  <div className="country-highlight germany" style={{left: '50%', top: '45%'}}>
                                    <div className="hotspot-pulse"></div>
                                    <span className="country-label">Germany</span>
                                  </div>

                                  {/* France - Corrected position */}
                                  {/* <div className="country-highlight france" style={{left: '50%', top: '48%'}}>
                                    <div className="hotspot-pulse"></div>
                                    <span className="country-label">France</span>
                                  </div> */}

                                  {/* Australia - Corrected position */}
                                  <div className="country-highlight australia" style={{left: '78%', top: '80%'}}>
                                    <div className="hotspot-pulse"></div>
                                    <span className="country-label">Australia</span>
                                  </div>

                                  {/* New Zealand - Corrected position */}
                                  <div className="country-highlight new-zealand" style={{left: '82%', top: '90%'}}>
                                    <div className="hotspot-pulse"></div>
                                    <span className="country-label">New Zealand</span>
                                  </div>

                                  {/* Dubai/UAE - Corrected position */}
                                  <div className="country-highlight dubai" style={{left: '53%', top: '50%'}}>
                                    <div className="hotspot-pulse"></div>
                                    <span className="country-label">Italy</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Statistics Section */}
                            <div className="world-map-statistics">
                              <div className="statistics-row">

                                <div className="statistic-item">
                                  <div className="statistic-number">99<span className="statistic-symbol">%</span></div>
                                  <div className="statistic-label">Visa Success Rate</div>
                                </div>

                                <div className="statistic-item">
                                  <div className="statistic-number">22,000<span className="statistic-symbol">+</span></div>
                                  <div className="statistic-label">Students Enrolled</div>
                                </div>

                                <div className="statistic-item">
                                  <div className="statistic-number">30,000<span className="statistic-symbol">+</span></div>
                                  <div className="statistic-label">Students Counselled</div>
                                </div>

                                <div className="statistic-item">
                                  <div className="statistic-number">16<span className="statistic-symbol">+</span></div>
                                  <div className="statistic-label">Years of Experience</div>
                                </div>

                              </div>
                            </div>

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

export default WorldMap;