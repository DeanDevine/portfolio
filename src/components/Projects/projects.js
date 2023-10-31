import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <span className="skillTitle">Projects</span>
      <div className="skillBars">
        <a
          href="https://ncsubsidiarynews.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          <div className="skillBar">
            <img src="" alt="" className="" />
            <div className="skillBarText">
              <h2>NC News</h2>
              <p>
                A web application similar to Reddit, using a backend API that I
                built with PostgreSQL.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/HannahHan9/Duck-Dale-mobile-game"
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          <div className="skillBar">
            <img src="" alt="" className="" />
            <div className="skillBarText">
              <h2>Duck Dale</h2>
              <p>
                A role-playing game that I built for Android, together with four
                other people.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/DeanDevine/fitness-exercise-app"
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
        >
          <div className="skillBar">
            <img src="" alt="" className="" />
            <div className="skillBarText">
              <h2>Fitness Exercise App</h2>
              <p>
                A project that I'm currently building with React which uses the
                RapidAPI ExerciseDB API.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
