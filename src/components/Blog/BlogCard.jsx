// src/components/Blog/BlogCard.jsx
import React from 'react';

const BlogCard = ({ image, title, description, link }) => {
  const handleImageError = (e) => {
    console.error(`Failed to load image: ${image}`);
    // Optionally set a fallback image
    // e.target.src = '/assets/img/fallback.jpg';
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="blog-info">
        <a href={link}>
          <img src={image} className="img-responsive" alt={title} onError={handleImageError}/>
        </a>
        <div className="blog-txt">
          <h4 className="lora-heading">
            <a href={link}>{title}</a>
          </h4>
          <p className="separator">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;