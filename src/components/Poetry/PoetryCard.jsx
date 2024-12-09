import React from 'react';
import { Link } from 'react-router-dom';
const PoetryCard = ({ image, title, description, link }) => {
  const handleImageError = (e) => {
    console.error(`Failed to load image: ${image}`);
    // Optionally set a fallback image
    // e.target.src = '/assets/img/fallback.jpg';
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="poetry-info">
      <Link to={`/poetry/${link}`}>
          <img src={image} className="img-responsive" alt={title} onError={handleImageError}/>
      </Link>
        <div className="poetry-txt">
          <h4 className="lora-heading text-center">
            <Link to={`/poetry/${link}`}>
          {title}
      </Link>
          </h4>
          {/* <p className="separator">{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default PoetryCard;