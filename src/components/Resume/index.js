import React from "react";

function Resume() {
    return (
        <section>
            <p> Check out my <a href="#"><span>resume</span></a>! (WIP) </p>

            <h4>Front-end Skills</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>React</li>
            </ul>

            <h4>Back-end Skills</h4>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL + Sequelize</li>
                <li>MongoDB + Mongoose</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
            </ul>
        </section>
    );
}

export default Resume;