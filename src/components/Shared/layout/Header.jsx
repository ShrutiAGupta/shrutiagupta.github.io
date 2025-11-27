import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useActiveSection } from "../../../context/ActiveSectionContext"; // Update path
// import ScrollToTop from "../../../hooks/scrollToTop";
import { routerLinks } from "../navigationLnks";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSection(); // Get both values from context
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setIsSticky(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }); // Add setActiveSection to dependencies

  const navItems = routerLinks.filter((item) => item.showOnNavbar == true)

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
    setIsMenuOpen(false); // Close menu after click
  };

  const toggleMobileMenu = () => {
    console.log("menu status", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="header"
      className={`${isSticky ? "header-scrolled" : "header-not-scrolled"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex w-full header-nav">
          <div className="logo">
            <Link to="/">
              <img src="assets/img/icon.png" alt="" className="img-fluid" />
            </Link>
          </div>

          <button
            className="mobile-nav-toggle font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>

          <nav
            id="navbar"
            className={`navbar ${isMenuOpen ? "navbar-mobile" : ""}`}
          >
            {isMenuOpen && <div className="justify-between logo-bar">
              <div className="logo">
            <Link to="/">
              <img src="assets/img/icon.png" alt="" className="img-fluid" />
            </Link>
          </div>
          <button 
            className="cross text-gray font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
           <i className='bx bx-x'></i>
          </button></div>}
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
