import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';



const App = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      <Header />
      <main style={styles.main}>
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#121212',
    color: '#fff',
    minHeight: '100vh',
  },
  main: {
    padding: '0 20px',
  },
};

export default App;
