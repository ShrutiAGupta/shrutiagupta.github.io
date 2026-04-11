import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useActiveSection } from "../../../context/ActiveSectionContext"; // Update path
// import ScrollToTop from "../../../hooks/scrollToTop";
import { routerLinks } from "../navigationLnks";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSection(); // Get both values from context
  const [isScrolled, setisScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransparent, setIsTransparent] = useState(false);
  const showTranslucent = isTransparent && isScrolled;
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setisScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    // const header =
    // document.querySelector("#header") || document.querySelector("header");
    // return () =>
    // {
    //   if ((location.pathname !== '/' && location.pathname !== '/#hero') && header.classList.contains("header-scrolled")) {
    //   header.classList.remove("header-scrolled");
    // }
    //   window.removeEventListener("scroll", handleScroll);
    // }
  }); // Add setActiveSection to dependencies

  useEffect(() => {
    const enable = () => setIsTransparent(true);
    const disable = () => setIsTransparent(false);

    window.addEventListener("enableTransparentHeader", enable);
    window.addEventListener("disableTransparentHeader", disable);

    return () => {
      window.removeEventListener("enableTransparentHeader", enable);
      window.removeEventListener("disableTransparentHeader", disable);
    };
  }, []);

  const navItems = routerLinks.filter((item) => item.showOnNavbar == true);

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
      className={[
        "header", // base class (important)
        isScrolled ? "header-scrolled" : "header-not-scrolled",
        isTransparent ? "transparent-header" : "",
        showTranslucent && "header-translucent",
      ].join(" ")}
    >
      <div className="container mx-auto px-4 h-[100%]">
        <div className="flex w-full header-nav h-full">
          <div className="logo h-full">
            <Link to="/">
              <img
                src="/assets/img/icon.png"
                alt=""
                className="logo-img-fluid flex max-h-[100%]"
              />
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
            {isMenuOpen && (
              <div className="justify-between logo-bar">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="assets/img/icon.png"
                      alt=""
                      className="logo-img-fluid flex max-h-[100%]"
                    />
                  </Link>
                </div>
                <button
                  className="cross font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="bx bx-x"></i>
                </button>
              </div>
            )}
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
