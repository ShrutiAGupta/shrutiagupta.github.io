import React from "react";
import {
  extracurriculars,
  experiences,
  education,
} from "../../data/resumeItems";
import ResumeItem from "./ResumeItem";
import "./Resume.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume py-12">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/2 px-4">
            <div>
              <h3 className="resume-title">Education</h3>
              {education?.map((experience, index) => (
                <ResumeItem key={index} exp={experience} />
              ))}
            </div>
            <div>
              <h3 className="resume-title">Professional Experience</h3>
              {experiences?.map((experience, index) => (
                <ResumeItem key={index} exp={experience} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 px-4">
            <div>
              <h3 className="resume-title">Extra-Curriculars</h3>
              {extracurriculars?.map((extracurricular, index) => (
                <ResumeItem key={index} exp={extracurricular} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
