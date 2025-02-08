import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import BhuQuantaImage from './images/BhuQuanta.png';
import ParkingImage from './images/Parking.png';

const Projects = () => {
  const projects = [
    {
      name: 'BhuQuanta',
      description:
        'A web application built with ReactJS and GeoServer for geospatial data visualization, integrating an OTP-based login and PostgreSQL database.',
      technologies: ['ReactJS', 'GeoServer', 'PostgreSQL', 'Leaflet'],
      link: 'http://bhuquanta.quantasip.com/',
      image: BhuQuantaImage,
    },
    {
      name: 'Parking Data Management System',
      description:
        'An Angular and Spring Boot-based parking management system, utilizing GeoServer and PostgreSQL for real-time parking tracking and data analytics.',
      technologies: ['Angular', 'Spring Boot', 'GeoServer', 'PostgreSQL'],
      link: 'http://waytest.quantasip.com/way/user/editor',
      image: ParkingImage,
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
      
      <div style={styles.gridContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={project.image} alt={project.name} style={styles.image} />
            <div style={styles.details}>
              <h2 style={styles.projectTitle}>{project.name}</h2>
              <p style={styles.description}>{project.description}</p>
              <p style={styles.technologies}>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                View Project <ExternalLink size={16} style={styles.icon} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
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
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    width: '400px',
    backgroundColor: '#242424',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  details: {
    marginTop: '10px',
  },
  projectTitle: {
    fontSize: '20px',
    color: '#4caf50',
  },
  description: {
    fontSize: '14px',
    margin: '10px 0',
    lineHeight: '1.5',
  },
  technologies: {
    fontSize: '13px',
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
    justifyContent: 'center',
  },
  icon: {
    marginLeft: '5px',
  },
};

export default Projects;
