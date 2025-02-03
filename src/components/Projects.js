import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
