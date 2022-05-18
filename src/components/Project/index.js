import React, { useState } from "react";
import SingleProject from "./SingleProject";

function Project(props) {
    const projects = props.projects;
    
    return (
        <section className="my-work">
            {
                projects.map((project) => (
                    <SingleProject key={project.name} project={project} />
                ))
            }
        </section>
    );
}

export default Project;