import React from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "Redux", level: 85 },
  { name: "JavaScript (ES6)", level: 90 },
  { name: "HTML5", level: 95 },
  { name: "CSS3 / Tailwind", level: 85 },
  { name: "REST API Integration", level: 80 },
  { name: "Git / SVN", level: 75 },
  { name: "Material UI / Bootstrap", level: 80 },
  { name: "Node.js", level: 70 },
];

const CoreTech = () => {
  return (
    <section id="core-tech" style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.pink}>Core</span> Tech Stack
      </h2>
      <div style={styles.skillsContainer}>
        {skills.map(({ name, level }) => (
          <div key={name} style={styles.skill}>
            <div style={styles.skillName}>{name}</div>
            <div style={styles.skillBarBackground}>
              <div
                style={{
                  ...styles.skillBarFill,
                  width: `${level}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const neonPink = "#ff4ccd";

const styles = {
  section: {
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    width: "90%",
    maxWidth: "900px",
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
  skillsContainer: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },
  skill: {
    marginBottom: "1.5rem",
  },
  skillName: {
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#ccc",
    fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
  },
  skillBarBackground: {
    backgroundColor: "#1c1c1c",
    borderRadius: "20px",
    height: "16px",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.4)",
    width: "100%",
  },
  skillBarFill: {
    height: "100%",
    backgroundColor: neonPink,
    borderRadius: "20px",
    transition: "width 0.5s ease-in-out",
  },
};

export default CoreTech;
