import React from 'react';
import { useEffect } from 'react';
import AboutHero from '../components/AboutPage/AboutHero';
import AboutCompany from '../components/AboutPage/AboutCompany';
import WorldMap from '../components/AboutPage/WorldMap';
import OneStopSolution from '../components/AboutPage/OneStopSolution';
import WhyChooseUs from '../components/AboutPage/WhyChooseUs';
import TeamSection from '../components/AboutPage/TeamSection';
import Destination from '../components/AboutPage/Destination';
import Achivements from '../components/AboutPage/Achivements';
import Award from '../components/AboutPage/Award';
import ContactForm from '../components/AboutPage/ContactForm';
import CallToAction from '../components/AboutPage/CallToAction';
import Footer from '../components/footer';

const About = () => {
  
    useEffect(() => {
    // Initialize services accordion functionality
    const initializeServicesAccordion = () => {
      const serviceHeaders = document.querySelectorAll('.service-header');

      // Remove any existing event listeners first
      serviceHeaders.forEach(header => {
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
      });

      // Get the updated headers after cloning
      const updatedServiceHeaders = document.querySelectorAll('.service-header');

      updatedServiceHeaders.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          const serviceItem = this.parentElement;
          const serviceContent = serviceItem.querySelector('.service-content');
          const isActive = serviceItem.classList.contains('active');


          // Close all other service items
          document.querySelectorAll('.service-item').forEach(item => {
            if (item !== serviceItem) {
              item.classList.remove('active');
              const content = item.querySelector('.service-content');
              if (content) {
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
              }
            }
          });

          // Toggle current service item
          if (isActive) {
            serviceItem.classList.remove('active');
            if (serviceContent) {
              serviceContent.style.maxHeight = '0px';
              serviceContent.style.opacity = '0';
            }
          } else {
            serviceItem.classList.add('active');
            if (serviceContent) {
              serviceContent.style.maxHeight = serviceContent.scrollHeight + 'px';
              serviceContent.style.opacity = '1';
            }
          }
        });
      });

      // Open first service item by default
      const firstServiceItem = document.querySelector('.service-item');
      if (firstServiceItem && !firstServiceItem.classList.contains('active')) {
        firstServiceItem.classList.add('active');
        const firstContent = firstServiceItem.querySelector('.service-content');
        if (firstContent) {
          firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
          firstContent.style.opacity = '1';
        }
      }
    };

    // Initialize accordion after component mounts with multiple attempts
    const timer1 = setTimeout(initializeServicesAccordion, 100);
    const timer2 = setTimeout(initializeServicesAccordion, 500);
    const timer3 = setTimeout(initializeServicesAccordion, 1000);

    // Also initialize on window load as fallback
    const handleWindowLoad = () => {
      initializeServicesAccordion();
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  useEffect(() => {
        // Create or get style element for banner background
        let styleElement = document.getElementById("about-banner-bg");
        if (!styleElement) {
            styleElement = document.createElement("style");
            styleElement.id = "about-banner-bg";
            document.head.appendChild(styleElement);
        }

        // Set banner background image via CSS
        const bannerBgStyle = `
            .elementor-520 .elementor-element.elementor-element-3ac27bcb:not(.elementor-motion-effects-element-type-background),
            .elementor-520 .elementor-element.elementor-element-3ac27bcb > .elementor-motion-effects-container > .elementor-motion-effects-layer {
                background-image: url('https://res.cloudinary.com/dzptyqozu/images/f_auto,q_auto/v1703073287/global-colliance-image/global-colliance-image.webp?_i=AA');
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        `;
        styleElement.innerHTML = bannerBgStyle;

        // Country data for interactive map
        const countryData = {
            canada: {
                name: "Canada",
                description: "Top destination for international students with excellent universities and post-study work opportunities."
            },
            usa: {
                name: "United States",
                description: "World-renowned education system with diverse programs and research opportunities."
            },
            uk: {
                name: "United Kingdom",
                description: "Historic universities offering quality education and rich cultural experiences."
            },
            germany: {
                name: "Germany",
                description: "Leading European destination with strong engineering and technical programs."
            },
            france: {
                name: "France",
                description: "Excellence in arts, culture, and business education with beautiful campuses."
            },
            australia: {
                name: "Australia",
                description: "High-quality education with excellent climate and multicultural environment."
            },
            "new-zealand": {
                name: "New Zealand",
                description: "Innovative education system in stunning natural surroundings."
            },
            // dubai: {
            //     name: "Dubai/UAE",
            //     description: "Growing education hub with international universities and business opportunities."
            // }
        };

        // Add interactive functionality to country highlights
        setTimeout(() => {
            const countryHighlights = document.querySelectorAll('.country-highlight');
            countryHighlights.forEach(highlight => {
                const countryClass = highlight.classList[1]; // Get the country class name
                const countryInfo = countryData[countryClass];

                if (countryInfo) {
                    // Create tooltip element
                    const tooltip = document.createElement('div');
                    tooltip.className = 'country-tooltip';
                    tooltip.innerHTML = `
                        <h4>${countryInfo.name}</h4>
                        <p>${countryInfo.description}</p>
                    `;
                    document.body.appendChild(tooltip);

                    // Add hover events
                    highlight.addEventListener('mouseenter', (e) => {
                        tooltip.style.display = 'block';
                        tooltip.style.left = e.pageX + 10 + 'px';
                        tooltip.style.top = e.pageY - 10 + 'px';
                    });

                    highlight.addEventListener('mousemove', (e) => {
                        tooltip.style.left = e.pageX + 10 + 'px';
                        tooltip.style.top = e.pageY - 10 + 'px';
                    });

                    highlight.addEventListener('mouseleave', () => {
                        tooltip.style.display = 'none';
                    });
                }
            });
        }, 100);

        // Original lazy load background styles
        const rocket_pairs = [
            {
                selector: ".elementor-53 .elementor-element.elementor-element-4ff32c6c:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap",
                style: ":root{--wpr-bg-174803aa-5cc8-4908-abef-2ec6c1617bf0: url('https://res.cloudinary.com/dzptyqozu/images/f_auto,q_auto/v1703073287/global-colliance-image/global-colliance-image.webp?_i=AA');}",
                hash: "174803aa-5cc8-4908-abef-2ec6c1617bf0"
            },
            {
                selector: ".elementor-53 .elementor-element.elementor-element-388ba073:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap",
                style: ":root{--wpr-bg-95e8ba7a-ac62-4857-9844-0ae4e358a3ee: url('https://res.cloudinary.com/dzptyqozu/images/f_auto,q_auto/v1703313358/giving-passport-back-to-woman/giving-passport-back-to-woman.jpg?_i=AA');}",
                hash: "95e8ba7a-ac62-4857-9844-0ae4e358a3ee"
            }
        ];

        const lazyLoadStyleElement = document.getElementById("wpr-lazyload-bg");
        if (lazyLoadStyleElement && rocket_pairs.length > 0) {
            rocket_pairs.forEach(pair => {
                lazyLoadStyleElement.innerHTML += pair.style;
            });
        }

        // Cleanup function to remove the style element when component unmounts
        return () => {
            const bannerStyleElement = document.getElementById("about-banner-bg");
            if (bannerStyleElement) {
                bannerStyleElement.remove();
            }

            // Remove tooltips
            const tooltips = document.querySelectorAll('.country-tooltip');
            tooltips.forEach(tooltip => tooltip.remove());
        };

    }, []);

  useEffect(() => {
    // Awards Carousel Functionality
    let currentPage = 0;
    const slides = document.querySelectorAll('.award-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const leftArrow = document.querySelector('.carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-arrow-right');
    const track = document.querySelector('.carousel-track');

    if (!slides.length || !dots.length || !track) return;

    const slidesPerPage = 3;
    const totalPages = Math.ceil(slides.length / slidesPerPage);

    const updateCarousel = () => {
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage);
      });

      // Update track position - move by 100% for each page (3 slides)
      const translateX = -currentPage * 100;
      track.style.transform = `translateX(${translateX}%)`;
    };

    const nextPage = () => {
      currentPage = (currentPage + 1) % totalPages;
      updateCarousel();
    };

    const prevPage = () => {
      currentPage = (currentPage - 1 + totalPages) % totalPages;
      updateCarousel();
    };

    const goToPage = (index) => {
      currentPage = index;
      updateCarousel();
    };

    // Event listeners
    if (rightArrow) rightArrow.addEventListener('click', nextPage);
    if (leftArrow) leftArrow.addEventListener('click', prevPage);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToPage(index));
    });

    // Initialize carousel
    updateCarousel();

    // Cleanup function
    return () => {
      if (rightArrow) rightArrow.removeEventListener('click', nextPage);
      if (leftArrow) leftArrow.removeEventListener('click', prevPage);
      dots.forEach((dot, index) => {
        dot.removeEventListener('click', () => goToPage(index));
      });
    };
  }, []);

  return (
    <body class="wp-singular page-template page-template-elementor_header_footer page page-id-520 wp-embed-responsive wp-theme-oceanwp wp-child-theme-oceanwp-child-theme-master metaslider-plugin jkit-color-scheme oceanwp-theme dropdown-mobile default-breakpoint has-sidebar content-right-sidebar page-header-disabled loftloader-lite-enabled elementor-default elementor-template-full-width elementor-kit-13 elementor-page elementor-page-520"
      itemscope="itemscope" itemtype="https://schema.org/WebPage">
      <div id="outer-wrap" class="site clr">
        <div id="wrap" class="clr">
          <main id="main" class="site-main clr" role="main">
            <div data-elementor-type="wp-page" data-elementor-id="520" class="elementor elementor-520">
              <AboutHero />
              <AboutCompany />
              <WorldMap />
              <OneStopSolution />
              <WhyChooseUs />
              <Destination />
              <Achivements />
              <Award />
              <CallToAction />
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </body>
  );
};

export default About;