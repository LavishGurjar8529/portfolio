// src/components/Education.js
import React from 'react';
import './Education.css';

const educationDetails = [
  {
    institution: 'University of Example',
    degree: 'Bachelor of Science in Computer Science',
    period: '2018 - 2022',
    description: 'Graduated with honors, focused on software engineering and data science.'
  },
  {
    institution: 'Example High School',
    degree: 'High School Diploma',
    period: '2014 - 2018',
    description: 'Valedictorian, participated in various extracurricular activities including the science club and the coding team.'
  }
];

const Education = () => {
  return (
    <div className="container">
      <h1>Education</h1>
      {educationDetails.map((item, index) => (
        <div className="education-item" key={index}>
          <h2>{item.institution}</h2>
          <p><strong>{item.degree}</strong></p>
          <p>{item.period}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
