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
      name: "RefreshR",
      url: "https://mighty-reef-66523.herokuapp.com",
      repository: "https://github.com/zk229/refreshr",
      technologies: ["MongoDB", "Express", "React", "Node"],
      id: 0
    },
    {
      name: "Social Network API",
      url: "https://github.com/zk229/social-network-api",
      repository: "https://github.com/zk229/social-network-api",
      technologies: ["MongoDB", "Express"],
      id: 1
    },
    {
      name: "Macro-Matics",
      url: "https://macro-matics.herokuapp.com",
      repository: "",
      technologies: ["MySQL", "Sequelize", "Node", "Express"],
      id: 2
    },
    {
      name: "eCommerce Backend",
      url: "https://github.com/zk229/ecommerce-backend",
      repository: "https://github.com/zk229/ecommerce-backend",
      technologies: ["MySQL", "Express", "Sequelize", "Node"],
      id: 5
    },
    {
      name: "Employee Tracker",
      url: "https://github.com/zk229/employee-tracker",
      repository: "https://github.com/zk229/employee-tracker",
      technologies: ["Node", "MySQL"],
      id: 3
    },
    {
      name: "README Generator",
      url: "https://github.com/zk229/readme-generator",
      repository: "https://github.com/zk229/readme-generator",
      technologies: ["Node"],
      id: 4
    },
    {
      name: "Team Generator",
      url: "https://github.com/zk229/team-profile",
      repository: "https://github.com/zk229/team-profile",
      technologies: ["Node", "HTML"],
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
      name: "Work Day Scheduler",
      url: "https://zk229.github.io/work-scheduler/",
      repository: "https://github.com/zk229/work-scheduler",
      technologies: ["HTML", "CSS", "JS"],
      id: 8
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
