import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.pink}>Get</span> In Touch
      </h2>
      <p style={styles.text}>
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <a href="mailto:viharika05@gmail.com" style={styles.email}>
        viharika05@gmail.com
      </a>
      <div style={styles.social}>
        <a
          href="https://github.com/viharika-22"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.socialLink}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ch-viharika-145301199/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.socialLink}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

const neonPink = "#ff4ccd";

const styles = {
  section: {
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    maxWidth: "600px",
    margin: "4rem auto",
    padding: "2.5rem 1.5rem",
    textAlign: "center",
    backgroundColor: "#121212",
    color: "#fff",
    borderRadius: "12px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "2.2rem",
    marginBottom: "1.2rem",
  },
  pink: {
    color: neonPink,
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
    color: "#ccc",
  },
  email: {
    display: "inline-block",
    fontSize: "1rem",
    color: neonPink,
    textDecoration: "none",
    marginBottom: "1.5rem",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "1.5rem",
  },
  socialLink: {
    color: neonPink,
    textDecoration: "none",
    fontWeight: "600",
    transition: "color 0.3s ease",
  },
};

export default Contact;
