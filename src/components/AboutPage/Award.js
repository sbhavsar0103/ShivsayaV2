import React, { useState, useRef, useEffect } from 'react';
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
import certificate_1 from '../../assets/images/about/certificate/certificate_1.jpg';
import certificate_2 from '../../assets/images/about/certificate/certificate_2.jpg';
import certificate_3 from '../../assets/images/about/certificate/certificate_3.jpg';
import certificate_4 from '../../assets/images/about/certificate/certificate_4.jpg';
import certificate_5 from '../../assets/images/about/certificate/certificate_5.jpg';
import certificate_6 from '../../assets/images/about/certificate/certificate_6.jpg';
import certificate_7 from '../../assets/images/about/certificate/certificate_7.jpg';
import certificate_8 from '../../assets/images/about/certificate/certificate_8.jpg';
import certificate_9 from '../../assets/images/about/certificate/certificate_9.jpg';

const Award = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const trackRef = useRef(null);

    // Total number of awards
    const totalSlides = 9; // Updated to match actual number of certificates

    // Check if mobile view
    useEffect(() => {
        const checkMobile = () => {
            const isMobileView = window.innerWidth <= 768;
            setIsMobile(isMobileView);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Number of slides visible at once (responsive)
    const slidesPerView = isMobile ? 1 : 3;
    // Maximum slide index we can scroll to (for single-slide progression)
    const maxSlide = isMobile ? totalSlides - 1 : totalSlides - slidesPerView;

    // Handle smooth scrolling
    const scrollToSlide = (slideIndex) => {
        if (isTransitioning || slideIndex < 0 || slideIndex > maxSlide) return;

        setIsTransitioning(true);
        setCurrentSlide(slideIndex);

        if (trackRef.current) {
            // Both mobile and desktop: Single slide progression
            // Each slide is 11.11% of track width (100% / 9 slides = 11.11%)
            // Mobile: 11.11% of 900% track = 100% viewport per slide
            // Desktop: 11.11% of 300% track = 33.33% viewport per slide (showing 3 at once)
            const slideWidth = 100 / totalSlides; // 11.11%
            const translateX = -(slideIndex * slideWidth);

            trackRef.current.style.transform = `translateX(${translateX}%)`;
        }

        // Reset transition flag after animation completes
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match CSS transition duration
    };

    // Handle left arrow click
    const handlePrevious = () => {
        const newSlide = Math.max(0, currentSlide - 1);
        scrollToSlide(newSlide);
    };

    // Handle right arrow click
    const handleNext = () => {
        const newSlide = Math.min(maxSlide, currentSlide + 1);
        scrollToSlide(newSlide);
    };

    // Handle dot navigation
    const handleDotClick = (dotIndex) => {
        if (isMobile) {
            // Mobile: Direct slide navigation (dot = certificate)
            scrollToSlide(dotIndex);
        } else {
            // Desktop: Dot represents a group of 3 certificates
            // Dot 0 = certificates 0-2, Dot 1 = certificates 3-5, Dot 2 = certificates 6-8
            const slideIndex = dotIndex * 3;
            scrollToSlide(Math.min(slideIndex, maxSlide));
        }
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrevious();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isTransitioning) return;

            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    handlePrevious();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    handleNext();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, isTransitioning]);

    // Auto-play functionality (optional) - disabled during manual interaction
    useEffect(() => {
        if (isTransitioning || isMobile) return; // Don't auto-play on mobile or during manual transitions

        const autoPlayInterval = setInterval(() => {
            if (!isTransitioning) {
                setCurrentSlide(prev => {
                    const nextSlide = prev >= maxSlide ? 0 : prev + 1;
                    scrollToSlide(nextSlide);
                    return nextSlide;
                });
            }
        }, 6000); // Change slide every 6 seconds

        return () => clearInterval(autoPlayInterval);
    }, [maxSlide, isTransitioning, isMobile]);

    return (
        <>
            {/* Awards & Recognition Section */}
              <section className="awards-section">
                <div className="awards-container">
                  <div className="awards-content">

                    {/* Section Title */}
                    <div className="awards-header">
                      <h2 className="awards-title">Awards & Recognition</h2>
                    </div>

                    {/* Awards Carousel */}
                    <div className="awards-carousel">
                      <div className="carousel-container">

                        {/* Left Arrow */}
                        <p
                          className="carousel-arrow carousel-arrow-left"
                          onClick={handlePrevious}
                          disabled={currentSlide === 0 || isTransitioning}
                          aria-label="Previous award"
                        >
                          <i className="fas fa-arrow-left"></i>
                        </p>

                        {/* Carousel Content */}
                        <div
                          className="carousel-content"
                          onTouchStart={handleTouchStart}
                          onTouchMove={handleTouchMove}
                          onTouchEnd={handleTouchEnd}
                        >
                          <div className="carousel-track" ref={trackRef}>

                            {/* Award 1 - US Agent Training Course (USATC) */}
                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_1} alt="US Agent Training Course (USATC) Certificate - Jay Ruparel" />
                              </div>
                            </div>

                            {/* Award 2 - Canada Course for Education Agents (CCEA) */}
                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_2} alt="Canada Course for Education Agents (CCEA) Certificate - Jay Ruparel" />
                              </div>
                            </div>

                            {/* Award 3 - Certificate of Representation */}
                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_3} alt="Certificate of Representation - Shivasya Compliance" />
                              </div>
                            </div>

                            {/* Award 4 - CodeCore College Certificate */}
                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_4} alt="CodeCore College Certificate" />
                              </div>
                            </div>

                            {/* Award 5 - ICEF Agency Status */}
                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_5} alt="ICEF Agency Status Certificate" />
                              </div>
                            </div>

                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_6} alt="ICEF Agency Status Certificate" />
                              </div>
                            </div>

                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_7} alt="ICEF Agency Status Certificate" />
                              </div>
                            </div>

                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_8} alt="ICEF Agency Status Certificate" />
                              </div>
                            </div>

                            <div className="award-slide">
                              <div className="award-certificate">
                                <img src={certificate_9} alt="ICEF Agency Status Certificate" />
                              </div>
                            </div>

                          </div>
                        </div>

                        {/* Right Arrow */}
                        <p
                          className="carousel-arrow carousel-arrow-right"
                          onClick={handleNext}
                          disabled={currentSlide >= maxSlide || isTransitioning}
                          aria-label="Next award"
                        >
                          <i className="fas fa-arrow-right"></i>
                        </p>

                      </div>

                      {/* Carousel Dots */}
                      <div className="carousel-dots">
                        {isMobile ? (
                          // Mobile: Show dots for each individual certificate
                          Array.from({ length: totalSlides }, (_, index) => (
                            <p
                              key={index}
                              className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                              onClick={() => handleDotClick(index)}
                              aria-label={`Go to certificate ${index + 1}`}
                            ></p>
                          ))
                        ) : (
                          // Desktop: Show 3 dots for groups of certificates
                          Array.from({ length: 3 }, (_, index) => {
                            // Calculate if this dot group is active
                            const groupStart = index * 3;
                            const groupEnd = groupStart + 2;
                            const isActive = currentSlide >= groupStart && currentSlide <= groupEnd;

                            return (
                              <p
                                key={index}
                                className={`carousel-dot ${isActive ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to certificates ${groupStart + 1}-${Math.min(groupEnd + 1, totalSlides)}`}
                              ></p>
                            );
                          })
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              </section>
        </>
    );
};

export default Award;