import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import Pierre from "./Components/Pierre/Pierre";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Pierre />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
