import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.pink}>Pro</span>jects
      </h2>
      <div style={styles.grid}>
        {projects.map(({ id, title, description, url, image }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <img src={image} alt={title} style={styles.image} />
            <div style={styles.cardBody}>
              <h3 style={styles.projectTitle}>{title}</h3>
              <p style={styles.projectDesc}>{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const neonPink = "#ff4ccd";

const styles = {
  section: {
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    borderRadius: 10,
    padding: "2rem 1rem",
    backgroundColor: "#121212",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    marginBottom: "4rem",
    width: "100%",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
  },
  pink: {
    color: neonPink,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    width: "100%",
  },
  card: {
    backgroundColor: "#1c1c1c",
    borderLeft: `4px solid ${neonPink}`,
    borderRadius: 10,
    overflow: "hidden",
    textDecoration: "none",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: "1.2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  projectTitle: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: neonPink,
  },
  projectDesc: {
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    lineHeight: 1.5,
    color: "#ddd",
  },
};

export default Projects;
