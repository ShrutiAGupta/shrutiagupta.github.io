import React from "react";
import { poetryData } from "../../data/poetryData";
import PoetryCard from "./PoetryCard";
import "./Poetry.scss";
const Poetry = () => {
  return (
    <div className="mx-auto" id="poetry">
      <div className="container">
        <div className="section-title">
          <h2>Poetry</h2>
        </div>
        <span className="flex italic self-center w-fit mx-auto mb-4">Hover over images to reveal poems • Click to read</span>
      </div>
      <div className="container flex flex-wrap sm:flex-col md:flex-row">
        <div className="left-col w-full flex flex-wrap sm:w-full md:w-[50%] lg:w-[50%]">
          {poetryData.slice(0, 4).map((post, index) => (
            <PoetryCard key={index} post={post} />
          ))}
        </div>
        <div className="right-col w-full flex flex-wrap sm:w-full md:w-[50%] lg:w-[50%] flex-col">
          <div className="right-t flex flex-row">
            {poetryData.slice(4, 7).map((post, index) => (
              <PoetryCard key={index} post={post} />
            ))}
          </div>
          <div className="right-b flex flex-row">
            <div className="right-b-left">
              {poetryData.slice(7, 8).map((post, index) => (
                <PoetryCard key={index} post={post} />
              ))}
            </div>
            <div className="right-b-right flex flex-col">
              {poetryData.slice(8, 10).map((post, index) => (
                <PoetryCard key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poetry;
