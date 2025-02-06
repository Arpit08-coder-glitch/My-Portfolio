import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [bgColor, setBgColor] = useState("#1E1E1E");
  const [text, setText] = useState("");
  const description = "A Passionate Developer who loves to code and create amazing web experiences.";
  const [charIndex, setCharIndex] = useState(0);

  // Background color animation
  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["#1E1E1E", "#282828", "#333", "#444"];
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Typing animation for description
  useEffect(() => {
    if (charIndex < description.length) {
      const typingEffect = setTimeout(() => {
        setText(description.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100); // Speed of typing

      return () => clearTimeout(typingEffect);
    }
  }, [charIndex, description]);

  return (
    <header style={{ ...styles.header, backgroundColor: bgColor }}>
      <div style={styles.content}>
        {/* Profile Picture with Animation */}
        <img src="/profile.jpg" alt="Arpit Singh" style={styles.profilePic} className="profile-pic" />

        <h1>
          Hi, I'm Arpit Singh <span style={{ fontSize: "30px" }}>👋</span>
        </h1>

        {/* Typing animation for the description */}
        <p style={styles.typingText}>
          {text} <FontAwesomeIcon icon={faLaptopCode} />
          <span style={styles.cursor}>|</span>
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1ZNc1II5xuwftvPwoiqfaz4MLDcO0sj6O"
          download="Arpit_Singh_Resume.pdf"
        >
          <button style={styles.button} className="download-button">
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
  profilePic: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "4px solid white",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
  },
  typingText: {
    fontSize: "18px",
    fontWeight: "500",
    minHeight: "24px", // Prevents shifting when animating
  },
  cursor: {
    animation: "blink 1s infinite",
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
};

// Adding CSS Animations
const css = `
  .profile-pic:hover {
    transform: scale(1.1);
  }
  
  .download-button:hover {
    background-color: #E04E2A;
    transform: scale(1.05);
  }
  
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

// Adding the styles dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

export default Header;
