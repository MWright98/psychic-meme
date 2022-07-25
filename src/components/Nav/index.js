import React from "react";

function Nav(props) {
  const { currentCategory, setCurrentCategory } = props;

  //   const [categories] = useState([
  //     { name: "contact" },
  //     { name: "portfolio" },
  //     { name: "resume" },
  //     { name: "about" },
  //   ]);
  //0=Contact
  //1=Portfolio
  //2=Resume
  //3=About

  return (
    <div>
      <button className="navBtn" onClick={() => setCurrentCategory(3)}>
        <br></br>About Me
      </button>
      <button className="navBtn" onClick={() => setCurrentCategory(1)}>
        <br></br>Portfolio
      </button>
      <button className="navBtn" onClick={() => setCurrentCategory(0)}>
        <br></br>Contact
      </button>
      <button className="navBtn" onClick={() => setCurrentCategory(2)}>
        <br></br>Resume
      </button>
    </div>
  );
}

export default Nav;
