import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:arpitsin28@gmail.com?subject=Contact Form Submission from ${formData.name}&body=${formData.message}`;

    // Open the default email client with prefilled details
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" style={styles.section}>
      <h1 style={styles.heading}>Contact Me</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px',
    color: '#fff',
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #4caf50',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #4caf50',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ContactForm;
