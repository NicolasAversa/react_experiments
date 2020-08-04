import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const propTypes = {
  showPersons: PropTypes.bool,
  personsLength: PropTypes.number,
};

function Header(props) {
  useEffect(() => {
    //console.log("Use effect");
    toggleButtonRef.current.click();
  }, []);

  const toggleButtonRef = useRef(null);

  let buttonVariant = "";
  if (props.showPersons) {
    buttonVariant = "danger";
  } else {
    buttonVariant = "success";
  }

  // It's possible to join classes with alertVariant += " danger bold"
  let alertVariant = "";
  if (props.personsLength >= 3) {
    alertVariant = "success";
  }
  if (props.personsLength <= 2) {
    alertVariant = "danger";
  }

  return (
    <Col xs={12} className="mb-3">
      <h1>This is a React app, Hope you like it!</h1>
      <Alert variant={alertVariant} className="mb-3">
        Your list has {props.personsLength} persons
      </Alert>
      <Button
        ref={toggleButtonRef}
        variant={buttonVariant}
        onClick={props.click}
      >
        Alternar visibilidad
      </Button>
    </Col>
  );
}

Header.propTypes = propTypes;

export default Header;
