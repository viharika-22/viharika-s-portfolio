import React, { useState } from "react";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostman,
  SiGit,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
} from "react-icons/si";


const neonPink = "#ff4ccd";

// Map each tech to an icon and optional color
const skills = [
  { name: "React", icon: <SiReact size={48} color="#61DBFB" /> },
  { name: "Redux", icon: <SiRedux size={48} color="#764abc" /> },
  { name: "JavaScript (ES6)", icon: <SiJavascript size={48} color="#F7DF1E" /> },
  { name: "HTML5", icon: <SiHtml5 size={48} color="#e34c26" /> },
  { name: "CSS3 / Tailwind", icon: <SiTailwindcss size={48} color="#38BDF8" /> },
  { name: "REST API Integration", icon: <SiPostman size={48} color="#FF6C37" /> },
  { name: "Git / SVN", icon: <SiGit size={48} color="#F1502F" /> },
  { name: "Material UI / Bootstrap", icon: <SiMui size={48} color="#007FFF" /> },
  { name: "Node.js", icon: <SiNodedotjs size={48} color="#68A063" /> },
];

const CoreTech = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="core-tech" style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.pink}>Core</span> Tech Stack
      </h2>
      <div style={styles.grid}>
        {skills.map(({ name, icon }, index) => (
          <div
            key={name}
            style={{
              ...styles.tile,
              ...(hovered === index ? styles.tileHover : {}),
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.iconContainer}>{icon}</div>
            <span style={styles.tileText}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    width: "100%",
    maxWidth: "1200px",
    margin: "3rem auto 4rem",
    padding: "2rem 1rem",
    backgroundColor: "#121212",
    color: "#fff",
    borderRadius: 10,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
  },
  pink: {
    color: neonPink,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    maxWidth: "900px",
    margin: "0 auto",
  },
  tile: {
    backgroundColor: "#1c1c1c",
    border: `2px solid ${neonPink}`,
    borderRadius: "12px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  tileHover: {
    boxShadow: `0 0 10px ${neonPink}, 0 0 20px ${neonPink}`,
    transform: "translateY(-5px)",
  },
  iconContainer: {
    marginBottom: "0.75rem",
  },
  tileText: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#fff",
  },
};

export default CoreTech;
