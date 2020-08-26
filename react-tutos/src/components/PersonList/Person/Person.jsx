import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import AuthContext from '../../../context/auth-context';

const propTypes = {
  personName: PropTypes.string.isRequired,
  personAge: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

function Person(props) {
  const { personName, personAge, click, change, children } = props;
  const authContext = useContext(AuthContext);

  let authenticationStatus;
  if (authContext.authenticated) {
    authenticationStatus = <p>You are authenticated</p>;
  } else {
    authenticationStatus = <p>Please Log In</p>;
  }
  return (
    <Col xs={4}>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title onClick={click}>{personName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Edad:
            {personAge}
          </Card.Subtitle>
          <Card.Text>{children}</Card.Text>
          {authenticationStatus}
          <input type="text" onChange={change} defaultValue={personName} />
        </Card.Body>
      </Card>
    </Col>
  );
}

Person.propTypes = propTypes;

export default React.memo(Person);
