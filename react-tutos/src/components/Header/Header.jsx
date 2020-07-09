import React from "react";

import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  let buttonVariant = "";
  if (props.showPersons) {
    buttonVariant = "danger";
  } else {
    buttonVariant = "success";
  }

  // It's possible to join classes with alertVariant += " danger bold"
  let alertVariant = "";
  if (props.persons.length >= 3) {
    alertVariant = "success";
  }
  if (props.persons.length <= 2) {
    alertVariant = "danger";
  }

  return (
    <Col xs={12} className="mb-3">
      <h1>This is a React app, Hope you like it!</h1>
      <Alert variant={alertVariant} className="mb-3">
        Your list has {props.persons.length} persons
      </Alert>
      <Button variant={buttonVariant} onClick={props.click}>
        Alternar visibilidad
      </Button>
    </Col>
  );
};

export default Header;
