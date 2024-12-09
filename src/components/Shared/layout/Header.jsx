import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import "./Header.scss";
import { useActiveSection } from "../../../context/ActiveSectionContext"; // Update path

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSection(); // Get both values from context
  const [isSticky, setIsSticky] = useState(false);
  // const { activeSection, setActiveSection } = useActiveSection();
  // const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setIsSticky(window.scrollY > heroHeight - 100);

      const sections = ["hero", "about", "skills", "resume", "blog", "contact"];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]); // Add setActiveSection to dependencies

  const navItems = [
    { id: "hero", path: "/", label: "Home", type: "scroll", section: "hero" },
    { id: "about", path: "/", label: "About", type: "scroll", section: "hero" },
    {
      id: "skills",
      path: "/",
      label: "Skills",
      type: "scroll",
      section: "hero",
    },
    {
      id: "resume",
      path: "/resume",
      label: "Resume",
      type: "route",
      section: "hero",
    },
    { id: "blog", path: "/", label: "Blog", type: "scroll", section: "hero" },
    {
      id: "poetry",
      path: "/poetry",
      label: "Poetry",
      type: "route",
      section: "hero",
    },
    // { id: 'testimonials', label: 'Testimonials' },
    // { id: 'contact', label: 'Contact' },
  ];

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   element?.scrollIntoView({ behavior: "smooth" });
  // };

  // const handleNavClick = (e, item) => {
  //   if (item.type === "scroll") {
  //     e.preventDefault();
  //     // Only scroll if we're on the home page
  //     if (location.pathname === "/") {
  //       const element = document.getElementById(item.section);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     } else {
  //       // If not on home page, go to home page first
  //       window.location.href = `/${item.section}`;
  //     }
  //   }
  // };

  // const location = useLocation();  // Use the hook

  const handleNavClick = (e, item) => {
    if (item.type === "scroll") {
      e.preventDefault();
      if (location.pathname === "/") {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(`/#${item.section}`);
      }
    }
    setIsMenuOpen(false);  // Close menu after click
  };

  const toggleMobileMenu = () => {
    console.log('menu status', isMenuOpen)
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className={`${isSticky ? "header-scrolled" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex w-full header-nav">
          <div className="logo">
            <Link to="/">
              <img src="assets/img/icon.png" alt="" className="img-fluid" />
            </Link>
          </div>

          <button 
      className="mobile-nav-toggle"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
    </button>

          <nav id="navbar" className={`navbar ${isMenuOpen ? 'navbar-mobile' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.type === "route" ? (
                    <Link 
                      to={item.path} 
                      className="nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={`#${item.section}`}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`nav-link scrollto ${
                        activeSection === item.id ? "active text-accent" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;