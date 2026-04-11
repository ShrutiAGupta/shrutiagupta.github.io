// src/components/Blog/BlogIndividual.jsx
import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../../../data/blogData';
import './BlogIndividual.scss'
import DateComponent from '../../Shared/dateComponent';
const BlogIndividual = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
    // const handleContextMenu = (e) => {
    //   e.preventDefault();
    // };

    // const handleKeyDown = (e) => {
    //   if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
    //     e.preventDefault();
    //   }
    // };

  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  useEffect(() => {
      const mainContent = document.querySelector(".main-content");
      if (mainContent) {
        mainContent.classList.add("project-individual");
        document.body.classList.add("project-individual");
      }
    }, []);
  
    useEffect(() => {
      window.dispatchEvent(new Event("enableTransparentHeader"));
      window.dispatchEvent(new Event("enableTransparentFooter"));
      return () => {
        window.dispatchEvent(new Event("disableTransparentHeader"));
        window.dispatchEvent(new Event("disableTransparentFooter"));
      };
    }, []);
  
  const blogPost = blogPosts.find(post => post.link === slug);
  console.log(blogPost.element);
  // const cleanHTML = blogPost.content;
  // const cleanHTML = blogPost.content.replace(/\n+/g,'').replace(/\s{2,}/g,' ').trim();

  if (!blogPost) {
    navigate('/blog');
    return null;
  }

  return (
    <article className="blog-post paddsection no-copy">
      <div className="">{blogPost.element}</div>
    </article>
  );
};

export default BlogIndividual;