import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.copy}>
      © {new Date().getFullYear()} Arpit Singh. All rights reserved.
    </p>
    <div style={styles.thankYou}>
      <p>Thank you for visiting my website! I hope you found it helpful and engaging.</p>
    </div>
    <div style={styles.links}>
      <a
        href="https://www.linkedin.com/in/arpit-singh-279149168/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#00aaff')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#00ffcc')}
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/Arpit08-coder-glitch"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#a070ff')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#00ffcc')}
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:arpitsin28@gmail.com"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#ff6f61')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#00ffcc')}
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://www.instagram.com/arpit__singh20/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#ff2a68')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#00ffcc')}
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://x.com/MrCoder31379098"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#00ffcc')}
      >
        <SiX size={24} />
      </a>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#0a0a0a',
    padding: '30px 10px 100px',
    textAlign: 'center',
    borderTop: '1px solid rgba(0, 255, 255, 0.1)',
    boxShadow: '0 -5px 25px rgba(0, 255, 255, 0.1)',
  },
  copy: {
    color: '#cccccc',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },
  thankYou: {
    color: '#ffffff',
    marginTop: '12px',
    fontSize: '15px',
    fontStyle: 'italic',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6',
  },
  links: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '22px',
    flexWrap: 'wrap',
  },
  iconLink: {
    color: '#00ffcc',
    textDecoration: 'none',
    fontSize: '24px',
    transition: 'color 0.3s ease, transform 0.3s ease',
    willChange: 'transform',
  },
};

export default Footer;
