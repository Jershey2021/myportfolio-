import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/Main-logo.png";
import icon from "../../assets/icon1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import open from "../../assets/open.svg";
import close from "../../assets/close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" width="180px" />
        <img src={open} onClick={openMenu} alt="" className="navbar-open" />
        <ul ref={menuRef} className="navbar-menu">
          <img
            src={close}
            onClick={closeMenu}
            alt=""
            className="navbar-close"
          />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? (
              <img src={icon} alt="" className="icon" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About ME</p>
            </AnchorLink>
            {menu === "about" ? (
              <img src={icon} alt="" className="icon" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#project">
              <p onClick={() => setMenu("project")}>Projects</p>
            </AnchorLink>
            {menu === "project" ? (
              <img src={icon} alt="" className="icon" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? (
              <img src={icon} alt="" className="icon" />
            ) : (
              <></>
            )}
          </li>
        </ul>
        <div className="navbar-me">
          <AnchorLink className="anchor-link" href="#footer">
            Interact With Me!
          </AnchorLink>{" "}
        </div>
      </div>
    </>
  );
};
export default Navbar;
