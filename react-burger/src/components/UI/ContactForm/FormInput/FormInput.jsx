import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const propTypes = {
  elementConfig: PropTypes.exact({
    col: PropTypes.number,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
  }),
  onChange: PropTypes.func,
  value: PropTypes.string,
  valid: PropTypes.bool,
  dirty: PropTypes.bool,
};

const defaultProps = {
  elementConfig: {
    col: 12,
    label: 'Your label here',
    type: 'text',
    placeholder: 'Your placeholder here',
    errorMessage: 'Invalid field',
  },
  onChange: () => {},
  value: '',
  valid: false,
  dirty: true,
};

function FormInput(props) {
  const {
    elementConfig, value, onChange, valid, dirty,
  } = props;

  return (
    <Col xs={elementConfig.col}>
      <Form.Group controlId={elementConfig.label} value={value}>
        <Form.Label>{elementConfig.label}</Form.Label>
        <Form.Control
          type={elementConfig.type}
          placeholder={elementConfig.placeholder}
          onChange={onChange}
          isInvalid={!valid && dirty}
        />
        <Form.Control.Feedback type="invalid">{elementConfig.errorMessage}</Form.Control.Feedback>
      </Form.Group>
    </Col>
  );
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
