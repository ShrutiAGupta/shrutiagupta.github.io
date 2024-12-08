// src/components/Blog/Blog.jsx
import React from 'react';
import BlogCard from './BlogCard';
import './Blog.scss';

const blogPosts = [
  {
    image: '/assets/img/blog/building-personal-website.PNG',
    title: 'Crafting Your Digital Identity: All about Building Your Personal Website',
    description: 'Why blend in on social media when you can stand out with your own website?',
    link: 'blogs/building-personal-website.html'
  },
  {
    image: '/assets/img/blog/organizing-in-notion.png',
    title: 'Mastering Your Life: A Comprehensive Guide to Organizing with Notion',
    description: 'Why juggle a dozen apps when you can have your life perfectly organized in Notion?',
    link: 'blogs/organizing-in-notion.html'
  },
  {
    image: '/assets/img/blog/writing-a-book.PNG',
    title: 'The Power of Your Story: An ode to your thoughts',
    description: 'Have you ever thought about writing a book? No? Maybe this will help...',
    link: 'blogs/writing-a-book.html'
  }
];

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