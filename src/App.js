import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [projects] = useState([
    {
      name: "COVID EXPosure",
      url: "https://zk229.github.io/covid-exposure/",
      repository: "https://github.com/zk229/covid-exposure",
      technologies: ["HTML", "CSS", "JS", "jQuery"]
    }
  ]);

  const [selection, setSelection] = useState("about");

  return (
    <div>
      <Header selection={selection} setSelection={setSelection} />
      <main>
        {
          {
            "about": <About />,
            "projects": <Project projects={projects} />,
            "contact": <Contact />
          }[selection]
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
