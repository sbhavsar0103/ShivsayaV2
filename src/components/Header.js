import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo/shivasya_PNG.png';
import '../assets/styles/header-fixes.css';
import usaFlag from '../assets/images/flags/usa.png';
import canadaFlag from '../assets/images/flags/canada.png';
import australiaFlag from '../assets/images/flags/australia.png';
import ukFlag from '../assets/images/flags/united-kingdom.png';
import europeFlag from '../assets/images/flags/europe.png';
import nzFlag from '../assets/images/flags/new-zealand.png';

const Header = () => {
  const countries = [
    { name: 'USA', flag: usaFlag, link: "/shivasya-us" },
    { name: 'Canada', flag: canadaFlag, link: '/shivasya-canada' },
    { name: 'Australia', flag: australiaFlag, link: '/shivasya-austrila' },
    { name: 'New Zealand', flag: nzFlag, link: '/study-abroad/newzealand' },
    { name: 'UK', flag: ukFlag, link: '/study-abroad/uk' },
    { name: 'Europe', flag: europeFlag, link: '/study-abroad/europe' },
  ];
  const location = useLocation();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
  };

  useEffect(() => {
    setIsMobileMenuVisible(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuVisible) {
      document.body.classList.add('mobile-menu-visible');
    } else {
      document.body.classList.remove('mobile-menu-visible');
    }

    return () => {
      document.body.classList.remove('mobile-menu-visible');
    };
  }, [isMobileMenuVisible]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMobileMenuVisible) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuVisible) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuVisible]);

  return (
    <header className="main-header header-style-one">
      <div className="header-lower">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link to="/"><img src={logo} alt="Shivasya Logo" title="Shivasya-logo" /></Link>
            </div>
          </div>

          <div className="nav-outer">
            <nav className="nav main-menu">
              <ul className="navigation">
                <li className={isActive('/') ? 'current' : ''}><Link to="/"><b>Home</b></Link></li>
                <li className={isActive('/about') ? 'current' : ''}><Link to="/about"><b>About Shivasya</b></Link></li>
                <li className={isActive('/services') ? 'current' : ''}><Link to="/services"><b>Our Services</b></Link></li>
                <li className={isActive('/coaching') ? 'current' : ''}><Link to="/coaching"><b>Coaching</b></Link></li>
                <li className={isActive('/contact') ? 'current' : ''}><Link to="/contact"><b>Contact Us</b></Link></li>
                <li className="dropdown">
                  <span className="dropdown-toggle"><b>STUDY ABROAD</b></span>
                  <ul className="dropdown-menu">
                    {countries.map((c) => (
                      <li key={c.name}>
                        <Link to={c.link}>
                          <img src={c.flag} alt={c.name} className="flag-icon" /> {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <Link to="/work-abroad" className="work-abroad-btn">
                  <span className="btn-title">Work Abroad</span>
                </Link>
              </ul>
            </nav>

            <div className="outer-box">
              <Link to="/contact" className="theme-btn btn-style-one bg-theme-color3">
                <span className="btn-title">Sign up for a FREE CONSULTATION</span>
              </Link>
              <div
                className="mobile-nav-toggler"
                onClick={toggleMobileMenu}
                role="button"
                tabIndex={0}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuVisible}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMobileMenu();
                  }
                }}
              >
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={closeMobileMenu}></div>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={logo} alt="" title="" />
              </Link>
            </div>
            <div
              className="close-btn"
              onClick={closeMobileMenu}
              role="button"
              tabIndex={0}
              aria-label="Close mobile menu"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  closeMobileMenu();
                }
              }}
            >
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix">
            <li className={isActive('/') ? 'current' : ''}>
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className={isActive('/about') ? 'current' : ''}>
              <Link to="/about" onClick={closeMobileMenu}>About Shivasya</Link>
            </li>
            <li className={isActive('/services') ? 'current' : ''}>
              <Link to="/services" onClick={closeMobileMenu}>Our Services</Link>
            </li>
            <li className={isActive('/coaching') ? 'current' : ''}>
              <Link to="/coaching" onClick={closeMobileMenu}>Coaching</Link>
            </li>
            <li className={isActive('/contact') ? 'current' : ''}>
              <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>

          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <a href="tel:9004997740">+91-9004997740</a>
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </nav>
      </div>

      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link to="/"><img src={logo} alt="" title="" /></Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                  </ul>
                </div>
              </nav>
              <div
                className="mobile-nav-toggler"
                onClick={toggleMobileMenu}
                role="button"
                tabIndex={0}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuVisible}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMobileMenu();
                  }
                }}
              >
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;