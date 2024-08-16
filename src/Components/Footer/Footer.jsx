import React from "react";
import "./Footer.css";
import Main from "../../assets/Main-logo.png";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <hr />
      <div className="footer-main">
        <p className="footer-credits">
          © 2024 - All Rights Reserved. Designed and Developed by{" "}
          <img src={Main} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
