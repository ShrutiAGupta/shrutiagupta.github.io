// src/components/Blog/Blog.jsx
import React from 'react';
import PortfolioCard from './PortfolioCard';
import './PortfolioHome.scss';
import { projectDetailsData, homeFeature } from '../../../data/portfolioData';
import { Link } from 'react-router-dom';

const PortfolioHome = () => {
  const displayedPosts = projectDetailsData.filter((e) => homeFeature.includes(e.link));

  return (
    <section id="blog" className="text-left section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Featured Projects</h2>
        </div>
      </div>

      <div className="container">
        <div className="blog-block">
          <div className="flex flex-wrap -mx-4">
            {displayedPosts.map((post, index) => (
              <PortfolioCard key={index} post={post} parent='home'/>
            ))}
          </div>
        </div>
        {/* <Link to="/project" className="flex justify-end items-center">
        <div className="shadow-[0_5px_25px_rgba(0,0,0,0.3)] bg-white bg-opacity-10 inline-flex py-[10px] px-[20px] text-primary">View All Posts <i class='bx bx-chevrons-right ml-2 text-xl'></i></div></Link> */}
      </div>
    </section>
  );
};

export default PortfolioHome;