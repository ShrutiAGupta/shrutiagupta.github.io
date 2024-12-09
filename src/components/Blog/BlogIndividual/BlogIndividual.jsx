// src/components/Blog/BlogIndividual.jsx
import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../../../data/blogData';
import './BlogIndividual.scss'

const BlogIndividual = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

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
  
  // Find the blog post with matching slug
  const blogPost = blogPosts.find(post => post.link === slug);

  // If blog post not found, redirect to blog listing
  if (!blogPost) {
    navigate('/blog');
    return null;
  }

  return (
    <article className="blog-post paddsection no-copy">
      <div className="container">
        <header className="blog-post-header">
          <h1>{blogPost.title}</h1>
          {/* <div className="blog-post-meta">
            <span className="date">{blogPost.date}</span>
          </div> */}
        </header>

        <div className="blog-post-content">
          <img 
            src={blogPost.image} 
            alt={blogPost.title} 
            className="blog-post-image mb-4"
          />
          <div 
            className="content"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogIndividual;