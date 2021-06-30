import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./CSS/ProjectDetails.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const PojectDetails = ({ info }) => {
  const { name, des, img, demo, git, stack } = info;

  return (
    <div className="card-info">
      <Card className="card">
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "20em", overflow: "hidden" }}
        />
        <Card.Body>
          <Row>
            <Card.Title>
              <h4>{name}</h4>
            </Card.Title>
          </Row>
          <Row>
            <Card.Text>
              <h6>{des}</h6>
            </Card.Text>
          </Row>
          <Row className="tech-row">
            <Card.Text>
              <h8>Technology: {stack}</h8>
            </Card.Text>
          </Row>
        </Card.Body>
        <Card.Footer>
         <Row>
           <Col>
         <a href={git} alt="github">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          </Col>
          <Col>
          <a href={demo} alt="link"  className="project-icon">
            <FontAwesomeIcon
              icon={["fas", "external-link-alt"]}
             
            />
          </a>
          </Col>
         </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PojectDetails;
