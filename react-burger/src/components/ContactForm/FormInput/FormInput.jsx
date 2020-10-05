import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const propTypes = {
  col: PropTypes.number,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const defaultProps = {
  col: 12,
};

function FormInput(props) {
  const {
    col, label, type, placeholder,
  } = props;

  return (
    <Col xs={col}>
      <Form.Group controlId={label}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
    </Col>
  );
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
