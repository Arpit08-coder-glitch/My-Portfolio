import React from 'react';
import { FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => (
  <>
    <style>
      {`
        html {
          scroll-behavior: smooth;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
          }
          50% {
            box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff;
          }
          100% {
            box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
          }
        }
      `}
    </style>
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#about" style={styles.link} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
            <FaUser style={styles.icon} />
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#skills" style={styles.link} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
            <FaCode style={styles.icon} />
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#experience" style={styles.link} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
            <FaBriefcase style={styles.icon} />
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#projects" style={styles.link} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
            <FaProjectDiagram style={styles.icon} />
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.link} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
            <FaEnvelope style={styles.icon} />
          </a>
        </li>
      </ul>
    </nav>
  </>
);

const styles = {
  navbar: {
    background: 'radial-gradient(circle at center, #1b2735, #090a0f)',
    padding: '12px 20px',
    position: 'fixed',
    bottom: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '20px',
    zIndex: 1000,
    width: '90%',
    maxWidth: '500px',
    border: '1px solid #00ffff',
    boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
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
    color: '#00ffff',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 255, 255, 0.08)',
    transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
  },
  icon: {
    fontSize: '20px',
    transition: 'transform 0.3s ease',
  },
};

const hoverEffect = (e) => {
  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.2)';
  e.currentTarget.style.boxShadow = '0 0 20px #00ffff, 0 0 30px #00ffff';
  e.currentTarget.firstChild.style.transform = 'scale(1.3)';
};

const removeHoverEffect = (e) => {
  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.08)';
  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.3)';
  e.currentTarget.firstChild.style.transform = 'scale(1)';
};

export default Navbar;
