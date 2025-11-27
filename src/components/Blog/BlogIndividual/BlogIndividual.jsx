// src/components/Blog/BlogIndividual.jsx
import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../../../data/blogData';
import './BlogIndividual.scss'
import DateComponent from '../../Shared/dateComponent';
const BlogIndividual = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  const blogPost = blogPosts.find(post => post.link === slug);
  const cleanHTML = blogPost.content;
  // const cleanHTML = blogPost.content.replace(/\n+/g,'').replace(/\s{2,}/g,' ').trim();

  if (!blogPost) {
    navigate('/blog');
    return null;
  }

  return (
    <article className="blog-post paddsection no-copy">
      <div className="container">
        <header className="blog-post-header">
          <h1>{blogPost.title}</h1>
          <div className="blog-post-meta">
            <span className="date">{<DateComponent startDate={ blogPost.date } format='mmm dd, yyyy'/>}</span>
          </div>
        </header>

        <div className="blog-post-content">
          <img 
            src={blogPost.image} 
            alt={blogPost.title} 
            className="blog-post-image mb-4"
          />
          <div 
            className="content"
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogIndividual;