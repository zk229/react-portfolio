import React from "react";

function SingleProject(props) {
    const project = props.project;

    return (
        <a href={project.url} className="work-wrapper">
            <div className="work" style={{ backgroundImage: `url(../img/box-${project.id}.png)` }}>
                <h4 className="work-title">{project.name}</h4>
            </div>
        </a>
    );
}

export default SingleProject;