import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const propTypes = {
  showPersons: PropTypes.bool.isRequired,
  personsLength: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

function Header(props) {
  const { showPersons, personsLength, click, login } = props;
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    // console.log("Use effect");
    toggleButtonRef.current.click();
  }, []);

  let buttonVariant = '';
  if (showPersons) {
    buttonVariant = 'danger';
  } else {
    buttonVariant = 'success';
  }

  // It's possible to join classes with alertVariant += " danger bold"
  let alertVariant = '';
  if (personsLength >= 3) {
    alertVariant = 'success';
  }
  if (personsLength <= 2) {
    alertVariant = 'danger';
  }

  return (
    <Col xs={12} className="mb-3">
      <h1>This is a React app, Hope you like it!</h1>
      <Alert variant={alertVariant} className="mb-3">
        {`Your list has ${personsLength} persons`}
      </Alert>
      <Button ref={toggleButtonRef} variant={buttonVariant} onClick={click}>
        Alternar visibilidad
      </Button>
      <Button onClick={login}>Login</Button>
    </Col>
  );
}

Header.propTypes = propTypes;

export default React.memo(Header);
