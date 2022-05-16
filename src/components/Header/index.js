import React, { useState } from "react";
import Navigation from "./Navigation";

function Header(props) {
    const { selection, setSelection } = props;

    return (
        <header>
            <h1>
                <a href="/">My Portfolio</a>
            </h1>
            <Navigation selection={selection} setSelection={setSelection} />
        </header>
    );
}

export default Header;