// src/components/portfolio/portfolioCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DateComponent
 from '../../Shared/dateComponent';
const PortfolioCard = ({ parent, post, highlight }) => {

  return (
    <div className={`${post.classes} w-full md:w-1/2 lg:w-1/3 px-4 `}>
      <Link to={`/project/${post.link}`}>
      <div className="portfolio-info overflow-hidden bg-white rounded-[10px] mb-8 transition-all duration-300 ease-in-out flex flex-wrap flex-col md:flex-row w-full">
          <img src={post.image} className="img-responsive w-full object-cover h-[200px] md:h-[250px] " alt={post.title} loading='lazy'/>
          <div className="portfolio-txt flex flex-col justify-between w-full">
            <div>
          {/* {parent === 'portfolio' && <span className='portfolio-tag mb-4 capitalize flex border border-solid '>{ post.tags[0]}</span>} */}
          <h4 className="lora-heading">
          <div>{post.title}</div>
          </h4>
              
            </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;