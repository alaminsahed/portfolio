import React from "react";
import About from "./About";
import Home from "./Home";
import Skill from "./Skill";
import Navbar from "../Component/Navbar";

const HeaderMain = () => {
  return (
    <div className="headermain">
      <Navbar />
      <Home />
      <About/>
      <Skill />
    </div>
  );
};

export default HeaderMain;
