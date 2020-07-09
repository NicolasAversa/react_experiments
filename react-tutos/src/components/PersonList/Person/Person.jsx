import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Person = (props) => {
  return (
    <Col xs={4}>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title onClick={props.click}>{props.data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Edad: {props.data.age}
          </Card.Subtitle>
          <Card.Text>{props.children} </Card.Text>
          <input
            type="text"
            onChange={props.change}
            defaultValue={props.data.name}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Person;
