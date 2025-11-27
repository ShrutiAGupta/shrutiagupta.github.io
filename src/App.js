// src/App.jsx
import React, { useEffect } from "react";
import { useActiveSection } from "./context/ActiveSectionContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Shared/layout/Header";
import Footer from "./components/Shared/layout/Footer";
// import Hero from "./components/Home/Hero/Hero";
// import Skills from "./components/Home/Skills/Skills";
// import BlogHome from "./components/Home/Blog/BlogHome";
import Resume from "./components/Resume/Resume";
import Timeline from "./components/Timeline/Timeline";
import Testimonials from "./components/Home/Testimonials/Testimonials";
// import Contact from "./components/Home/Contact/Contact";
// import Me from "./components/Home/Me/Me";
import "./App.scss";

import Portfolio from "./components/Portfolio/Portfolio";
import ProjectIndividual from "./components/Portfolio/ProjectIndividual/ProjectIndividual";
import Poetry from "./components/Poetry/Poetry";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import BlogIndividual from "./components/Blog/BlogIndividual/BlogIndividual";
import PoetryIndividual from "./components/Poetry/PoetryIndividual/PoetryIndividual";
import Home from "./components/Home/Home";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Music from "./components/Music/Music";
import ScrollToTop from "./hooks/scrollToTop";
import ParallaxResume from "./components/Shared/Resume/Resume";
// import { sections } from "./components/Home/Home.model";

// import { experienceData } from "./data/experienceData";

import { routerLinks } from "./components/Shared/navigationLnks";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

function App() {
  const [first, ...rest] = routerLinks;
  return (
    <Routes>
      <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
      {rest.map((item) => (
        <Route key={item.id} path={item.path} element={<Layout>{item.element}</Layout>} />
      ))}
    </Routes>
  )
}


export default App;
