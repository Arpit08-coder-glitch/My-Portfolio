import React from 'react';
import { GraduationCap, Briefcase, Code, MapPin, BarChart } from 'lucide-react';

const AboutMe = () => (
  <section id="about" style={styles.section}>
    <div style={styles.overlay}>
      <h1 style={styles.heading}>🚀 About Me</h1>
      <p>
        Hi, I'm <strong>Arpit Singh</strong>, a Software Developer at <strong>QuantaSIP Pvt. Ltd.</strong>. I specialize in building robust web applications,
        data processing, and geospatial solutions using technologies like ReactJS, Angular, Spring Boot, PostgreSQL, Firebase, and GeoServer.
      </p>
      <p>
        <GraduationCap style={styles.icon} /> I hold a B.Tech in Computer Science from Ajeenkya D Y Patil University (CGPA: 8.39/10). This has given me a strong
        foundation in software development and analytics.
      </p>
      <p>
        <Briefcase style={styles.icon} /> I've worked on SPAs, REST APIs, and mobile apps. At QuantaSIP, I contributed to projects with geospatial data visualization.
      </p>
      <p>
        <Code style={styles.icon} /> My programming toolkit includes Java, C, C++, Python, JavaScript, and SQL. I'm a full-stack developer at heart.
      </p>
      <p>
        <MapPin style={styles.icon} /> I build geospatial applications using Leaflet, GeoServer, and mapping APIs.
      </p>
      <p>
        <BarChart style={styles.icon} /> I visualize business insights using Power BI to support data-driven decisions.
      </p>
      <p>
        I'm passionate about solving real-world problems, optimizing user experiences, and learning emerging technologies.
        Let’s connect and create something stellar! 🌌
      </p>
    </div>
  </section>
);

const styles = {
  section: {
    padding: '40px',
    color: '#fff',
    backgroundImage: `url('https://images.unsplash.com/photo-1580428185305-c9eec444b859?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    minHeight: '100vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // semi-transparent black overlay
    padding: '40px',
    borderRadius: '16px',
    backdropFilter: 'blur(4px)',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#00ffff', // neon-cyan for space effect
  },
  icon: {
    marginRight: '8px',
    color: '#00ffff',
  },
};

export default AboutMe;
