import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

const defaultProps = { className: '' };

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

Auxiliary.propTypes = propTypes;
Auxiliary.defaultProps = defaultProps;

export default Auxiliary;
