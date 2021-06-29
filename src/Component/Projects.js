import React from 'react';
import "./CSS/Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Projects = () => {
    return (
        <div className="projects" id="projects">
          <Container>
          <div className="skill-title">
          <Fade top>
            <h2 className="t-color">My Stack</h2>
            <p className="skill-text">
              Always open to learn new technologies and skills
            </p>
          </Fade>
          <Fade left>
            <span className="bottom-line"></span>
          </Fade>
        </div>

          </Container>
        </div>
    );
};

export default Projects;