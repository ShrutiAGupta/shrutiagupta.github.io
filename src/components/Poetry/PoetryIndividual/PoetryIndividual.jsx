// src/components/poetry/PoetryIndividual.jsx
import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { poetryData } from '../../../data/poetryData';
import './PoetryIndividual.scss'

const PoetryIndividual = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the poetry post with matching slug
  const poetry = poetryData.find(post => post.link === slug);

  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleKeyDown = (e) => {
  //     if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  // If poetry post not found, redirect to poetry listing
  if (!poetry) {
    navigate('/poetry');
    return null;
  }

  return (
    <article className="post no-copy">
      <div className="container">

        <div className="post-content justify-between flex flex-wrap">
          <img 
            src={poetry.image} 
            alt={poetry.title} 
            className="post-image flex-1"
          />
          <div className="content  flex-1">
          <header className="post-header">
            <h1>{poetry.title}</h1>
          </header>
            {poetry.content}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PoetryIndividual;