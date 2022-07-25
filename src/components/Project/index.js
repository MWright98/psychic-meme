import React from "react";

function Project() {
  const projects = [
    {
      title: "Budget Tracker",
      description: "Budget tracking PWA ",
      github: "https://github.com/MWright98/silver-octo-telegram",
      link: "https://young-earth-43087.herokuapp.com/",
    },
    {
      title: "Note Taker",
      description: "Note taking app utilizing Express.js",
      github: "https://github.com/MWright98/animated-broccoli",
      link: "https://fast-lake-07898.herokuapp.com/",
    },
    {
      title: "Employee Tracker",
      description: "SQL command line employee tracker",
      github: "https://github.com/MWright98/glowing-fiesta",
      link: "https://github.com/MWright98/glowing-fiesta",
    },
    {
      title: "Password Generator",
      description: "Javascript password generator",
      github: "https://github.com/MWright98/password-generator",
      link: "https://mwright98.github.io/password-generator/",
    },
    {
      title: "Weather Dashboard",
      description: "Weather dashboard utilizing OpenWeatherAPI",
      github: "https://github.com/MWright98/sturdy-dollop",
      link: "https://mwright98.github.io/sturdy-dollop/",
    },
    {
      title: "Vacation Scheduler",
      description: "A scheduling app with persisting information",
      github: "https://github.com/MWright98/Project-1-",
      link: "https://mhiss11.github.io/Project-1-/",
    },
  ];

  return (
    <div className="portfolio">
      {projects.map((project, i) => (
        <>
          <div className="project">
            <div className="row">
              <div className="column">
                <h2 key={"title" + project.title}>{project.title}</h2>

                <p key={"description" + project.title}>{project.description}</p>
                <div className="projectLinks">
                  <a key={["git"] + project.title} href={project.github}>
                    <img
                      className="githubIcon"
                      alt="github"
                      src={require(`../../assets/img/github.png`)}
                    ></img>
                  </a>

                  <a key={"link" + project.link} href={project.link}>
                    <img
                      className="githubIcon"
                      alt="deployment"
                      src={require(`../../assets/img/deployed.png`)}
                    ></img>
                  </a>
                </div>
              </div>
              <div className="column">
                <img
                  src={require(`../../assets/img/project${i + 1}.jpg`)}
                  alt={project.title}
                  className="projectImg"
                  key={"image" + [i]}
                />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Project;
