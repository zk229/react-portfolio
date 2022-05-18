import React from "react";
import boxes from "../../../utils/images";

function SingleProject(props) {
    const project = props.project;

    console.log(boxes[project.id - 1]);

    return (
        <a href={project.url} className="work-wrapper">
            <div className="work" style={{ backgroundImage: `url(${boxes[project.id - 1]})` }}>
                <h4 className="work-title">{project.name}</h4>
            </div>
        </a>
    );
}

export default SingleProject;