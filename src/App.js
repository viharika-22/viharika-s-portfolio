import React from "react";
import CoreTech from "./components/CoreTech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PortfolioCard from "./components/PortfolioCard ";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div style={styles.container}>
      <main style={styles.main}>
         <PortfolioCard/>
         <AboutMe/>
        <CoreTech />
        <Projects />
        <Education/>
        <Contact />
      </main>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor:   "rgb(54 54 54)",
    borderRadius: "12px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.1)",
  },
  main: {
    width:'55rem',
    marginTop: "2rem",
  },
};

export default App;
