import React from 'react';

const Navbar = () => (
  <nav style={styles.navbar}>
    <ul style={styles.navList}>
      <li><a href="#about" style={styles.link}>About Me</a></li>
      <li><a href="#skills" style={styles.link}>Skills</a></li>
      <li><a href="#experience" style={styles.link}>Experience</a></li>
      <li><a href="#projects" style={styles.link}>Projects</a></li>
      <li><a href="#contact" style={styles.link}>Contact</a></li>
    </ul>
  </nav>
);

const styles = {
  navbar: {
    backgroundColor: '#1a1a1a',
    padding: '10px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

export default Navbar;
