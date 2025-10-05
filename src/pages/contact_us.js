import React from 'react';
import contactUs from '../../src/assets/images/contact_us.png';
import Footer from '../components/footer';

const ContactPage = () => {
    return (
      <section>
        <div className="contact-form-section" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <form method="post" className="contact-form">
                  <div className="contact-area-wrapper">
                    <div className="section-title mb-50">
                      <h2>Discover the possibility . . .</h2>
                      <h4 className="text-green">
                        Drop us a line & one of our experts will get in touch with you shortly
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="contact-from-input mb-20">
                        <input type="text" placeholder="Name *" name="name" required />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-from-input mb-20">
                        <input type="number" id="phone" placeholder="Phone *" name="phone"
                          pattern="[6-9]{1}[0-9]{9}"
                          title="Phone number with 7-9 and remaining 9 digits with 0-9"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-from-input mb-20">
                        <input type="email" id="email" placeholder="Email *" name="email" required />
                      </div>
                    </div>
    
                    <div className="col-md-12 mb-4">
                      <label className="mb-3">Which coaching are you planning to attend?</label>
                      <div className="checkbox-group">
                        <div className="radio-toolbar">
                          <input type="checkbox" value="IELTS" name="coaching[]" id="coaching1" />
                          <label htmlFor="coaching1">
                            <img src="assets/img/webp/main/ielts-form2.webp" alt="" /> IELTS
                          </label>
                        </div>
                        <div className="radio-toolbar">
                          <input type="checkbox" value="PTE" name="coaching[]" id="coaching2" />
                          <label htmlFor="coaching2">
                            <img src="assets/img/webp/main/pte-form.webp" alt="" /> PTE
                          </label>
                        </div>
                      </div>
                    </div>
    
                    <div className="col-md-12 mb-4">
                      <label className="mb-3">Which country are you planning to study in?</label>
                      <div className="checkbox-group">
                        <div className="radio-toolbar">
                          <input type="checkbox" value="USA" name="country[]" id="country5" />
                          <label htmlFor="country5">
                            <img src="assets/img/webp/flag/usa-flag.webp" alt="" /> USA
                          </label>
                        </div>
                        <div className="radio-toolbar">
                          <input type="checkbox" value="Canada" name="country[]" id="country4" />
                          <label htmlFor="country4">
                            <img src="assets/img/webp/flag/canada.webp" alt="" /> Canada
                          </label>
                          <input type="checkbox" value="Canada" name="country[]" id="country4" />
                          <label htmlFor="country4">
                            <img src="assets/img/webp/flag/canada.webp" alt="" /> Russia
                          </label>
                          <input type="checkbox" value="Canada" name="country[]" id="country4" />
                          <label htmlFor="country4">
                            <img src="assets/img/webp/flag/canada.webp" alt="" /> UK
                          </label>
                        </div>
                      </div>
                    </div>
    
                    <div className="col-xl-12 mt-2">
                      <div className="contact-from-input mb-15">
                        <textarea placeholder="Message *" name="message"></textarea>
                      </div>
                    </div>
    
                    <div className="col-xl-12 mb-2">
                      <div className="course-sidebar-list d-flex">
                        <input type="checkbox" name="tncbox" required />
                        <label>
                          <small>By Submitting the form, I agree to the <a href="privacy-policy">Privacy Policy</a> of Visazone</small>
                        </label>
                      </div>
                    </div>
    
                    <div className="col-xl-12 col-md-12">
                      <button type="submit" className="read-more w-100">Submit &nbsp;<i className="fad fa-paper-plane"></i></button>
                    </div>
    
                  </div>
                </form>
              </div>
    
              <div className="col-xl-6 col-lg-6 col-md-8 my-auto">
                <div className="sidebar-widget-wrapper">
                  <div className="support-contact0">
                    <img style={{ width: "100%" }} src={contactUs} alt="contact" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
  );
}
export default ContactPage;