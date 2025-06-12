import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [text, setText] = useState("");
  const description = "A Passionate Developer who loves to code and create amazing web experiences.";
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    if (charIndex < description.length) {
      const typingEffect = setTimeout(() => {
        setText(description.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(typingEffect);
    }
  }, [charIndex, description]);

  return (
    <header style={styles.header}>
      <div style={styles.starsOverlay}></div>

      <div style={styles.content}>
        <img src="/profile.jpg" alt="Arpit Singh" style={styles.profilePic} className="profile-pic" />

        <h1 style={styles.heading}>
          Hi, I'm Arpit Singh <span style={{ fontSize: "30px" }}>👋</span>
        </h1>

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

// Styles
const styles = {
  header: {
    position: "relative",
    textAlign: "center",
    padding: "80px 20px",
    minHeight: "100vh",
    background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
    color: "white",
    overflow: "hidden",
    fontFamily: "'Orbitron', sans-serif",
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
    opacity: 0.3,
  },
  content: {
    position: "relative",
    zIndex: 2,
    margin: "auto",
    maxWidth: "700px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#00ffff",
  },
  profilePic: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "4px solid #00ffff",
    boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
    transition: "transform 0.3s ease-in-out",
  },
  typingText: {
    fontSize: "18px",
    fontWeight: "500",
    minHeight: "24px",
    color: "#fff",
  },
  cursor: {
    animation: "blink 1s infinite",
    color: "#00ffff",
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#00ffff",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
  },
};

// Additional CSS
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

  .profile-pic:hover {
    transform: scale(1.1);
  }

  .download-button:hover {
    background-color: #00cccc;
    transform: scale(1.05);
  }

  @keyframes blink {
    50% { opacity: 0; }
  }

  @keyframes moveStars {
    from { transform: translate(0, 0); }
    to { transform: translate(-50%, -50%); }
  }
`;

// Inject dynamic CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

export default Header;
