import React, { useState, useEffect } from "react";
import './Footer.scss';

const Footer = () => {
const [isTransparent, setIsTransparent] = useState(false);
  useEffect(() => {
      const enable = () => setIsTransparent(true);
      const disable = () => setIsTransparent(false);
  
      window.addEventListener("enableTransparentFooter", enable);
      window.addEventListener("disableTransparentFooter", disable);
  
      return () => {
        window.removeEventListener("enableTransparentFooter", enable);
        window.removeEventListener("disableTransparentFooter", disable);
      };
    }, []);

  return (
    <footer id="footer" className={[
        "footer", // base class (important)
        isTransparent ? "transparent-footer" : "",
      ].join(" ")}
      >
      <div className="container mx-auto px-4">
        <div className="copyright">
          &copy; Copyright by Shruti Gupta. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;