import React from "react";
import Nav from "../Nav";

function Header(props) {
  return (
    //JSX HERE
    <header>
      <h1>Michael Wright</h1>
      <Nav {...props} />
    </header>
  );
}

export default Header;
