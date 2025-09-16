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

const OneStopSolution = () => {

    // Direct click handler function
      const handleServiceClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    
        const header = event.currentTarget;
        const serviceItem = header.parentElement;
        const serviceContent = serviceItem.querySelector('.service-content');
        const isActive = serviceItem.classList.contains('active');
    
        console.log('Direct click handler triggered:', serviceItem);
    
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
      };

    return (
        <>
            {/* One-Stop Solution Services Section */}
              <section className="elementor-section elementor-top-section elementor-element one-stop-services-section elementor-section-boxed elementor-section-height-default"
                data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">

                      {/* Services Content Container */}
                      <div className="elementor-element elementor-widget one-stop-services-container" data-element_type="widget">
                        <div className="elementor-widget-container">

                          {/* Section Header */}
                          <div className="services-header">
                            <div className="services-badge">
                              <i className="fas fa-circle"></i>
                              <span>OUR SERVICES</span>
                            </div>
                            <p className="services-main-title">One-Stop Solution for All Your Study Abroad Queries</p>
                            <p className="services-description">
                              Our services consist of counseling, course guidance, university selection, and much more. We meet your visa requirements in the most hassle-free manner. Our technically qualified professionals are always ready to assist you and clear your doubts at the time you prefer.
                            </p>
                          </div>

                          {/* Services Accordion */}
                          <div className="services-accordion">

                            {/* Career Counseling */}
                            <div className="service-item">
                              <div className="service-header" onClick={handleServiceClick}>
                                <i className="fas fa-chevron-right service-icon"></i>
                                <span className="service-title">Career Counseling</span>
                              </div>
                              <div className="service-content">
                                <p>
                                  Shivasya study abroad consultancy takes pride in providing personalized and comprehensive counseling services that cater to your unique needs.
                                </p>
                                <p>
                                  Our dedicated, experienced team of study abroad consultants will guide you through every step of the study abroad process. To make your study abroad experience smooth and stress-free, we offer one-on-one support, providing valuable insights and information to help you make informed decisions regarding your course selection, college/university choice, budget, and the right country for you.
                                </p>
                              </div>
                            </div>

                            {/* Course, Country, and College/University Selection */}
                            <div className="service-item">
                              <div className="service-header" onClick={handleServiceClick}>
                                <i className="fas fa-chevron-right service-icon"></i>
                                <span className="service-title">Course, Country, and College/University Selection</span>
                              </div>
                              <div className="service-content">
                                <p>
                                  Whether you are interested in computer science, fashion designing, AI technology, psychology, business school, mechanical engineering, law, or any other program, we have 100+ programs to help you choose from. Our counselors will get in touch with you to understand your academic interests, future prospects, career goals, and personal preferences. Shivasya aims to help you discover courses that match your passion and long-term goals by providing detailed information about diverse programs in various fields.
                                </p>
                                <p>
                                  The choice of country and educational institute plays an important role in your study abroad journey. Thus, Shivasya has collaborated with the best and highest-ranking colleges and universities across Canada, the UK, the USA, Australia, New Zealand, Germany, France, and Dubai. Our team will assist you in exploring options that match your course preferences, considering factors such as reputation, faculty expertise, facilities, and overall educational experience. We ensure that you comprehensively understand each institution to make an informed decision.
                                </p>
                              </div>
                            </div>

                            {/* Coaching and Clearing Prerequisites */}
                            <div className="service-item">
                              <div className="service-header" onClick={handleServiceClick}>
                                <i className="fas fa-chevron-right service-icon"></i>
                                <span className="service-title">Coaching and Clearing Prerequisites</span>
                              </div>
                              <div className="service-content">
                                <p>
                                  Every college or university has strict requirements for students seeking admission into their institutes, including demonstrating proficiency in the English language. In countries where English is not the first language, such as India, students who wish to study abroad are required to pass internationally recognized English language tests such as IELTS, TOEFL, or PTE.
                                </p>
                                <p>
                                  At Shivasya, we offer IELTS, TOEFL, and PTE exam preparation services for students aspiring to study abroad. We believe in a personalized approach when it comes to teaching, as well as ensuring small batch sizes to give personalized attention to our students.
                                </p>
                                <p>
                                  Over the years, we have successfully trained more than 15,000 students, encouraging them to excel in these exams and achieve exceptional scores.
                                </p>
                              </div>
                            </div>

                            {/* Complete Support: From Application to Visa Process */}
                            <div className="service-item">
                              <div className="service-header" onClick={handleServiceClick}>
                                <i className="fas fa-chevron-right service-icon"></i>
                                <span className="service-title">Complete Support: From Application to Visa Process</span>
                              </div>
                              <div className="service-content">
                                <p>
                                  The initial stages of studying abroad involve selecting a program, university/college, and country and preparing for the study abroad exam.
                                </p>
                                <p>
                                  One essential document for studying abroad is the Statement of Purpose (SOP), an essay that explains the student’s purpose for choosing a specific program, university or college, and country while demonstrating their commitment to utilizing acquired skills and contributing to their future. A well-crafted SOP is crucial and can significantly impact one’s career prospects.
                                </p>
                                <p>
                                  After receiving a confirmation letter from the college or university, the next crucial step is filing for a student visa, which requires thorough paperwork, including document preparation, form filling, and providing detailed information about past academic and work history, financial details, and medical information.
                                </p>
                                <p>
                                  At Shivasya, we pride ourselves on providing end-to-end support throughout the study abroad application process, including visa processing. Our dedicated team ensures that all documents are completed accurately and submitted before the deadline.
                                </p>
                              </div>
                            </div>

                            {/* Financial Aid */}
                            <div className="service-item">
                              <div className="service-header" onClick={handleServiceClick}>
                                <i className="fas fa-chevron-right service-icon"></i>
                                <span className="service-title">Financial Aid</span>
                              </div>
                              <div className="service-content">
                                <p>
                                  Our team will be helping you explore various financial options, such as merit-based scholarships, need-based grants, or education loans at the best interest rates with flexible payment methods. Support will be provided throughout the process to maximize your chances of securing financial assistance.
                                </p>
                              </div>
                            </div>

                            {/* Pre-Departure and Post-Landing Services */}
                            <div className="service-item">
                              <div className="service-header" onClick={handleServiceClick}>
                                <i className="fas fa-chevron-right service-icon"></i>
                                <span className="service-title">Pre-Departure and Post-Landing Services</span>
                              </div>
                              <div className="service-content">
                                <p>
                                  We believe that the journey towards studying abroad goes beyond admission alone. Our services extend to helping you seamlessly transition into your new academic environment. 
                                </p>
                                <p>
                                  From pre-departure assistance, including guidance on travel arrangements, visa processes, and accommodation options, to post-landing support that helps you settle into your new surroundings, we’re committed to ensuring a smooth and successful start to your international education. 
                                </p>
                                <p>
                                  We provide ample resources, orientation programs, and connections to local networks, helping you adapt to and thrive in your new academic and cultural setting.
                                </p>
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

export default OneStopSolution;