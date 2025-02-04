import React from 'react';
import { GraduationCap, Briefcase, Code, MapPin, BarChart } from 'lucide-react'; // Import Lucide icons

const AboutMe = () => (
  <section id="about" style={styles.section}>
    <h1 style={styles.heading}>About Me</h1>
    <p>
      Hi, I'm Arpit Singh, a Software Developer at QuantaSIP Pvt. Ltd. I specialize in building robust web applications, 
      data processing, and geospatial solutions. I have experience working with technologies like ReactJS, Angular, 
      Spring Boot, PostgreSQL, Firebase, and GeoServer.
    </p>
    <p>
      <GraduationCap /> I hold a B.Tech in Computer Science from Ajeenkya D Y Patil University (CGPA: 8.39/10). 
      My academic background has given me a strong foundation in software development, database management, and 
      data analytics.
    </p>
    <p>
      <Briefcase /> My professional journey includes working on diverse projects involving single-page applications, 
      REST APIs, and mobile application development. At QuantaSIP, I have contributed to multiple projects, including 
      web applications with geospatial data visualization.
    </p>
    <p>
      <Code /> My programming expertise spans across Java, C, C++, Python, JavaScript, and SQL. I am well-versed in 
      frontend and backend development, making me a versatile full-stack developer.
    </p>
    <p>
      <MapPin /> Apart from development, I have worked with GIS technologies like Leaflet, GeoServer, and mapping APIs 
      to create geospatial applications. 
    </p>
    <p>
      <BarChart /> I also have experience in data analytics and visualization using Power BI, helping businesses make 
      data-driven decisions.
    </p>
    <p>
      I am passionate about using technology to solve real-world problems, optimizing user experiences, and learning 
      new technologies to stay ahead in the ever-evolving tech landscape. Let’s connect!
    </p>
  </section>
);

const styles = {
  section: {
    padding: '40px',
    color: '#fff',
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center', // Align the icon and text horizontally
  },
};

export default AboutMe;
