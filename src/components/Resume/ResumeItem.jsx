import React from "react";
import "./Resume.scss";
import DateComponent from "../Shared/dateComponent";

const ResumeItem = ({ exp }) => {
  if (!exp) return null;

  return (
    <div className="resume-item">
      <h4>{exp.title}</h4>
      {(exp.startDate || exp.endDate) && 
      <h5>{<DateComponent startDate={exp.startDate} endDate={exp.endDate} format='mm yy'/>}
      </h5>}
      {exp.para && exp.para.length > 0 && 
        exp.para.map((p, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: p}}></p>
        ))
      }
      <ul>
        {exp.bullets && exp.bullets.length > 0 && 
          exp.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default ResumeItem;