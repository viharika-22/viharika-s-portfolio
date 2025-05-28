import React from "react";
import CoreTech from "./components/CoreTech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PortfolioCard from "./components/PortfolioCard";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <PortfolioCard />
        <AboutMe />
        <CoreTech />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem",
  },
  main: {
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box",
  },
};

export default App;
