import React from 'react';
import { Code, BarChart2, FileText, Database, Cpu, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'QuantaSIP Pvt. Ltd.',
      duration: 'April 2024 - Present',
      responsibilities: [
        { text: 'Developed single-page applications with ReactJS and Leaflet.', icon: <Code color="#00ffff" size={18} /> },
        { text: 'Implemented automation scripts for image processing and web scraping using Python.', icon: <FileText color="#00ffff" size={18} /> },
        { text: 'Worked on web applications with OTP-based login and PostgreSQL database.', icon: <Database color="#00ffff" size={18} /> },
        { text: 'Integrated GeoServer for GIS data visualization.', icon: <MapPin color="#00ffff" size={18} /> },
        { text: 'Built RESTful APIs using NodeJS and Spring Boot.', icon: <Cpu color="#00ffff" size={18} /> },
      ],
    },
    {
      role: 'Data Analyst Intern',
      company: 'Friends Union for Energizing Lives',
      duration: 'June 2022 - July 2022',
      responsibilities: [
        { text: 'Analyzed data to propose solutions for improving project efficiency.', icon: <BarChart2 color="#00ffff" size={18} /> },
        { text: 'Created interactive dashboards and reports using Power BI.', icon: <BarChart2 color="#00ffff" size={18} /> },
        { text: 'Gathered data from Excel, SQL databases, and cloud storage for visualizations.', icon: <FileText color="#00ffff" size={18} /> },
        { text: 'Performed data transformation and modeling for insightful analytics.', icon: <Database color="#00ffff" size={18} /> },
      ],
    },
  ];

  return (
    <section id="experience" style={styles.section}>
      <h1 style={styles.heading}>Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} style={styles.exp}>
          <h2 style={styles.role}>{exp.role}</h2>
          <h3 style={styles.company}>{exp.company}</h3>
          <p style={styles.duration}><em>{exp.duration}</em></p>
          <ul style={styles.list}>
            {exp.responsibilities.map((res, i) => (
              <li key={i} style={styles.listItem}>
                <span style={styles.icon}>{res.icon}</span>
                <span style={styles.text}>{res.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    color: '#fff',
    background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
    borderRadius: '12px',
    boxShadow: '0 0 30px rgba(0,255,255,0.1)',
    margin: 'auto',
    maxWidth: '900px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#00ffff',
    textAlign: 'center',
    borderBottom: '2px solid rgba(0,255,255,0.3)',
    paddingBottom: '10px',
    fontWeight: '600',
  },
  exp: {
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px dashed rgba(255,255,255,0.2)',
  },
  role: {
    fontSize: '22px',
    color: '#00e6e6',
  },
  company: {
    fontSize: '18px',
    color: '#ffffff',
    marginTop: '4px',
  },
  duration: {
    fontSize: '14px',
    color: '#aaa',
    marginBottom: '10px',
  },
  list: {
    paddingLeft: '0px',
    listStyle: 'none',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
    backgroundColor: 'rgba(0,255,255,0.05)',
    padding: '10px',
    borderRadius: '6px',
    transition: 'background 0.3s ease',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#ddd',
    fontSize: '15px',
    lineHeight: '1.4',
  },
};

export default Experience;
