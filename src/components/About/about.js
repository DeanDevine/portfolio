import React from "react";
import "./about.css";
import nodeJS from "../../assets/NodeJS.png";
import mongoDB from "../../assets/MongoDB.png";
import PostgreSQL from "../../assets/PostgreSQL.png";
import Express from '../../assets/Express.png'
import JavaScript from '../../assets/JavaScript.png'
import ReactLogo from '../../assets/React.png'
import AndroidStudio from '../../assets/AndroidStudio.png'

const About = () => {
  return (
    <section id="about">
      <h2 className="worksTitle">About Me</h2>
      <span className="worksDesc">
        I have completed projects using JavaScript, React, React Native,
        PostgreSQL and MongoDB and I am currently learning C#. Here's what I
        know:
      </span>
      <div className="gridWrapper">
        <div className="gridItem">
          <img src={JavaScript} alt="JavaScript logo" className="worksImg" />
          <div class="overlay">
            <div class="text">JavaScript</div>
          </div>
        </div>
        <div className="gridItem">
          <img src={nodeJS} alt="Node.js logo" className="worksImg" />
          <div class="overlay">
            <div class="text">Node.js</div>
          </div>
        </div>
        <div className="gridItem">
          <img src={Express} alt="Express logo" className="worksImg" />
          <div class="overlay">
            <div class="text">Express</div>
          </div>
        </div>

        <div className="gridItem">
          <img src={PostgreSQL} alt="PostgreSQL logo" className="worksImg" />
          <div class="overlay">
            <div class="text">PostgreSQL</div>
          </div>
        </div>
        <div className="gridItem">
          <img src={mongoDB} alt="MongoDB logo" className="worksImg" />
          <div class="overlay">
            <div class="text">MongoDB</div>
          </div>
        </div>

        <div className="gridItem">
          <img src={ReactLogo} alt="React logo" className="worksImg" />
          <div class="overlay">
            <div class="text">React</div>
          </div>
        </div>
        <div className="gridItem">
          <img src={AndroidStudio} alt="Android Studio logo" className="worksImg" />
          <div class="overlay">
            <div class="text">Android Studio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
