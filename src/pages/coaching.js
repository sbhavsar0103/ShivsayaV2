import React from 'react';
import CoachingBanner from '../components/coaching/CoachingBanner';
import ClassesInfo from '../components/coaching/ClassesInfo';
import Benefits from '../components/coaching/Benefits';
import Footer from '../components/footer';

const Coaching = () => {
  return (
    <div className="cp-page-wrapper">
      <main className="cp-main-content">
        <CoachingBanner/>
        <ClassesInfo/>
        <Benefits/>
      </main>
      <Footer />
    </div>
  );
};

export default Coaching;