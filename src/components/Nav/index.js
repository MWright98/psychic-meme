import React from "react";

function Nav() {
  function setPage() {}

  return (
    <div>
      <button onClick={setPage("about")}>
        <br></br>About Me
      </button>
      <button onClick={setPage("port")}>
        <br></br>Portfolio
      </button>
      <button onClick={setPage("contact")}>
        <br></br>Contact
      </button>
      <button onClick={setPage("resume")}>
        <br></br>Resume
      </button>
    </div>
  );
}

export default Nav;
