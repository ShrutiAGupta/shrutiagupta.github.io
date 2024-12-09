// src/App.jsx
import React, { useEffect } from "react";
import { useActiveSection } from "./context/ActiveSectionContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Shared/layout/Header";
import Footer from "./components/Shared/layout/Footer";
import Hero from "./components/Home/Hero/Hero";
import Skills from "./components/Home/Skills/Skills";
import Blog from "./components/Blog/Blog";
import Resume from "./components/Resume/Resume";
import Testimonials from "./components/Home/Testimonials/Testimonials";
import Contact from "./components/Home/Contact/Contact";
import About from "./components/Home/About/About";
import "./App.scss";

import Portfolio from "./components/Portfolio/Portfolio";
import Poetry from "./components/Poetry/Poetry";

const MainLayout = () => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "resume",
        "blog",
        "testimonials",
        "contact",
      ];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Header />
            <div className="main-content">
              <main id="main">
                <About />
                <Skills />
                {/* <Resume /> */}
                <Blog />
                {/* <Testimonials /> */}
                <Contact />
              </main>
            </div>
            <Footer />
          </>
        }
      />
      
    </Routes>
  );
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MainLayout />
          </>
        }
      />
      <Route
        path="/portfolio"
        element={
          <>
            <Header />
            <div className="main-content">
              <Portfolio />
              <Footer />
            </div>
            <Footer />
          </>
        }
      />
      <Route
        path="/blog"
        element={
          <>
            <Header />
            <div className="main-content">
              <Portfolio />
              <Footer />
            </div>
            <Footer />
          </>
        }
      />
      <Route
        path="/poetry"
        element={
          <>
            <Header />
            <div className="main-content">
              <Poetry />
            </div>
            <Footer />
          </>
        }
      />
      <Route
        path="/resume"
        element={
          <>
            <Header />
            <div className="main-content">
              <Resume />
            </div>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
