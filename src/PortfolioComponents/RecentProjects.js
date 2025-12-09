import React from 'react';


const projects = [
  {
    name: 'Tech Tressure',
    description: 'Front End Drone E-commerce',
    website: 'https://charles-cs.github.io/Portfolio/TechTressure.html',
  },
  {
    name: 'The Lost Hospital',
    description: 'My first 3D Horror game, powered by Unreal Engine 5',
    website: 'https://charles-cs.github.io/Portfolio/The%20Lost%20Hospital.html',
  },
  {
    name: 'The First Domino',
    description: 'A game where the player will choose the ending they want.',
    website: 'http://127.0.0.1:5500/src/Prototype.html',
  },
  {
    name: 'DroneX',
    description: 'Full Functional E-commerce drone platform developed by 3CS-A Group 11',
    website: 'http://127.0.0.1:5500/src/index.html',
  },
];

const RecentProjects = () => {
  return (
    
    <section className="recent-projects">
      <h2>Recent Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              Visit Site →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};


export default RecentProjects;