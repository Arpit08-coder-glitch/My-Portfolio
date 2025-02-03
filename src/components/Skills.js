import React from 'react';
import { Code, Cpu, Database, MapPin } from 'lucide-react'; // Import Lucide icons

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <Code /> },
    { name: 'C', icon: <Code /> },
    { name: 'C++', icon: <Code /> },
    { name: 'Python', icon: <Code /> },
    { name: 'ReactJS', icon: <Code /> },
    { name: 'NodeJS', icon: <Cpu /> },
    { name: 'Firebase', icon: <Database /> },
    { name: 'PostgreSQL', icon: <Database /> },
    { name: 'GeoServer', icon: <MapPin /> },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h1 style={styles.heading}>Skills</h1>
      <ul style={styles.skillList}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.skill}>
            {skill.icon}{skill.name} {/* Display the icon next to the skill */}
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
  },
};

export default Skills;
