import React from 'react';
import BlogCard from '../Home/BlogHome/BlogCard';
import '../Home/BlogHome/BlogHome.scss';
import './Blog.scss';
import { blogPosts, monthFeaturedBlog, featuredBlog } from '../../data/blogData';

const Blog = () => {

  const blogs = blogPosts.map((e) => ({ descriptionPlacement: 'bottom', ...e }));

  const mainPanel = {
    ...blogs.find((e) => e.link === featuredBlog),
    classes: 'full main',
    descriptionPlacement: 'right',
  };
  
  const rightPanel = blogs
    .filter((e) => monthFeaturedBlog.includes(e.link))
    .map((el) => ({ classes: 'full', ...el }));
  
  const belowPanel = blogs
    .filter((e) => e.link !== featuredBlog && !monthFeaturedBlog.includes(e.link))
    .slice(0, 3).sort((x, y)=> new Date(y.date) - new Date(x.date));

    return (
        <section id="blog" className="text-left paddsection section-bg">
          <div className="container">
            <div className="section-title text-center">
              <h2>BLOG</h2>
            </div>
          </div>
    
          <div className="panel-wrapper flex justify-between flex-row flex-wrap">
        <div className="left-panel md:w-full lg:w-[75%]">
          <div className="main-panel">
          <BlogCard key={0} parent='blog' post={mainPanel} />
          </div>
          <div className="flex flex-wrap">
            {belowPanel.map((post, index) => (
              <BlogCard key={index} parent='blog' post={post} />
            ))}
          </div>
        </div>
        <div className="right-panel md:w-full lg:w-[25%]">
        {rightPanel.map((post, index) => (
              <BlogCard key={index} parent='blog' post={post} />
            ))}
        </div>
      </div>
        </section>
      );
};

export default Blog;