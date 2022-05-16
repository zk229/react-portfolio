import React, { useState } from "react";

function Navigation(props) {
    const { selection, setSelection } = props;
    const options = ["About", "Projects", "Contact"]

    return (
        <nav>
            <ul>
                {
                    options.map((option) => (
                        <li key={option}>
                            <span onClick={() => setSelection(option.toLowerCase())}>{option}</span>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navigation;