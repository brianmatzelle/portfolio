import React from 'react';
import resumePDF from './resume.pdf';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        <a href={resumePDF} download="Brian_Matzelle_Resume.pdf">
          Download Resume (PDF)
        </a>
      </p>
    </div>
  );
};

export default Resume;
