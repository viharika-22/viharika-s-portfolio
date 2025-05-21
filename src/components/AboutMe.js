import React from "react";
import myPhoto from '../assets/myPhoto.jpeg';
import {
  FaLocationArrow,
  FaBirthdayCake,
  FaFlag,
  FaLaptop,
  FaGraduationCap,
  FaBuilding,
} from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.pink}>Ab</span>out me
      </h2>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <p style={styles.paragraph}>
            I’m a Front-End Developer with 3+ years of building fast, scalable web apps using React, Redux, and REST APIs—aka the front-end dream team.
          </p>
          <p style={styles.paragraph}>
            I’m all about creating clean, responsive UIs that work seamlessly across devices. I’ve worked on high-impact projects in telecom and enterprise, where performance and accessibility are key.
          </p>
          <p style={styles.paragraph}>
            I thrive in Agile teams, where collaboration and continuous learning are at the core of building great products.
          </p>
          <p style={styles.paragraph}>
            Outside of work, I’m usually reading, planning my next trip, or exploring new dev tools.
          </p>

          <div style={styles.infoGrid}>
            <div style={styles.infoItem}><FaLocationArrow /> <strong>Location:</strong> Bengaluru, India</div>
            <div style={styles.infoItem}><FaFlag /> <strong>Nationality:</strong> Indian</div>
            <div style={styles.infoItem}><FaGraduationCap /> <strong>Study:</strong> GITAM University</div>
            <div style={styles.infoItem}><FaBuilding /> <strong>Employment:</strong> TCS</div>
            <div style={styles.infoItem}><FaLaptop /> <strong>Interests:</strong> UI design, Travel, Creative</div>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={myPhoto}
            alt="About Me"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

const neonPink = "#ff4ccd";

const styles = {
  section: {
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    borderRadius: 10,
    padding: "2rem",
    backgroundColor: "#121212",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  pink: {
    color: neonPink,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2a2a2a",
    borderRadius: "20px",
    padding: "2rem",
    gap: "2rem",
    boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
    flexWrap: "wrap",
  },
  textContainer: {
    flex: "2 1 60%",
    minWidth: "280px",
  },
  paragraph: {
    marginBottom: "1.2rem",
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#ddd",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#ccc",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  imageContainer: {
    flex: "1 1 30%",
    minWidth: "220px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: "20px",
    width: "100%",
    maxWidth: "280px",
    objectFit: "cover",
    boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
  },
};

export default AboutMe;
