import React from "react";
import { Card, Col } from "react-bootstrap";
import "./CSS/ProjectDetails.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab,fas);

const PojectDetails = ({ info }) => {
  const { name, des, img, demo, git, stack } = info;

  return (
    <div className="card-info">
      <Card className="card">
        <Card.Img variant="top" src={img} style={{height:"20em", overflow:"hidden"}} />
        <Card.Body>
          <Card.Title><h3>{name}</h3></Card.Title>
          <Card.Text>
            <h6>{des}</h6>
          </Card.Text>
          <Card.Text>
            <h8>Technology: {stack}</h8>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <FontAwesomeIcon icon={["fab", "github"]}/>
        <FontAwesomeIcon icon={["fas", "external-link-alt"]} className="project-icon"/>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PojectDetails;
