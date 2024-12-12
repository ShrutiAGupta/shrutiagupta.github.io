// src/components/Blog/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DateComponent
 from '../../Shared/dateComponent';
const BlogCard = ({ parent, post }) => {

  return (
    <div className={`w-full md:w-1/2 lg:w-1/3 px-4 ${post.classes}`}>
      <div className="blog-info">
      <Link to={`/blog/${post.link}`}>
          <img src={post.image} className="img-responsive" alt={post.title}/>
      </Link>
        <div className="blog-txt flex flex-col justify-between">
          <div>
          {parent == 'blog' && <span className='blog-tag mb-4 capitalize flex border border-solid '>{ post.tags[0]}</span>}
          <h4 className="lora-heading">
          <Link to={`/blog/${post.link}`}>{post.title}</Link>
          </h4>
          <p className="separator">{post.description}</p>
          </div>
          <div className='mt-2'>           
          {parent == 'blog' && <span className='date'><DateComponent date={ post.date } /></span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;