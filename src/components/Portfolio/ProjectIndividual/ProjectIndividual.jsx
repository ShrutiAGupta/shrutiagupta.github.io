import React, { useEffect, useState, useRef } from "react";
import "./ProjectIndividual.scss";
import { useParams, useNavigate } from "react-router-dom";
import DateComponent from "../../Shared/dateComponent";
import { projectDetailsData } from "../../../data/timelineData";

const ProjectIndividual = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectDetails = projectDetailsData.find((post) => post.link === slug);
  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.classList.add("project-individual");
      document.body.classList.add("project-individual");
    }
  }, []);

  useEffect(() => {
    window.dispatchEvent(new Event("enableTransparentHeader"));
    window.dispatchEvent(new Event("enableTransparentFooter"));
    return () => {
      window.dispatchEvent(new Event("disableTransparentHeader"));
      window.dispatchEvent(new Event("disableTransparentFooter"));
    };
  }, []);

  if (!projectDetails) {
    navigate("/timeline");
    return null;
  }
  return (
    <article className="paddsection no-copy">
      <div className="">{projectDetails.element}</div>
    </article>
  );
};

export default ProjectIndividual;
