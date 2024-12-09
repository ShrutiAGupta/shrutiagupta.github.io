import React from 'react';
import { poetryData } from '../../data/poetryData';
import PoetryCard from './PoetryCard';
import './Poetry.scss';
const Poetry = () => {
  return (
      <div className="mx-auto px-4 py-8">
        <div className="container">
        <div className="section-title">
          <h2>Poetry</h2>
        </div>
        </div>
        <div className="container flex flex-wrap">
        {poetryData.map((post, index) => (
          <PoetryCard key={index} {...post} />
        ))}
      </div>
      </div>
  );
};

export default Poetry;