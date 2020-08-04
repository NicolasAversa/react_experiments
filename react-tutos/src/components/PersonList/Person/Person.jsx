import React from "react";

import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const propTypes = {
  person: PropTypes.object,
  click: PropTypes.func,
  change: PropTypes.func,
};

function Person(props) {
  return (
    <Col xs={4}>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title onClick={props.click}>{props.person.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Edad: {props.person.age}
          </Card.Subtitle>
          <Card.Text>{props.children} </Card.Text>
          <input
            type="text"
            onChange={props.change}
            defaultValue={props.person.name}
          />
        </Card.Body>
      </Card>
    </Col>
  );
}

Person.propTypes = propTypes;

export default Person;
