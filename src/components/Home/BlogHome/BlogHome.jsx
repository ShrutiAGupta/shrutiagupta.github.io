// src/components/Blog/Blog.jsx
import React from 'react';
import BlogCard from './BlogCard';
import './BlogHome.scss';
import { blogPosts } from '../../../data/blogData';

const BlogHome = () => {
  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="text-left section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>BLOG</h2>
        </div>
      </div>

      <div className="container">
        <div className="blog-block">
          <div className="flex flex-wrap -mx-4">
            {displayedPosts.map((post, index) => (
              <BlogCard key={index} post={post} parent='home'/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;