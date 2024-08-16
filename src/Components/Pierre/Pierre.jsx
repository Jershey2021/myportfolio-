import React from "react";
import "./Pierre.css";
import profile from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../../assets/Resume.pdf";

const Pierre = () => {
  return (
    <>
      <div id="home" className="pierre">
        <img className="jershey" src={profile} alt="Jershey" width="280px" />
        <h1>
          I am
          <span> Jershey Aguinaldo</span>, I am committed to becoming a{" "}
          <span>Software Engineer</span>
        </h1>
        <p className="graduate">A fresh graduate in the course of </p>
        <p className="course">
          <span>Bachelor of Science in Information Technology.</span>
        </p>
        <div className="pierre-action">
          <div className="pierre-connect">
            <AnchorLink className="anchor-link" href="#contact">
              Connect With ME!
            </AnchorLink>
          </div>
          <div className="pierre-resume">
            <a href={Resume} download>
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pierre;
