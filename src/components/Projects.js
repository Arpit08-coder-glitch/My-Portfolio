import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'BhuQuanta',
      description: 'A comprehensive web application built with ReactJS and GeoServer, designed for geospatial data visualization. The project integrates an OTP-based login system for secure access and uses PostgreSQL for efficient database management. Users can interact with maps, overlay different geospatial layers, and analyze geographic trends dynamically.',
      technologies: ['ReactJS', 'GeoServer', 'PostgreSQL', 'Leaflet'],
      link: 'http://bhuquanta.quantasip.com/',
    },
    {
      name: 'Parking Data Management System',
      description: 'An advanced web application developed using Angular and Spring Boot, aimed at optimizing parking space management. This project leverages GeoServer for displaying geospatial data and PostgreSQL for maintaining a structured database. The system supports real-time parking spot tracking, data analytics, and user-friendly dashboards for seamless management.',
      technologies: ['Angular', 'Spring Boot', 'GeoServer', 'PostgreSQL'],
      link: 'http://waytest.quantasip.com/way/user/editor',
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <motion.h1 
        style={styles.heading} 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          style={styles.project}
          whileHover={{ scale: 1.05, backgroundColor: '#2a2a2a' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 style={styles.projectTitle}>{project.name}</h2>
          <p style={styles.description}>{project.description}</p>
          <p style={styles.technologies}><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
            View Project <ExternalLink size={16} style={styles.icon} />
          </a>
        </motion.div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    color: '#fff',
    backgroundColor: '#1a1a1a',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '30px',
    textAlign: 'center',
  },
  project: {
    padding: '20px',
    backgroundColor: '#242424',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s ease',
  },
  projectTitle: {
    fontSize: '24px',
    color: '#4caf50',
  },
  description: {
    fontSize: '16px',
    margin: '10px 0',
    lineHeight: '1.6',
  },
  technologies: {
    fontSize: '14px',
    color: '#bbb',
    marginBottom: '10px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#4caf50',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: '5px',
  },
};

export default Projects;