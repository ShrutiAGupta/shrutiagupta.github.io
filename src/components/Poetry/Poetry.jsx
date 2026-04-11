import React from "react";
import { poetryData } from "../../data/poetryData";
import PoetryCard from "./PoetryCard";
import "./Poetry.scss";
const Poetry = () => {
  return (
    <div id="poetry">
      <div className="container">
        <div className="section-title">
          <h2>Poetry</h2>
        </div>
        <span className="flex italic self-center w-fit mx-auto mb-4">
          Hover over images to reveal poems · Click to read
        </span>
      </div>
      <div className="poetry-grid">
        {poetryData.map((post, index) => (
          <PoetryCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Poetry;
