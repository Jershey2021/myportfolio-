import React from "react";
import "./Project.css";
import theme from "../../assets/theme.svg";
import mywork from "../../assets/works";
import seemore from "../../assets/see_more.svg";

const Project = () => {
  return (
    <div id="project" className="myprojects">
      <div className="work-title">
        <h1>My PROJECTS</h1>
        <img src={theme} alt="" />
      </div>
      <div className="project-container">
        {mywork.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="projects-showmore">
        <p>SHOW MORE!</p>
        <img src={seemore} alt="" />
      </div>
    </div>
  );
};

export default Project;
