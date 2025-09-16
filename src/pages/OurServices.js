import React from 'react';
import { useEffect } from 'react';
import ValueAdded from '../components/services/ValueAdded';
import CoachingSection from '../components/services/CoachingSection';
import CareerCounselling from '../components/services/CareerCounselling';
import Country from '../components/services/Country';
import ApplicationAssistance from '../components/services/ApplicationAssistance';
import SOP from '../components/services/SOP';
import Scholarship from '../components/services/Scholarship';
import Education from '../components/services/Education';
import VisaGuidence from '../components/services/VisaGuidence';
import Accomodation from '../components/services/Accomodation';
import AirTicket from '../components/services/AirTicket';
import ForexService from '../components/services/ForexService';
import Dependent from '../components/services/Dependent';
import Footer from '../components/footer';

const OurServices = () => {
  return (
    <div className="page-wrapper">
      <main className="main-content">
        <ValueAdded />
        <CoachingSection />
        <CareerCounselling />
        <Country />
        <ApplicationAssistance />
        <SOP />
        <Scholarship />
        <Education />
        <VisaGuidence />
        <Accomodation />
        <AirTicket />
        <ForexService />
        <Dependent />
      </main>
      <Footer />
    </div>
  );
};

export default OurServices;