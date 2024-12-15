import React from "react";
import { Link } from "react-router-dom";
const PoetryCard = ({ post }) => {
  const handleImageError = (e) => {
    console.error(`Failed to load image: ${post.image}`);
  };

  return (
    <div className="relative">
      <div className="poetry-info group relative">
        <Link to={`/poetry/${post.link}`}>
          <div className="poetry-overlay cursor-pointer px-4 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            {post.title}
          </div>
        </Link>

        <Link to={`/poetry/${post.link}`}>
          <img
            src={post.image}
            className="img-responsive grayscale group-hover:grayscale-0 transition-all duration-300"
            alt={post.title}
            onError={handleImageError}
          />
        </Link>
      </div>
    </div>
  );
};

export default PoetryCard;
