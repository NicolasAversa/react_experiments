import React from "react";

import Card from "react-bootstrap/Card";

const Person = (props) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title onClick={props.click}>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Edad: {props.age}
        </Card.Subtitle>
        <Card.Text>{props.children} </Card.Text>
        <input type="text" onChange={props.change} defaultValue={props.name} />
      </Card.Body>
    </Card>
  );
};

export default Person;
