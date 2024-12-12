import React from "react";
import { poetryData } from "../../data/poetryData";
import PoetryCard from "./PoetryCard";
import "./Poetry.scss";
const Poetry = () => {
  return (
    <div className="mx-auto px-4 py-8" id="poetry">
      <div className="container">
        <div className="section-title">
          <h2>Poetry</h2>
        </div>
      </div>
      <div className="container flex flex-wrap">
        <div className="left-col w-[50%] flex flex-wrap">
          {poetryData.slice(0, 4).map((post, index) => (
            <PoetryCard key={index} post={post} />
          ))}
        </div>
        <div className="right-col w-[50%] flex flex-wrap flex-col">
          <div className="right-t flex flex-row">
            {poetryData.slice(4, 7).map((post, index) => (
              <PoetryCard key={index} post={post} />
            ))}
          </div>
          <div className="right-b flex flex-row">
            <div className="right-b-left">
              {poetryData.slice(7, 9).map((post, index) => (
                <PoetryCard key={index} post={post} />
              ))}
            </div>
            <div className="right-b-right flex flex-col">
              {poetryData.slice(9, 11).map((post, index) => (
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
