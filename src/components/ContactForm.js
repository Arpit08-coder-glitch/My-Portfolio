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
      <h1 style={styles.heading}>Contact Me</h1>
      {isSubmitted ? (
        <motion.p 
          style={styles.successMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >Thank you for reaching out! 🎉</motion.p>
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
          >
            Send ✉️
          </motion.button>
        </form>
      )}
    </motion.section>
  );
};

const styles = {
  section: {
    padding: '40px',
    color: '#fff',
    backgroundColor: '#121212',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: 'bold',
  },
  icon: {
    color: '#4caf50',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #4caf50',
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #4caf50',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    minHeight: '100px',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  successMessage: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#4caf50',
  },
};

export default ContactForm;
