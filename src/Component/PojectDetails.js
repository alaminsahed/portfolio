import React from "react";
import { Card, Col } from "react-bootstrap";

const PojectDetails = ({ info }) => {
  console.log(info);

  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PojectDetails;
