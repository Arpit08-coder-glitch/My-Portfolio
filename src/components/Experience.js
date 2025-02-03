import React from 'react';
import { Code, BarChart2, FileText } from 'lucide-react'; // Import Lucide icons

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'QuantaSIP Pvt. Ltd.',
      duration: 'April 2024 - Present',
      responsibilities: [
        { text: 'Developed single-page applications with ReactJS and Leaflet.', icon: <Code /> },
        { text: 'Implemented automation scripts for image processing and web scraping.', icon: <FileText /> },
        { text: 'Worked on web applications with OTP-based login and PostgreSQL database.', icon: <Code /> },
      ],
    },
    {
      role: 'Data Analyst Intern',
      company: 'Friends Union for Energizing Lives',
      duration: 'June 2022 - July 2022',
      responsibilities: [
        { text: 'Analyzed data to propose solutions for improving project efficiency.', icon: <BarChart2 /> },
        { text: 'Created interactive dashboards and reports using Power BI.', icon: <BarChart2 /> },
        { text: 'Gathered data from Excel, SQL databases, and cloud storage for visualizations.', icon: <FileText /> },
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
              <li key={i} style={styles.listItem}>
                {res.icon} {res.text} {/* Display the icon next to the text */}
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
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  exp: {
    marginBottom: '20px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '16px',
  },
};

export default Experience;
