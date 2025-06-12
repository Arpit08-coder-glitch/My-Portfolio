import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:arpitsin28@gmail.com?subject=Contact Form Submission from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      style={styles.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={styles.starsOverlay}></div>

      <h1 style={styles.heading}>Contact Me</h1>

      {isSubmitted ? (
        <motion.p
          style={styles.successMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Thank you for reaching out! 🚀
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}><User size={16} style={styles.icon} /> Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your name"
            required
          />

          <label style={styles.label}><Mail size={16} style={styles.icon} /> Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your email"
            required
          />

          <label style={styles.label}><MessageCircle size={16} style={styles.icon} /> Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            placeholder="Your message here..."
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={styles.button}
            className="space-btn"
          >
            Send 🚀
          </motion.button>
        </form>
      )}
    </motion.section>
  );
};

// Styles
const styles = {
  section: {
    position: 'relative',
    padding: '60px 20px',
    color: '#fff',
    background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
    borderRadius: '12px',
    boxShadow: '0 0 40px rgba(0, 255, 255, 0.1)',
    overflow: 'hidden',
    fontFamily: "'Orbitron', sans-serif",
    zIndex: 1,
  },
  starsOverlay: {
    position: "absolute",
    width: "200%",
    height: "200%",
    top: 0,
    left: 0,
    backgroundImage: "url('https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/media/stars.png')",
    backgroundRepeat: "repeat",
    animation: "moveStars 60s linear infinite",
    zIndex: 0,
    opacity: 0.25,
  },
  heading: {
    fontSize: '30px',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#00ffff',
    zIndex: 2,
    position: 'relative',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    position: 'relative',
    zIndex: 2,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#00ffff',
  },
  icon: {
    color: '#00ffff',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #00ffff',
    backgroundColor: '#101820',
    color: '#fff',
    fontSize: '16px',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #00ffff',
    backgroundColor: '#101820',
    color: '#fff',
    fontSize: '16px',
    minHeight: '100px',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#00ffff',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
    transition: 'all 0.3s ease-in-out',
  },
  successMessage: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#00ff99',
    zIndex: 2,
    position: 'relative',
  },
};

// Inject additional CSS
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

  @keyframes moveStars {
    from { transform: translate(0, 0); }
    to { transform: translate(-50%, -50%); }
  }

  .space-btn:hover {
    background-color: #00cccc;
    transform: scale(1.05);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

export default ContactForm;
