import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  const [projects] = useState([
    {
      name: "Macro-Matics",
      url: "https://macro-matics.herokuapp.com",
      repository: "",
      technologies: ["MySQL", "Sequelize", "Node.js"],
      id: 2
    },
    {
      name: "Team Generator",
      url: "https://github.com/zk229/team-profile",
      repository: "https://github.com/zk229/team-profile",
      technologies: ["Node.js", "HTML"],
      id: 6
    },
    {
      name: "COVID EXPosure",
      url: "https://zk229.github.io/covid-exposure/",
      repository: "https://github.com/zk229/covid-exposure",
      technologies: ["HTML", "CSS", "JS", "jQuery"],
      id: 7
    },
    {
      name: "Weather Dashboard",
      url: "https://zk229.github.io/weather-dashboard/",
      repository: "https://github.com/zk229/weather-dashboard",
      technologies: ["HTML", "CSS", "JS"],
      id: 9
    },
    {
      name: "Code Quiz",
      url: "https://zk229.github.io/code-quiz/",
      repository: "https://github.com/zk229/code-quiz",
      technologies: ["HTML", "CSS", "JS"],
      id: 10
    }
  ]);

  const [selection, setSelection] = useState("about");

  return (
    <>
      <Header selection={selection} setSelection={setSelection} />
      <main>
        {
          {
            "about": <About />,
            "projects": <Project projects={projects} />,
            "contact": <Contact />,
            "resume": <Resume />
          }[selection]
        }
      </main>
      <Footer />
    </>
  );
}

export default App;
