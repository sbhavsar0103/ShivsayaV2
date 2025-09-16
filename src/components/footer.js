import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/shivasya_PNG.png';
import '../assets/styles/footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="auto-container">
          <div className="footer-widgets">
            <div className="row">

              {/* Company Info Section */}
              <div className="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget company-widget">
                  <div className="widget-content">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src={logo} alt="Shivasya Education & Immigration Services" />
                      </Link>
                    </div>
                    <div className="company-info">
                      <div className="address-info">
                        <p>502 507 508 Addor Aspire University to Panjrapole Road,</p>
                        <p>Opp. Gulbai Tekra BRTS Bus Stand,</p>
                        <p>Nr. Jhanviee Restaurant, Navrangpura</p>
                        <p>Ahmedabad 380 009 Gujarat INDIA</p>
                      </div>
                      <div className="contact-info">
                        <div className="phone-info">
                          <i className="fas fa-phone"></i>
                          <a href="tel:+917486860001">+91 74 8686 0001</a>
                        </div>
                        <div className="email-info">
                          <i className="fas fa-envelope"></i>
                          <a href="mailto:inquiry@visazone.in">inquiry@visazone.in</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="footer-column col-xl-2 col-lg-2 col-md-6 col-sm-12">
                <div className="footer-widget links-widget">
                  <h4 className="widget-title">Quick Links</h4>
                  <div className="widget-content">
                    <ul className="footer-links">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/about">IELTS</Link></li>
                      <li><Link to="/about">PTE</Link></li>
                      <li><Link to="/about">Blog</Link></li>
                      <li><Link to="/about">Gallery</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/contact">Appointment</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Study Destination Section */}
              <div className="footer-column col-xl-2 col-lg-2 col-md-6 col-sm-12">
                <div className="footer-widget links-widget">
                  <h4 className="widget-title">Study Destination</h4>
                  <div className="widget-content">
                    <ul className="footer-links">
                      <li><Link to="/destinations/usa">USA</Link></li>
                      <li><Link to="/destinations/canada">Canada</Link></li>
                      <li><Link to="/destinations/australia">Australia</Link></li>
                      <li><Link to="/destinations/new-zealand">New Zealand</Link></li>
                      <li><Link to="/destinations/uk">UK</Link></li>
                      <li><Link to="/destinations/ireland">Ireland</Link></li>
                      <li><Link to="/destinations/europe">Europe</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information with Map */}
              <div className="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget contact-widget">
                  <h4 className="widget-title">Contact Information</h4>
                  <div className="widget-content">
                    <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9234567890123!2d72.5647890123456!3d23.0358901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f123456789%3A0x123456789abcdef0!2sVisa%20Zone%20Education%20%26%20Immigration%20Services!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shivasya Education Location"
                      ></iframe>
                    </div>
                    <div className="social-links">
                      <a href="https://facebook.com/visazoneeducation" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://instagram.com/visazoneeducation" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://twitter.com/visazoneeducation" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://linkedin.com/company/visazoneeducation" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://youtube.com/visazoneeducation" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              <p>Copyright © 2009 - 2024 <Link to="/">Shivasya Education & Immigration Services Pvt. Ltd.</Link> All Rights Reserved.</p>
            </div>
            <div className="footer-nav">
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/disclaimer">Disclaimer</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/copyright">Copyright Notice</Link></li>
                <li><Link to="/gdpr">GDPR</Link></li>
                <li><Link to="/monetary-policy">Monetary Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </a>
    </footer>
  );
};

export default Footer;