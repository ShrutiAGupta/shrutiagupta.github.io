import React from "react";
import { Link } from "react-router-dom";
const PoetryCard = ({ post }) => {
  const handleImageError = (e) => {
    console.error(`Failed to load image: ${post.image}`);
  };

  return (
    <div className="relative max-w-1/3 w-1/3 h-[200px] max-h-[200px]">
      <div className="group relative bg-white overflow-hidden max-w-full w-full max-h-full h-full transition-all duration-300 ease-in-out">
        <Link to={`/poetry/${post.link}`}>
          <div className="poetry-overlay text-white text-center flex items-center justify-center text-2xl cursor-pointer px-4 absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            {post.title}
          </div>
        </Link>

        <Link to={`/poetry/${post.link}`}>
          <img
            src={post.image}
            className="img-responsive object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
            alt={post.title}
            onError={handleImageError}
          />
        </Link>
      </div>
    </div>
  );
};

export default PoetryCard;
