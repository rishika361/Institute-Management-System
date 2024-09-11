// src/Faculty.js
import React from 'react';

const Faculty = ({ faculty }) => {
  return (
    <div className="faculty">
      <img src={faculty.image} alt={`${faculty.name}'s photo`} /> 
      <div className="faculty-info">
        <h3>{faculty.name}</h3>
        <p><strong>Title:</strong> {faculty.title}</p>
        <p>{faculty.bio}</p>
      </div>
    </div>
  );
};

export default Faculty;
