import React from "react";
import "./CSS/Projects.css";
import { Container, Row, Col,Tabs, Tab } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Container>
        <div className="skill-title">
          <Fade top>
            <h2 className="t-color">My Portfolio</h2>
            <p className="skill-text">Working on a Project is a great fun</p>
          </Fade>
          <Fade left>
            <span className="bottom-line"></span>
          </Fade>
        </div>
        <div className="project-body">
         <div className="project-tab ">
         <Tabs defaultActiveKey="profile" variant="pills" className="justify-content-center">
            <Tab eventKey="home" title="Home">
            
            </Tab>
            <Tab eventKey="profile" title="Profile">
             
            </Tab>
            <Tab eventKey="contact" title="Contact">
            
            </Tab>
          </Tabs>

         </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
