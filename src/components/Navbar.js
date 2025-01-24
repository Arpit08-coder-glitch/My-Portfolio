import React from 'react';
import { FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => (
  <>
    <style>
      {`
        html {
          scroll-behavior: smooth; /* Smooth scrolling */
        }
      `}
    </style>
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#about" style={styles.link} onMouseEnter={(e) => hoverEffect(e)} onMouseLeave={(e) => removeHoverEffect(e)}>
            <FaUser style={styles.icon} />
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#skills" style={styles.link} onMouseEnter={(e) => hoverEffect(e)} onMouseLeave={(e) => removeHoverEffect(e)}>
            <FaCode style={styles.icon} />
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#experience" style={styles.link} onMouseEnter={(e) => hoverEffect(e)} onMouseLeave={(e) => removeHoverEffect(e)}>
            <FaBriefcase style={styles.icon} />
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#projects" style={styles.link} onMouseEnter={(e) => hoverEffect(e)} onMouseLeave={(e) => removeHoverEffect(e)}>
            <FaProjectDiagram style={styles.icon} />
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.link} onMouseEnter={(e) => hoverEffect(e)} onMouseLeave={(e) => removeHoverEffect(e)}>
            <FaEnvelope style={styles.icon} />
          </a>
        </li>
      </ul>
    </nav>
  </>
);

const styles = {
  navbar: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)', // Translucent background
    padding: '10px 20px',
    position: 'fixed',
    bottom: 10, // Position at the bottom
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '20px', // Rounded corners
    zIndex: 1000,
    width: '90%', // Optional: Adjust width for responsiveness
    maxWidth: '500px', // Optional: Limit width on larger screens
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Optional: Add some shadow
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    flex: 1,
    textAlign: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    width: '50px',
    borderRadius: '50%', // Rounded button effect
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light translucent background for icons
    transition: 'transform 0.3s, background-color 0.3s', // Smooth hover animations
  },
  icon: {
    fontSize: '20px',
    transition: 'transform 0.3s', // Smooth scale for hover effect
  },
};

const hoverEffect = (e) => {
  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  e.target.firstChild.style.transform = 'scale(1.2)';
};

const removeHoverEffect = (e) => {
  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  e.target.firstChild.style.transform = 'scale(1)';
};

export default Navbar;
