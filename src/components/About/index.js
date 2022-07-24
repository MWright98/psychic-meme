import React from "react";

function About() {
  return (
    <div className="about">
      <img
        alt="Michael Wright"
        src={require(`../../assets/img/Headshot.jpg`)}
        key={Image.name}
        className="headshot"
      />
      <p className="aboutMe">
        Hello! My name is Michael Wright! I am currently studying to become a
        full stack web developer! I graduated form Indiana University South Bend
        in May 2021 with a Bachelors of Fine Arts focused in Video and Motion
        Media. On this site you can find some of my web development work and
        ways to contact me!
      </p>
    </div>
  );
}

export default About;
