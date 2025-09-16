import React from 'react';
import Banner from '../components/Banner';
import FeaturesSection from '../components/Country';
import PartnerUniversities from '../components/PartnerUniversities';
import PopularCourses from '../components/PopularCourses';
import EightStepsSection from '../components/EightStepsSection';
import FewReasons from '../components/FewReasons';
import AbousComponet from '../components/AboutPage/AboutBanner';
import Reviews from '../components/Reviews';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <PartnerUniversities />
      <PopularCourses />
      <EightStepsSection />
      <FewReasons />
      <AbousComponet />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;