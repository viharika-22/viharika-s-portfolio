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
    width: "90%",
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
    fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
    marginBottom: "1.2rem",
  },
  pink: {
    color: neonPink,
  },
  text: {
    fontSize: "clamp(1rem, 2vw, 1.1rem)",
    marginBottom: "1rem",
    color: "#ccc",
    lineHeight: 1.6,
  },
  email: {
    display: "inline-block",
    fontSize: "1rem",
    color: neonPink,
    textDecoration: "none",
    marginBottom: "1.5rem",
    wordBreak: "break-word",
  },
  social: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.2rem",
    marginTop: "1.5rem",
  },
  socialLink: {
    color: neonPink,
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  },
};

export default Contact;
