import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import BhuQuantaImage from './images/BhuQuanta.png';
import QuantasipImage from './images/Quantasip.png';

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
      name: 'Quantasip',
      description:
        'Official website for Quantasip, showcasing services, products, and solutions in geospatial technology and data analytics. Built with modern web technologies for performance and accessibility.',
      technologies: ['ReactJS', 'Tailwind CSS', 'Vercel'],
      link: 'https://quantasip.com/',
      image: QuantasipImage,
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
        🚀 Projects
      </motion.h1>

      <div style={styles.gridContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00ffcc' }}
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
    padding: '50px 30px',
    color: '#ffffff',
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    fontFamily: 'Orbitron, sans-serif',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#00ffcc',
    textShadow: '0 0 10px #00ffcc',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  card: {
    width: '360px',
    backgroundColor: '#1a1a1a',
    border: '1px solid rgba(0, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    marginBottom: '15px',
    border: '2px solid #00ffcc',
  },
  details: {
    marginTop: '10px',
  },
  projectTitle: {
    fontSize: '22px',
    color: '#00ffcc',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#dddddd',
  },
  technologies: {
    fontSize: '13px',
    color: '#aaaaaa',
    margin: '10px 0',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#00ffcc',
    textDecoration: 'none',
    fontWeight: 'bold',
    border: '1px solid #00ffcc',
    borderRadius: '6px',
    padding: '6px 12px',
    transition: 'all 0.3s ease',
  },
  icon: {
    marginLeft: '5px',
  },
};

export default Projects;
