import React from "react";
import theme from "../../assets/theme.svg";
import jershey from "../../assets/jershey.png";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About ME</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-jershey">
          <img src={jershey} alt="" />
        </div>
        <div className="about-summary">
          <div className="about-objective">
            <p>
              I recently completed my Bachelor of Science in Information
              Technology program, and I have four years of experience in this
              field. I love working with everyone and am open to continuing
              learning and skill development. Improvement, and prepared to
              contribute my abilities and knowledge to the team.
            </p>
            <p>
              Being a Software Engineer is my passion, not just because of my
              abilities but also because I bring my efforts and dedication to
              the projects I worked on.
            </p>
          </div>
          <div className="about-skillsets">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Php & MySQL</p>
              <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>React.js & Node.js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C#</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>500</h1>
          <p>HOURS OF OJT EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0</h1>
          <p>PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Location</h1>
          <p>Pulilan, Bulacan</p>
        </div>
      </div>
    </div>
  );
};

export default About;
