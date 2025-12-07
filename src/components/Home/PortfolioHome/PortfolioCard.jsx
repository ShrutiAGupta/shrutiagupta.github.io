// src/components/Blog/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DateComponent
 from '../../Shared/dateComponent';
const PortfolioCard = ({ parent, post, highlight }) => {

  return (
    <div className={`${post.classes} w-full md:w-1/2 lg:w-1/3 px-4 `}>
      <Link to={`/project/${post.link}`}>
      <div className="blog-info overflow-hidden bg-white rounded-[10px] mb-8 transition-all duration-300 ease-in-out flex flex-wrap flex-col md:flex-row w-full">
          <img src={post.image} className="img-responsive w-full object-cover h-[200px] md:h-[250px] " alt={post.title} loading='lazy'/>
          <div className="blog-txt flex flex-col justify-between w-full">
            <div>
          {parent === 'blog' && <span className='blog-tag mb-4 capitalize flex border border-solid '>{ post.tags[0]}</span>}
          <h4 className="lora-heading">
          <Link to={`/blog/${post.link}`}>{post.title}</Link>
          </h4>
              <p className="separator overflow-hidden m-0">{post.description}</p>
            </div>
          <div className='mt-2'>           
          {parent === "blog" && (
                <span className="date">
                  <DateComponent startDate={post.date} format="mmm dd, yyyy" />
                </span>
              )}
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;