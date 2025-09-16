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

const AboutCompany = () => {

    return (
        <>
            {/* About Company Section */}
              <section className="elementor-section elementor-top-section elementor-element about-company-section elementor-section-boxed elementor-section-height-default"
                data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">

                      {/* About Company Label */}
                      <div className="elementor-element elementor-widget elementor-widget-heading about-company-label" data-element_type="widget">
                        <div className="elementor-widget-container">
                          <div className="about-company-tag">
                            <span className="about-company-text">ABOUT COMPANY</span>
                          </div>
                        </div>
                      </div>

                      {/* Main Heading */}
                      <div className="elementor-element elementor-widget elementor-widget-heading about-main-heading" data-element_type="widget">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title">One-Stop Solution For All Your Visa Needs</h2>
                        </div>
                      </div>

                      {/* Description Text */}
                      <div className="elementor-element elementor-widget elementor-widget-text-editor about-description" data-element_type="widget">
                        <div className="elementor-widget-container">
                          <p>Shivasya is a leading study abroad consultancy in Visa providing expert guidance and to pursue services for individuals seeking opportunities in overseas education. With over a decade of experience, Shivasya has established itself as a trusted name among overseas education consultants by helping committed to achieving competitive and excellence to aspiring students.</p>
                        </div>
                      </div>

                      {/* Vision and Mission Cards Container */}
                      <div className="elementor-element elementor-widget vision-mission-container" data-element_type="widget">
                        <div className="elementor-widget-container">
                          <div className="vision-mission-row">

                            {/* Our Vision Card */}
                            <div className="vision-mission-card vision-card">
                              <div className="card-header">
                                <h3 className="card-title">Our Vision</h3>
                              </div>
                              <div className="card-content">
                                <p>At Shivasya, our vision is to create a world where every dreamer has the opportunity to flourish their horizons and gain abroad exposure through foreign education. We believe studying abroad enhances one's academic and professional prospects and promotes personal growth and cultural understanding.</p>
                                <p>We strongly believe in a future where every student has the opportunity to participate in unique study abroad programs around the world, students have access to world-class education and can be gained toward making a positive difference in our world.</p>
                              </div>
                            </div>

                            {/* Our Mission Card */}
                            <div className="vision-mission-card mission-card">
                              <div className="card-header">
                                <h3 className="card-title">Our Mission</h3>
                              </div>
                              <div className="card-content">
                                <p>Our mission at Shivasya is to provide students with exceptional study abroad experiences that inspire personal growth, academic achievement, and cross-cultural understanding.</p>
                                <p>Shivasya aims to provide students with diverse programs that help them master their skills and encourage growth, communication, and understanding. In addition, our mission is to offer our students exceptional study abroad knowledge with our administrative that interacts or budget.</p>
                                <p>To achieve this, Shivasya has committed to collaborating with top-notch colleges and universities in Canada, the UK, the USA, Australia, New Zealand, Germany, France, and Dubai. Our goal is to ensure the best education for our students, fostering Shivasya leaders who can drive meaningful impact in the world.</p>
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

export default AboutCompany;