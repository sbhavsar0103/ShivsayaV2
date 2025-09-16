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
import BannerImage from '../../assets/images/about/about_1.jpg';

const AboutHero = () => {
    // Background image style
    const heroSectionStyle = {
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px'
    };

    return (
        <section
            className="elementor-section elementor-top-section elementor-element elementor-element-3ac27bcb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="3ac27bcb"
            data-element_type="section"
            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
            style={heroSectionStyle}
        >
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2d70d0c" data-id="2d70d0c" data-element_type="column"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-background-overlay"></div>
                  <div className="elementor-element elementor-element-784324e elementor-icon-list--layout-inline elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="784324e" data-element_type="widget" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items elementor-inline-items">
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <a href="index.html">
                            <span className="elementor-icon-list-text">Home</span>
                          </a>
                        </li>
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <span className="elementor-icon-list-icon">
                            <i aria-hidden="true" className="fas fa-chevron-right"></i> </span>
                          <span className="elementor-icon-list-text">About</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-228930ab elementor-widget elementor-widget-heading" data-id="228930ab" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h1 className="elementor-heading-title elementor-size-default">About</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
};

export default AboutHero;