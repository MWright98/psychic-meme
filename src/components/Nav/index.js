import React from "react";
import Header from "../Header";

function Nav(props) {
  const { contactSelected, setContactSelected } = props;

  function setPage() {}

  return (
    <div>
      <button onClick={() => setContactSelected(false)}>
        <br></br>About Me
      </button>
      <button onClick={setPage("port")}>
        <br></br>Portfolio
      </button>
      <button onClick={() => setContactSelected(true)}>
        <br></br>Contact
      </button>
      <button onClick={setPage("resume")}>
        <br></br>Resume
      </button>
    </div>
  );
}

export default Nav;
