/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Cube.scss';

const Cube = () => {
  return (
    <div className="wrapper">
      <div className="container">
        {[...Array(6)].map((_, index) => (
          <div
            className="wall"
            key={index}
            style={{ transform: `translateZ(${(index - 3) * 10}vmin)` }}
          >
            <div className="surface" />
            <div className="surface" />
            <div className="left" />
            <div className="top" />
          </div>
        ))}
        <div className="ball-container">
          <div className="ball" />
        </div>
      </div>
    </div>
  );
};

export default Cube;
