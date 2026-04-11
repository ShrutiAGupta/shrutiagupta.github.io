import React from 'react';
import PortfolioCard from '../Home/PortfolioHome/PortfolioCard';
// import '../Home/PortfolioHome/PortfolioHome.scss';
// import './Portfolio.scss';
// import { portfolioPosts, monthFeaturedportfolio, featuredportfolio } from '../../data/portfolioData';
import { projectDetailsData } from '../../data/timelineData';

const Portfolio = () => {

  const portfolios = projectDetailsData.filter((p) => p.visible).map((e) => ({ descriptionPlacement: 'bottom', ...e }));

  // const mainPanel = {
  //   ...portfolios.find((e) => e.link === featuredportfolio),
  //   classes: 'full main',
  //   descriptionPlacement: 'right',
  // };
  
  // const rightPanel = portfolios
  //   .filter((e) => monthFeaturedportfolio.includes(e.link))
  //   .map((el) => ({ classes: 'full', ...el }));
  
  // const belowPanel = portfolios
  //   .slice(0, 3).sort((x, y)=> new Date(y.date) - new Date(x.date));

    return (
        <section id="blog" className="text-left paddsection section-bg">
          <div className="container">
            <div className="section-title text-center">
              <h2>PORTFOLIO</h2>
            </div>
          </div>
    
          <div className="panel-wrapper flex justify-between flex-row flex-wrap">
        <div className="left-panel md:w-full">
          <div className="flex flex-wrap">
            {portfolios.map((post, index) => (
              <PortfolioCard key={index} parent='home' post={post} />
              // <div>Try</div>
            ))}
          </div>
        </div>
      </div>
        </section>
      );
};

export default Portfolio;