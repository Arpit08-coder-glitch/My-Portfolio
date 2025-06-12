import React from 'react';
import {
  Code,
  Cpu,
  Database,
  MapPin,
  Palette,
  Wrench,
  BarChart,
  Brain,
  Cloud
} from 'lucide-react';

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
    { name: 'Firebase Firestore', icon: <Cloud /> },
    { name: 'Firebase Realtime Database', icon: <Cloud /> },
    { name: 'Firebase Authentication', icon: <Cloud /> },
    { name: 'Firebase Hosting', icon: <Cloud /> },
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
    { name: 'Power BI', icon: <BarChart /> }
  ];

  return (
    <section id="skills" style={styles.section}>
      <h1 style={styles.heading}>🪐 Skills</h1>
      <ul style={styles.skillList}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.skill} className="skill-item">
            <span style={styles.icon}>{skill.icon}</span>
            <span style={styles.skillText}>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px 30px',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    fontFamily: 'Orbitron, sans-serif',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#00ffcc',
    textShadow: '0 0 10px #00ffcc',
  },
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    listStyle: 'none',
    padding: 0,
  },
  skill: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #00ffcc55',
    boxShadow: '0 0 10px #00ffcc33',
    padding: '12px 18px',
    borderRadius: '8px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },
  icon: {
    color: '#00ffcc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillText: {
    color: '#ffffff',
    fontWeight: 500,
  },
};

// Add hover effect via dynamic CSS
const hoverStyle = document.createElement('style');
hoverStyle.innerHTML = `
  .skill-item:hover {
    background-color: #111;
    transform: scale(1.08);
    box-shadow: 0 0 20px #00ffcc88;
  }
`;
document.head.appendChild(hoverStyle);

export default Skills;
