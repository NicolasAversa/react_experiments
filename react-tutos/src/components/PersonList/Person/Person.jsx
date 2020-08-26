import React from 'react';

import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

function Person(props) {
  const { person, click, change, children, isAuthenticated } = props;

  let authenticationStatus;
  if (isAuthenticated) {
    authenticationStatus = <p>You are authenticated</p>;
  } else {
    authenticationStatus = <p>Please Log In</p>;
  }
  return (
    <Col xs={4}>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title onClick={click}>{person.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Edad:
            {person.age}
          </Card.Subtitle>
          <Card.Text>{children}</Card.Text>
          {authenticationStatus}
          <input type="text" onChange={change} defaultValue={person.name} />
        </Card.Body>
      </Card>
    </Col>
  );
}

Person.propTypes = propTypes;

export default Person;
