import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram} from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => (
  <footer style={styles.footer}>
    <p>
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
        onMouseOver={(e) => (e.currentTarget.style.color = '#0077b5')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#4caf50')}
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/Arpit08-coder-glitch"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#6e5494')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#4caf50')}
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:arpitsin28@gmail.com"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#d44638')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#4caf50')}
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://www.instagram.com/arpit__singh20/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#e4405f')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#4caf50')}
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://x.com/MrCoder31379098"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.iconLink}
        onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#4caf50')}
      >
        <SiX size={24} />
      </a>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    padding: '20px 10px 100px', // Increased bottom padding
    textAlign: 'center',
    marginTop: '40px',
    borderTop: '1px solid #333',
  },
  thankYou: {
    color: '#ffffff',
    marginTop: '10px',
    fontSize: '16px',
    fontStyle: 'italic',
  },
  links: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  iconLink: {
    color: '#4caf50',
    textDecoration: 'none',
    fontSize: '24px',
    transition: 'color 0.3s ease',
  },
};

export default Footer;