import React from 'react';
import { Code, Cpu, Database, MapPin, Palette, Wrench, BarChart, Brain } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <Code /> },
    { name: 'C', icon: <Code /> },
    { name: 'C++', icon: <Code /> },
    { name: 'Python', icon: <Code /> },
    { name: 'HTML', icon: <Code /> },
    { name: 'CSS', icon: <Code /> },
    { name: 'JavaScript', icon: <Code /> },
    { name: 'ReactJS', icon: <Code /> },
    { name: 'Angular', icon: <Code /> },
    { name: 'NodeJS', icon: <Cpu /> },
    { name: 'Spring Boot', icon: <Cpu /> },
    { name: 'Firebase', icon: <Database /> },
    { name: 'MySQL', icon: <Database /> },
    { name: 'PostgreSQL', icon: <Database /> },
    { name: 'GeoServer', icon: <MapPin /> },
    { name: 'Android Development', icon: <Cpu /> },
    { name: 'Database Management', icon: <Database /> },
    { name: 'Data Analytics', icon: <BarChart /> },
    { name: 'Data Structures & Algorithms', icon: <Brain /> },
    { name: 'UI/UX Design', icon: <Palette /> },
    { name: 'Visual Studio Code', icon: <Wrench /> },
    { name: 'Unity 3D', icon: <Wrench /> },
    { name: 'Android Studio', icon: <Wrench /> },
    { name: 'Blender', icon: <Wrench /> },
    { name: 'Git/Github', icon: <Wrench /> },
    { name: 'Figma', icon: <Palette /> },
    { name: 'Power BI', icon: <BarChart /> },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h1 style={styles.heading}>Skills</h1>
      <ul style={styles.skillList}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.skill} className="skill-item">
            {skill.icon} <span style={styles.skillText}>{skill.name}</span>
          </li>
        ))}
      </ul>
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
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  skill: {
    backgroundColor: '#333',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  skillText: {
    marginLeft: '5px',
  }
};

// Adding hover effect using CSS-in-JS
const hoverStyle = document.createElement('style');
hoverStyle.innerHTML = `
  .skill-item:hover {
    background-color: #555;
    transform: scale(1.05);
  }
`;
document.head.appendChild(hoverStyle);

export default Skills;
