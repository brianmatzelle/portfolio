import React from 'react';

const projects = [
  {
    title: 'LendaHand',
    description: 'A community outreach mobile application using React Native, awarded Best Civic Engagement Hack and Best Geo Hack at HackBU 2023.',
  },
  {
    title: 'Degrees of Separation BFS Graph',
    description: 'Implemented Breadth-first search on an adjacency list graph to determine the degrees of separation between nodes.',
  },
  {
    title: 'CS 110 - Audio Synthesizer',
    description: 'Designed an interactive keyboard-controlled audio synthesizer in Python using Tkinter library for GUI.',
  },
  {
    title: 'Quicksort Analysis Presentation',
    description: 'Analyzed and compared the performance of different Quicksort partitions using C++ and Rust.',
  },
];

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
