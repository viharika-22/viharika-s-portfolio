import React, { useEffect, useState } from "react";
import img from "../assets/worksetup.jpeg";

const words = ["slick", "modern", "cool-looking", "elegant", "smooth"];

const PortfolioCard = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let typingSpeed = isDeleting ? 70 : 120;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === word) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div style={styles.container}>
      <img src={img} alt="Workspace" style={styles.image} />
      <div style={styles.infoPanel}>
        <p style={styles.codeText}>
          &lt;<code style={{ color: neonPink }}>code</code>&gt;I build{" "}
          <span style={styles.typingText}>{displayText}</span> web apps
          &lt;/<code style={{ color: neonPink }}>code</code>&gt;
        </p>

        <h1 style={styles.heading}>
          Viharika <b>Ch</b>
        </h1>

        <div style={styles.socialIcons}>
          {[
            { platform: "github", url: "https://github.com/viharika-22" },
            { platform: "linkedin", url: "https://www.linkedin.com/in/ch-viharika-145301199/" },
            { platform: "box", url: "https://codesandbox.io/u/viharika_rockz" },
          ].map(({ platform, url }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
              onMouseEnter={(e) => (e.currentTarget.style.color = styles.iconHover.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = styles.icon.color)}
            >
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>

        <p style={styles.description}>
          I'm Viharika, a Bengaluru-based <b>Front End Developer</b> at TCS, crafting fast,
          responsive UIs with <b>React</b>, <b>Redux</b>, <b>Tailwind</b>, and <b>Material UI</b>.
        </p>
        <p style={styles.description}>
          I've built production-ready dashboards and workflow tools, slashed load times by 30%, and
          earned awards for smooth go-lives and clean code.
        </p>
        <p style={styles.description}>
          When I’m not coding, I’m sketching UI ideas, exploring design trends, or trying to stay
          minimalist with 37 tabs open.
        </p>
        <p style={styles.description}>
          Always learning. Always building. Occasionally breaking things—then fixing them twice as
          fast.
        </p>

        <div style={styles.buttons}>
          <a
            href="/resume.pdf"
            target="_blank"
            download
            style={{ ...styles.button, ...styles.resumeButton }}
          >
            Resume
          </a>
          <a href="#contact" style={{ ...styles.button, ...styles.contactButton }}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

const neonPink = "#ff4ccd";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    maxWidth: "1000px",
    margin: "4rem auto",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    backgroundColor: "#121212",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  image: {
    width: "100%",
    maxWidth: "450px",
    flex: "1 1 300px",
    objectFit: "cover",
  },
  infoPanel: {
    flex: "1 1 300px",
    padding: "2rem",
  },
  codeText: {
    fontFamily: "'Fira Code', monospace",
    fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
    marginBottom: "0.5rem",
    color: "#fff",
  },
  typingText: {
    borderRight: "2px solid #fff",
    paddingRight: "4px",
    color: "#fff",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  heading: {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    margin: "0.2rem 0 1rem 0",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
    fontSize: "1.4rem",
    marginBottom: "1.2rem",
    flexWrap: "wrap",
  },
  icon: {
    color: "#ffffff",
    textDecoration: "none",
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  iconHover: {
    color: neonPink,
  },
  description: {
    lineHeight: 1.5,
    fontSize: "clamp(1rem, 2vw, 1.1rem)",
    marginBottom: "1rem",
    color: "#ddd",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.7rem 1.8rem",
    borderRadius: 30,
    fontWeight: "bold",
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    cursor: "pointer",
    textDecoration: "none",
    userSelect: "none",
    transition: "all 0.3s ease",
    border: `2px solid ${neonPink}`,
  },
  resumeButton: {
    backgroundColor: "transparent",
    color: neonPink,
  },
  contactButton: {
    backgroundColor: neonPink,
    color: "#000",
  },
};

export default PortfolioCard;
