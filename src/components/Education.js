import React from "react";

const Education = () => {
  const educationData = [
  {
    yearRange: "2017 - 2021",
    institution: "GITAM University",
    title: "Bachelor of Technology - Computer Science and Engineering",
    description: `Graduated with a focus on core computing subjects including data structures, operating systems, and web technologies. Developed multiple academic projects and participated in technical fests and coding challenges.`,
  },
  {
    yearRange: "Ongoing / Self-Learning",
    institution: "Online Courses & Certifications",
    title: "Web Development & Front-End Technologies",
    description: `Continuously improving skills through platforms like Udemy, freeCodeCamp, and Coursera on topics such as React.js, API Integration, and modern JavaScript practices.`,
  },
];


  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.pink}>Edu</span>cation
      </h2>
      {educationData.map((edu, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.badge}>{edu.yearRange}</div>
          <p style={styles.institution}>{edu.institution}</p>
          <h3 style={styles.title}>{edu.title}</h3>
          <p style={styles.description}>{edu.description}</p>
        </div>
      ))}
    </section>
  );
};

const neonPink = "#ff4ccd";

const styles = {
  section: {
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    borderRadius:10,
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
  card: {
    marginBottom: "2rem",
    borderLeft: `4px solid ${neonPink}`,
    paddingLeft: "1rem",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
  badge: {
    backgroundColor: "#222",
    color: neonPink,
    padding: "0.3rem 0.8rem",
    borderRadius: "20px",
    display: "inline-block",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  institution: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "#ccc",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "0.7rem",
  },
  description: {
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#ddd",
  },
};

export default Education;
