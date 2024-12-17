// src/components/Blog/Blog.jsx
import React from 'react';
import BlogCard from './BlogCard';
import './BlogHome.scss';
import { blogPosts, homeFeature } from '../../../data/blogData';
import { Link } from 'react-router-dom';

const BlogHome = () => {
  const displayedPosts = blogPosts.filter((e) => homeFeature.includes(e.link));

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
        <Link to="/blog/" className="flex justify-end items-center">
        <div className="section-link">View All Posts <i class='bx bx-chevrons-right ml-2'></i></div></Link>
      </div>
    </section>
  );
};

export default BlogHome;