// src/components/Blog/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DateComponent
 from '../../Shared/dateComponent';
const BlogCard = ({ parent, post, highlight }) => {

  return (
    <div className={`${post.classes} w-full md:w-1/2 lg:w-1/3 px-4 `}>
      <Link to={`/blog/${post.link}`}>
      <div className="blog-info flex flex-wrap flex-col md:flex-row w-[100%]">
          <img src={post.image} className="img-responsive w-[100%] md:w-[50%]" alt={post.title} loading='lazy'/>
          <div className="blog-txt flex flex-col justify-between w-[100%]">
            <div>
          {parent === 'blog' && <span className='blog-tag mb-4 capitalize flex border border-solid '>{ post.tags[0]}</span>}
          <h4 className="lora-heading">
          <Link to={`/blog/${post.link}`}>{post.title}</Link>
          </h4>
              <p className="separator">{post.description}</p>
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

export default BlogCard;