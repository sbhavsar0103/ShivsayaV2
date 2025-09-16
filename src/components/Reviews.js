import React from 'react';

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        {/* Section Header */}
        <div className="reviews-header">
          <h2 className="reviews-title">
            WE'RE THRILLED TO BE PART OF OUR STUDENT'S SUCCESSES
          </h2>
          <p className="reviews-subtitle">(DON'T TAKE OUR WORD FOR IT!)</p>
        </div>

        {/* Reviews Content with Vertical Masonry Layout */}
        <div className="reviews-content">
          {/* Google Rating Card - Top Left */}
          <div className="google-rating-section">
            <div className="google-rating-card">
              <div className="rating-number">4.9</div>
              <div className="rating-stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
              </div>
              <h3 className="rating-title">Overall Rating</h3>
              <p className="rating-subtitle">SHIVASYA</p>
            </div>
          </div>

          {/* Vertical Scrollable Masonry Grid */}
          <div className="reviews-vertical-container">
            <div className="reviews-masonry-columns">
              {/* Column 1 */}
              <div className="masonry-column">
                {/* Review Card 2 - Medium */}
                <div className="review-card card-medium">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">K</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Kushal Joshi</h4>
                      {/* <p className="review-date">January 10, 2024 03:15 PM</p> */}
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    It was a great experience studying at Shivasya. The faculty here is amazing. I was thoroughly mentored by my faculty, Mr. Kartik Soni, not only for IELTS; he helped me in many aspects.
                  </p>
                  {/* <a href="#" className="view-google-link">View on Google</a> */}
                </div>

                {/* Review Card 2 - Medium */}
                <div className="review-card card-medium">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">J</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Jay Garala</h4>
                      {/* <p className="review-date">January 10, 2024 03:15 PM</p> */}
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    It was a great experience of learning from the finest faculties of the subject. Their efforts need a big applause. The bands I have scored would not have been possible without them.
                  </p>
                  {/* <a href="#" className="view-google-link">View on Google</a> */}
                </div>

                {/* Review Card 3 - Small */}
                {/* <div className="review-card card-small">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">S</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Sneha Patel</h4>
                      <p className="review-date">January 5, 2024 02:30 PM</p>
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    Excellent coaching center!
                  </p>
                  <a href="#" className="view-google-link">View on Google</a>
                </div> */}
              </div>

              {/* Column 2 */}
              <div className="masonry-column">
                {/* Review Card 4 - Medium */}
                <div className="review-card card-medium">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">K</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Krishna Patel</h4>
                      {/* <p className="review-date">January 22, 2024 05:27 PM</p> */}
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    I am deeply grateful to faculties for guiding me to score overall 7.5 bands in IELTS exam. They are amazing and friendly too. The duration of a month I spent here for coaching at Shivasya would always be close to my heart.
                  </p>
                  <a href="#" className="view-google-link">View on Google</a>
                </div>

                {/* Review Card 5 - Small */}
                <div className="review-card card-small">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">M</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Manvendra Vaghela</h4>
                      {/* <p className="review-date">January 22, 2024 05:27 PM</p> */}
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    I hereby share my great experience at Shivasya. I feel obliged to have an immense support and teaching by Kartik Sir. And also thank my classmates and other faculty at Shivasya for their guidance.
                  </p>
                  {/* <a href="#" className="view-google-link">View on Google</a> */}
                </div>

                {/* Review Card 6 - Large */}
                <div className="review-card card-medium">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">K</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Kushal Joshi</h4>
                      {/* <p className="review-date">January 10, 2024 03:15 PM</p> */}
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    It was a great experience studying at Shivasya. The faculty here is amazing. I was thoroughly mentored by my faculty, Mr. Kartik Soni, not only for IELTS; he helped me in many aspects.
                  </p>
                  {/* <a href="#" className="view-google-link">View on Google</a> */}
                </div>
              </div>

              {/* Column 3 */}
              <div className="masonry-column">
                {/* Review Card 7 - Large */}
                <div className="review-card card-large">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">L</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Luv Kareliya</h4>
                      {/* <p className="review-date">January 22, 2024 05:27 PM</p> */}
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    Shivasya Smart Academy made it possible to achieve my 'dream score' of 8.5 Bands. The preparation material and the support from the faculties were unmatched, especially Neelam Ma’am helped me improve my writing skills.
                    Shivasya Smart Academy made it possible to achieve my 'dream score' of 8.5 Bands. The preparation material and the support from the faculties were unmatched, especially Neelam Ma’am helped me improve my writing skills.
                  </p>
                  {/* <a href="#" className="view-google-link">View on Google</a> */}
                </div>

                {/* Review Card 8 - Medium */}
                <div className="review-card card-medium">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">A</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Anushka Dufare</h4>
                      {/* <p className="review-date">January 15, 2024 05:27 PM</p> */}
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    Friendly and helpful services. The staff is very accommodating and professional in their approach.
                  </p>
                  {/* <a href="#" className="view-google-link">View on Google</a> */}
                </div>

                {/* Review Card 9 - Small */}
                <div className="review-card card-small">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      <span className="avatar-initial">P</span>
                    </div>
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">Priya Patel</h4>
                      {/* <p className="review-date">January 8, 2024 11:30 AM</p> */}
                    </div>
                  </div>
                  <div className="review-rating">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                  <p className="review-text">
                    Outstanding results!
                  </p>
                  {/* <a href="#" className="view-google-link">View on Google</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;