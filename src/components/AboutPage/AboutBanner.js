import React, { useEffect } from "react";
import '../../assets/styles/frontend.mindabc.css';
import '../../assets/styles/widget-icon-list.mindabc.css';
import '../../assets/styles/widget-spacer.mindabc.css';
import '../../assets/styles/fontawesome.min52d5.css';
import '../../assets/styles/regular.min4113.css';
import '../../assets/styles/jkiticon4113.css';
import '../../assets/styles/solid.min4113.css';

const AbousComponet = () => {

    useEffect(() => {
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

        const styleElement = document.getElementById("wpr-lazyload-bg");
        if (styleElement && rocket_pairs.length > 0) {
            rocket_pairs.forEach(pair => {
                styleElement.innerHTML += pair.style;
            });
        }

    }, []);

    return (
        <>
            <style id="wpr-lazyload-bg" />
            <style id="wpr-lazyload-bg-exclusion" />
            <div className="elementor-kit-13">
                <div id="" className="">
                    <main>
                        <div className="elementor elementor-53">
                            <section className="elementor-section elementor-element elementor-element-5804d0a5 elementor-reverse-mobile">
                                <div className="elementor-container elementor-column-gap-default">
                                    <div className="elementor-column elementor-col-25">
                                        <div className="elementor-element-populated">
                                            <section className="elementor-element elementor-element-1d9253d7">
                                                <div className="elementor-element elementor-element-470bfce0">
                                                    <div className="">
                                                        <div className="jeg-elementor-kit jkit-icon-box">
                                                            <div className="jkit-icon-box-wrapper">
                                                                <div className="icon-box-body">
                                                                    <h3 className="title">Our Vision</h3>
                                                                    <p className="icon-box-description">
                                                                        At Global
                                                                        Colliance, our vision is to create a world
                                                                        where every student has the opportunity to
                                                                        broaden their horizons and gain global
                                                                        exposure through foreign education.
                                                                    </p>
                                                                    <div className="icon-box-button hover">
                                                                        <div className="">
                                                                            <a href="about/index.html" className="icon-box-link" aria-label="Read More">
                                                                                Read More <i aria-hidden="true" className="fas fa-arrow-right"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="elementor-element elementor-element-57331d2f">
                                                <div className="elementor-element elementor-element-4ff32c6c" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                    <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-72d41029">
                                                            <div className="">
                                                                <div className="">
                                                                    <div className="elementor-spacer-inner"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="elementor-column elementor-col-25">
                                        <div className="elementor-element-populated">
                                            <section className="elementor-element elementor-element-1d9253d7"
                                                data-id="1d9253d7" data-element_type="section">
                                                <div className="elementor-column-gap-default">
                                                    <div className="elementor-column elementor-element elementor-element-388ba073"
                                                        data-id="388ba073" data-element_type="column"
                                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-4b040299 elementor-widget-tablet__width-initial elementor-widget elementor-widget-spacer"
                                                                data-id="4b040299" data-element_type="widget"
                                                                data-widget_type="spacer.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="elementor-spacer">
                                                                        <div className="elementor-spacer-inner"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="">
                                                <div className="">
                                                    <div className="">
                                                        <div className="">
                                                            <div className="elementor-element elementor-element-2168fb35">
                                                                <div className="">
                                                                    <div className="jeg-elementor-kit jkit-icon-box">
                                                                        <div className="jkit-icon-box-wrapper">
                                                                            <div className="icon-box-body">
                                                                                <h3 className="title">Our Mission</h3>
                                                                                <p className="icon-box-description">
                                                                                    Our mission at
                                                                                    Shivasya is to provide students with
                                                                                    exceptional study-abroad experiences that
                                                                                    inspire personal growth, academic
                                                                                    achievement, and cross-cultural
                                                                                    understanding.
                                                                                </p>
                                                                                <div className="icon-box-button hover">
                                                                                    <div className="">
                                                                                        <a href="about/index.html" className="icon-box-link" aria-label="Read More">
                                                                                            Read More <i aria-hidden="true" className="fas fa-arrow-right"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="elementor-column elementor-col-50 elementor-element elementor-element-48e107">
                                        <div className="elementor-element-populated">
                                            <div className="elementor-element elementor-element-7b90bfdf">
                                                <div className="elementor-widget-container">
                                                    <ul className="elementor-icon-list-items">
                                                        <li className="elementor-icon-list-item">
                                                            <span className="elementor-icon-list-icon">
                                                                <i aria-hidden="true" className="far fa-dot-circle"></i> </span>
                                                            <span className="elementor-icon-list-text">About Company</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-197b8114 elementor-widget elementor-widget-heading">
                                                <div className="">
                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                        Our Story <b>Who We Are </b>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-6555523f elementor-widget">
                                                <div className="">
                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                        Shivasya is a leading study abroad consultant in India, offering expert guidance
                                                        and comprehensive services for those seeking international education opportunities.
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-701ab64e">
                                                <div className="">
                                                    <p style={{color: '#3A1F16'}}>
                                                        With over a decade of experience, Shivasya has established itself as a trusted name in overseas education consultants in India, committed to delivering convenience and excellence to aspiring students. Fulfil
                                                        your ambition of studying abroad with guidance from our dedicated study-abroad education consultants.
                                                    </p>
                                                </div>
                                            </div>
                                            <section className="elementor-element elementor-element-58768c28 elementor-section-boxed">
                                                <div className="elementor-container">
                                                    <div className="elementor-column elementor-col-50">
                                                        <div className="elementor-widget-wrap">
                                                            <div className="elementor-element elementor-element-52173b2e">
                                                                <div className="elementor-widget-container">
                                                                    <ul className="elementor-icon-list-items">
                                                                        <li className="elementor-icon-list-item">
                                                                            <span className="elementor-icon-list-text">
                                                                                Beneficial Strategies
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-4fd6ec36">
                                                                <div className="">
                                                                    <p style={{color: '#3A1F16'}}>
                                                                        Shivasya is your trusted partner as an overseas education consultant for a
                                                                        brighter future. We aim to provide students with diverse programs that help them master their skills, encourage growth, critical thinking, self-expression, and
                                                                        multitasking.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-17a2da7d">
                                                        <div className="elementor-element-populated">
                                                            <div className="elementor-element elementor-element-3dc20315">
                                                                <div className="elementor-widget-container">
                                                                    <ul className="elementor-icon-list-items">
                                                                        <li className="elementor-icon-list-item">
                                                                            <span className="elementor-icon-list-text">
                                                                                Preparation Series
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-da30c6b">
                                                                <div className="elementor-widget-container">
                                                                    <p style={{color: '#3A1F16'}}>
                                                                        Shivasya offers IELTS, PTE, TOEFL and Duolingo
                                                                        exam preparation services for students aspiring to study
                                                                        abroad. With our expert overseas consultancy services,
                                                                        you can explore global horizons. We are committed to a
                                                                        personalized approach to teaching.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <div className="elementor-element elementor-element-2c59aa4d">
                                                <div className="">
                                                    <div className="jeg-elementor-kit jkit-button">
                                                        <a href="#" className="jkit-button-wrapper">Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default AbousComponet;