import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Auxiliary(props) {
  const { children, className } = props;
  return (
    <Row>
      <Col className={className}>
        {children}
      </Col>
    </Row>
  );
}

export default Auxiliary;
