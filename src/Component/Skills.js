import React from "react";
import "./CSS/Skill.css";
import { Container, Row, Col } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Mongodb from "../image/MongoDB.svg";
import redux from "../image/Skills/redux2.svg";
import express from "../image/Skills/express-109.svg";
import firebase from "../image/Skills/firebase.svg";
import gatsby from "../image/Skills/gatsby.svg";
import mongodb from "../image/Skills/mongodb.svg";
import mysql from "../image/Skills/mysql.svg";
import Fade from "react-reveal/Fade";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

library.add(fas, fab);

const Skills = () => {

    useEffect(()=>{
        AOS.init();
    })
  return (
    <div className="skills" id="skill">
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
        <div className="skills stack-icon">
          <Row  data-aos="fade-right">
            <Col>
              <FontAwesomeIcon icon={["fab", "html5"]} size="7x" />
              <br />
              <small className="icon-name">HTML</small>
            </Col>

            <Col>
              <FontAwesomeIcon icon={["fab", "css3-alt"]} size="7x" />
              <br />
              <small>CSS</small>
            </Col>

            <Col>
              <FontAwesomeIcon icon={["fab", "bootstrap"]} size="7x" />
              <br />
              <small>CSS</small>
            </Col>
            <Col>
              <FontAwesomeIcon icon={["fab", "js-square"]} size="7x" />
              <br />
              <small>JavaScript</small>
            </Col>
            <Col>
              <FontAwesomeIcon icon={["fab", "react"]} size="7x" />
              <br />
              <small>React.js</small>
            </Col>
            <Col>
              <img src={redux} alt="redux" height="120px" width="150px" />
              <br />
              <small>Redux</small>
            </Col>
          </Row>
          <br /> <br />
          <Row data-aos="fade-left" data-aos-delay="100">
            <Col>
              <FontAwesomeIcon icon={["fab", "node"]} size="7x" />
              <br />
              <small>Node.js</small>
            </Col>
            <Col>
              <img src={express} alt="express" height="120px" width="150px" />
              <br />
              <small>Express.js</small>
            </Col>
            <Col>
              <img src={firebase} alt="firebase" height="120px" width="150px" />
              <br />
              <small>Firebase</small>
            </Col>
            <Col>
              <img src={gatsby} alt="gatsby" height="120px" width="150px" />
              <br />
              <small>Gatsby</small>
            </Col>
            <Col>
              <img src={mongodb} alt="gatsby" height="120px" width="150px" />
              <br />
              <small>MongoDB</small>
            </Col>
            <Col>
              <img src={mysql} alt="mysql" height="120px" width="150px" />
              <br />
              <small>MySQL</small>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
