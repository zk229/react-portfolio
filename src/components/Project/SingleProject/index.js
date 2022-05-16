import React from "react";

function SingleProject(props) {
    const project = props.project;

    return (
            <a href={project.url} className="work" style={{ backgroundImage: `url(/img/box-${project.id}.png)`}}>
                <div className="work-title">
                    <h4>{project.name}</h4>
                </div>
            </a>
    );
}

export default SingleProject;