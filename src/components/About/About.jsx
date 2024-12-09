import React from 'react';
import Me from '../Home/Me/Me'
const About = () => {
  return (
      <div className="container mx-auto px-4 py-8">
        <div className="section-title">
          <h2>About</h2>
          <Me />
        </div>
        {/* Your page content */}
      </div>
  );
};

export default About;