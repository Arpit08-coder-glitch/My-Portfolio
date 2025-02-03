import React from 'react';
import { GraduationCap } from 'lucide-react'; // Import Lucide icons

const AboutMe = () => (
  <section id="about" style={styles.section}>
    <h1 style={styles.heading}>About Me</h1> {/* Add the User icon for profile */}
    <p>
      Hi, I'm Arpit Singh, a Software Developer at QuantaSIP Pvt. Ltd. I specialize in building robust web applications, data processing, and geospatial solutions.
    </p>
    <p>
      With a <GraduationCap /> B.Tech in Computer Science from Ajeenkya D Y Patil University (CGPA: 8.39/10), I have a solid foundation in software engineering principles and technologies.
    </p>
    <p>
      I am passionate about using technology to solve real-world problems. Let’s connect!
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
