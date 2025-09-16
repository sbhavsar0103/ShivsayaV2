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
import Team1 from '../../assets/images/about/team/team_1.png';
import Team2 from '../../assets/images/about/team/team_2.png';
import Team3 from '../../assets/images/about/team/team_3.png';

const TeamSection = () => {

    return (
        <>
            {/* Team Section */}
              <section className="team-section">
                <div className="team-container">
                  <div className="team-content">

                    {/* Team Grid */}
                    <div className="team-grid">

                      {/* Team Member 1 - Brijesh Shah */}
                      <div className="team-member-card">
                        <div className="social-icons-top">
                          <a href="#" className="social-icon facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" className="social-icon linkedin">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" className="social-icon instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div className="member-photo">
                          <img src={Team1} alt="Brijesh Shah" />
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">Brijesh Shah</h3>
                          <p className="member-title">CO-FOUNDER & DIRECTOR</p>
                        </div>
                      </div>

                      {/* Team Member 2 - Jay Ruparel */}
                      <div className="team-member-card">
                        <div className="social-icons-top">
                          <a href="#" className="social-icon facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" className="social-icon linkedin">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" className="social-icon instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div className="member-photo">
                          <img src={Team2} alt="Jay Ruparel" />
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">Jay Ruparel</h3>
                          <p className="member-title">CO-FOUNDER & DIRECTOR</p>
                        </div>
                      </div>

                      {/* Team Member 3 - Mary Hiwale */}
                      <div className="team-member-card">
                        <div className="social-icons-top">
                          <a href="#" className="social-icon facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" className="social-icon linkedin">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" className="social-icon instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div className="member-photo">
                          <img src={Team3} alt="Mary Hiwale" />
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">Mary Hiwale</h3>
                          <p className="member-title">PARTNER & DIRECTOR</p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </section>
        </>
    );
};

export default TeamSection;