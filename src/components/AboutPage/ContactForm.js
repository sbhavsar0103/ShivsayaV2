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

const ContactForm = () => {

    return (
        <>
            {/* Contact Form Section */}
              <section className="contact-form-section">
                <div className="contact-form-container">
                  <div className="contact-form-content">
                    
                    {/* Form Title */}
                    <div className="form-header">
                      <h2 className="form-title">Discuss Your Visa Needs With Us</h2>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form">
                      <div className="form-row">
                        
                        {/* Left Column */}
                        <div className="form-column">
                          <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                              type="text" 
                              id="firstName" 
                              name="firstName" 
                              placeholder="Anderson"
                              className="form-input"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input 
                              type="tel" 
                              id="mobileNumber" 
                              name="mobileNumber" 
                              placeholder=""
                              className="form-input"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="city">City</label>
                            <select id="city" name="city" className="form-select">
                              <option value="">--Please choose an option--</option>
                              <option value="mumbai">Mumbai</option>
                              <option value="delhi">Delhi</option>
                              <option value="bangalore">Bangalore</option>
                              <option value="chennai">Chennai</option>
                              <option value="kolkata">Kolkata</option>
                              <option value="hyderabad">Hyderabad</option>
                              <option value="pune">Pune</option>
                              <option value="ahmedabad">Ahmedabad</option>
                              <option value="vadodara">Vadodara</option>
                              <option value="surat">Surat</option>
                              <option value="rajkot">Rajkot</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="comment">Write your comment here</label>
                            <textarea 
                              id="comment" 
                              name="comment" 
                              rows="4"
                              placeholder=""
                              className="form-textarea"
                            ></textarea>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="form-column">
                          <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                              type="text" 
                              id="lastName" 
                              name="lastName" 
                              placeholder="Miko"
                              className="form-input"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              placeholder=""
                              className="form-input"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="destination">Preferred Destination</label>
                            <select id="destination" name="destination" className="form-select">
                              <option value="">--Please choose an option--</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                              <option value="uk">UK</option>
                              <option value="australia">Australia</option>
                              <option value="new-zealand">New Zealand</option>
                              <option value="germany">Germany</option>
                              <option value="france">France</option>
                              <option value="dubai">Dubai/UAE</option>
                            </select>
                          </div>
                        </div>

                      </div>

                      {/* Submit Button */}
                      <div className="form-submit">
                        <button type="submit" className="submit-btn">
                          SUBMIT NOW
                        </button>
                      </div>

                    </form>

                  </div>
                </div>
              </section>
        </>
    );
};

export default ContactForm;