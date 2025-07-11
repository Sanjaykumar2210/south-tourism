import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tariff from './components/Tariff';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Tariff />
      <Testimonials />
      <Contact />
      <ContactPopup />
      <Footer />
    </>
  );
}

export default App;