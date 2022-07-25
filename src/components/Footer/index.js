import React from "react";

function Footer() {
  return (
    <footer>
      <h2>Made with love by Michael Wright ♥</h2>
      <div className="links">
        <img
          onClick={() => (window.location = "https://github.com/MWright98")}
          alt="github"
          src={require(`../../assets/img/github.png`)}
        ></img>
        <img
          onClick={() =>
            (window.location = "https://www.linkedin.com/in/michaelwright98/")
          }
          alt="linkedin"
          src={require(`../../assets/img/linkedin.png`)}
        ></img>
      </div>
    </footer>
  );
}

export default Footer;
