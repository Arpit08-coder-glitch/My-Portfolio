import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'BhuQuanta',
      description: 'A web app built with ReactJS and GeoServer to display map data with OTP-based login.',
      link: 'http://bhuquanta.quantasip.com/',
    },
    {
      name: 'Parking Data Management System',
      description: 'A web app using Angular, Spring Boot, and GeoServer for parking management.',
      link: 'http://waytest.quantasip.com/way/user/editor',
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h1 style={styles.heading}>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={styles.project}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    color: '#fff',
    backgroundColor: '#1a1a1a',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  project: {
    marginBottom: '20px',
  },
  link: {
    color: '#4caf50',
    textDecoration: 'none',
  },
};

export default Projects;
