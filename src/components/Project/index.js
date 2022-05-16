import React, { useState } from "react";
import SingleProject from "./SingleProject";

function Project(props) {
    const projects = props.projects;
    
    return (
        <section>
            {
                projects.map((project) => (
                    <SingleProject project={project} />
                ))
            }
        </section>
    );
}

export default Project;