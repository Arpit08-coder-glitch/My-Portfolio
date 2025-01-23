import React from 'react';

const Skills = () => {
  const skills = ['Java', 'C', 'C++', 'Python', 'ReactJS', 'NodeJS', 'Firebase', 'PostgreSQL', 'GeoServer'];

  return (
    <section id="skills" style={styles.section}>
      <h1 style={styles.heading}>Skills</h1>
      <ul style={styles.skillList}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.skill}>{skill}</li>
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
  },
};

export default Skills;
