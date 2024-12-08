// src/App.jsx
import React, { useEffect } from 'react';
import { useActiveSection } from './context/ActiveSectionContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Blog from './components/Blog/Blog';
import Resume from './components/Resume/Resume';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import './App.scss';

import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'resume', 'blog', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

    return (
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="main-content">
              <Hero />
              <Header />
              <main id="main">
                <About />
                <Skills />
                <Resume />
                <Blog />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </div>
          } 
        />
        <Route
        path="/portfolio"
        element={
          <div className="main-content">
          {/* <Header /> */}
          <Portfolio />
          <Footer />
          </div>
          } />
      </Routes>
    );
  }
  

export default App;