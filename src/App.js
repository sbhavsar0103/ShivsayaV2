import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/style.css';
import './assets/styles/responsive.css';
import './assets/styles/flaticon_interface.css';
import './assets/styles/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';
import Coaching from './pages/coaching';
import UsStudy from '../src/components/abroadpage/us_study';
import CanadaStudy from '../src/components/abroadpage/canada_study';
import AusStudy from '../src/components/abroadpage/austrila_study';
import NzStudy from '../src/components/abroadpage/nz_study';
import UkStudy from '../src/components/abroadpage/uk_study';
import EuropeStudy from '../src/components/abroadpage/europe_study';
import ContactUs from './pages/contact_us';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/shivasya-us" element={<UsStudy />} />
        <Route path="/shivasya-canada" element={<CanadaStudy />} />
        <Route path="/shivasya-austrila" element={<AusStudy />} />
        <Route path="/shivasya-new-zealand" element={<NzStudy />} />
        <Route path="/shivasya-uk" element={<UkStudy />} />
        <Route path="/shivasya-europe" element={<EuropeStudy />} />
        <Route path="/shivasya-contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;