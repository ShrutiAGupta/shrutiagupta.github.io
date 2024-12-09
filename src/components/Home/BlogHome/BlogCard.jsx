// src/components/Blog/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, description, link }) => {
  const handleImageError = (e) => {
    console.error(`Failed to load image: ${image}`);
    // Optionally set a fallback image
    // e.target.src = '/assets/img/fallback.jpg';
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="blog-info">
      <Link to={`/blog/${link}`}>
          <img src={image} className="img-responsive" alt={title} onError={handleImageError}/>
      </Link>
        <div className="blog-txt">
          <h4 className="lora-heading">
          <Link to={`/blog/${link}`}>{title}</Link>
          </h4>
          <p className="separator">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;