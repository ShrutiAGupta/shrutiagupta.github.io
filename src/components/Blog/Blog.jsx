import React from 'react';
import BlogCard from '../Home/BlogHome/BlogCard';
import '../Home/BlogHome/BlogHome.scss';
import { blogPosts } from '../../data/blogData';

const Blog = () => {
    return (
        <section id="blog" className="text-left paddsection section-bg">
          <div className="container">
            <div className="section-title text-center">
              <h2>BLOG</h2>
            </div>
          </div>
    
          <div className="container">
            <div className="blog-block">
              <div className="flex flex-wrap -mx-4">
                {blogPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      );
};

export default Blog;