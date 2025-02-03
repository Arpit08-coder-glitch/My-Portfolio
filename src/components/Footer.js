import React from 'react';

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
        style={styles.link}
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Arpit08-coder-glitch"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        GitHub
      </a>
      <a
        href="mailto:arpitsin28@gmail.com"
        style={styles.link}
      >
        Email Me
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
    gap: '15px',
  },
  link: {
    color: '#4caf50',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default Footer;
