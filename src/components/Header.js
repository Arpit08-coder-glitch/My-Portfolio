import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [bgColor, setBgColor] = useState("#1E1E1E");

  // Function to change background color dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["#1E1E1E", "#282828", "#333", "#444"];
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header style={{ ...styles.header, backgroundColor: bgColor }}>
      <div style={styles.content}>
        <h1>
          Hi, I'm Arpit Singh <span style={{ fontSize: "30px" }}>👋</span>
        </h1>
        <p>
          A Passionate Developer <FontAwesomeIcon icon={faLaptopCode} /> who loves to code and create amazing web experiences.
        </p>
        <a href="https://drive.google.com/file/d/1ZNc1II5xuwftvPwoiqfaz4MLDcO0sj6O/view?usp=sharing" download="Arpit_Singh_Resume.pdf">
          <button style={styles.button}>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </button>
        </a>
      </div>
    </header>
  );
};

const styles = {
  header: {
    textAlign: "center",
    padding: "50px 20px",
    transition: "background-color 1s ease-in-out",
  },
  content: {
    margin: "auto",
  },
  button: {
    marginTop: "15px",
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#FF5733",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
  },
  buttonHover: {
    backgroundColor: "#E04E2A",
    transform: "scale(1.05)",
  },
};

export default Header;
