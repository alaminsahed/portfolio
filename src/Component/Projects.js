import React from "react";
import "./CSS/Projects.css";
import { Container, Row, Col, Tabs, Tab, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import data from "../Data/projectData";
import ProjectDetails from "./PojectDetails";

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
            <Tabs
              defaultActiveKey="all"
              variant="pills"
              className="justify-content-center"
            >
              <Tab eventKey="all" title="All">
                <Row>
                  {data.map((info) => (
                    <Col md={4} key={info.id}>
                      <ProjectDetails info={info} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="frontend" title="Front-end">
                <Row>
                  {data
                    .filter((info) => info.topic === "frontend")
                    .map((project) => (
                      <Col md={4} key={project.id}>
                        <ProjectDetails key={project.id} info={project} />
                      </Col>
                    ))}
                  <Col md={4}>
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="fullstack" title="Full-Stack"></Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
