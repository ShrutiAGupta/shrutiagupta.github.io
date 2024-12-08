import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { useActiveSection } from '../../context/ActiveSectionContext'; // Update path

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSection(); // Get both values from context
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      setIsSticky(window.scrollY > heroHeight - 100);
      
      const sections = ['home', 'about', 'skills', 'resume', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]); // Add setActiveSection to dependencies

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'blog', label: 'Blog' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="header" className={`${isSticky ? 'header-scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex w-full">
          <div className="logo">
            <Link to="/">
              <img src="assets/img/icon.png" alt="" className="img-fluid" />
            </Link>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a 
                    onClick={() => scrollToSection(id)}
                    className={`nav-link scrollto ${
                      activeSection === id 
                        ? 'active text-accent' // Use your active class
                        : ''
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;