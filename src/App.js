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
import Testimonials from "./components/Home/Testimonials/Testimonials";
// import Contact from "./components/Home/Contact/Contact";
// import Me from "./components/Home/Me/Me";
import "./App.scss";

import Portfolio from "./components/Portfolio/Portfolio";
import Poetry from "./components/Poetry/Poetry";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import BlogIndividual from './components/Blog/BlogIndividual/BlogIndividual';
import PoetryIndividual from './components/Poetry/PoetryIndividual/PoetryIndividual';
import Home from "./components/Home/Home";


import ScrollToTop from "./hooks/scrollToTop";
// import { sections } from "./components/Home/Home.model";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <>
           <Home />
          </>
        }
      />
        <Route path="/portfolio" element={
          <Layout>
            <Portfolio />
          </Layout>
        } />
        <Route path="/blog" element={
          <Layout>
            <Blog />
          </Layout>
        } />
        <Route path="/poetry" element={
          <Layout>
            <Poetry />
          </Layout>
        } />
        <Route path="/resume" element={
          <Layout>
            <Resume />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/blog/:slug" element={
          <Layout>
            <BlogIndividual />
          </Layout>
        } />
        <Route path="/poetry/:slug" element={
          <Layout>
            <PoetryIndividual />
          </Layout>
        } />
      </Routes>
    </>
  );
}

export default App;
