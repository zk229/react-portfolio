import React from "react";

function SingleProject(props) {
    const project = props.project;

    return (
        <div>
            <a href={project.url}>
                <h3>{project.name}</h3>
            </a>
        </div>
    );
}

export default SingleProject;