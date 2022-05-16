import React, { useState } from "react";
import Navigation from "./Navigation";

function Header(props) {
    const { selection, setSelection } = props;
    
    return (
        <header>
          <Navigation selection={selection} setSelection={setSelection} />  
        </header>
    );
}

export default Header;