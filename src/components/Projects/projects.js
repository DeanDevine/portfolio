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
          className="projectLink"
        >
          <div className="skillBar">
            <img src="" alt="" className="" />
            <div className="skillBarText">
              <h2>NC News</h2>
              <p>
                A web application similar to Reddit, using a backend API that I
                built.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/HannahHan9/Duck-Dale-mobile-game"
          target="_blank"
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

        <div className="skillBar">
          <img src="" alt="" className="" />
          <div className="skillBarText">
            <h2>Flex</h2>
            <p>A workout app that I'm currently building for Android.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
