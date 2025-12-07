import React, { useEffect, useState, useRef } from "react";
import "./ProjectIndividual.scss";
import { useParams, useNavigate } from 'react-router-dom';
import DateComponent from '../../Shared/dateComponent';
import { projectDetailsData } from '../../../data/portfolioData';

const ProjectIndividual = () => {
const { slug } = useParams();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleKeyDown = (e) => {
  //     if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);
  
  const projectDetails = projectDetailsData.find(post => post.link === slug);
  const [cleanHTML,setContent] = useState("");
  useEffect(() => {
    fetch(projectDetails.content).then(res => res.text()).then(setContent);
  }, [projectDetails.content])
  // const cleanHTML = projectDetails.content.replace(/\n+/g,'').replace(/\s{2,}/g,' ').trim();

  if (!projectDetails) {
    navigate('/timeline');
    return null;
  }
    return (
    <article className="blog-post paddsection no-copy">
      <div className="container">
        <header className="blog-post-header">
          <h1>{projectDetails.title}</h1>
          <div className="blog-post-meta">
            <span className="date">{<DateComponent startDate={ projectDetails.date } format='mmm dd, yyyy'/>}</span>
          </div>
        </header>

        <div className="blog-post-content">
          <div 
            className="content"
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectIndividual;