import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'QuantaSIP Pvt. Ltd.',
      duration: 'April 2024 - Present',
      responsibilities: [
        'Developed single-page applications with ReactJS and Leaflet.',
        'Implemented automation scripts for image processing and web scraping.',
        'Worked on web applications with OTP-based login and PostgreSQL database.',
      ],
    },
    {
      role: 'Data Analyst Intern',
      company: 'Friends Union for Energizing Lives',
      duration: 'June 2022 - July 2022',
      responsibilities: [
        'Analyzed data to propose solutions for improving project efficiency.',
        'Created interactive dashboards and reports using Power BI.',
        'Gathered data from Excel, SQL databases, and cloud storage for visualizations.',
      ],
    },
  ];

  return (
    <section id="experience" style={styles.section}>
      <h1 style={styles.heading}>Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} style={styles.exp}>
          <h2>{exp.role} at {exp.company}</h2>
          <p><em>{exp.duration}</em></p>
          <ul>
            {exp.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
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
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  exp: {
    marginBottom: '20px',
  },
};

export default Experience;
