import React from 'react';
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
import '../../assets/styles/coaching.css';
import coaching_1 from '../../assets/images/coaching/coaching_1.png';

const CoachingBanner = () => {

    return (
        <>
        {/* IELTS Coaching by Leader Section - Exact Match to Uploaded Image */}
        <section className="cp-leader-section">
          <div className="cp-container">
            <div className="cp-leader-wrapper">

              {/* Left Content - Text Content */}
              <div className="cp-leader-content">
                <h1 className="cp-leader-title">
                  IELTS COACHING BY <span className="cp-highlight">THE LEADER</span>
                </h1>
                <p className="cp-leader-description">
                  Get your desire score with expert coaching
                </p>
                <div className="cp-cta">
                  <button className="cp-enroll-btn">
                    ENROLL NOW
                  </button>
                </div>
              </div>

              {/* Right Content - IELTS Illustration */}
              <div className="cp-leader-visual">
                <div className="cp-illustration-container">
                  <img
                    src={coaching_1}
                    alt="IELTS Coaching Illustration - Laptop with IELTS checklist, books, and UK flag"
                    className="cp-leader-image"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    );
};

export default CoachingBanner;